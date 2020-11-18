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
      input : 'harrypotter'
    }
  }

  getBooks = async (url, query) => {
    let response = await fetch(url + query)
    .catch(err => {throw err})

    return response.json()
  }

  /**
   * @param {Event} e 
   */
  doClick = e => {
    e.preventDefault()
    console.log(this.state.input)
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
      console.log('there has been an error: ', err);
    })
  }

  componentDidMount() {
    //TODO: remove deafult case
    this.submitQuery()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <form onSubmit={this.doClick}
                onKeyDown={ event => event.key === "Enter" && this.submitQuery() }>
            <input onChange={this.syncTextField} value={this.state.input} type="text"></input>
            <input type="submit"></input>
          </form>
          <BookResults books={this.state.books} />
        </header>
      </div>
    );
  }
}

export default App;
