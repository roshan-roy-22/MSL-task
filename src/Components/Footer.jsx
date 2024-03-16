import React from 'react'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import CopyrightOutlinedIcon from '@mui/icons-material/CopyrightOutlined';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div className='bg-[#F8F9FA] py-5 mt-8'>
    <div className='flex justify-between mx-7'>
        <div>
          <Link to={'/'}> <ShoppingBagOutlinedIcon/> Brand</Link>
        </div>
        <div>
            <ul className='flex gap-4'>
                <li>Shop</li>
                <li>About</li>
                <li>Service</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
    <hr  className='my-3'/>
    <div className='items-center text-center'><h1><CopyrightOutlinedIcon/>2024 Brand </h1></div>
    </div>
  )
}

export default Footer