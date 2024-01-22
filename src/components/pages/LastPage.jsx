import React from 'react'

const LastPage = ({coverImg}) => {
    const coverImgStyle = {
            backgroundImage: `url(${coverImg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            minWidth: "100%",
            overflow: "hidden",
            backgroundColor : "transparent",
            boxShadow: "15px 0 15px -5px rgba(0,0,0,0.8)"
    }
  return (
    <div className='h-full' style={coverImgStyle}>
        <div className='h-full flex justify-center items-center'>

        </div>
    </div>
  )
}

export default LastPage