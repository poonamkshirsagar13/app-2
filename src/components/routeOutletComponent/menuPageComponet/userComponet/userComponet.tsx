import React from 'react';
import axios from 'axios';
import  { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserDetailsComponents } from './userDetailsComponents';
import './user.css'



export  function UsersComponent() {
  const navigate = useNavigate();
  const [data, setData]=useState({ data: []});
  const [page,setPage ]=useState(0);
  const [totalPage,settotalPage]=useState(7);
  const [userData,setUserData]=useState({});
  const [userPicture,setUserPicture]=useState('');


  const fetchUser = async () => {
    const response = await axios(`http://localhost:5000/persons?&page=${page}`);
    setData(response.data);
    console.log("data",response.data)
};
useEffect(()=>{
  fetchUser()
},[page])

const changePage = (page: number, value: number) => {
  setPage(page+value);
  console.log("number",page)
}
const details=(user:any)=>{
  console.log(user)
  setUserData(user)
  setUserPicture(user.picture);
}



  return (
    <>
    <div style={{display:'inline-flex'}} >
      <div style={{margin:'50px'}}>
        <table style={{ width: '18rem'}}>
            <thead>
              <tr style={{border:'1px solid black'}}>
                <td className='td'>ID</td>
                <td className='td'>FirstName</td>
                <td className='td'>LastName</td>
                <td className='td'>UserName</td>
                <td className='td'>Gender</td>
                <td className='td'>Details</td>
              </tr>
            </thead>
            <tbody >
                  {data.data.map((user)=> (
              <tr className='td' key={user['id']} style={{border:'1px solid black'}} >
                <td className='td'>{user['id']}</td>
                <td className='td'>{user['firstName']}</td>
                <td className='td'>{user['lastName']}</td>
                <td className='td'>{user['username']}</td>
                <td className='td'>{user['gender']}</td>
                <td className='td'onClick={()=>details(user)}><button>Details</button></td>
              </tr>
                ))}
            </tbody>
            <div style={{display:'inline-flex',marginTop:'15px'}}>
              <button onClick={()=>changePage(page, -1)} disabled={page===0} >back</button>
              <button>{page}</button>
              <button onClick={()=>changePage(page, 1)} disabled={page===7}>forward</button>
            </div>
            
        </table>
      </div>
      <div style={{margin:'50px'}}>
        <UserDetailsComponents user={userData} userPicture={userPicture}></UserDetailsComponents>
      </div>
    </div>
    </>
  )
 
}
