import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import DeleteButton from "./DeleteButton";

const tableStyle = {
  margin: "1.5rem auto",
};
const textStyle = {
  fontWeight: "600",
  fontSize: "1.5rem",
};
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const PlayerList = ({ playerList, setPlayerList }) => {
  console.log(playerList);
  const removePlayerFromList = (playerId) => {
    setPlayerList(playerList.filter((player) => player._id !== playerId));
  };
  return (
    <TableContainer style={{ marginTop: "2rem" }}>
      <a style={textStyle} href={"/players/list"}>
        List
      </a>
      <span> | </span>
      <a href={"/players/addplayer"}>Add Player</a>
      <Table
        sx={{ minWidth: 700, width: "70%", align: "center" }}
        style={tableStyle}
        aria-label="customized table"
      >
        <TableHead>
          <TableRow>
            <StyledTableCell style={{ fontSize: "1.5rem" }}>
              Team Name
            </StyledTableCell>
            <StyledTableCell style={{ fontSize: "1.5rem" }}>
              Preferred Position
            </StyledTableCell>
            <StyledTableCell align="center" style={{ fontSize: "1.5rem" }}>
              Action
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {playerList.map((player) => (
            <StyledTableRow key={player._id}>
              <StyledTableCell component="th" scope="row">
                {player.name}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {player.preferred_position}
              </StyledTableCell>
              <StyledTableCell>
                <DeleteButton
                  playerId={player._id}
                  successCallback={() => removePlayerFromList(player._id)}
                />
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PlayerList;
