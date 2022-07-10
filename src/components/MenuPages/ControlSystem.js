import React from 'react'
import style from "styled-components"

function ControlSystem() {
  return (
    <>
        <HeadTitle>
            <h1>
                Системы управления, кнопки, LCD дисплеи для лифтов
            </h1>
        </HeadTitle>
        <Content>
            <p>
                Системы управления предназначены для легкого и интуитивно понятного управления движением лифта из кабины или этажной площадки. Все необходимые компоненты: панели управления, табло индикации, кнопки, вызывные посты и указатели этажности – отличаются простотой монтажа, надежностью и функциональностью.
            </p>
            <h3>
                Производители
            </h3>
            <Images>
                <img src="https://citylift.ru/wp-content/uploads/logo-vega.png" alt="" />
                <img src="https://citylift.ru/wp-content/uploads/logo-nidec.png" alt="" />
                <img src="https://citylift.ru/wp-content/uploads/logo-shindler.png" alt="" />
                <img src="https://citylift.ru/wp-content/uploads/logo-kleemann.png" alt="" />
            </Images>
        </Content>
    </>
  )
}

export default ControlSystem

const HeadTitle = style.div`
    background-color: rgb(127, 125, 123);
    color: #fff;
    text-align: center;
    padding: 1em 0;

    h1{
        font-size: 2em;
        font-weight: 400;
    }

`

const Content = style.div`
    padding: 2em 0;
    width: 70vw;
    margin: 0 auto;
    
    p  {
        color: rgb(70, 70, 70);
        font-size: 1.2em;
        line-height: 1.7em;
    }

    h3 {
        color: rgb(60, 60, 60);
        font-weight: 400;
        text-align: center;
        margin: 1em 0;
        font-size: 2em;
    }

`

const Images = style.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    img {
        border: 1px solid rgb(200, 200, 200);
        width: 23%;
        padding: 0.5em 3em;
        transition: all 500ms;
    }

    img:hover {
        box-shadow: 0 0 10px rgb(70, 70, 70);
    }
`