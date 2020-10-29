import React from 'react';
import { Movies } from './movies';
import axios from 'axios';
export class Read extends React.Component {

    //state stores data relevent to the component
    state = {

        movies: []
    };
    //componentDidMount executes after the first render on the client side
    //axios retrives movie information from JSON file in the link
    componentDidMount() {
        axios.get('https://jsonblob.com/api/jsonblob/520c3b5e-0312-11eb-a6af-cbf00d776032')
            .then((response) => {
                    this.setState({ movies: response.data.Search })
                }
            )
    //if there is an error an error message will be returned
            .catch(
                (error)=>{
                        console.log(error)
                }
            );
    }

    //Render will display the movie data stored in state
    render() {
        return (
            <div>
                <h3>Hello from Read Component</h3>
                <Movies myMovies={this.state.movies}></Movies>
            </div>
        );
    }
}