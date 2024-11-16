
const BookCard = ({ imgUrl, imgTitle, author }) => {
    return (
        <div>
            <img src={imgUrl} />
            <h3>{imgTitle}</h3>
            <p>{author}</p>
        </div>
    )
}

export default BookCard