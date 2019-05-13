import React, { Component, lazy, Suspense } from 'react';
import { Bar, Line } from 'react-chartjs-2';
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
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'
import Asteroid from './asteroid'
import moment from 'moment'
class asteroidTracker extends Component{
  constructor(props) {
    super(props);
    this.state={
      today: moment().format('MMMM DD YYYY')
    }
    // This binding is necessary to make `this` work in the callback

  }
  componentDidMount(){
    const today = moment().format('yyyy-mm-dd')
    this.setState=({today:today})
  }

render(){
return (
<div>
<h3>Asteroids in Proximity on {this.state.today}</h3>
<Asteroid />
</div>
)}
}
export default asteroidTracker;
