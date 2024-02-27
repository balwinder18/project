import React from 'react'
import { AiFillPhone } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

const Footer = () => {
  return (
    <div className="footer">
        <div className='left'><AiFillPhone /> TOLL FREE 1800 2800 1234</div>
        <div className='middle'><FaFacebook /> www.facebook.com/cripumps</div>
        <div className='right'><TbWorldWww /> www.crigroups.com</div>
    </div>
  )
}

export default Footer;