import React from 'react';
import {CardFooter} from 'react-bootstrap';


export default function CardStandFooter(props:any) {
  const{price}=props;
  return (
    <CardFooter>${price}</CardFooter>
  )
}
