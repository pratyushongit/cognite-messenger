import { useMemo, useState } from "react";
import styles from "./ChatList.module.css";
import { useSelector } from "react-redux";
import { userSelector } from "../../../store/slices/usersSlice";
import { friendsSelector } from "../../../store/slices/friendsSlice";
import ChatListItem from "./chatListItem/ChatListItem";
import ChatSearch from "./chatSearch/ChatSearch";

const ChatList = () => {
  const [filteredFriends, setFilteredFriends] = useState([]);
  const { currentUser } = useSelector(userSelector);
  const friendList = useSelector(friendsSelector);
  const friends = useMemo(
    () => friendList[currentUser] || [],
    [friendList, currentUser]
  );

  return (
    <div className={styles.chatList}>
      <ChatSearch friends={friends} setFilteredFriends={setFilteredFriends} />
      <div className={styles.chatList__container}>
        {filteredFriends?.map((friend, index) => (
          <ChatListItem friend={friend} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ChatList;
