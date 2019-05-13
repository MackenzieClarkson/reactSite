import React, { Component, lazy, Suspense } from 'react';

import {
Card,
CardHeader,
CardImg,
CardSubtitle,
CardText,
CardTitle,
CardBody,
} from 'reactstrap';
import moment from 'moment'
import axios from 'axios'
class apod extends Component{
  constructor(props) {
    super(props);
    this.state={
      today: moment().format('YYYY-MM-DD'),
      less2: moment().subtract(2, 'days').format('YYYY-MM-DD'),
      less1: moment().subtract(1, 'days').format('YYYY-MM-DD'),
      less1img: '',
      todayimg: '',
      less2img: ''
    }
  }
  componentDidMount(){

    axios.get(`https://api.nasa.gov/planetary/apod?api_key=29znLscTia9eMS7aL2DP9h2U6fL5U9AhKd19tsna`)
      .then(res =>{
        this.setState({todayimg:res.data.hdurl, todayimgexp: res.data.explanation, todaytitle:res.data.title})
      })
    axios.get(`https://api.nasa.gov/planetary/apod?date=${this.state.less1}&api_key=29znLscTia9eMS7aL2DP9h2U6fL5U9AhKd19tsna`)
      .then(res =>{
        this.setState({less1img:res.data.hdurl, less1imgexp: res.data.explanation, less1Title: res.data.title})
      })
    axios.get(`https://api.nasa.gov/planetary/apod?date=${this.state.less2}&api_key=29znLscTia9eMS7aL2DP9h2U6fL5U9AhKd19tsna`)
      .then(res =>{
        this.setState({less2img:res.data.hdurl, less2imgexp: res.data.explanation, less2Title: res.data.title})
      })
  }

render(){
return (
<div class="container">
  <h2>Astronomy Pictures of the Last 3 Days (NASA) </h2>
<Card className="border-primary">
      <CardHeader>
        <h4>
          {this.state.todaytitle}
        </h4>
      </CardHeader>
  <CardBody>
  <CardTitle>
{this.state.today}
  </CardTitle>
  <CardText>
    <h5>
      {this.state.todayimgexp}
    </h5>
  </CardText>
  </CardBody>
  <img className="d-block w-100" src={this.state.todayimg} fluid>

  </img>


</Card>
<Card className="border-primary">
      <CardHeader>
        <h4>
          {this.state.less1Title}
        </h4>
      </CardHeader>
  <CardBody>
  <CardTitle>
{this.state.less1}
  </CardTitle>
  <CardText>
    <h5>
      {this.state.less1imgexp}
    </h5>
  </CardText>
  </CardBody>
  <img className="d-block w-100" src={this.state.less1img} fluid>

  </img>
</Card>
<Card className="border-primary">
      <CardHeader>
        <h4>
          {this.state.less2Title}
        </h4>
      </CardHeader>
  <CardBody>
  <CardTitle>

      {this.state.less2}

  </CardTitle>
  <CardText>
    <h5>
      {this.state.less2imgexp}
    </h5>
  </CardText>
  </CardBody>
  <img className="d-block w-100" src={this.state.less2img} fluid>

  </img>

</Card>
</div>
)}
}
export default apod;
