import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    let searchRandomTerms = ['xQc', 'Youtube', 'Davib dobrik too', 'Oscars', 'Grammys', 'Outer Space', 'Vsauce', 'react.js'];

    let randSearchNumber = Math.floor(Math.random() * 6);

    let searchTerm = searchRandomTerms[randSearchNumber];

    const [term, setTerm] = useState(searchTerm);
    const [debounceTerm, setDebounceTerm] = useState(term);
    const [results, setResults] = useState([]);
    
    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebounceTerm(term);
        }, 1000);

        return () => {
            clearTimeout(timerId);
        };

    }, [term]);

    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', { 
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debounceTerm
                }
            });

            setResults(data.query.search);

        };

        search();

    }, [debounceTerm]);


    const renderedResults = results.map((result) => {
        return (
            <div className="item" key={result.pageid}>
                <div className="right floated content">
                    <a className="ui green button" href={`https://en.wikipedia.org?curid=${result.pageid}`} style={{ marginTop: "20px"}}>Go</a>
                </div>
                <div className="content">
                    <div className="header" style={{ padding: "10px 10px 10px 0", fontSize: "22px"}}>
                        <strong>{result.title}</strong>
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
                </div>
            </div>
        );
    });

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term:</label>
                    <input value={term} onChange={(e) => setTerm(e.target.value)}className="Input"></input>
                </div>
            </div>
            <div className="ui celled list">{renderedResults}</div>
        </div>
    );
};

export default Search;