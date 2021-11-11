import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import PlayerList from "./components/PlayerList";
import AddPlayer from "./components/AddPlayer";
import axios from "axios";
import PlayerStatus from "./components/PlayerStatus";

function App() {
  const [playerList, setPlayerList] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/players/list").then((res) => {
      setPlayerList(
        res.data.players.sort((a, b) =>
          a.name > b.name ? 1 : b.name > a.name ? -1 : 0
        )
      );
    });
  }, []);
  return (
    <BrowserRouter>
      <div className="App">
        <Link style={{ fontSize: "2rem" }} to="/players/list">
          Manage Player
        </Link>
        <span style={{ fontSize: "2rem" }}> | </span>
        <Link style={{ fontSize: "2rem" }} to="/status/game/1">
          Manage Player Status
        </Link>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/players/list">
            <PlayerList playerList={playerList} setPlayerList={setPlayerList} />
          </Route>
          <Route path="/players/addplayer">
            <AddPlayer playerList={playerList} setPlayerList={setPlayerList} />
          </Route>
          <Route>
            <PlayerStatus playerList={playerList} setPlayerList={setPlayerList}/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
