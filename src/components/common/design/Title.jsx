import React from "react"

export const TitleHeading = ({ title1, title2 }) => {
  return (
    <>
      <h2 className='text-3xl font-medium leading-10'>
        {title1} <br /> {title2}
      </h2>
    </>
  )
}
