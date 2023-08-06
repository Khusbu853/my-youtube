import { useEffect, useState } from "react"
import ChatMessage from "./ChatMessage"
import { useDispatch, useSelector } from "react-redux"
import { addMessage } from "../utils/chatSlice"
import { generateRandomNames, makeRandomMessages } from "../utils/helper"


const LiveChat = () => {
    const [liveMessage, setLiveMessage] = useState("")
    const dispatch = useDispatch();

    const chatMessages = useSelector(store => store.chat.messages)

    useEffect(() => {
        const interval = setInterval(() => {
            //API polling
            dispatch(
                addMessage({
                    name: generateRandomNames(),
                    message: makeRandomMessages(32),
                })
            );
        }, 1500);

        return () => {
            clearInterval(interval);
        };
    }, []);

  return (
    <>
        <div className=" w-full border border-gray-200 rounded-lg  h-[500px] bg-slate-100 p-2 overflow-y-scroll flex flex-col-reverse">
            {chatMessages.map((c,i) => (
                <ChatMessage key={i} name={c.name} message={c.message} />
            ))}
        </div>

        <form
         onSubmit={(e) => {
            e.preventDefault();

            dispatch(
                addMessage({
                    name: 'Khusbu',
                    message: liveMessage,
                })
            )
            setLiveMessage("");
         }}
        >
            <input
                placeholder="Say something..."
                className="p-2 border border-gray-200 w-3/4 mt-2 mr-2"
                value={liveMessage}
                onChange={(e) => setLiveMessage(e.target.value)}
            />
            <button
                className="border border-green-100 bg-green-700 p-2 text-white px-4"
                type="submit"
            >
                Send
            </button>
        </form>

        
    </>
  )
}

export default LiveChat
