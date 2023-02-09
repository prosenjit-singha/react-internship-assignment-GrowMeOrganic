import { Box } from "@mui/material";
import usePosts from "../../hooks/usePosts";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "userId", headerName: "User ID", width: 70 },
  { field: "title", headerName: "Title", width: 400 },
  { field: "body", headerName: "Body", width: 600 },
];

const ListOfData = () => {
  const { data, isLoading } = usePosts();

  return (
    <Box sx={{ height: 680, width: "100%", px: [2, 3], py: [2, 3] }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={10}
        // rowsPerPageOptions={[5]}
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
};
export default ListOfData;
