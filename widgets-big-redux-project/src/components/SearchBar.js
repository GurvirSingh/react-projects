import React from 'react';

class SearchBar extends React.Component {
    state = {term: '', searchEmpty: false};

    onInputChange = (event) => {
        this.setState({term: event.target.value});
    };

    onFormSubmit = (event) => {
        event.preventDefault();

        // if empty 
        if(this.state.term == '') {
            this.setState({searchEmpty: true});
        } else {
            this.props.onFormSubmit(this.state.term);
        }
        
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                        <div className="field">
                        <label htmlFor="search">Search video <i class="search icon"></i></label>
                        <input id="search" className="prompt" type="text" value={this.state.term } onChange={this.onInputChange} style={this.state.searchEmpty ? {border: '1px solid red'}:{border: ''}} autoFocus></input>
                        {/* <button type="submit">Search</button> */}
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;