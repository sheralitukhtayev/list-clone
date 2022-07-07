import React from 'react'
import style from "styled-components"
import { TbMap2, TbClock, TbMessage } from "react-icons/tb";
import { BsTelephone } from "react-icons/bs";

function Contacts() {
  return (
    <>  
        <HeadTitle>
            <h1>
                Контакты
            </h1>
        </HeadTitle>
        <Content>
            <Title>
                <h3>
                    ООО Производственное объединение «СитиЛифт»
                </h3>
                <div>
                    <TbMap2 />
                    <p>
                        140093, Россия, Московская обл., г. Дзержинский, ул. Карьер ЗИЛ, д. 6
                    </p>
                </div>
                <div>
                    <TbClock />
                    <p>
                        Понедельник - пятница: с 9:00 до 17:00
                    </p>
                </div>
                <div>
                    <BsTelephone />
                    <p>
                        +7 (495) 550-53-53
                    </p>
                </div>
                <div>
                    <TbMessage />
                    <p>
                        info@citylift@mail
                    </p>
                </div>
                <div>
                    <TbMessage />
                    <p>
                        citylift@mail.ru
                    </p>
                </div>

            </Title>
            <Input>
                <input  type="text" placeholder="Ваше имя*" />
                <input  type="email" placeholder="E-mail*" />
                <input  type="number" placeholder="Телефон" />
                <input  type="text" placeholder="Тема обращени*" />
                <input  type="text" placeholder="Сообщение*" />
                <button>
                    <h4>ОТПРАВИТЬ</h4>
                </button>
                <p>
                    Нажимая кнопку <span>«Отправить»</span>, Вы соглашаетесь с <span>Политикой конфиденциальности</span>.
                </p>
            </Input>
        </Content>
    </>
  )
}

export default Contacts

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
    padding: 2em 0;
    width: 60vw;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

`

const Title = style.div`
    width: 30vw;

    h3{ 
        color: rgb(70, 70, 70);
        font-size: 0.8em;
        font-weight: 400;
        margin: 0.5em 0;
    }

    div {
        display: flex;
        align-items: center;
        margin: 1.5em 0;

        p{
            font-size: 0.6em;
            color: rgb(70, 70, 70);
            font-weight: 500;
            margin: 0 1em;
        }
    }

`

const Input = style.div`
    width: 30vw;
    display: flex;
    flex-direction: column;

    input{
        padding: 0.7em 1em;
        margin: 1em 0;
        font-size: 0.5em;
        color: rgb(40, 40, 40);
        border: 0.3px solid rgb(221, 221, 221);
        border-radius: 0.3em;
    }

    input:nth-child(5) {
        height: 6em;
    }

    input:hover {
        border: 0.3px solid rgba(62, 181, 240, 0.5);
    }
    
    input:active {
        border: 0.3px solid rgb(62, 181, 240);
    }

    button {
        width: 100%;
        padding: 0.5em 0;
        background-color: rgb(62, 181, 240);
        border: none;

        h4 {
            color: rgb(50, 50, 50);
            font-weight: 400;
            font-size: 0.7em;
        }
    }

    p {
        font-size: 0.48em;
        color: rgb(71, 71, 71);
        text-align: center;
        margin: 1em 0;

        span {
            font-weight: 600;
        }

        span:last-child {
            cursor: pointer;
        }
    }



`