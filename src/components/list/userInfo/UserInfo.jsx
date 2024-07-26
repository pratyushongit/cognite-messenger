import { useDispatch, useSelector } from "react-redux";
import { IMAGES } from "../../../assets";
import styles from "./UserInfo.module.css";
import {
  removeCurrentUser,
  userSelector,
} from "../../../store/slices/usersSlice";

const UserInfo = () => {
  const { currentUser } = useSelector(userSelector);
  const dispatch = useDispatch();

  /**
   * Handle Logout button click
   */
  const handleLogout = () => {
    dispatch(removeCurrentUser());
  };

  return (
    <div className={styles.userInfo__container}>
      <div className={styles.container__user}>
        <div className={styles.details__container}>
          <img
            src={IMAGES.avatar}
            alt="Avatar"
            className={styles.container__avatarImg}
          />
          <h3>{currentUser}</h3>
        </div>
        <button className={`btn  ${styles.btn__logout}`} onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserInfo;
