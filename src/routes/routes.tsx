import * as React from 'react';
import { DisplayComponet } from '../components/routeOutletComponent/displayComponet/displayComponet';
import { UsersComponent } from '../components/routeOutletComponent/menuPageComponet/userComponet/userComponet';
import { AboutComponent } from '../components/routeOutletComponent/menuPageComponet/aboutComponet/aboutComponet';
import { ContactComponent } from '../components/routeOutletComponent/menuPageComponet/contactComponet/contactComponet';
import { ProductComponet } from '../components/routeOutletComponent/menuPageComponet/productComponet/productsListComponet';
import { Detail } from '../components/routeOutletComponent/menuPageComponet/productComponet/productDetailComponet';
import {Cart} from '../components/routeOutletComponent/cart/cart'
import { SignIn } from '../components/routeOutletComponent/signIn/signIn';


export default [
    {
        label: "Home",
        path: "/",
        component: <DisplayComponet />,
        showInMenu:true,
    },
    {
        label: "User",
        path: "users/*",
        component: <UsersComponent/>,
        showInMenu:true,
    },
    {
        label: "Products",
        path: "products/*",
        component: <ProductComponet/>,
        showInMenu:true,
    },  
    {
        label: "About",
        path: "about",
        component: <AboutComponent/>,
        showInMenu:true,
    },
    {
        label: "Contact",
        path: "contact",
        component: <ContactComponent/>,
        showInMenu:true,
    },
    {
        label: "productDetail",
        path: "productDetail/:id",
        component: <Detail/>,
        showInMenu:true,
    },
    {
        label: "cart",
        path: "cart/",
        component: <Cart/>,
        showInMenu:true,
    },
    {
        label: "SignIn",
        path: "SignIn/",
        component: <SignIn/>,
        showInMenu:true,
    }
];