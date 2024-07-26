import { useState } from "react";
import styles from "./Login.module.css";
import { IMAGES } from "../../assets";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../store/slices/usersSlice";

const Login = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  /**
   * Handle login button click
   *
   * @param {*} e
   */
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(setCurrentUser(name));
  };

  return (
    <div className={styles.login__container}>
      <img src={IMAGES.logo} alt="Cognite" className={styles.logo} />
      <form className={styles.form__container}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
          className={`input ${styles.form__name}`}
          autoFocus={true}
        />
        <button onClick={handleLogin} className={`btn ${styles.btn__login}`}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
