import React from 'react'

const Button = (props) => {
  return (
    <button type={props.type} className="bg-[#6CAEFF] text-white py-2 mb-4 rounded" >{props.nama}</button>
  )
}

export default Button