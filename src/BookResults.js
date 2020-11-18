//By : Isaac Giuricich
import Book from './Book'
export default function BookResults(props) {
    const query = props.books
    //TODO: refactor by moving the map into the book component
    // cuz of unique key error >_> so dumb
    const books = query.map(book => <Book book={book} aKey={book.id} />)
    
    return(
        <ul id="list-body">
            {books} 
        </ul>
    )
}