import React, { Component } from "react";

export default class Button extends Component {
    showAlert(msg) {
        alert(msg)
    }
    onClickButtonOK = () =>{ //event Handler แบบ Arrow Function
        this.showAlert("Hello") //ใช้this ได้เลยโดยไม่เกิดปัญหา
    }
    render() {
        return <button onClick={this.onClickButtonOK}>OK</button>
    }
}
