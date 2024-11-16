import BookCard from "../bookCard/BookCard";

const BookList = ({ books }) => {
    return (
        <ul>
            {books.map((book) => (
                <li key={book.id}>
                    <BookCard />
                </li>
            ))}
        </ul>
    );
};

export default BookList;
