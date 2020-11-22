import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import BookResults from './BookResults'

const queryUrl = 'https://www.googleapis.com/books/v1/volumes?q='

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      books : [],
      loading : false,
      found : false,
      input : 'harry potter'
    }
  }

  getBooks = async (url, query) => {
    let response = await fetch(url + query)
    .catch(err => {
      console.log(err);
      throw err})
    return response.json()
  }

  /**
   * @param {Event} e 
   */
  doClick = e => {
    e.preventDefault()
    this.submitQuery()
  }
  /**
   * @param {Event} e 
   */
  syncTextField = e => {
    this.setState({input : e.target.value})
  }

  submitQuery() {
    const query = this.state.input.trim()

    this.setState({loading : true})
    this.getBooks(queryUrl, query)
    .then(data => {
      this.setState({ books : data.items, loading : false})
    })
    .catch(err => {
      this.setState({ loading : false})
      console.log('there has been an error: ', err);
    })
  }

  componentDidMount() {
    this.submitQuery()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Find A Book!</h1>
          <form onSubmit={this.doClick}
                onKeyDown={ event => event.key === "Enter" && this.submitQuery() }>
            <input onChange={this.syncTextField} value={this.state.input} id="input" type="text"></input>
            <input id="submit-button" type="submit" value="Look for Book"></input>
          </form>
          <BookResults books={this.state.books} loading={this.state.loading} />
        </header>
      </div>
    );
  }
}

export default App;
