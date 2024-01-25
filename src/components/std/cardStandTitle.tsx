import React from 'react';
import {CardTitle } from 'react-bootstrap';

export default function CardStandTitle(props:any) {
  const {title,id} =props;
  return (
    <CardTitle>  {id} {title}</CardTitle>
  )
}
