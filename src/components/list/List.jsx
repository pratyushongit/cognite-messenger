import styles from "./List.module.css";
import ChatList from "./chatList/ChatList";
import UserInfo from "./userInfo/UserInfo";

const List = () => {
  return (
    <div className={styles.list__container}>
      <UserInfo />
      <ChatList />
    </div>
  );
};

export default List;
