import React from 'react'
import Button from './Button'

const ButtonList = () => {

  const btnList = [
    "All",
    "Live",
    "Travelling",
    "Playlists",
    "Plants",
    "CSS",
    "HTML",
    "Javascript",
    "Animation",
    "Cooking",
    "Asian",
    "News"
  ];


  return (
    <div className='flex'>
    {btnList.map((btn, index) => (
      <Button key={index} name={btn} />
    ))}
    
    </div>
  )
}

export default ButtonList
