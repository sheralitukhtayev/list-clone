import React from 'react'
import style from "styled-components"

function LineUp() {
  return (
    <>
        <HeadTitle>
            <h1>
                Модельный ряд лифтов компании CITYLIFT
            </h1>
        </HeadTitle>
        <Content>
            <p>
                Компания <span>CITYLIFT</span> предлагает лифты с электрическим и гидравлическим приводом различного назначения:
            </p>
            <li>
                Пассажирские;
            </li>
            <li>
                Больничные;
            </li>
            <li>
                Лифты для оснащения офисов, торговых центров, загородных домов и пр.
            </li>
            <p>
                Лифты поставляются по всей территории России для установки их в стандартные шахты лифтов, а также в здания,  выполненные по индивидуальным проектам. <span>CITYLIFT</span> при проектировании и изготовлении лифтов учитывается индивидуальные особенности здания, шахты для размещения оборудования, оптимально используя шахтное пространство для установки лифта с наилучшими параметрами. Это особенно важно при установке лифта внутри лестничного пространства, в существующие здания или при замене устаревших моделей лифтов.
            </p>
            <p>
                В качестве основного привода для перемещения кабины лифта <span>CITYLIFT</span> применяет электрический безредукторный привод с частотным регулированием.
            </p>
            <Images>
                <div>
                    <img src="https://citylift.ru/wp-content/uploads/mod-pgl.jpg" alt="" />
                    <h3>
                        CITYLIFT «ПГЛ»
                    </h3>
                </div>
                <div>
                    <img src="https://citylift.ru/wp-content/uploads/mod-bmp.jpg" alt="" />
                    <h3>
                        CITYLIFT «БМП»
                    </h3>
                </div>
                <div>
                    <img src="	https://citylift.ru/wp-content/uploads/mod-vmp.jpg" alt="" />
                    <h3>
                        CITYLIFT «ВМП»
                    </h3>
                </div>
            </Images>
        </Content>
    </>
  )
}

export default LineUp

const HeadTitle = style.div`
    background-color: rgb(127, 125, 123);
    color: #fff;
    text-align: center;
    padding: 1em 0;

    h1{
        font-size: 1.5em;
        font-weight: 400;
    }

`

const Content = style.div`
    width: 70vw;
    margin: 0 auto;
    padding: 2em 0;
    color: rgb(70, 70, 70);

    p{
        margin: 1em 0;
        font-size: 0.6em;

        span {
            font-weight: 700;
        }
    }

    li {
        list-style-type: circle;
        margin: 0.5em 0;
        font-size: 0.6em;
    }
`

const Images = style.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: center;

    div {
        width: 30%;

        img{
            width: 100%;
            margin: 1em 0;
        }

        h3{
            font-weight: 300;
        }
    }

`