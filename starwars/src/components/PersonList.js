import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row } from "reactstrap";
import PersonCard from "./PersonCard";


export default function PersonList() {
    const [people, setPeople] = useState([]);

    useEffect( () => {
        axios
        .get(`https://swapi.co/api/people/`)
        .then(response => {
          setPeople(response.data.results);
        })
        .catch(error => {
          console.log("The data was not returned", error);
        });
    }, []);
  
    console.log(people);


return (
    <Container className="film">
      <Row>
        {people.map((person, idx) => {
          return (
            <PersonCard
                key = {idx}
                name = {person.name}
                year = {person.birth_year}
                height = {person.height}
                mass = {person.mass}
            />
          );
        })}
      </Row>
    </Container>
  );
};