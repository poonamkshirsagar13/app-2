import React from 'react';
import Card from 'react-bootstrap/Card';
import CardStandTitle from './cardStandTitle';
import CardStandBody from './cardStandBody';
import CardStandList from './cardStandList';
import { CardStandImg } from './cardStandImg';
import CardStandFooter from './cardStandFooter';
import CardStandMat from './cardStandMat';

export default function CardStand(props:any) {
  const {title, body, links,description,picture,isProductDetails,id,price,productMaterial} = props;
  return (
    <Card style={{margin:'3px', width:'400px'}}>
      <CardStandTitle title={title} id={id}></CardStandTitle>
      <CardStandImg picture={picture}></CardStandImg>
       <CardStandBody links={links}></CardStandBody>
      <CardStandList description ={description} ></CardStandList>
      {isProductDetails && <CardStandMat productMaterial={productMaterial}></CardStandMat>}
      <CardStandFooter price={price}></CardStandFooter>
    </Card>
  )
}

 