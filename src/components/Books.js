import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getBooks } from '../ducks/reducer';

class Books extends React.Component {
    componentDidMount() {
        this.props.getBooks()
    }
    render() {
        let books = []
        console.log(this.props.books)
        if (this.props.books.length > 0) {
        books = this.props.books.map(book => {
            return <div key={book.id}>
            <Link to={`/${book.id}`}>{book.title}</Link>
            </div>
        })
        }
        return (
            <div>
                {books}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        books: state.books
    }
}

export default connect(mapStateToProps, { getBooks })(Books)