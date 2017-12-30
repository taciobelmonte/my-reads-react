import React from 'react'
import { Link } from 'react-router-dom'
import Book from './../components/Book'
import PropTypes from "prop-types";
import './../assets/css/App.css'

class Search extends React.Component {

    static propTypes = {
        search:PropTypes.func.isRequired,
        bookSearchCollection: PropTypes.array,
        changeBookShelf: PropTypes.func.isRequired
    };

    //Defining states of component
    state = {
        query : '' //State to store user query on search input
    };

    //Method to update query state
    updateQuery = (query) => {
        this.setState({ query: query.trim() });
        this.props.search(this.state.query, 30);
    };

    render() {

        const {bookSearchCollection, changeBookShelf} = this.props;
        const {query} = this.state;

        return (
            <div className="main-app-container">
                <div className="search-books-bar">
                    <Link className="close-search" to='/'>Back</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text"
                               value={query}
                               onChange={(event)=> this.updateQuery(event.target.value)}
                               placeholder="Search by title"
                        />
                    </div>
                </div>

                <div className="search-books-results">
                    <ol className="books-grid">
                        <ol className="books-grid">
                            {bookSearchCollection && bookSearchCollection.map((book) => (
                                <li key={book.id} className='book-item'>
                                    <Book changeBookShelf={changeBookShelf} book={book}/>
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
