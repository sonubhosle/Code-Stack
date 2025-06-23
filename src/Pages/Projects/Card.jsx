import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineAccessTime } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { IoIosArrowRoundForward } from "react-icons/io";

const Card = () => {
  return (
    <div className='card'>
        <div className="poster">
            <img src={''} alt={''} />
            <div className="time"><MdOutlineAccessTime size={18}/> Duration</div>
        </div>
        <div className="info_bx">
        <div className="title">Title</div>
        <div className="location"><CiLocationOn size={18}/> Location</div>
        <div className="btn_price_bx flex items-center">
            <Link>Love Demo <IoIosArrowRoundForward className='arrow_forword' size={22}/></Link>
        </div>
        </div>
    </div>
  )
}

export default Card