import React from 'react';

class MovieRow extends React.Component {
  render() {
    return <div>
      <table key={this.props.movie.id}>
        <tbody>
          <tr>
            <td>
              <img src={this.props.movie.poster_src} alt="poster" width="120" />
            </td>
            <td>
              {this.props.movie.title}
              <p>{this.props.movie.overview}</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  }
}

export default MovieRow;
