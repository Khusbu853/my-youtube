

const ChatMessage = ({name,message}) => {
  return (
    <div className="flex items-center mb-4">
            <img
                className="h-9"
                src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
                alt="user-icon"
            />
            <span className="font-bold px-2">
                {name} <span className="font-normal">{message}</span>
            </span>
    </div>
  )
}

export default ChatMessage
