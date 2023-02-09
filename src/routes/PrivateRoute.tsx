import { Navigate } from "react-router-dom";
import { useUser } from "../contexts/UserProvider";

function PrivateRoute({ children }: { children: JSX.Element }) {
  const { user } = useUser();
  if (user) {
    return children;
  } else
    return (
      <Navigate
        to="/"
        state={{
          error: {
            message:
              "You must enter your details before accessing the data page.",
          },
        }}
        replace
      />
    );
}

export default PrivateRoute;
