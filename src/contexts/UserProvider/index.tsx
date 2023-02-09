import { createContext, useContext } from "react";

const UserContext = createContext({});

function UserProvider() {
  return <div>UserProvider</div>;
}

export default UserProvider;
