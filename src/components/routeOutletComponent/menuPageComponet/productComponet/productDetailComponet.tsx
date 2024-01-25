import React, { useEffect,useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { CartContext } from '../../../../context/cart/cartContext';
import CardStand from '../../../std/cardStand';


export function Detail() {

  
  //Then inside your component
  const { id } = useParams();
  const [product,setProduct]=useState<any>({});
  const [picture, setPicture] = useState('');
  const {addToCart } = useContext<any>(CartContext);
  const {removeFromCart } = useContext<any>(CartContext);



  const fetchId = async (id?:string) => {
    const response = await axios(`http://localhost:5000/products/${id}`);
    console.log("data",response.data);
    setProduct(response.data);
    setPicture(response.data.productImage);
    console.log("picture",response.data.productImage)
  }
  console.log("id",id);
  useEffect(()=>{fetchId(id)}, [id]);
  const links = [];
  links.push({name: "Buy", href:"#",action: ()=>addToCart(product)});
  links.push({name: "Remove", href:"#", action: ()=>removeFromCart(product)});

  return (
    <>
     {/* <div>{id}</div>
     <div>
      { product ? <div>{product.productName}</div> : null }
      { product ? <div>{product.product}</div> : null }
     <button onClick={()=>addToCart(product)}> { product ? <div>${product.price}</div> : null }</button>
     </div> */}
     <CardStand title={ product ? product.productName : ''} 
     links={links} 
     description={ product ? product.productDescription:''} isProductDetails={true} 
     productMaterial={product? product.productMaterial:''} 
     picture={product.productImage}   price={product.price}  ></CardStand>
    </>
   
  )
}


