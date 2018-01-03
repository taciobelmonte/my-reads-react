import React, { Component } from 'react'
import PropTypes from "prop-types";
import BookDetail from './../components/BookDetail'
import './../assets/app/App.css'
import ReactTooltip from 'react-tooltip'


class Book extends Component{

    state = {
        status: "disappear"
    };

    static propTypes = {
        title: PropTypes.string.isRequired,
        book: PropTypes.object.isRequired,
    };

    changeBookShelf = (event) => {
        this.props.changeBookShelf(this.props.book, event.target.value);
    };

    changeStatus = () => {
        // console.log("foi");

        this.setState({
            status: "visible",
        });
    };

    close = ()=>{
        // console.log('fechou');
        this.setState({
            status: "disappear",
        });
    };

    render(){
        const {book, classe, title} = this.props;

        let backgroundImage;
        if(book.imageLinks)
            backgroundImage = book.imageLinks.thumbnail;
        else
            backgroundImage = 'https://books.google.com/googlebooks/images/no_cover_thumb.gif';

        return(
            <div className="book">
                <p className={classe}>
                    {title}
                </p>
                <div className="front">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 141, height: 200, backgroundSize:'cover', backgroundImage: `url(${backgroundImage})` }}></div>
                        <div className="book-shelf-changer">
                            <select onChange={this.changeBookShelf} value={book.shelf}>
                                <option disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">
                        {book.authors}
                    </div>
                </div>
                <div>
                    <a className="link-detail" onClick={this.changeStatus}>
                        <i className="fa-plus fa" data-tip="See more details"></i>
                        <ReactTooltip place="top" type="info" effect="solid"/>
                    </a>
                    <BookDetail book={book} status={this.state.status} close={this.close}/>
                </div>

            </div>
        )
    }
}

export default Book