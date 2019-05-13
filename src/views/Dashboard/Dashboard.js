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
  CardSubtitle,
  CardText,
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
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'



const brandPrimary = getStyle('--primary')
const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
const brandWarning = getStyle('--warning')
const brandDanger = getStyle('--danger')

// Card Chart 1

// Main Chart

//Random Numbers
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
const items = [
  {
    src: '/assets/img/carousel1.jpg',
    altText: 'Slide 1',
    caption: 'Welcome to Space Tracker',
    captionText: '',
    link: '/asteroidTracker'
  },
  {
    src: '/assets/img/carousel2.jpg',
    altText: 'Slide 2',
    caption: 'Welcome to Space Tracker',
    link: ''
  },
];

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    this.routeTo = this.routeTo.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }
  routeTo(route) {
    console.log("route to " + route)
  }
  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
            className="custom-tag"
            tag="div"
            key={item.id}
            onExiting={this.onExiting}
            onExited={this.onExited}

          >
          <img className="custom2" src={item.src}  />

            <CarouselCaption  captionText={item.captionText} captionHeader={item.caption} >

              </CarouselCaption>
          </CarouselItem>

      );
    });

    return (
      <div class="container">
    <style>
      {
        `
          .custom2{
            height: 70vh;
          }
          .custom3{
            height: 30vh;

          }
          `
      }
    </style>
    <div class="col-12">
    <Carousel

      activeIndex={activeIndex}
      next={this.next}
      previous={this.previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
    </Carousel>
</div>
  </div>
    );
  }
}
export default Dashboard;
