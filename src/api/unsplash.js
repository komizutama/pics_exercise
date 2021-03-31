import axios from 'axios';

//can set up a preconfigured setup

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
            'Client-ID 7yYrLjx33EXr_h9Xn2r1J0d0SfsD4tARUzFdcLTN9VQ'
    }
});