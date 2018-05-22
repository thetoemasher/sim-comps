select fb.id, fb.user_id, ui.username, fb.book_id, b.title from favorite_books fb
join userinfo ui on fb.user_id = ui.id
join books b on fb.book_id = b.id