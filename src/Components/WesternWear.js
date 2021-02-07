import React from "react";
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody, CardLink
} from 'reactstrap';
import img4 from './Assets/image4.jpg';
import img5 from './Assets/image6.jpg';
import img6 from './Assets/image5.jpg';
const WesternWear = (props) => {
  return (
    <CardDeck>
      <Card>
        <CardImg top width="100%" src={img4} alt="Western Wear" />
        <CardBody>
          <CardTitle tag="h5">Moss & Melange</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">- EXPLORE</CardSubtitle>
          <CardText><i>Your sofa-to-fridgr look</i></CardText>
          <CardLink href="https://www.myntra.com/tshirts/roadster/roadster-women-olive-green-solid-round-neck-t-shirt/11893772/buy">Product Link</CardLink>
          <CardLink href="https://www.myntra.com/tops/roadster/roadster-women-olive-green-solid-top/11681480/buy">Similar Product Link</CardLink>
          <div>
            <Button className="mt-2 btn btn-warning">Button</Button>
          </div>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={img5} alt="Western Wear" />
        <CardBody>
          <CardTitle tag="h5">Superhero Tees</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">- EXPLORE</CardSubtitle>
          <CardText><i>The right balance between edgy & effortless</i></CardText>
          <CardLink href="https://www.myntra.com/waistcoat/jack--jones/jack--jones-brown--navy-reversible-casual-waistcoat/2243478/buy">Product Link</CardLink>
          <CardLink href="https://www.myntra.com/tshirts/jack--jones/jack--jones-men-red-printed-round-neck-t-shirt/12397228/buy">Similar Product Link</CardLink>
          <div>
            <Button className="mt-2 btn btn-warning">Button</Button>
          </div>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={img6} alt="Western Wear" />
        <CardBody>
          <CardTitle tag="h5">Smart Daily Wear Tees</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">- EXPLORE</CardSubtitle>
          <CardText><i>The unofficial symbol of all things bold</i></CardText>
          <CardLink href="https://www.myntra.com/dresses/vero-moda/vero-moda-women-off-white--blue-printed-a-line-dress/11488134/buy">Product Link</CardLink>
          <CardLink href="https://www.myntra.com/dresses/vero-moda/vero-moda-women-peach-coloured-solid-sheath-dress-with-pleated-detailing/11633996/buy">Similar Product Link</CardLink>
          <div>
            <Button className="mt-2 btn btn-warning">Button</Button>
          </div>
        </CardBody>
      </Card>
    </CardDeck>
  );
};

export default WesternWear;