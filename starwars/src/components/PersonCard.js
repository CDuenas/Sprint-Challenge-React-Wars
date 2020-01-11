import React from "react";
import { Card, CardText, CardBody, CardTitle, } from "reactstrap";

const PersonCard = props => {
    return (
        <Card>
            <CardBody className="person-card">
                <CardTitle>Name: {props.name}</CardTitle>
                <CardText>Birth Year: {props.year}</CardText>
                <CardText>Height: {props.height}</CardText>
                <CardText>Mass: {props.mass}</CardText>
            </CardBody>
        </Card>
    )
}

export default PersonCard;