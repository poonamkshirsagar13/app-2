import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';

export default function CardStandList(props:any) {
  const{description}=props;
  return (
    <ListGroup className="list-group-flush">
       <ListGroup.Item >{description}</ListGroup.Item>
    </ListGroup>  
  )
}
