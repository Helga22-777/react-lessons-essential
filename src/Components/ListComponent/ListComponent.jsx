import React from "react";
import { v4 } from "uuid";

const numbers = [34, 65, 78, 1, 45];

export class ListComponent extends React.Component {
    render() {
        return (
            <div>
                <h1>Our list-component</h1>
                <ul>
                    {numbers.map(element => {
                        return <li key={v4()}>{element}</li>
                    })}
                </ul>
            </div>

        );
    }
}