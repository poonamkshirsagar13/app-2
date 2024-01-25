import React  from 'react'
import './headerComponet.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MenuComponet } from './menuComponet/menuComponet';
import { useNavigate } from 'react-router-dom';
import CartIcon from '../routeOutletComponent/cart/cartIcon';


export  function HeaderComponet() {
  const navigate = useNavigate();
  const SignIn=()=>{
    navigate(`/SignIn`)
  }
  return (
    <div className='header'>
      <div>
       headerComponet
      </div>
      <div>
        <div style={{width:'100%',display:'inline-flex'}} >
          <div style={{width:'15%',border: '1px solid red',margin:'5px'}}>CompanyLogo</div>
          <div style={{width:'50%',border: '1px solid green',margin:'5px'}}>
            <MenuComponet></MenuComponet>
          </div>
          <div style={{display:'inline-flex',width:'15%',border: '1px solid red',margin:'5px'}}>
            <div style={{margin:'5px'}}  onClick={()=>SignIn()}>SignIn</div>
            <div style={{margin:'5px'}}>
              <CartIcon></CartIcon>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}
