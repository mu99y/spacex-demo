import { TableRow, TableCell, TableContainer, TableHead } from "@mui/material";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav>
      <TableContainer>
        <TableHead>
          <TableRow>
            <TableCell>
              <Link to="/">Home</Link>
            </TableCell>
            <TableCell>
              <Link to="/upcoming">Next launch</Link>
            </TableCell>
          </TableRow>
        </TableHead>
      </TableContainer>
    </nav>
  );
}

export default Nav;
