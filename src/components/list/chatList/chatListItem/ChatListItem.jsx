import { useDispatch, useSelector } from "react-redux";
import { IMAGES } from "../../../../assets";
import styles from "./ChatListItem.module.css";
import {
  setSelectedUser,
  userSelector,
} from "../../../../store/slices/usersSlice";

const ChatListItem = ({ friend }) => {
  const { selectedUser } = useSelector(userSelector);
  const dispatch = useDispatch();

  /**
   * Handle click on any chat item
   *
   * @param {*} friend
   */
  const handleChatClick = (friend) => {
    dispatch(setSelectedUser(friend));
  };

  return (
    <div
      className={`${styles.item} ${
        selectedUser === friend ? styles.selected : ""
      }`}
      key={friend}
      onClick={() => handleChatClick(friend)}
    >
      <img src={IMAGES.avatar} alt="Avatar" className={styles.avatar_img} />
      <div className={styles.text}>
        <span className={styles.name}>{friend}</span>
      </div>
    </div>
  );
};

export default ChatListItem;
