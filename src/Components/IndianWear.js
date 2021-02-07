import React from 'react';
import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody, CardLink
} from 'reactstrap';
import img7 from './Assets/img7.jpg';
import img8 from './Assets/img8.jpg';
import img9 from './Assets/img9.jpg';

const IndianWear = () => {
    return (
        <CardDeck>
            <Card>
                <CardImg top width="100%" src={img7} alt="Card image cap" />
                <CardBody>
                    <CardTitle tag="h5">Daily Dress</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">- EXPLORE</CardSubtitle>
                    <CardText><i>Indians suresly know the route to comfort</i></CardText>
                    <CardLink href="https://www.myntra.com/kurtas/see-designs/see-designs-men-blue--white-printed-straight-kurta/11312628/buy">Product Link</CardLink>
                    <CardLink href="https://www.myntra.com/kurtas/anouk/anouk-men-teal-blue-solid-straight-kurta/10308097/buy">Similar Product Link</CardLink>
                    <div>
                        <Button className="mt-2 btn btn-warning">Book Now</Button>
                    </div>
                </CardBody>
            </Card>
            <Card>
                <CardImg top width="100%" src={img8} alt="Card image cap" />
                <CardBody>
                    <CardTitle tag="h5">Summer Ready Ethnic</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">- EXPLORE</CardSubtitle>
                    <CardText><i>The colour of classy</i></CardText>
                    <CardLink href="https://www.myntra.com/kurtas/w/w-women-blue--off-white-printed-a-line-sustainable-kurta/11369280/buy">Product Link</CardLink>
                    <CardLink href="https://www.myntra.com/kurtas/w/w-women-navy-blue-yoke-design-straight-kurta/10206735/buy">Similar Product Link</CardLink>
                    <div>
                        <Button className="mt-2 btn btn-warning">Book Now</Button>
                    </div>
                </CardBody>
            </Card>
            <Card>
                <CardImg top width="100%" src={img9} alt="Card image cap" />
                <CardBody>
                    <CardTitle tag="h5">All Indian Wear</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">- EXPLORE</CardSubtitle>
                    <CardText><i>For always cool outlook</i></CardText>
                    <CardLink href="https://www.myntra.com/kurtas/taavi/taavi-men-maroon--black-ikat-woven-design-straight-kurta-with-roll-up-sleeves/11014192/buy">Product Link</CardLink>
                    <CardLink href="https://www.myntra.com/kurtas/manyavar/manyavar-men-purple-woven-straight-kurta/1843247/buy">Similar Product Link</CardLink>
                    <div>
                        <Button className="mt-2 btn btn-warning">Book Now</Button>
                    </div>
                </CardBody>
            </Card>
        </CardDeck>
    );
};

export default IndianWear;