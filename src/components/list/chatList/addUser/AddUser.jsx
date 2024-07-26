import styles from "./AddUser.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addFriend } from "../../../../store/slices/friendsSlice";
import { setSelectedUser } from "../../../../store/slices/usersSlice";

const AddUser = ({ currentUser, setAddMode }) => {
  const [friendName, setFriendName] = useState("");
  const dispatch = useDispatch();

  /**
   * Add a friend to the currentUser when clicked
   *
   * @param {*} e
   */
  const handleAdd = (e) => {
    e.preventDefault();
    if (friendName.trim()) {
      dispatch(addFriend({ userId: currentUser, friendId: friendName }));
      dispatch(setSelectedUser(friendName));
      setAddMode(false);
    }
    setFriendName("");
  };

  return (
    <div className={styles.addUser__container}>
      <form className={styles.form__container}>
        <h2>Add a friend to chat with</h2>
        <input
          type="text"
          value={friendName}
          onChange={(e) => setFriendName(e.target.value)}
          placeholder="Enter name"
          className={`input ${styles.form__name}`}
          autoFocus={true}
        />
        <button onClick={handleAdd} className={`btn ${styles.btn__add}`}>
          Add
        </button>
      </form>
    </div>
  );
};

export default AddUser;
