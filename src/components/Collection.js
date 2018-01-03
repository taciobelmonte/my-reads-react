import React, {Component} from 'react'
import BookShelf from './../components/BookShelf'
import PropTypes from "prop-types";

class Collection extends Component{

    static propTypes = {
        changeBookShelf: PropTypes.func.isRequired,
        bookCollection: PropTypes.array.isRequired,
    };

    render(){
        const {bookCollection, changeBookShelf} = this.props;

        const currentlyReading = bookCollection.filter(book => book.shelf === "currentlyReading");
        const wantToRead = bookCollection.filter(book => book.shelf === "wantToRead");
        const read = bookCollection.filter(book => book.shelf === "read");

        return(
            <div>
                <div>
                    <BookShelf changeBookShelf={ changeBookShelf } classe="currentlyReading" title="Currently Reading" bookCollection={currentlyReading} />
                    <BookShelf changeBookShelf={ changeBookShelf } classe="wantToRead" title="Want to Read" bookCollection={wantToRead} />
                    <BookShelf changeBookShelf={ changeBookShelf } classe="read" title="Read" bookCollection={read}/>
                </div>
            </div>
            )
        }
    }

export default Collection
