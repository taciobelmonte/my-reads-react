import React from 'react'
import {Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import Collection from './../components/Collection'
import Search from './../components/Search'
import Menu from './../components/Menu'
import * as BooksAPI from './../utils/BooksAPI'
import './../assets/app/App.css'

class ReadingsManagement extends React.Component {

    //Defining states
    state = {
        bookCollection : [],
        bookSearchCollection:[],
        query : ''
    };

    //Lifecycle
    componentDidMount(){

        //Get books utilizing API
        BooksAPI.getAll().then( bookCollection => {
            this.setState({bookCollection});
        });
    }

    //Function to perform book changing from shelves
    changeBookShelf = (book, nShelf, type) => {
        BooksAPI.update(book, nShelf).then(() => {
            book.shelf = nShelf;
            this.setState(state => ({
                bookCollection: state.bookCollection.filter(item=>item.id!==book.id).concat([ book ])
            }));
        });
    };

    //Function to update book state on Search results
    updateBook(books) {
        const filteredBooks = books.map(book => {
            book.shelf = "none";

            this.state.bookCollection.forEach(bookOnShelf =>{
                if (book.id === bookOnShelf.id)
                    book.shelf = bookOnShelf.shelf;
            });

          return book;
        });

        this.setState({
            bookSearchCollection: filteredBooks
         });
    }

    //Function to get books from API based on a query
    search = (myQuery,results) => {
        BooksAPI.search(myQuery,results).then(
            res => {
                if(res && !res.error){
                    this.updateBook(res);
                } else {
                    this.setState({
                        bookSearchCollection: []
                    });
                }
            })
    };

    render() {

        //Defining constants to clear code
        const {title}                                   = this.props;
        const {bookCollection, bookSearchCollection}    = this.state;

        return (
        <section id="main-application">

            <header className="header black-bg">
                <Link to="/" className="logo"><b>{title}</b></Link>
            </header>

            <section className="row">
                <div className="col-md-12 col-xs-12 row">
                    <Menu />
                    <div className="main-app col-md-10 col-xs-12">
                        <Route
                            exact
                            path="/"
                            render={
                                ()=>(
                                    <div className="list-books">
                                        <div className="list-books-content">
                                            <div className="collection">
                                                <Collection changeBookShelf={ this.changeBookShelf }
                                                            bookCollection={bookCollection}
                                                />
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
                                            <Search
                                                search={this.search}
                                                changeBookShelf={ this.changeBookShelf }
                                                bookSearchCollection={bookSearchCollection}
                                            />
                                        </div>
                                    </div>
                                )
                            }
                        />
                    </div>
                </div>
            </section>
        </section>
        )
    }
}
export default ReadingsManagement