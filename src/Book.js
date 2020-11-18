export default function Book(props) {
    const book = props.book

    let title = 'N/A'
    if(book.volumeInfo.hasOwnProperty('title')) {
        title = book.volumeInfo.title
    }

    let categories = 'N/A'
    if(book.volumeInfo.hasOwnProperty('categories')) {
        categories = book.volumeInfo.categories
    }

    let description = 'N/A'
    if(book.volumeInfo.hasOwnProperty('description')) {
        description = book.volumeInfo.description
    }

    let imageURL = 'https://books.google.ca/googlebooks/images/no_cover_thumb.gif'
    if(book.volumeInfo.hasOwnProperty('imageLinks')) {
        imageURL = book.volumeInfo.imageLinks.thumbnail
    }
    
    let bookURL = 'https://play.google.com/store/books/details/error'
    if(book.volumeInfo.hasOwnProperty('infoLink')) {
        bookURL = book.volumeInfo.infoLink
    }
    console.log(book);
    //TODO: split categories nicely
    return(
        <li id={props.aKey} key={props.aKey}>
            <img src={imageURL} alt={title}></img>
            <a href={bookURL}><p>{title}</p></a>
            <p className="categories">{categories}</p>
            <p className="description">{description}</p>
        </li>
    )
}