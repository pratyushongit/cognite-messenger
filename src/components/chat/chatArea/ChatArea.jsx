import { useEffect, useMemo, useRef, useState } from "react";
import { IMAGES } from "../../../assets";
import styles from "./ChatArea.module.css";
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../../../store/slices/usersSlice";
import {
  addMessage,
  messagesSelector,
} from "../../../store/slices/messageSlice";

const ChatArea = () => {
  const [text, setText] = useState("");
  const { currentUser, selectedUser } = useSelector(userSelector);
  const messagesData = useSelector(messagesSelector);
  const messages = useMemo(
    () => messagesData[currentUser]?.[selectedUser] || [],
    [messagesData, currentUser, selectedUser]
  );
  const endRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    endRef.current?.scrollIntoView({ behaviour: "smooth" });
  }, [messagesData, selectedUser]);

  useEffect(() => {
    setText("");
  }, [selectedUser]);

  /**
   * Handle text input field change
   *
   * @param {*} e
   */
  const handleChange = (e) => {
    setText(e.target.value);
  };

  /**
   *  Send the typed message from the `currentUser` to the `selectedUser`
   *
   * @param {*} e
   */
  const handleSendClick = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(
        addMessage({ from: currentUser, to: selectedUser, message: text })
      );
    }
    setText("");
  };

  return (
    <>
      <div className={styles.chat__containerBody}>
        {messages?.length === 0 && (
          <p className={`fallback ${styles.fallback__text}`}>
            All it takes is a simple &apos;hi&apos; to start something great!
          </p>
        )}
        {messages?.map((msg, index) => (
          <div
            className={`${styles.message__container} ${
              msg.from === currentUser ? styles.own : ""
            }`}
            key={index}
          >
            {msg.from !== currentUser && (
              <img
                src={IMAGES.avatar}
                alt="Avatar"
                className={styles.avatar__img}
              />
            )}
            <div className={styles.text__container}>
              <p>{msg.message}</p>
              <span>{msg.timeStamp}</span>
            </div>
          </div>
        ))}
        <span ref={endRef}></span>
      </div>
      <div className={styles.chat__containerFooter}>
        <form className={styles.form__container}>
          <input
            type="text"
            placeholder="Type a message..."
            className={`input ${styles.chat__input}`}
            value={text}
            onChange={handleChange}
          />
          <button
            className={`btn ${styles.chat__button}`}
            onClick={handleSendClick}
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default ChatArea;
