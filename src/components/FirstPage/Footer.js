import React from 'react'
import style from 'styled-components'
import { GoLocation } from "react-icons/go";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMessage } from "react-icons/md";
import { TbClock } from "react-icons/tb";

function Footer() {
  return (
    <Footerr>
        <More>
            <img src="	https://citylift.ru/wp-content/uploads/mobile-logo.png" alt="" />
            <p>
                Мы производим уникальные энергосберегающие лифты по европейским технологиям.
            </p>
            <button>Подробнее</button>
        </More>
        <Contact>
            <h4>КОНТАКТЫ:</h4>
            <ul>
                <li>
                    <GoLocation />
                    <a href="#">
                        Московская область, г. Дзержинский, ул. Карьер Зил, д. 6
                    </a>
                </li>
                <li>
                    <BsTelephone />
                    <a href="#">
                        +7 (495) 550-53-53
                    </a>
                </li>
                <li>
                    <MdOutlineMessage />
                    <a href="#">
                        info@citylift.ru
                    </a>
                </li>
                <li>
                    <MdOutlineMessage />
                    <a href="#">
                        citylift@mail.ru
                    </a>
                </li>
                <li>
                    <TbClock />
                    <a href="#">
                        Понедельник - пятница: 9:00 - 17:00
                    </a>
                </li>
            </ul>
        </Contact>
        <Map>
            <h4>ПОСТРОИТЬ МАРШРУТ:</h4>
        </Map>
    </Footerr>
  )
}

export default Footer

const Footerr = style.div `
    background: rgb(30, 30, 30);
    color: #c1c1c1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    padding: 3em 0;

    h4 {
        color: rgb(62, 181, 240); 
        font-size: 0.7em;
        font-weight: 600;
    }

`

const More = style.div `
    text-align: left;
    margin-left: 5em;
    width: 28%;

    img {
        width: 8em;
    }

    p {
        color: rgb(51, 51, 51);
        font-size: 0.6em;
        margin: 1em 0;
    }

    button {
        padding: 0.5em 2em;
        background-color: rgb(62, 181, 240); 
        border: none;   
    }
`

const Contact = style.div `
    width: 28%;
    display: flex;
    flex-direction: column;
    align-items: left;
    text-align: left;

    ul li {
        text-align: left;
    }

    ul li a{
        color: gray;
        font-weight: 500;
        font-size: 0.5em;
    }
`

const Map = style.div`
    width: 28%; 
` 