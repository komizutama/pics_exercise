import React from 'react';

import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';




class App extends React.Component {
    state = { images:[] }; //default images state as empty array
    onSearchSubmit = async (term) => {//mark as async
        const response = await unsplash.get('/search/photos', {
            params: {query: term}
        });
        this.setState({ images:response.data.results });
//async await syntex async goes in front of method name take whatever is getting resolved.. here axios.get.. then assign to a variable.


    }

    render () {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                Found: { this.state.images.length } images!
                <ImageList images={this.state.images}/>
            </div>
        )  ;
    }
}

export default App;