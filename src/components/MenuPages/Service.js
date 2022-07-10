import React from 'react'
import style from "styled-components"

function Service() {
  return (
    <>
        <HeaderTitle>
            <h1>
                Услуги
            </h1>
        </HeaderTitle>
        <Content>
            <FirstContent>
                <img src="	https://citylift.ru/wp-content/uploads/tehn.png" alt="" />
                <p>
                    Для обеспечения бесперебойной и безопасной работы Вашего лифта и оборудования, у нас есть все необходимые условия:
                    <br /><br />
                    <br /> постоянные мобильные бригады квалифицированных механиков
                    <br /> круглосуточная аварийная служба
                    <br /> большой запас расходных материалов
                    <br /> наличие диагностического оборудования.
                    <br /> <br /> Наша компания готова предложить Вам несколько типов контрактов в зависимости от состава предполагаемых услуг:
                </p>
            </FirstContent>
            <SecondContent>
                <p>
                    стандартное техническое обслуживание лифтов и другого лифтового оборудования
                    <br /> комплексное техническое обслуживание лифтов и лифтового оборудования
                    <br /> полное техническое обслуживание и эксплуатация лифтов и лифтового оборудования
                    <br /> <br /> Надёжность и срок службы лифтового оборудования зависит от качества технического обслуживания, поэтому мы уделяем огромное внимание квалификации обслуживающего персонала и качеству применяемых запасных частей и материалов.
                </p>
            </SecondContent>
        </Content>
    </>
  )
}

export default Service

const HeaderTitle = style.div `
    background-color: rgb(127, 125, 123);
    color: #fff;
    text-align: center;
    padding: 1em 0;

    h1{
        font-size: 2em;
        font-weight: 400;
    }

`

const Content = style.div `
    padding: 2em 0;

`

const FirstContent = style.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 70vw;
    margin: 0 auto;

    img {
        width: 15%;
    }

    p {
        width: 80%;
        font-size: 1em;
        color: rgb(60, 60, 60);
    }

`

const SecondContent = style.div `
    width: 70vw;
    margin: 0 auto;

    p {
        font-size: 1em;
        color: rgb(60, 60, 60);
    }

`