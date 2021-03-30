import React from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';




class App extends React.Component {
    async onSearchSubmit(term){
        const response = await axios
        .get('https://api.unsplash.com/search/photos', {
            params: {query: term},
            headers: {
                Authorization: 
                    'Client-ID 7yYrLjx33EXr_h9Xn2r1J0d0SfsD4tARUzFdcLTN9VQ'
            }
        });
        console.log(response.data.results);
//async await syntex async goes in front of method name take whatever is getting resolved.. here axios.get.. then assign to a variable.

    }

    render () {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>
        )  ;
    }
}

export default App;