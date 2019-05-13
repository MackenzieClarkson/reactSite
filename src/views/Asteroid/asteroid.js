import axios from 'axios'
import moment from 'moment'
import React, { Component, lazy, Suspense } from 'react';
import {
Badge,
Button,
ButtonDropdown,
ButtonGroup,
ButtonToolbar,
Card,
CardBody,
CardImg,
CardFooter,
CardHeader,
CardTitle,
Col,
Dropdown,
DropdownItem,
DropdownMenu,
DropdownToggle,
Progress,
Row,
Table,
CardSubtitle,
CardText
} from 'reactstrap';
class Asteroid extends Component{
  constructor(props){
    super(props)
    this.state = {
      asteroids: []
    }
  }
  componentDidMount(){
    const today = moment().format('YYYY-MM-DD')
    axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${today}&end_date=${today}&api_key=29znLscTia9eMS7aL2DP9h2U6fL5U9AhKd19tsna`)
      .then(res =>{
      console.log(res)

      console.log(today)

      var todayAsteroids = res.data.near_earth_objects[today]
      const lengthOfArr = Math.ceil(todayAsteroids.length)
      var col1, col2
      if(lengthOfArr%2 == 1){
        col1 = todayAsteroids.slice(0,lengthOfArr/2+1)
        col2 = todayAsteroids.slice(lengthOfArr/2+1, lengthOfArr)
      }
      else{
        col1 = todayAsteroids.slice(0,lengthOfArr/2)
        col2 = todayAsteroids.slice(lengthOfArr/2, lengthOfArr)
      }
      console.log(col2)
      console.log(todayAsteroids)
      let asteroids1 = col1.map((asteroid)=>{
        return(

          <Card>
          <CardImg
            src="https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA5OS83MTQvb3JpZ2luYWwvMjAwNC1ldzk1LWFzdGVyb2lkLmpwZw=="
             />
          <CardBody>
          <CardTitle>
            Asteroid Name: {asteroid.name}
          </CardTitle>
          <CardSubtitle>
            Potentially Hazardous: {String(asteroid.is_potentially_hazardous_asteroid)}
          </CardSubtitle>
          <CardText>
            Estimated Diameter Range: {asteroid.estimated_diameter.kilometers.estimated_diameter_min}km -- {asteroid.estimated_diameter.kilometers.estimated_diameter_max}km
          </CardText>
          </CardBody>
        </Card>
        )
      })
      let asteroids2 = col2.map((asteroid)=>{
        return(

          <Card>
          <CardImg
            src="https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA5OS83MTQvb3JpZ2luYWwvMjAwNC1ldzk1LWFzdGVyb2lkLmpwZw=="
             />
          <CardBody>
          <CardTitle>
            Asteroid Name: {asteroid.name}
          </CardTitle>
          <CardSubtitle>
            Potentially Hazardous: {String(asteroid.is_potentially_hazardous_asteroid)}
          </CardSubtitle>
          <CardText>
            Estimated Diameter Range: {asteroid.estimated_diameter.kilometers.estimated_diameter_min}km -- {asteroid.estimated_diameter.kilometers.estimated_diameter_max}km
          </CardText>
          </CardBody>
        </Card>
        )
      })
      //console.log(dataAsteroids['id'])
      this.setState(state =>{
  return{
    asteroids1:asteroids1,
    asteroids2:asteroids2
  }
})

  })
}
  render(){
    return(

        <div class="row offset-1">
      <div class="col-5">
        {this.state.asteroids1}

      </div>

      <div class="col-5">
        {this.state.asteroids2}

      </div>
      </div>

    )
  }
}
export default Asteroid;
