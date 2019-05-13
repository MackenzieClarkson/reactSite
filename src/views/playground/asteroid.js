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
      console.log(todayAsteroids)
      let asteroids = todayAsteroids.map((asteroid)=>{
        return(

          <Card>
          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
          <CardBody>
          <CardTitle>
            Asteroid # {asteroid.name}
          </CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          </CardBody>
        </Card>


        )
      })
      //console.log(dataAsteroids['id'])
      this.setState(state =>{
  return{
    asteroids:asteroids
  }
})

  })
}
  render(){
    return(
      <div>
        {this.state.asteroids}
        hi2
      </div>
    )
  }
}
export default Asteroid;
