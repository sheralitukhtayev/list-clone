import React from 'react'
import style from 'styled-components'

function Mounting() {
  return (
    <>  
        <HeadTitle>
            <h1>
                Монтаж
            </h1>
        </HeadTitle>
        <Content>
            <img src="https://citylift.ru/wp-content/uploads/mounting-main.jpg" alt="" />
            <h3>
                Монтаж по всей России
            </h3>
            <p>
                Профессиональные пусконаладчики и монтажники в кратчайшие сроки смонтируют, настроят и запустят лифтовое оборудование. Также наши региональные представители по всей России, готовы оказать услуги по всем видам работ в соответствии с требованиями стандартов и сроков.
            </p>
        </Content>
    </> 
  )
}

export default Mounting

const HeadTitle = style.div `
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
    width: 70vw;
    margin: 0  auto;
    padding: 2em 0;
    color: rgb(70, 70, 70);

    img {
        width: 100%;
    }

    h3{
        font-weight: 400;
        text-align: center;
        margin: 1em 0;
        font-size: 2em;
    }

    p {
        font-size: 1.2em;
        text-align: center;
    }


`