import { useContext } from "react";
import moment from "moment";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { TableBody } from "@mui/material";
import { DataContext } from "../providers/DataContext";

const UpComing = () => {
  const { launchesUpcoming } = useContext(DataContext);
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
          {launchesUpcoming.map((launchpad) => {
            return (
              <TableRow>
                <TableCell>{launchpad.name}</TableCell>
                <TableCell>{moment(launchpad.date_local).format('MMMM Do YYYY, h:mm:ss a')}</TableCell>
                <TableCell>{launchpad.launchpad}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UpComing;
