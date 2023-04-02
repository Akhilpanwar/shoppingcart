import React, { useState, useRef, useContext, useEffect } from "react";
import { auth } from "../firebase/firebase";
import Card from "react-bootstrap/Card";
import { StateContext } from "../Routing";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { ButtonGroup, Container } from "react-bootstrap";
function Carts({Data,Remove}) {

console.log("======== this",Data)
  const Navigate = useNavigate();
  useEffect(()=>{

 
  if (!auth.currentUser?.email) {
    Navigate("/login");
  }
},[])
const RemoveItem=(element)=>{
const selected=Data.filter((item,i)=>{
return item!==element
})
  Remove(selected)
}
  return (
<div>
     {Data.length===0?<div style={{display:"flex",justifyContent:"center"}}>
      <h1 style={{color:"red"}}>
      Cart Is Empty
      </h1>
      </div>:
     <Container> 
           <h1 style={{textAlign:"center",textDecoration:"underline",color:"red"}}>Your Selected iTems:</h1>
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
     
        {Data.map((item,i)=>{
return(
     
  <Card style={{ width: "18rem" }}>
  <Card.Img variant="top" src={item.element.images[0]} />

  <Card.Body>
    <Card.Title>{item.element.title}</Card.Title>
    <Card.Text>{item.element.description}</Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroup.Item>Price:{item.element.price}</ListGroup.Item>
  </ListGroup>
  <Card.Body>
    <ButtonGroup
      className="me-2"
      style={{ justifyContent: "space-around" }}
    >
     
    </ButtonGroup>
    <ButtonGroup>
      <Button variant="warning" onClick={()=>RemoveItem(item)}> Remove</Button>
    </ButtonGroup>
  </Card.Body>
</Card>  )})}</div></div></Container> }
    </div>
      
  );
}

export default Carts;
