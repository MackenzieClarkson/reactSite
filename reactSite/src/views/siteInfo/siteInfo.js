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

class siteInfo extends Component{

render(){
  return (

<Row>
  <Col xs="12" sm="6" lg="3">
  <Card>
<CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
<CardBody>
  <CardTitle>Card title</CardTitle>
  <CardSubtitle>Card subtitle</CardSubtitle>
  <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
  <Button>Button</Button>
</CardBody>
</Card>
  </Col>

  <Col xs="12" sm="6" lg="3">
    <Card className="text-white bg-primary">
      <CardBody className="pb-0">

      </CardBody>

    </Card>
  </Col>


</Row>
)}
}
export default siteInfo;
