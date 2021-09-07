import React from 'react';
import {connect} from 'react-redux'

import MovieListItem from './MovieListItem';
import MovieFooter from './MovieFooter';

const MovieList = (props)=> {
    const movies = [];

    return (
        <div className="col">
            <table className="table table-striped table-hover">
                <thead>
                <tr>
                    <th>{props.title}</th>
                    <th>{props.director}</th>
                    <th>{props.genre}</th>
                    <th>{props.metascore}</th>
                    <th></th>
                </tr>
                </thead>

                <tbody>
                    {
                        movies.map(movie=><MovieListItem key={movie.id} movie={movie}/>)
                    }
                </tbody>
            </table>
            
            <MovieFooter totalMovies={movies.length}/>
        </div>
    );
}

const mapStateToProps = (state) => {
    return({
        title: state.title,
        director: state.director,
        genre: state.genre,
        metascore: state.metascore
    })
}

export default connect(mapStateToProps)(MovieList);