import React, {Component} from 'react'
import Book from './../components/Book'
import PropTypes from "prop-types";


class BookShelf extends Component{

    static propTypes = {
        title:PropTypes.string.isRequired,
        classe:PropTypes.string.isRequired,
        changeBookShelf:PropTypes.func.isRequired,
    };

    render(){
        const {title, bookCollection, changeBookShelf, classe} = this.props;

        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {bookCollection.map((book) => (
                            <li key={book.id} className='book-item'>
                                <Book changeBookShelf={ changeBookShelf } title={title} book={book} classe={classe}/>
                            </li>
                        ))}
                    </ol>
                </div>

                {/*{(bookCollection.length === 0) && (*/}
                    {/*<p>There are no books for this shelf!</p>*/}
                {/*)}*/}
            </div>
        )
    }
}

export default BookShelf