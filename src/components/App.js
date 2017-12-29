import React from 'react'
import {Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import Collection from './../components/Collection'
import Search from './../components/Search'
import * as BooksAPI from './../utils/BooksAPI'
import './../assets/css/App.css'

class ReadingsManagement extends React.Component {

    //Define state to populate with books
    state = {
        bookCollection : [],
        loading:true,
        query : ''
    };

    //Lifecycle
    componentDidMount(){

        //Get books utilizing API
        BooksAPI.getAll().then( bookCollection => {
            //console.log(bookCollection);
            this.setState({bookCollection});
        });
    }

    //Function to perform book changing from shelves
    changeBookShelf = (book, nShelf) => {
        BooksAPI.update(book, nShelf).then(() => {
            book.shelf = nShelf;
            this.setState(state => ({
                bookCollection: state.bookCollection.filter(b=>b.id!==book.id).concat([ book ])
            }));
        });
    };

    render() {
        //Defining constants to clear code
        const {title}           = this.props;
        const {bookCollection}  = this.state;

        return (
            <div className="main-app-container">
                <Route
                    exact
                    path="/"
                    render={
                        ()=>(
                            <div className="list-books">
                                <div className="list-books-title">
                                    <h1>{title}</h1>
                                </div>
                                <div className="list-books-content">
                                    <div className="collection">
                                        <Collection changeBookShelf={ this.changeBookShelf } bookCollection={this.state.bookCollection} />
                                    </div>
                                </div>
                                <div className="open-search">
                                    <Link to='/search'>Search a book</Link>
                                </div>
                            </div>
                        )
                    }
                />
                <Route
                    path="/search"
                    render={
                        ()=>(
                            <div className="app">
                                <div className="search-books">
                                    <Search changeBookShelf={ this.changeBookShelf } bookCollection={bookCollection} />
                                </div>
                            </div>
                        )
                    }
                />
            </div>
        )
    }
}
export default ReadingsManagement