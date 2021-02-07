import React from "react";
import { Container } from "reactstrap";
import Accessories from "./Accessories";
import FootWear from "./FootWear";
import IndianWear from "./IndianWear";
import WesternWear from "./WesternWear";

const CardSection = () => {

    return (
        <Container>
            <h1 className="mt-4 mb-4" style={{ textAlign: "center" }}>
                TRENDING IN WESTERN WEAR
         </h1>
            <WesternWear />
            <h1 className="mt-4 mb-4" style={{ textAlign: "center" }}>
                TRENDING IN INDIAN WEAR
         </h1>
            <IndianWear />
            <h1 className="mt-4 mb-4" style={{ textAlign: "center" }}>
                TRENDING IN FOOTWEAR WEAR
         </h1>
            <FootWear />
            <h1 className="mt-4 mb-4" style={{ textAlign: "center" }}>
                TRENDING IN ACCESSORIES
         </h1>
            <Accessories />
        </Container>


    );
};

export default CardSection;