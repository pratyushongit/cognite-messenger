import { useEffect, useState } from "react";
import { IMAGES } from "../../../../assets";
import styles from "./ChatSearch.module.css";
import useDebounce from "../../../../utils/hooks/useDebounce";
import { createPortal } from "react-dom";
import AddUser from "../addUser/AddUser";
import { userSelector } from "../../../../store/slices/usersSlice";
import { useSelector } from "react-redux";

const ChatSearch = ({ friends, setFilteredFriends }) => {
  const [addMode, setAddMode] = useState(false);
  const [searchFriend, setSearchFriend] = useState("");
  const { currentUser } = useSelector(userSelector);
  const debounceValue = useDebounce(searchFriend, 100);

  useEffect(() => {
    const filteredResults = !friends
      ? []
      : !debounceValue
      ? friends
      : friends.filter((friend) =>
          friend.toLowerCase().includes(debounceValue.toLowerCase())
        );
    setFilteredFriends(filteredResults);
  }, [friends, debounceValue, setFilteredFriends]);

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      setAddMode(false);
    }
  };

  useEffect(() => {
    if (addMode) {
      window.addEventListener("keydown", handleKeyDown);
    } else {
      window.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [addMode]);

  /**
   * Handle input value change on search bar
   *
   * @param {*} e
   */
  const handleSearchFilterChange = (e) => {
    setSearchFriend(e.target.value);
  };

  /**
   * Handle show/hide of the `AddUser` modal
   */
  const handleAdd = () => {
    setAddMode((prevState) => !prevState);
  };

  return (
    <>
      <div className={styles.search}>
        <div className={styles.search__bar}>
          <img
            src={IMAGES.search}
            alt="Search"
            className={styles.search__img}
          />
          <input
            type="text"
            placeholder="Search"
            className={`input ${styles.search__input}`}
            value={searchFriend}
            onChange={handleSearchFilterChange}
          />
        </div>
        <img
          src={addMode ? IMAGES.minus : IMAGES.add}
          alt="Add user"
          className={styles.add_img}
          onClick={handleAdd}
        />
      </div>
      {addMode &&
        createPortal(
          <AddUser currentUser={currentUser} setAddMode={setAddMode} />,
          document.body
        )}
    </>
  );
};

export default ChatSearch;
