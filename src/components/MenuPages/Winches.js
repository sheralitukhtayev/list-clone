import React from 'react'
import style from "styled-components"

function Winches() {
  return (
    <>
        <HeadTitle> 
            <h1>
                Лебедки для электрических лифтов
            </h1>
        </HeadTitle>
        <Content>
            <p>
                Лебедка — основной узел лифта, который производит подъем и спуск кабины и противовеса. Электродвигатель и редуктор лебедки передают энергию от мотора к канатоведущему шкиву.
            </p>
            <h4>
                Производители
            </h4>
            <AllImage>
            <div>
                <img src="	https://citylift.ru/wp-content/uploads/logo-ziehl-abegg.png" alt="" />
                <p>
                    Ziehl-Abegg (Германия)
                </p>
            </div>
            <div>
                <img src="	https://citylift.ru/wp-content/uploads/logo-montanari.png" alt="" />
                <p>
                    Montanari (Италия)
                </p>
            </div>
            <div>
                <img src="	https://citylift.ru/wp-content/uploads/logo-lafert.png" alt="" />
                <p>
                    Lafert (Италия)
                </p>
            </div>
            <div>
                <img src="	https://citylift.ru/wp-content/uploads/kinetek-logo.jpg" alt="" />
                <p>
                    Kinetek (КНР)
                </p>
            </div>
            <div>
                <img src="https://citylift.ru/wp-content/uploads/monadrive-logo.jpg" alt="" />
                <p>
                    Monadrive (КНР)
                </p>
            </div>
            </AllImage>

        </Content>
    </>
  )
}

export default Winches

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
    margin: 0 auto;
    padding: 2em 0;
    width: 70vw;
    display: flex;
    flex-direction: column;

        h4 {
            text-align: center;
            margin: 1em 0;
            font-weight: 400;
            color: rgb(80, 80, 80);
        }

    
        p{
            font-size: 0.55em;
            color: rgb(80, 80, 80);
            line-height: 1.8em;
        }
`

const AllImage = style.div`
        display: flex;
        flex-direction: row;
        align-item: center;
        text-align: center;
        justify-content: space-between;

        div {
            width: 18%;

            img {
                width: 80%;
            }
        }

`