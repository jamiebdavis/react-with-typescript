import { IState as IProps } from "../App";
import React from "react";

const List: React.FC<IProps> = ({ players }) => {
    const renderList = (): JSX.Element[] => {
        return players.map(player => (
            <li className="List">
                <div className="List-header">
                    <img className="List-img" src={player.url} alt="" />
                    <h2>{player.name}</h2>
                </div>
                <p>{player.age} years old.</p>
                <p className="List-note">{player.team}</p>
            </li>
        ));
    };

    return <ul>{renderList()}</ul>;
};

export default List;
