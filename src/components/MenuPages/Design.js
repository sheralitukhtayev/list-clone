import React from 'react'
import style from "styled-components"

function Design() {
  return (
    <>
        <HeadTitle>
            <h1>
            Проектирование
            </h1>
        </HeadTitle>
        <Content>
            <img src="https://citylift.ru/wp-content/uploads/design-main.jpg" alt="" />
            <h3>
                Проектирование
            </h3>
            <p>
                Наши специалисты готовы спроектировать современный надежный лифт, нужной грузоподъемности и назначения. Сотрудничество максимально простое – клиент оформляет заявку, составляются необходимые документы, специалисты разрабатывают проект любой сложности, соответствующий всем требованиям заказчика. После его утверждения мы запускаем производство. Заказать лифт в коттедж, клинику, на теплоход или лифт для храма может частный клиент или организация – сотрудничество с нами в любом случае будет выгодным и удобным.
                Компания СитиЛифт выполняет полный комплекс работ, связанных с проектированием строительной части энергосберегающих лифтов:
            </p>
            <li>
                проекты замены лифтов любой сложности;
            </li>
            <li>
                проекты реконструкции строительной части для установки пассажирских лифтов;
            </li>
            <li>
                проекты приставных шахт; проекты вновь возводимой строительной части лифта;
            </li>
            <li>
                проекты объектов, в которых ранее не было предусмотрено использование подъемных механизмов;
            </li>
            <li>
                сдача инженерному центру под ключ.
            </li>
        </Content>
    </>
  )
}

export default Design

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
    width: 70vw;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 2em 0;

    h3 {
        font-size: 2em;
        font-weight: 400;
        color: rgb(80, 80, 80);
        text-align: center;
        margin: 1em 0;
    }

    p {
        font-size: 1.2em;
        color: rgb(80, 80, 80);
        line-height: 1.8em;
        padding-bottom: 1em;
    }

    li{
        font-size: 1em;
        color: rgb(70, 70, 70);
        list-style-type: circle;
        padding-left: 1em;
        padding: 0.5em 0 0.5em 1em;
    }

`