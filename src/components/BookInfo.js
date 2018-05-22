import React, { Component } from 'react';
import axios from 'axios';

class BookInfo extends Component {
    constructor() {
        super(); 
        this.state = {
            info: {}
        }
    }

    componentDidMount() {
        let {id} = this.props.match.params
        console.log(id)
        axios.get(`/api/books/${id}`).then( results => {
            this.setState({ info: results.data })
        })
    }

    render() {
        console.log(this.state.info.authors)
        let authors = []
        if (this.state.info.authors) {
            authors = this.state.info.authors.map(author => {
                console.log(author.name)
                return(
                    <div key={author.author_id}>
                        {author.name}
                    </div>
                )
            })
        }
        return (
            <div>
                <h3>{this.state.info.title}</h3>
                {authors}
            </div>
        )
    }
}

export default BookInfo