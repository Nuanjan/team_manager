import React, { useState } from "react";
import PlayerForm from "./PlayerForm";
import axios from "axios";
import { useHistory } from "react-router-dom";

const AddPlayer = ({ playerList, setPlayerList }) => {
  const history = useHistory();
  const [errMsg, setErrMsg] = useState("");
  const createPlayer = (player) => {
    axios
      .post("http://localhost:8000/players/addplayer", player)
      .then((res) => {
        const tempPlayerList = [...playerList, res.data.player];
        tempPlayerList.sort((a, b) =>
          a.name > b.name ? 1 : b.name > a.name ? -1 : 0
        );
        console.log(" succesfull submit");
        setPlayerList(tempPlayerList);
        history.push("/players/list");
      })
      .catch((err) => setErrMsg(err.response.data.message));
  };
  return (
    <PlayerForm
      onPlayerSubmit={createPlayer}
      errMsg={errMsg}
      initialPlayer={{ name: "", preferred_position: "" }}
    />
  );
};

export default AddPlayer;
