import React, { Component } from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  PieChart,
  Pie
} from "recharts";
import axios from "axios";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

class FirstApp extends Component {
  constructor() {
    super();
    this.state = {
      ads: []
    };
  }

  componentDidMount() {
    axios.get(`http://35.185.80.237:8090/countByOs`).then(res => {
      const ads = res.data;
      this.setState({ ads: ads });
      // console.log(ads[0].fullName);
    });
  }

  render() {
    return (
      <GridContainer>
        <BarChart
          width={600}
          height={300}
          data={this.state.ads}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>

        <PieChart width={800} height={400}>
          <Pie
            isAnimationActive={false}
            data={this.state.ads}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Pie
            data={this.state.ads}
            cx={500}
            cy={200}
            innerRadius={40}
            outerRadius={80}
            fill="#82ca9d"
          />
          <Tooltip />
        </PieChart>
      </GridContainer>
    );
  }
}

export default withStyles(styles)(FirstApp);
