import React, { Component } from "react";
import ButtonSingl from "./button/Button";
import { BoxButton } from "./Feedback.styled";
import { StatisticsList } from "./Feedback.styled";
const arrayNameButtons = ["Good", "Neutral", "Bad"];
let activId = 'nan';
export class BlokButtonSelect extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
        buttonActiv: '',
        
    };

   
     
    updateStatistic = event => {
        setTimeout(() => {this.setState({ buttonActiv: '' })},100);
        //console.log("Increment button was clicked!", event);
       activId = event.target.id;
       console.log("this.props: ", activId);
            switch (activId) {
                case '0': return this.setState((prevStat) => ({ good: prevStat.good + 1,buttonActiv: arrayNameButtons[0], }))    
                case '1': return this.setState(prevStat => ({ neutral: prevStat.neutral + 1,buttonActiv: arrayNameButtons[1], }))
                default: return this.setState(prevStat => ({ bad: prevStat.bad + 1,buttonActiv: arrayNameButtons[2], }))  
       }
    
    };
    
     render(activId) {
        //console.log(this.state.good === 0 && this.state.neutral === 0 && this.state.bad === 0);
        return (
            <>
            <BoxButton>
                    {arrayNameButtons.map((NameButton, i) => <ButtonSingl key={NameButton} id={i} NameButton={NameButton}
                        activeStateHandler={this.updateStatistic}  buttonActiv={this.state.buttonActiv} />)}
            </BoxButton>
                <div>
                    {(this.state.good === 0 && this.state.neutral === 0 && this.state.bad === 0)? ( <p>No feedbask given</p> ) : (
                <>
                    <h3>Statistics</h3>
                    <StatisticsList>
                        <li>Good: {this.state.good} </li>
                        <li>Neutral: {this.state.neutral} </li>
                        <li>Bad: {this.state.bad}</li>
                        <li>Total: {this.state.good+this.state.neutral+ this.state.bad}</li>
                        <li>Positive feedback: { Math.round(100 * this.state.good/(this.state.good+this.state.neutral+ this.state.bad))} % </li>  
                    </StatisticsList> </>)}
                </div>
            </> )  
    }
};
