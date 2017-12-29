import React from 'react'
import { Link } from 'react-router-dom'
import Book from './../components/Book'
import PropTypes from "prop-types";
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import './../assets/css/App.css'

class Search extends React.Component {

    static propTypes = {
        bookCollection: PropTypes.array.isRequired,
        changeBookShelf: PropTypes.func.isRequired
    };

    //Defining states of component
    state = {
        query : '' //State to store user query on search input
    };

    //Method to update query state
    updateQuery = (query) => {
        this.setState({ query: query.trim() })
    };

    clearQuery = (query) => {
        this.setState({ query: '' })
    };


    render() {

        const {bookCollection, changeBookShelf} = this.props;
        const {query} = this.state;

        let books;

        //If state query is true, we define a regex pattern and query all books that matches that pattern.
        if(query){

            const match = new RegExp(escapeRegExp(this.state.query), 'i');
            books       = bookCollection.filter((bookCollection) => (match.test(bookCollection.title) || match.test(bookCollection.authors)) );

        }else{
            books = bookCollection;
        }

        //Sort books by title
        books.sort(sortBy('title'));

        return (
            <div className="main-app-container">
                <div className="search-books-bar">
                    <Link className="close-search" to='/'>Back</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text"
                               value={query}
                               onChange={(event)=> this.updateQuery(event.target.value)}
                               placeholder="Search by title or author"
                        />
                    </div>
                </div>

                <div className="search-books-results">

                    {books.length < bookCollection.length &&(
                        <div className="search-results-counter">
                            <span>Showing {books.length} of {bookCollection.length} - </span>
                            <a href="#" className="show-all" onClick={this.clearQuery}>Show all</a>
                        </div>
                    )}

                    <ol className="books-grid">
                        <ol className="books-grid">
                            {books.map((book) => (
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
