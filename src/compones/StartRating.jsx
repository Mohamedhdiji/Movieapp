import React from 'react'

const StartRating = ({rating,handelRating}) => {
  const stars=(rating)=>{
    var tab=[];
    for(let i=1;i<=5;i++){
      i<=rating?tab.push(<span style={{color:"gold",cursor:"pointer"}}onClick={()=>handelRating(i)}>★ </span>):tab.push(<span style={{color:"black",cursor:"pointer"}}onClick={()=>handelRating(i)}>★</span>)
    }
    return tab
  
  }
  return (
    <div>{
      stars(rating)}</div>
  )
}

export default StartRating