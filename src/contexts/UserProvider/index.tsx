import { createContext, useContext, useState } from "react";
import UserInfo from "../../types/userInfo.type";
import getUserData from "../../utils/getUserData";

type Value = {
  user: UserInfo | null;
  updateUserData: (data: UserInfo) => void;
};

const UserContext = createContext<Value>({} as Value);

function UserProvider({ children }: { children: JSX.Element }) {
  const [user, setUser] = useState<UserInfo | null>(getUserData());
  console.log(user);
  function updateUserData(data: UserInfo) {
    localStorage.setItem("user-info", JSON.stringify(data));
    setUser(data);
    console.log(data);
  }
  const value = { user, updateUserData };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default UserProvider;

export const useUser = () => useContext(UserContext);
