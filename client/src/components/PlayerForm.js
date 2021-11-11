import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const boxStyle = {
  width: "50%",
  margin: "2rem auto",
  padding: "1rem",
  border: "solid 1px grey",
};
const buttonContainerStyle = {
  width: "100%",
  display: "flex",
  justifyContent: "space-evenly",
};
const errStyle = {
  color: "red",
};
const PlayerForm = ({ onPlayerSubmit, errMsg, initialPlayer, setErrMsg }) => {
  const [input, setInput] = useState({
    name: initialPlayer.name,
    preferred_position: initialPlayer.preferred_position,
  });
  const onPlayerSubmitHandler = (e) => {
    e.preventDefault();
    onPlayerSubmit(input);
  };
  const handleNameChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    setErrMsg("");
  };
  return (
    <form style={boxStyle} onSubmit={onPlayerSubmitHandler}>
      {input.name.length > 0 && input.name.length < 2 ? (
        <p style={errStyle}>Name must be at least 2 characters</p>
      ) : (
        <p style={errStyle}>{errMsg && errMsg}</p>
      )}
      <FormControl sx={{ width: "25ch" }}>
        <TextField
          id="name"
          name="name"
          value={input.name}
          onChange={(e) => handleNameChange(e)}
          label="name:"
          sx={{ mb: "20px" }}
        />
        <TextField
          id="preferred_position"
          name="preferred_position"
          value={input.preferred_position}
          onChange={(e) =>
            setInput({ ...input, [e.target.name]: e.target.value })
          }
          label="Preferred Position:"
          sx={{ mb: "20px" }}
        />
        <Button variant="contained" color="success" type="submit">
          ADD
        </Button>
      </FormControl>
    </form>
  );
};

export default PlayerForm;
