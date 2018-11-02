import React, { Component } from 'react';
import './App.css';
import MovieRow from './MovieRow';
import $ from 'jquery';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}

    /* const movies = [
      { id: 0, poster_src: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/1ZEJuuDh0Zpi5ELM3Zev0GBhQ3R.jpg', title: 'Awangers', overview: 'blalkdsfklfdkfdklfdklkldfslkdf' },
      { id: 1, poster_src: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/7Gfda4S0FpWf6edfGFm0xJgRJ4b.jpg', title: 'Superman', overview: 'blalkdsfklfdkfdklfdklkldfslkdf' },
      { id: 2, poster_src: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/dnLvZJD8Zdw2fHzL4AtM0kZSkt2.jpg', title: 'Batman', overview: 'blalkdsfklfdkfdklfdklkldfslkdf' },
    ]

    let movieRows = []
    movies.forEach((movie) => {
      console.log(movie.title)
      const movieRow = <MovieRow movie={movie} />
      movieRows.push(movieRow)
    });

    this.state = {rows: movieRows} */

    this.performSearch()
  }

  performSearch() {
    console.log('Search using Movie DB')
    const urlString = 'https://api.themoviedb.org/3/search/movie?query=DC&api_key=896216e67d817174defc8cd1d41bd353'
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log('Fetched data successfully')
        console.log(searchResults)
        const results = searchResults.results

        let movieRows = []

        results.forEach((movie) => {
          console.log(movie.poster_path)
          const movieRow = <MovieRow movie={movie}/>
          movieRows.push(movieRow)
        });

        this.setState({rows: movieRows})
      },
      error: (xhr, status, err) => {
        console.log('Failed to fetch data')
      }
    })
  }

  render() {
    return (
      <div className="App">
        <table className="titleBar">
          <tbody>
            <tr>
              <td>
                <img width="100" src="image.svg" alt="logo" />
              </td>
              <td width="8"></td>
              <td>
                <h1>MovieDB Search</h1>
              </td>
            </tr>
          </tbody>
        </table>

        <input
          className="inputField"
          placeholder="Search here"
          type="text"
        />
        {this.state.rows}
      </div>
    );
  }
}

export default App;
