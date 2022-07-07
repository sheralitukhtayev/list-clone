import React from 'react'
import style from "styled-components"

function Equipment() {
  return (
    <>
        <HeaderTitle>
            <h1>
                Оборудование
            </h1>
        </HeaderTitle>
        <Content>
            <h3>
                Основные элементы лифта
            </h3>
            <ul>
                <li>
                    <span>Кабина</span> — помещение в котором во время движения лифа перемещаются пассажиры и грузы;
                </li>
                <li>
                    <span>Шахта</span> лифта — пространство внутри которого перемещается кабина лифта. Внутри шахты в зависимости от типа лифта могут находится противовес, силовая установка и станция управления;
                </li>
                <li>
                    <span>Машинное</span> отделение — отдельное помещение с доступом только для специалистов, внутри которого находятся силовое оборудование и станция управления;
                </li>
                <li>
                    <span>Привод</span> — электродвигатель и шкив, который приводит в действие канаты, присоединенные к противовесу и раме кабины;
                </li>
                <li>
                    <span>Направляющие</span> — жесткие элементы, обеспечивающие движение рамы кабины вместе с самой кабиной;
                </li>
                <li>
                    <span>Рама кабины</span> — металлоконструкция, которая поддерживая кабину движется по направляющим;
                </li>
                <li>
                    <span>Противовес</span> — элемент уравновешивающий кабину, обеспечивая натяжение канатов к шкиву привода;
                </li>
                <li>
                    <span>Система управления</span> — комплект электрооборудования, которое контролирует перемещение лифта;
                </li>
                <li>
                    <span>Гидроцилиндр</span> — применяется только в гидравлических лифтах, состоит из поршня и цилиндра, которые обеспечивают его перемещение.
                </li>
            </ul>
            <p>
                Только качественные комплектующие для производства наших лифтов (<span>ZiehlAbegg</span> – Германия, <span>HYDRONIC LIFT</span> – Италия, <span>GMV</span> – Италия, <span>WITTUR</span> — Германия, <span>AXEL</span> – Италия, <span>VEGA</span> — Италия и др.). Грузовые платформы фирмы <span>HIDRAL</span> — Испания.
            </p>
            <h3>
                При производстве наших лифтов применяем компоненты зарубежных фирм
            </h3>
            <Tool>
                    <Equip>
                        <img src="	https://citylift.ru/wp-content/uploads/winches.png" alt="" />
                        <h5>Лебедки</h5>
                    </Equip>
                    <Equip>
                        <img src=" https://citylift.ru/wp-content/uploads/gydr.png" alt="" />
                        <h5>Гидроагрегаты</h5>
                    </Equip>
                    <Equip>
                        <img src="	https://citylift.ru/wp-content/uploads/doors.jpg" alt="" />
                        <h5>Приводы дверей</h5>
                    </Equip>
                    <Equip>
                        <img src="	https://citylift.ru/wp-content/uploads/electr.png" alt="" />
                        <h5>Системы управления</h5>
                    </Equip>
            </Tool>
        </Content>
    </>
  )
}

export default Equipment

const HeaderTitle = style.div `
    background-color: rgb(127, 125, 123);
    color: #fff;
    text-align: center;
    padding: 1em 0;

    h1{
        font-size: 1.5em;
        font-weight: 400;
    }
`

const Content = style.div `
    padding: 2em 0;
    width: 60vw;
    margin: 0 auto;


    h3{
        color: rgb(60, 60, 60);
        font-weight: 500;
        text-align: center;
    }

    ul li {
        font-size: 0.6em;
        color: rgb(60, 60, 60);
        line-height: 2em;
        list-style-type: circle;
    }

    ul li span {
        font-weight: 600;
    }

    p {
        margin: 1em 0;
        font-size: 0.6em;
        color: rgb(60, 60, 60);
        line-height: 2em;

        span {
            font-weight: 600;
        }
    }
`

const Tool = style.div`
    display: flex;
    justify-content: space-between;

`

const Equip = style.div`
    width: 22%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    align-items: center;

    img {
       width: 100%;
    }

`