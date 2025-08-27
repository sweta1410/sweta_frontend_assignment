import React, { Component } from 'react';

class DataFetcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => this.setState({ data, loading: false }))
      .catch((error) => this.setState({ error: error.message, loading: false }));
  }

  render() {
    const { data, loading, error } = this.state;

    if (loading) {
      return <p>Loading data...</p>;
    }

    if (error) {
      return <p>Error fetching data: {error}</p>;
    }

    return (
      <div>
        <h1>Fetched Posts</h1>
        <ul>
          {data.map((post) => (
            <li key={post.id}>
              <strong>{post.title}</strong>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default DataFetcher;
