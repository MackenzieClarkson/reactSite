import React, {Component, lazy, Suspense} from 'react';
import {Bar, Line} from 'react-chartjs-2';
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
import {CustomTooltips} from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import {getStyle, hexToRgba} from '@coreui/coreui/dist/js/coreui-utilities'

class siteInfo extends Component {
  constructor(props) {
    super(props);
    this.passedProp = props.match.params.prop
    console.log(this.passedProp)
    this.passProp = this.passProp.bind(this);
  }
  passProp() {
    var myProp = 'Proppy'
    this.props.history.push('/playground')
  }
  render() {
    return (<Row>
      <Col>
        <Card class="col">
          <CardImg src="/assets/img/react.png" alt="Card image cap"/>
          <CardBody>
            <CardTitle>
              <h2>
                React
              </h2>
            </CardTitle>
            <CardSubtitle>
              <h4>
                Front-End JavaScript Library
              </h4>

            </CardSubtitle>
            <CardText>
              React has become an industry standard in Front-end Development. Particularly in JavaScript based Stacks. Used and produced by Facebook, React is capable of building Powerful SPAs (Single Page Applications).
            </CardText>
            <Button href="https://reactjs.org/">
              React
            </Button>
          </CardBody>
        </Card>
      </Col>
      <Col>
        <Card class="col">
          <CardImg src="/assets/img/bootstrap3.png" />
          <CardBody>
            <CardTitle>
              <h3>
                Bootstrap
              </h3>

            </CardTitle>
            <CardSubtitle>
              <h4>
                Styling Library
              </h4>

            </CardSubtitle>
            <CardText>
              Bootstrap is a very popular styling framework especially useful for responsive (mobile-friendly) pages. This site uses the ReactStrap implementation.
            </CardText>
            <Button href="https://reactstrap.github.io/">
              ReactStrap
            </Button>
          </CardBody>
        </Card>
      </Col>
      <Col>
        <Card class="col">
          <CardImg src="/assets/img/nasa.png" alt="Card image cap"/>
          <CardBody>
            <CardTitle>
              <h3>
                NASA API
              </h3>

            </CardTitle>
            <CardSubtitle>
              <h4>
                Public API containing up-to-date data and images
              </h4>

            </CardSubtitle>
            <CardText>
              Public resource containing links to images, videos, and live data for everything astronomy and geography.
            </CardText>
            <Button href="https://api.nasa.gov/">
              NASA
            </Button>
          </CardBody>
        </Card>
      </Col>
    </Row>)
  }
}
export default siteInfo;
