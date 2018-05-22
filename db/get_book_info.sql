select bookinfo.id, bookinfo.book_id, bookinfo.author_id, authors.name, books.title from bookinfo
join authors on bookinfo.author_id = authors.id
join books on bookinfo.book_id = books.id
where bookinfo.book_id = $1;