import React, { Component } from "react";

export default class SortBar extends Component {
    handleChange = (e) => {
        this.props.sortBots(e.target.value)
    }
    render() {
        return (
            <div>
                <h2>Sort Bots By:</h2>
                <select onChange={this.handleChange} name="type">
                    <option value="all">All</option>
                    <option value="health">Health</option>
                    <option value="damage">Damage</option>
                    <option value="armor">Armor</option>
                </select>
            </div>
        );
    }
}