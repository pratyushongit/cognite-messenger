import styles from "./Chat.module.css";
import ChatArea from "./chatArea/ChatArea";
import ChatHeader from "./chatHeader/ChatHeader";

const Chat = () => {
  return (
    <div className={styles.chat__container}>
      <ChatHeader />
      <ChatArea />
    </div>
  );
};

export default Chat;
