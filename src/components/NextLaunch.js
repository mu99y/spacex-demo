import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { TableBody } from "@mui/material";

const NextLaunch = () => {
  return (
    <div>
      Next Launch : <span>Starlink</span>
      <TableContainer>
        <Table sx={{ maxWidth: 100 }}>
          <TableBody>
            <TableRow>
              <TableCell>Days</TableCell>
              <TableCell>12</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Hours</TableCell>
              <TableCell>08</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Minutes</TableCell>
              <TableCell>25</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Seconds</TableCell>
              <TableCell>35</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default NextLaunch;
