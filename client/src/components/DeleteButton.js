import React from "react";
import Button from "@mui/material/Button";
import axios from "axios";

const DeleteButton = ({ playerId, successCallback }) => {
  const deletePlayer = (e) => {
    axios.delete("http://localhost:8000/players/" + playerId).then((res) => {
      successCallback();
    });
  };
  return (
    <Button variant="contained" color="error" onClick={deletePlayer}>
      Delete
    </Button>
  );
};

export default DeleteButton;
