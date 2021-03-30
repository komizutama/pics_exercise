import React from 'react';




class SearchBar extends React.Component {
    state = { term: '' };

    onFormSubmit = (event) => {
        event.preventDefault();//this line of code prevents the form from submiting automatically
        // using an arroe function stops the dreaded undefined.. but can also be used with an arrow function in the callback 
        console.log (this.state.term);
    }


    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                            type="text" 
                            value={this.state.term} 
                            onChange={ e => this.setState({ term: e.target.value })}
                        />
                        {/* note no parenthesis for callback function passed to event handler like onChange  now controlled via state.*/}
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;