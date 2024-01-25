import React, { useContext, useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import axios from 'axios';
import { CardBody, CardFooter, CardHeader, CardImg, CardTitle, Image } from 'react-bootstrap';
import { CartContext } from '../../../../context/cart/cartContext';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import CardStand from '../../../std/cardStand';



export function ProductComponet() {
  const [data, setData]=useState([]);
  const [page,setPage ]=useState(0);
  const [product,setProduct]=useState('')
  const [picture, setPicture] = useState('');
  const navigate = useNavigate();
  const {addToCart } = useContext<any>(CartContext);
  const { id } = useParams();
  

  const changePage = (page: number, value: number) => {
    setPage(page+value);
    console.log("number",page)
  }
  
  const fetchProData= async ()=>{
    const response =await axios(`http://localhost:5000/products?&page=${page}`);
    console.log("data",response)
    setData(response.data.data)
    console.log("ddd",response.data.data)
  };
  useEffect(() => {
    fetchProData();
  },[page]);

 
  let itemCount = 0;


  const cardRows:any[] = [];
  let cardRow:any[] = [];

  
  const productDetail=(product:any)=>{
    console.log("Product",product);
    setProduct(product);
    setPicture(product.productImage);
    navigate(`/productDetail/${product.id}`);
  }

 

  data.forEach((product:any)=> {
    const links = [];
    links.push({name: "Product Details", href:"#", action: ()=>productDetail(product) });
    links.push({name: "Buy", href:"#", action: ()=>addToCart(product)});
    links.push({name: "offer", href:"#"});
   
    itemCount++;
    const cardView = <CardStand id={product ? product.id : ''}  title={ product ? product.productName : ''} 
                  links={links} 
                  description={ product ? product.productDescription:''}
                  picture={product.productImage} 
                  price={product? product.price:''} productMaterial={product? product.productMaterial:''} ></CardStand>;
    // const cardView = <Card key={product['id']} style={{margin:'3px'}}>
    //                   <CardTitle>{product['productName']}</CardTitle>
    //                   <CardTitle>{product['id']}</CardTitle>
    //                   <ListGroup className="list-group-flush">
    //                    <ListGroup.Item><img style={{'width':"100px",'height':"100px"}} alt="" src={product['productImage']}/>  </ListGroup.Item>
    //                    <ListGroup.Item>{product['productDescription']}</ListGroup.Item>
    //                   </ListGroup> 
    //                   <CardBody>
    //                     <Card.Link href="#" onClick={()=>productDetail(product)}>Product Detail</Card.Link>
    //                     <Card.Link onClick={()=>addToCart(product)} href="#">Buy</Card.Link>
    //                   </CardBody>

    //                   <CardFooter><button className='primary'>${product['price']}</button></CardFooter>
    //                 </Card>;
      itemCount % 4 !== 0 ? (cardRow.push(cardView)) : (cardRow.push(cardView) && cardRows.push([...cardRow]) && (cardRow = []));
  });
  // cardRow.length !== 0;
  // cardRows.push(cardRow);  

  return (
    <div>
      {
        cardRows.map((row)=> {
          return <div style={{display:'inline-flex'}}>
            {row}
          </div>
        })
        
      }
      <div style={{display:'inline-flex',marginTop:'15px'}}>
        <button onClick={()=>changePage(page, -1)} disabled={page===0} >back</button>
        <button>{page}</button>
        <button onClick={()=>changePage(page, 1)} disabled={page===7}>forward</button>
      </div>
    </div>
    
  )
 
}
