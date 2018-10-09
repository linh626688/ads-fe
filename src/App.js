import React from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

import axios from 'axios';

export default class PersonList extends React.Component {
    state = {
        ads: []
    }


    componentDidMount() {
        axios.get(`http://localhost:8088/getAllAds`)
            .then(res => {
                const ads = res.data;
                this.setState({ ads: ads });
                // console.log(ads[0].fullName);
            })
    }

    render() {
        return (
            <div>


                <LineChart width={1000} height={900} data={this.state.ads}
                           margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                    <XAxis dataKey="creatTime"/>
                    <YAxis/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip/>
                    <Legend/>
                    <Line type="monotone" dataKey="countTotalShow" stroke="#8884d8" activeDot={{r: 8}}/>
                    {/*<Line type="monotone" dataKey="totalTime" stroke="#82ca9d"/>*/}
                </LineChart>
            </div>
        )
    }
}