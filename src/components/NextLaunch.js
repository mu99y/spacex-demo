import { TableRow, TableCell, TableContainer, TableBody } from "@mui/material";
import Counter from "./Counter";

const NextLaunch = ({ nextLaunch }) => {
  return (
    <TableContainer>
      <TableBody>
        <TableRow>
          <TableCell>
            Next Launch : <span>{nextLaunch.name}</span>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Counter launch={nextLaunch.date_unix} />
          </TableCell>
        </TableRow>
      </TableBody>
    </TableContainer>
  );
};

export default NextLaunch;
