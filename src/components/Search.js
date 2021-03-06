import React from 'react'
import { Link } from 'react-router-dom'
import Book from './../components/Book'
import PropTypes from "prop-types";
import {DebounceInput} from 'react-debounce-input';
import './../assets/app/App.css'

class Search extends React.Component {

    static propTypes = {
        search:PropTypes.func.isRequired,
        bookSearchCollection: PropTypes.array,
        changeBookShelf: PropTypes.func.isRequired,
    };

    //Defining states of component
    state = {
        query : '' //State to store user query on search input
    };

    //Method to update query state
    updateQuery = (query) => {
        this.setState({ query: query.trim() });
        this.props.search(query, 30);
    };

    render() {

        const {bookSearchCollection, changeBookShelf} = this.props;
        const {query} = this.state;

        return (
            <div className="main-app-container">
                <div className="search-books-bar">
                    <Link className="close-search" to='/'>Back</Link>
                    <div className="search-books-input-wrapper">
                        <DebounceInput
                            minLength={3}
                            debounceTimeout={1000}
                            value={query}
                            placeholder="Search by title"
                            onChange={(event)=> this.updateQuery(event.target.value)} />
                    </div>
                </div>

                <div className="search-books-results">
                    <ol className="books-grid">
                        <ol className="books-grid">
                            {bookSearchCollection && bookSearchCollection.map((book) => (
                                <li key={book.id} className='book-item'>
                                    <Book changeBookShelf={ changeBookShelf } title={book.shelf === 'wantToRead' ? 'Want to Read' : book.shelf === 'currentlyReading' ? 'Currently Reading' : book.shelf === 'read' ? 'Read' : ''} book={book} classe={book.shelf}/>
                                </li>
                            ))}
                        </ol>
                    </ol>
                </div>
            </div>
        )
    }
}
export default Search
