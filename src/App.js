import React, {Component} from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar } from 'recharts';
// import { Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';


import axios from 'axios';

class Ads extends Component {
    constructor() {
        super();
        this.state = {
            ads: []
        }
    }
    componentDidMount() {
        axios.get(`http://35.185.80.237:8090/countByOs`)
            .then(res => {
                const ads = res.data;
                this.setState({ ads: ads });
                // console.log(ads[0].fullName);
            })
    }

    render() {
        return (
            <div >
                <BarChart width={600} height={300} data={this.state.ads}
                          margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="nameOS"/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend />
                    <Bar dataKey="countOfOs" fill="#8884d8" />
                </BarChart>
            </div>
        )
    }
}
export default Ads;
