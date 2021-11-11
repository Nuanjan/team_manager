import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import StatusButton from "./StatusButton";

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

const PlayerStatus = ({playerList, setPlayerList}) => {

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
                  <StatusButton color={player.player_status === "playing"?'success': "primary"} text={'Playing'} setPlayerList={setPlayerList} playerId={player._id} status={'playing'}/>
                <StatusButton color={player.player_status === "not_playing"?'error': "primary"} text={'Not Playing'} setPlayerList={setPlayerList} playerId={player._id} status={'not_playing'}/>
                  <StatusButton color={player.player_status === "undecided"?'warning': "primary"} text={'Undecided'} setPlayerList={setPlayerList} playerId={player._id} status={'undecided'}/>
                   
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
};

export default PlayerStatus;