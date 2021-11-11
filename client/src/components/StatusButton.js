import React, { useState } from "react";
import Button from "@mui/material/Button";
import axios from "axios";

const StatusButton = ({
  color,
  text,
  playerId,
  status,
  setPlayerList,
  playerList,
}) => {
  const [playerStatus, setPlayerStatus] = useState({ player_status: status });

  const onChangeStatus = () => {
    axios
      .put("http://localhost:8000/status/game/1/" + playerId, playerStatus)
      .then((res) => {
        console.log(res.data.player.player_status);
        const tempPlayer = playerList.map((obj) =>
          obj._id === res.data.player._id
            ? { ...obj, player_status: res.data.player.player_status }
            : obj
        );
        setPlayerList(tempPlayer);
      });
  };
  return (
    <Button variant="contained" color={color} onClick={onChangeStatus}>
      {text}
    </Button>
  );
};

export default StatusButton;
