import Card from 'react-bootstrap/Card';
import React from 'react';
import { CardBody } from 'react-bootstrap';


export default function CardStandBody(props:any) {
  const{links}=props;
  return (
    <CardBody>
        {
          links && links.length > 0 && links.map((link:any)=> { 
            return <Card.Link href={link.href} onClick={link.action}>{link.name}</Card.Link>
          })
        }

    </CardBody>
  )
}