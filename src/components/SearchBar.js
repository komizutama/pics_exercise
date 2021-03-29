import React from 'react';




class SearchBar extends React.Component {

    onInputChange(event) {
        console.log(event.target.value);//this contains the text user inPut
    }


    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" onChange={this.onInputChange} />
                        {/* note no parenthesis for callback function passed to event handler like onChange  currently uncontrolled.*/}
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;