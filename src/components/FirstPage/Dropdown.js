import React , { useState } from 'react'
import {serviceDropdown} from './NavItems'
import { Link } from "react-router-dom";
import './Dropdown.css'

function Dropdown() {
    return (
    <>  
        <ul className="services-submenu">
            {serviceDropdown.map(item => {
                return (
                    <li key={item.id}>
                        <Link 
                        exact to={item.path} 
                        className={item.cName}> 
                            {item.title}
                        </Link>
                    </li>
                )
            })}
        </ul>
    </>
  )
}

export default Dropdown