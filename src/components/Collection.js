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

        const currentlyReading      = bookCollection.filter(book => book.shelf === "currentlyReading");
        const wantToRead            = bookCollection.filter(book => book.shelf === "wantToRead");
        const read                  = bookCollection.filter(book => book.shelf === "read");

        return(
                <div>
                    <BookShelf changeBookShelf={ changeBookShelf } title="Currently Reading" bookCollection={currentlyReading} />
                    <BookShelf changeBookShelf={ changeBookShelf } title="Want to Read" bookCollection={wantToRead} />
                    <BookShelf changeBookShelf={ changeBookShelf } title="Read" bookCollection={read}/>
                </div>
            )
        }
    }

export default Collection
