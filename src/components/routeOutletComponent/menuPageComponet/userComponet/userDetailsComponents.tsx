import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


export function UserDetailsComponents(props:any) {
    const {user, userPicture} = props;
    console.log("user", user)
    const [picture, setPicture] = useState('');

    const fetchPictureData=(user:any)=>{
      setPicture(user.picture);
      console.log(picture)
    }
    useEffect(() => { fetchPictureData(user); }, [user]);
  

  return (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={userPicture}/>
          <Card.Body>
            <Card.Title>{user.id} {userPicture}</Card.Title>
            
            <Card.Text>
             Some quick example text to build on the card title and make up the
             bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>{user.createdAt}  </ListGroup.Item>
            <ListGroup.Item>{user.country}</ListGroup.Item>
            <ListGroup.Item>{user.firstName} {user.lastName}at eros</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      );
}

  
function fetchPictureData(user: any) {
  throw new Error('Function not implemented.');
}

