import { Box } from "@mui/material";
import usePosts from "../../hooks/usePosts";

const ListOfData = () => {
  const { data, isLoading } = usePosts();

  return <Box></Box>;
};
export default ListOfData;
