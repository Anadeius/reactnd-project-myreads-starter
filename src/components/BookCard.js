import React, { Component } from 'react';
import BookShelfChanger from './BookShelfChanger';

class BookCard extends Component {
    render() {
        const { cover, coverWidth, coverHeight, title, author } = this.props.book;

        const bookCoverStyle = {
            height: coverHeight,
            width: coverWidth,
            backgroundImage: `url(${cover})`
        };

        return (
            <li>
                <div className='book'>
                    <div className='book-top'>
                        <div className='book-cover' style={bookCoverStyle}></div>
                        <BookShelfChanger />
                    </div>
                    <div className='book-title'>{title}</div>
                    <div className='book-authors'>{author}</div>
                </div>
            </li>
        );
    }
}

export default BookCard;