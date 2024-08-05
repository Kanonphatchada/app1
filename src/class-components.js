import React, { Component } from "react";

export default class Calender extends Component {
    getDate(){
        const dayNames = ['Sunday','Monday','Tuesday','Wednesday','Friday','Saturday']
        const monthNames =['January','February','March','April','May','June','July','August','September','October','November','December']
        const date = new Date()
        const weekDay = dayNames[date.getDate()]
        const day = date.getDate()
        const month = monthNames[date.getMonth()]
        const year = date.getFullYear() 
        return `${weekDay} ${day} ${month} ${year}` //กด alt กด 9 ตามด้วย 6
    }
    render(){
        return <div>{this.getDate()}</div>
    }
}