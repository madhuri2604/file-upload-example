import React from 'react';
import './App.css';

class App extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    fetch('https://us-central1-training-391108.cloudfunctions.net/function-1', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        // Handle response
      })
      .catch((error) => {
        // Handle error
      });
  };

  render() {
    return (
      <div>
        <h1>Upload Your File Here</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="file" name="file" />
          <br /><br />
          <input type="submit" value="Upload" />
        </form>
      </div>
    );
  }
}

export default App;
