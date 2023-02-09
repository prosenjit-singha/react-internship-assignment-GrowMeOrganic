import { Navigate } from "react-router-dom";

function PrivateRoute({ children }: { children: JSX.Element }) {
  const response = localStorage.getItem("userInfo");
  if (response) {
    const userInfo = JSON.parse(response);
    if (userInfo.fullName && userInfo.email && userInfo.phoneNumber)
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

  return <div>{}</div>;
}

export default PrivateRoute;
