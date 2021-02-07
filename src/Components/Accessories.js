import React from "react";
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody, CardLink
} from 'reactstrap';
import img13 from './Assets/img13.jpg';
import img14 from './Assets/img14.jpg';
import img15 from './Assets/img15.jpg';


const Accessories = () => {
  return (
    <CardDeck>
      <Card>
        <CardImg top width="100%" src={img13} alt="Western Wear" />
        <CardBody>
          <CardTitle tag="h5">Exclusive Mobiles</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">- EXPLORE</CardSubtitle>
          <CardText><i>Hurry Up!! Only fews left</i></CardText>
          <CardLink href="https://www.flipkart.com/apple-iphone-se-red-64-gb-includes-earpods-power-adapter/p/itm6e9443811d36a?pid=MOBFRFXHYMPBSB5H&lid=LSTMOBFRFXHYMPBSB5HVHY9KJ&marketplace=FLIPKART&sattr[]=color&sattr[]=storage&st=color">Product Link</CardLink>
          <CardLink href="https://www.flipkart.com/apple-iphone-se-black-64-gb-includes-earpods-power-adapter/p/itm832dd5963a08d?pid=MOBFRFXHCKWDAC4A&lid=LSTMOBFRFXHCKWDAC4AEQROVZ&marketplace=FLIPKART&srno=s_1_1&otracker=search&otracker1=search&fm=SEARCH&iid=5cebe03d-ed04-4def-9d9d-3dfbeb78c148.MOBFRFXHCKWDAC4A.SEARCH&ppt=sp&ppn=sp&ssid=wrgjfrkau80000001612701698805&qH=8b3ea07a3ce41940">Similar Product Link</CardLink>
          <div>
            <Button className="mt-2 btn btn-warning">Book Now</Button>
          </div>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={img14} alt="Western Wear" />
        <CardBody>
          <CardTitle tag="h5">Sporty Watches</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">- EXPLORE</CardSubtitle>
          <CardText><i>Ahead of its time in style & performance</i></CardText>
          <CardLink href="https://www.myntra.com/watches/marie-claire/marie-claire-women-rose-gold-toned-analogue-watch-mc-14c-a/9897265/buy">Product Link</CardLink>
          <CardLink href="https://www.myntra.com/watches/french-connection/french-connection-women-rose-gold-toned-analogue-watch-fcn0001f/10317185/buy">Similar Product Link</CardLink>
          <div>
            <Button className="mt-2 btn btn-warning">Book Now</Button>
          </div>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={img15} alt="Western Wear" />
        <CardBody>
          <CardTitle tag="h5">Wireless Headphones</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">- EXPLORE</CardSubtitle>
          <CardText><i>Tangled wires? Not in our vocabulary</i></CardText>
          <CardLink href="https://www.flipkart.com/boat-rockerz-450-bluetooth-headset/p/itm722d8659a8520?pid=ACCFQKK85DSZSDHC&lid=LSTACCFQKK85DSZSDHCFIBQ7Z&marketplace=FLIPKART&sattr[]=color&st=color">Product Link</CardLink>
          <CardLink href="https://www.flipkart.com/boat-rockerz-450-bluetooth-headset/p/itmdb79a9c0cb56f?pid=ACCFEHZ8GSGWMMSD&lid=LSTACCFEHZ8GSGWMMSDXIRNEY&marketplace=FLIPKART&srno=s_1_26&otracker=search&otracker1=search&fm=SEARCH&iid=9da3f462-80eb-4d79-950c-64da5cbad38c.ACCFEHZ8GSGWMMSD.SEARCH&ppt=sp&ppn=sp&ssid=jyszh5w89s0000001612701624734&qH=b052e360817fdeec">Similar Product Link</CardLink>
          <div>
            <Button className="mt-2 btn btn-warning">Book Now</Button>
          </div>
        </CardBody>
      </Card>
    </CardDeck>
  );
};

export default Accessories;