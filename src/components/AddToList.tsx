import { IState as Props } from "../App";
import React from "react";

interface IProps {
    players: Props["players"];
    setPlayers: React.Dispatch<React.SetStateAction<Props["players"]>>;
}

const AddToList: React.FC<IProps> = ({ setPlayers, players }) => {
    const [input, setInput] = React.useState({
        name: "",
        url: "",
        age: "",
        team: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };

    const handleClick = (): void => {
        if (!input.name || !input.team || !input.age) return;

        setPlayers([
            ...players,
            {
                name: input.name,
                age: parseInt(input.age),
                url: input.url,
                team: input.team,
            },
        ]);

        setInput({
            name: "",
            url: "",
            age: "",
            team: "",
        });
    };

    return (
        <div className="AddToList">
            Add to do list component
            <input
                onChange={handleChange}
                value={input.name}
                type="text"
                placeholder="name"
                className="AddToList-input"
                name="name"
            />
            <input
                onChange={handleChange}
                value={input.url}
                type="text"
                placeholder="url"
                className="AddToList-input"
                name="url"
            />
            <input
                onChange={handleChange}
                value={input.age}
                type="number"
                placeholder="age"
                className="AddToList-input"
                name="age"
            />
            <textarea
                onChange={handleChange}
                value={input.team}
                placeholder="team"
                className="AddToList-input"
                name="team"
            />
            <button onClick={handleClick} className="AddToList-btn">
                Add to list
            </button>
        </div>
    );
};

export default AddToList;
