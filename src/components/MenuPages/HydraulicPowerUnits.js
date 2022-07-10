import React from 'react'
import style from "styled-components"

function HydraulicPowerUnits() {
  return (
    <>
        <HeadTitle>
            <h1>
                Гидроагрегаты
            </h1>    
        </HeadTitle>
        <Content>
            <p>
                Гидроагрегат – управляемый источник гидравлической энергии потока рабочей жидкости с заданными силовыми и скоростными характеристиками. По своей сути – комплекс гидроустройств, смонтированных в общий блок. Гидроагрегат может располагаться на удалении от шахты лифта на 15-20 м в специальном закрываемом помещении небольших размеров. В связи с этим, гидравлический лифт не имеет специального машинного помещения, характерного для лифтов с электроприводом.
            </p>
            <h3>
                Производители
            </h3>
            <img src="https://citylift.ru/wp-content/uploads/logo-gmv.png" alt="" />            
        </Content>
    </>
  )
}

export default HydraulicPowerUnits

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
    display: flex;
    flex-direction: column;

    p  {
        color: rgb(70, 70, 70);
        font-size: 1.2em;
        line-height: 1.7em;
    }
     
    h3{
        color: rgb(60, 60, 60);
        font-weight: 400;
        text-align: center;
        margin: 1em 0;
        font-size: 2em;
    }

    img {
        margin: 0 auto;
        width: 12%;
    }

`