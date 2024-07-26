import styles from "./Fallback.module.css";

const Fallback = () => {
  return (
    <div className={`fallback ${styles.fallback__container}`}>
      <p>
        Hey there! 🚀 To start the fun, just pick a chat message and let the
        conversation magic begin! 🎉✨
      </p>
    </div>
  );
};

export default Fallback;
