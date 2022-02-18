import React from "react";
import { v4 } from "uuid";

const peoples = [
    {
        first_name: 'Natalia',
        last_name: 'Moreva',
    },
    {
        first_name: 'Irina',
        last_name: 'Svistunova',
    },
    {
        first_name: 'Vitalij',
        last_name: 'Parhomenko',
    },
    {
        first_name: 'Olga',
        last_name: 'Savchuk',
    },
    {
        first_name: 'Natalia',
        last_name: 'Kardash',
    },
    {
        first_name: 'Evgeniy',
        last_name: 'Sutulov',
    },
]

export class ListName extends React.Component {
    render() {
        return (
            <div>
                <h1>Our peoples list</h1>
                <ul>
                    {peoples.map(person => 
                    <li key={v4()}>{person.first_name} {person.last_name}</li>)}
                </ul>
            </div>
        );
    }
}