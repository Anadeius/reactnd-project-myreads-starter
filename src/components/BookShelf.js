import React, { Component } from 'react';
import BookCard from "./BookCard";

class BookShelf extends Component {
    render() {
        const { shelfTitle, books } = this.props;

        let shelvedBooks = books.filter(book => book.status === shelfTitle);

        const bookCards = shelvedBooks.map(book => (
            <BookCard book={book} />
        ));

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelfTitle}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {bookCards}
                    </ol>
                </div>
            </div>
        );
    }
}

export default BookShelf;