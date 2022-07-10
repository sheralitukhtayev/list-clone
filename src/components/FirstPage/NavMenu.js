import React, { useState } from 'react'
import style from 'styled-components'
import { AiOutlineSearch } from 'react-icons/ai'
import { Link } from "react-router-dom"
import {navItems} from "./NavItems"
import Dropdown from "./Dropdown"

function NavMenu() {
  return (
    <Nav className={style.Nav}>
        <NavTop>
            <p>+7(495)550-53-53 | info@citylift.ru</p>
        </NavTop>
    <NavBar>
        <div>
        <Logo> 
            <Link exact to="/">
                <img src="/images/logo.png" alt="" />
            </Link>
        </Logo>
        <NavItems>
            <ul className="nav-items" >
                {navItems.map(item => {
                    return (
                        <li key={item.id} className={item.cName}>
                            <Link className="link" exact to={item.path}>{item.title}</Link>
                        </li>
                    ) 
                })}
            </ul>
        </NavItems>
        </div>
        <Dropdown />
    </NavBar>
</Nav> 
  ) 
}

export default NavMenu

const Nav = style.div `
    position: sticky;
    top: 0;

`

const NavTop = style.div `
    top: 0;
    left: 0;
    right: 0;
    display: relative;
    background-color: rgb(62, 181, 240);
    color: rgb(242, 236, 246);
    
    p {
        font-size: 0.8em;
        right: 0;
        text-align: right;
        padding: 0.1em 3em;
    }
`

const NavBar = style.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    border-bottom: 0.15em solid rgb(62, 181, 240);

    

    div{
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    width: 95vw;
    margin: 0 auto;
    justify-content: space-between;
    }


`

const Logo = style.div `
    padding-left: 2em;

    img {
        width: 15em;
    }
`

const NavItems = style.div `
    padding-right: 3em;
    display: flex;
    flex-direction: column;


    ul {
        width: 50vw;
        display: flex;
        flex-direction: row;
        align-item: center;
        text-align: center;
        justify-content: space-between;

        .nav-item{
            margin: 0em 1em;
            cursor: pointer;

            
            .link{
                font-size: 1em;
                color: #000;
                letter-spacing: 0.1em;
                transition: all 200ms;
            }

        }

        .link:hover {
            color: rgb(62, 181, 240);
        }
    }
`