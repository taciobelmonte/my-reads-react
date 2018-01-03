import React from 'react'
import {Link} from 'react-router-dom'

class BookDetail extends React.Component {

    componentDidMount(){

        document.addEventListener('keyup', (e) => {
            if (e.keyCode === 27){
                this.props.close();
            }
        });
    }

    render() {

        const {status, close, book} = this.props;

        let backgroundImage;
        if(book.imageLinks)
            backgroundImage = book.imageLinks.thumbnail;
        else
            backgroundImage = 'https://books.google.com/googlebooks/images/no_cover_thumb.gif';

        return (
            <div className={status + " detail"}>
                <a className="close" onClick={close}>
                    <i className="fa fa-times"></i>
                </a>
                <figure className="cover-book-detail">
                    <div className="book-cover" style={{ width: 141, height: 200, backgroundSize:'cover', backgroundImage: `url(${backgroundImage})` }}></div>
                </figure>
                <div className="content-book-detail">
                    <p><strong>Title:</strong> {book.title}</p>
                    <p><strong>Publisher:</strong> {book.publisher}</p>
                    <p><strong>Published in:</strong> {book.publishedDate}</p>
                    <div className="description">
                        <p><strong>Description:</strong> {book.description}</p>
                    </div>
                    <p><strong>More infos:</strong>
                        <Link to="{book.infoLink}">{book.infoLink}</Link></p>
                </div>
            </div>
        )
    }
}
export default BookDetail

