import React, { useState } from "react";
import PlayerForm from "./PlayerForm";
import axios from "axios";
import { useHistory } from "react-router-dom";

const textStyle = {
  fontWeight: "600",
  fontSize: "1.5rem",
};

const AddPlayer = ({ playerList, setPlayerList }) => {
  const history = useHistory();
  const [errMsg, setErrMsg] = useState("");
  const createPlayer = (player) => {
    axios
      .post("http://localhost:8000/players/addplayer", player)
      .then((res) => {
        if (res.data["message"]) {
          setErrMsg(res.data.message);
        } else if (res.data["player"]) {
          console.log(res.data.player);
          const tempPlayerList = [...playerList, res.data.player];
          tempPlayerList.sort((a, b) =>
            a.name > b.name ? 1 : b.name > a.name ? -1 : 0
          );
          setPlayerList(tempPlayerList);
          history.push("/players/list");
        } else if (res.data["err"]) {
          setErrMsg(res.data.err.errors.name.message);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div style={{ marginTop: "2rem" }}>
      <a href={"/players/list"}>List</a>
      <span> | </span>
      <a style={textStyle} href={"/players/addplayer"}>
        Add Player
      </a>
      <PlayerForm
        onPlayerSubmit={createPlayer}
        errMsg={errMsg}
        setErrMsg={setErrMsg}
        initialPlayer={{ name: "", preferred_position: "" }}
      />
    </div>
  );
};

export default AddPlayer;
