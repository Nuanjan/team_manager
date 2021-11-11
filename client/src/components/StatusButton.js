import React from 'react';
import Button from "@mui/material/Button";
import axios from "axios";

const StatusButton = ({color, text, playerId, status, setPlayerList}) => {

    const onChangeStatus=() =>{
        axios.put("http/")
    }
    return (
        <Button variant="contained" color={color} onClick={onChangeStatus}>{text}</Button>
    );
};

export default StatusButton;