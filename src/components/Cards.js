import React, { useState, useRef, useEffect, useContext } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

import { ButtonGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";
import Carts from "./carts";

import { StateContext } from "../Routing";
function Cards( ) {

  const {data,setSelectedData,selectedData}= useContext(StateContext);
  const navigate = useNavigate();
  const startIndex = useRef(1);
  const endIndex = useRef(20);
  const pageNumber = useRef(1);
  

  
 

  const handlePreviousPage = () => {
    if (pageNumber.current > 1) {
      pageNumber.current -= 1;
    }
    if (endIndex.current === 20) {
      alert("you are on first page");
    } else {
      startIndex.current = startIndex.current - 20;
      endIndex.current = endIndex.current - 20;
    }
  };
  const handleNextPage = () => {
    if (pageNumber.current < 11) {
      pageNumber.current = pageNumber.current + 1;
    }
    startIndex.current = endIndex.current;
    endIndex.current += 20;
  };
  const handleCart = (element) => {
    if (auth.currentUser?.email) {

      setSelectedData([...selectedData,{element}]);

    } else {
      navigate("/login");
    }
  };


  return (
    <Container>
     
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          {data?.slice(startIndex.current, endIndex.current)
            .map((element, i) => {
            
              return (
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={element.images[2]} />

                  <Card.Body>
                    <Card.Title>{element.title}</Card.Title>
                    <Card.Text>{element.description}</Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>Price:{element.price}</ListGroup.Item>
                  </ListGroup>
                  <Card.Body>
                    <ButtonGroup
                      className="me-2"
                      style={{ justifyContent: "space-around" }}
                    >
                      <Button
                        variant="primary"
                        onClick={() => handleCart(element)}
                      >
                        Add To cart
                      </Button>
                    </ButtonGroup>
                 
                  
                  </Card.Body>
                </Card>
              );
            })}
        </div>
      </div>
      <div style={{display:"flex",justifyContent:"space-around",marginBlockStart:"2rem"}}>
      <ButtonGroup>
        <Button variant="success" onClick={() => handlePreviousPage()}>PreviousPage</Button>
      </ButtonGroup>
      Page:{pageNumber.current}
      <ButtonGroup>
        <Button variant="success" onClick={() => handleNextPage()}>NextPage</Button>
      </ButtonGroup>
      </div>
    </Container>
  );
}

export default Cards;
