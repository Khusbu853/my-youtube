

const Comment = ({data}) => {
    const {name, text} = data;

    return (
        <div className='flex shadow-sm bg-gray-100 p-2 m-2 rounded-lg w-3/4'>
            <img alt="logo" className='h-10' src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" />
            <div className='px-3'>
                <p className='font-bold'>{name}</p>
                <p>{text}</p>
            </div>
        </div>
    )
}


export const CommentsList = ({comments}) => {
    return comments.map((comment, index) => {
        return <div key={"comment_" + index} >
            <Comment data={comment} />
            <div className='ml-6 border-l-4'>
            {/* Replies are a list of comments in itself, we are Recursing the components in itself */}
                <CommentsList comments={comment.replies} />   
            </div>
        </div>
    })  

}

export default CommentsList
