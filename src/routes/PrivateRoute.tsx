import { Navigate, useLocation } from "react-router-dom";
import { useUser } from "../contexts/UserProvider";

function PrivateRoute({ children }: { children: JSX.Element }) {
  const location = useLocation();
  const { user } = useUser();
  if (user) {
    return children;
  } else
    return (
      <Navigate
        to="/"
        state={{
          from: location,
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
