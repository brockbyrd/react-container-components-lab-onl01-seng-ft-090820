import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import { render } from 'enzyme';

const NYT_API_KEY = 'E6OjAPv5n0abFH9SZsyZExSmPp8YXqcz';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

export default class LatestMovieReviewsContainer extends Component {
    constructor(){
        super();
        this.state = {
            reviews: []
        }
    }

    componentDidMount() {
        fetch(URL)
            .then(res => res.json())
            .then(data =>
                this.setState({ reviews: data.results })
                )
    }

    render() {
        return(
            <div className="latest-movie-reviews">
                <h2>Latest Movie Reviews: </h2>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )

    }
}

