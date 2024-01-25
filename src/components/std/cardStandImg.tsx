import React from 'react'

export function CardStandImg(props:any) {
    const{picture}=props;
    console.log('xxxxx', picture)
  return (
    <img src={picture}/>
  )
}
