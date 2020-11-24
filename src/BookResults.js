//By : Isaac Giuricich
import Book from './Book'
/**
 * Displays a list of books if the recieved json response is valid.
 * If the page's loading state is set to true this will display 
 * a spinner gif untill a request has coem back.
 */
export default function BookResults(props) {

    // if the pages state is loading then this displays a loading gif
    if(props.loading === true) {
        return(
            <img id="loader" src="loading.gif"></img>
        )
    }

    // if the query came back with no results a message gets displayed to the user
    const query = props.books
    if(query === undefined) {
        return (
            <p>no results found.</p>
        )
    }

    // if the query if good then it makes an array of book components and renders the list of books
    const books = query.map(book => <Book book={book} key={book.id}/>)
    return(
        <ul id="list-body">
            {books} 
        </ul>
    )
}