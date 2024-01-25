import React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import menuData from '../../../data/menu.json'


export  function MenuComponet() {
  
  const navigate = useNavigate();

  const navigateToPath = (menuItem: any) => {
    console.log("navigate to: "+ menuItem.path);
    navigate(`/${menuItem.path}`);
  }

  ///////

  const menuDataView = menuData.map((menuItem)=>{return <Col onClick={()=>navigateToPath(menuItem)} 
  style={!menuItem.enable ? {pointerEvents: "none", opacity: "0.4"} : {}}>
    <img style={{height:'20px'}} src={menuItem.icon} alt=''></img>{menuItem.label}</Col>});
  

  //////



  return (
    <div>
      <Container>
      <Row>
       {menuDataView}
      </Row>
      </Container>
    </div>
  )
}
