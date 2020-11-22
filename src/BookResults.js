//By : Isaac Giuricich
import Book from './Book'
export default function BookResults(props) {
    const query = props.books
    if(query === undefined) {
        return (
            <p>no results found.</p>
        )
    }
    const books = query.map(book => <Book book={book} key={book.id}/>)
    
    if(props.loading === true) {
        return(
            <img id="loader" src="place.gif"></img>
        )
    }

    return(
        <ul id="list-body">
            {books} 
        </ul>
    )
}