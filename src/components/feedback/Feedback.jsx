import React, { Component } from "react";
import ButtonSingl from "./button/Button";
import { BoxButton } from "./Feedback.styled";
const arrayNameButtons = ["Good", "Neutral", "Bad"];

export class BlokButtonSelect extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    CountClickGood
   
    render() {
        return (
            <BoxButton> {arrayNameButtons.map((NameButton,i) => <ButtonSingl key={NameButton} id={i} NameButtonOn = {NameButton} />)}</BoxButton>)  
    }
};
