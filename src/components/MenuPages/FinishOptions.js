import React from 'react'
import style from "styled-components"

function FinishOptions() {
  return (
    <>
        <HeadTitle>
            <h1>
                Варианты отделки
            </h1>
        </HeadTitle>
        <Content>
            <img src="https://citylift.ru/wp-content/uploads/otdelka1-400x400.jpg" alt="" />
            <img src="	https://citylift.ru/wp-content/uploads/otdelka2-400x400.jpg" alt="" />
            <img src="	https://citylift.ru/wp-content/uploads/otdelka3-400x400.jpg" alt="" />
        </Content>
    </>
  )
}

export default FinishOptions

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
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto;
    width: 70vw;
    padding: 2em 0;
     
        img{
            width: 32.8%;
        }

`