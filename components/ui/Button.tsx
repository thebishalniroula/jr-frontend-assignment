import React from 'react'
type ButtonPropsType = {
    children:React.ReactNode
    className?:string
    onClick?:(e:React.SyntheticEvent)=>{}
}

const Button = ({children, className, onClick}:ButtonPropsType) => {
  return (
    <button className={`py-2 px-4 text-center justify-center transition-all items-center rounded-md inline-flex text-sm whitespace-nowrap bg-blue-500 text-white hover:bg-blue-600 hover:text-white ${className}`}
            onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
