import styles from "./ChatHeader.module.css";
import { IMAGES } from "../../../assets";
import { useSelector } from "react-redux";
import { userSelector } from "../../../store/slices/usersSlice";

const ChatHeader = () => {
  const { selectedUser } = useSelector(userSelector);
  return (
    <div className={styles.chat__containerHeader}>
      <div className={styles.user}>
        <img src={IMAGES.avatar} alt="Avatar" className={styles.avatar__img} />
        <div className={styles.user__description}>
          <span className={styles.user__name}>{selectedUser}</span>
          <p className={styles.user__detail}>Chasing dreams daily! ✨</p>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
