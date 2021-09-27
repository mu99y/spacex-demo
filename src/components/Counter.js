import { useEffect, useState } from "react";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { TableBody } from "@mui/material";

const Counter = ({ launch }) => {
  const [timer, setTimer] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const getLaunchDate = (target) => {
    const nowInSeconds = new Date().getTime() / 1000;
    const secondsLeft = target - nowInSeconds < 0 ? 0 : target - nowInSeconds;

    const days = secondsLeft / 86400;
    const hours = (secondsLeft / 3600) % 24;
    const minutes = (secondsLeft / 60) % 60;
    const seconds = secondsLeft % 60;

    return {
      days: Math.floor(days),
      hours: Math.floor(hours),
      minutes: Math.floor(minutes),
      seconds: Math.floor(seconds),
    };
  };

  useEffect(() => {
    if (!launch) return;
    const time = setInterval(() => {
      setTimer(getLaunchDate(launch));
    }, 1000);

    return () => {
      clearInterval(time);
    };
  }, [launch]);

  return (
    <TableContainer>
      <Table sx={{ maxWidth: 100 }}>
        <TableBody>
          <TableRow>
            <TableCell>Days</TableCell>
            <TableCell>{timer.days}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Hours</TableCell>
            <TableCell>{timer.hours}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Minutes</TableCell>
            <TableCell>{timer.minutes}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Seconds</TableCell>
            <TableCell>{timer.seconds}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Counter;
