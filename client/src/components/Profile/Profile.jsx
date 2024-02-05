import { ChatBubbleOvalLeftIcon } from "@heroicons/react/24/solid";
import Typography from "../UI/data-display/Typography";
import { createChat, findChat } from "../../services/chat.service";
import { useDispatch, useSelector } from "react-redux";
import { activeChat, activeSidebar } from "../../slices";
const Profile = ({ person }) => {
  const { user } = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const handleClick = async () => {
    const senderId = user._id;
    const receiverId = person?._id;
    const existChat = await findChat({
      firstId: senderId,
      secondId: receiverId,
    });
    if (existChat === null) {
      const chat = await createChat({ senderId, receiverId });
      dispatch(activeSidebar("chats"));
      dispatch(activeChat(chat));
    } else {
      dispatch(activeSidebar("chats"));
      dispatch(activeChat(existChat));
    }
  };
  console.info(person);
  return (
    // <div className="flex justify-center h-full mt-5 p-6">
    <div className="flex flex-col overflow-visible justify-center items-center mt-10 py-6 mx-auto w-1/3 space-y-10 border border-indigo-300 rounded shadow-lg">
      <div className="flex flex-col justify-center items-center space-y-6">
        <div
          style={{ backgroundImage: `url(${person.avatar})` }}
          className="w-12 h-12 rounded-full bg-cover bg-center"
        ></div>
        <Typography variant="heading-1" className="self-center">
          {person.firstname} {person.lastname}
        </Typography>
      </div>
      {person._id !== user._id && (
        <div onClick={handleClick}>
          <ChatBubbleOvalLeftIcon className="w-7 h-7 text-indigo-300 hover:text-indigo-400 hover:scale-125 active:text-indigo-400 cursor-pointer" />
        </div>
      )}
    </div>
    // </div>
  );
};
export default Profile;
