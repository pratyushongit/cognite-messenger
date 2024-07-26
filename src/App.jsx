import { useSelector } from "react-redux";
import Chat from "./components/chat/Chat";
import List from "./components/list/List";
import Login from "./components/login/Login";
import { userSelector } from "./store/slices/usersSlice";
import Fallback from "./components/fallback/Fallback";

const App = () => {
  const { currentUser, selectedUser } = useSelector(userSelector);

  return (
    <div className="container">
      {currentUser ? (
        <>
          <List />
          {selectedUser ? <Chat /> : <Fallback />}
        </>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default App;
