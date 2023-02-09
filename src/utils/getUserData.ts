// get user data from localStorage
const getUserData = () => {
  const response = localStorage.getItem("user-info");
  if (response) {
    return JSON.parse(response);
  } else return null;
};
export default getUserData;
