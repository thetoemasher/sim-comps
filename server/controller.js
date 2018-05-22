module.exports = {
    getBooks: (req, res) => {
        const db = req.app.get('db')
        db.get_books().then(results => {
            res.status(200).send(results)
        })
    },
    getBookInfo: (req, res) => {
        let {id} = req.params
        const db = req.app.get('db');
        db.get_book_info([id]).then(results => {
            let authors = [];
            results.forEach(book => {
                let author = {
                    author_id: book.author_id,
                    name: book.name
                }
                authors.push(author);
            })
            let book = {
                book_id: results[0].book_id,
                title: results[0].title,
                authors: authors
            }
            res.status(200).send(book)
        })
    },
    subQuery: (req, res) => {
        const { search } = req.body
        const db = req.app.get('db');
        db.sub_query([search]).then(results => {
            res.status(200).send(results)
        })
    }
}