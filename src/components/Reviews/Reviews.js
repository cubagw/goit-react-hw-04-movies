import React, { Component } from 'react';
import PropTypes from 'prop-types';
import fetchReaquest from '../../services/fetchRequest';
import styles from './Reviews.module.css';

export default class Reviews extends Component {
  static propTypes = {
    match: PropTypes.shape().isRequired,
  };

  state = { reviews: {} };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    fetchReaquest.fetchReviews(movieId).then(res => {
      this.setState({ reviews: res });
    });
  }

  render() {
    const { reviews } = this.state;

    if (reviews.total_results === 0) {
      return <div>No Reviews</div>;
    }
    return (
      <ul className={styles.listReviews}>
        {reviews.results &&
          reviews.results.map(item => (
            <li key={item.id} className={styles.itemReviews}>
              <h3 className={styles.title}>{item.author}</h3>
              <div>{item.content}</div>
              <a href={item.url}>{item.url}</a>
            </li>
          ))}
      </ul>
    );
  }
}
