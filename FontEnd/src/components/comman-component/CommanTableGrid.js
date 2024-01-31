import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/system";

export default function CommanTableGrid({rows,columns}) {
  const [pageSize, setPageSize] = React.useState(5)
  return (
    <Box
      sx={{
        "& .super-app-theme--header": {
          height: "61px",
          backgroundColor: "#EEEEEE",
        },
      }}
    >
      <DataGrid
        checkboxSelection
        autoHeight
        rows={rows} columns={columns}
        disableColumnSelector
        disableColumnFilter
        disableColumnMenu
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 20]}
        pagination
        rowHeight={47}
      />
    </Box>
    // </div>
  );
}
