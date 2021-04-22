import React from 'react';

class SearchBar extends React.Component {
    state = {term: ''};
    // called when someone changes the input on the search bar
    // onInputChange(event) {
    //     console.log(event.target.value);
    // }

    // onFormSubmit(event) {
    //     event.preventDefault();

    //     console.log(this.state.term); // this gives us error right away saying that term cannot be found
    // }

    onFormSubmit = (event) => {
        event.preventDefault();

        // console.log(this.state.term); // this gives us error right away saying that term cannot be found

        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
        <div className="ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                    <label>Image Search</label>
                    <input type="text" value={this.state.term}  onChange={(e) => this.setState({term: e.target.value})}>
                    </input>
                </div>
            </form>
        </div>
        );
    }
};

export default SearchBar;