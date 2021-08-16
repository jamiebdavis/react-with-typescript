import "./App.css";

import AddToList from "./components/AddToList";
import List from "./components/List";
import React from "react";

export interface IState {
    players: {
        name: string;
        url: string;
        age: number;
        team?: string;
    }[];
}

function App() {
    const [players, setPlayers] = React.useState<IState["players"]>([
        {
            name: "Kevin Durant",
            url: "https://cdn.nba.com/headshots/nba/latest/1040x760/201142.png",
            age: 36,
            team: "Brooklyn Nets",
        },
    ]);

    return (
        <div className="App">
            <h1>NBA MVPs </h1>
            <List players={players} />
            <AddToList players={players} setPlayers={setPlayers} />
        </div>
    );
}

export default App;
