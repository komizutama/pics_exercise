import React from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';




class App extends React.Component {
    onSearchSubmit(term){
        axios
        .get('https://api.unsplash.com/search/photos', {
            params: {query: term},
            headers: {
                Authorization: 
                    'Client-ID 7yYrLjx33EXr_h9Xn2r1J0d0SfsD4tARUzFdcLTN9VQ'
            },
        })
        .then(response => {
            console.log(response.data.results);
        }); //axios returns a promise so you tag on a then statement to do whatever they request.
        // console.log(term);
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