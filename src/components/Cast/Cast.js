import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Cast.module.css';
import fetchReaquest from '../../services/fetchRequest';

export default class Cast extends Component {
  static propTypes = {
    match: PropTypes.shape().isRequired,
  };

  state = { cast: null };

  componentDidMount() {
    const { movieId } = this.props.match.params;

    fetchReaquest
      .fetchCast(movieId)
      .then(data => this.setState({ cast: data.cast }));
  }

  render() {
    const { cast } = this.state;

    return (
      <ul>
        {cast &&
          cast.map(item => (
            <li key={item.cast_id} className={styles.itemCast}>
              <p className={styles.item_name}>{item.name}</p>
              {item.profile_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w200/${item.profile_path}`}
                  alt={item.profile_path}
                  width="150px"
                />
              )}
              <p>{item.character}</p>
            </li>
          ))}
      </ul>
    );
  }
}
