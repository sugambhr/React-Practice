import React from 'react'

function Card ({ username, btnText="Berries", img })  {
  return (

    // NOTE: This is a simple Card Section.
    <div className="w-60 flex justify-evenly flex-col rounded-xl bg-black min-h-[19rem] ">
    <div>
      <img
        src={img}
        alt="test"
        className="object-cover object-center rounded-t-xl"
      />
    </div>
    <div className="flex flex-col py-3 px-3 pb-10">
      <div className="flex justify-between ">
        
        <p>{username}</p>
        <p>{btnText}</p>
        
      </div>
      <div className="flex  justify-between">
        <p>#345</p>
        <p>0.01</p>
      </div>
    </div>
  </div>
  )
}

export default Card