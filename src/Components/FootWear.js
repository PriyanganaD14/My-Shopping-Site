import React from "react";
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody, CardLink
} from 'reactstrap';
import img10 from './Assets/img10.jpg';
import img11 from './Assets/img11.jpg';
import img12 from './Assets/img12.jpg';

const FootWear = () => {
  return (
    <CardDeck>
      <Card>
        <CardImg top width="100%" src={img10} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Comfort Footwear</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">- EXPLORE</CardSubtitle>
          <CardText><i>A little casual, a little glam</i></CardText>
          <CardLink href="https://www.myntra.com/casual-shoes/keds/keds-women-white--grey-printed-sneakers/8959569/buy">Product Link</CardLink>
          <CardLink href="https://www.myntra.com/casual-shoes/call-it-spring/call-it-spring-women-white--beige-printed-sneakers/12479958/buy">Similar Product Link</CardLink>
          <div>
            <Button className="mt-2 btn btn-warning">Button</Button>
          </div>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={img11} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Outback Outdoor Shoes</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">- EXPLORE</CardSubtitle>
          <CardText><i>Bring the adventure back home</i></CardText>
          <CardLink href="https://www.myntra.com/casual-shoes/jack--jones/jack--jones-men-charcoal-grey-solid-leather-mid-top-sneakers/10388489/buy">Product Link</CardLink>
          <CardLink href="https://www.myntra.com/casual-shoes/jack--jones/jack--jones-men-navy-solid-mid-top-sneakers/10388521/buy">Similar Product Link</CardLink>
          <div>
            <Button className="mt-2 btn btn-warning">Button</Button>
          </div>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={img12} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Women's Footwear By Rocia</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">- EXPLORE</CardSubtitle>
          <CardText><i>Easy to wear & pull off</i></CardText>
          <CardLink href="https://www.myntra.com/casual-shoes/anouk/anouk-women-blue--coral-orange-printed-sneakers/8786649/buy">Product Link</CardLink>
          <CardLink href="https://www.myntra.com/printed-sneakers?f=Gender%3Amen%20women%2Cwomen">Similar Product Link</CardLink>
          <div>
            <Button className="mt-2 btn btn-warning">Button</Button>
          </div>
        </CardBody>
      </Card>
    </CardDeck>
  );
};

export default FootWear;