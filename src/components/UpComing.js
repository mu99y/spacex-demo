import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { TableBody } from "@mui/material";

const UpComing = () => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Launchpad</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Starlink</TableCell>
            <TableCell>2021-10-01</TableCell>
            <TableCell>launch pad test area</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Starlink-1</TableCell>
            <TableCell>2021-12-11</TableCell>
            <TableCell>launch pad test area</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UpComing;
