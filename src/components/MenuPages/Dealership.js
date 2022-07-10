import React from 'react'
import style from 'styled-components'

function Dealership() {
  return (
    <>
        <HeaderText>
            <h1>
                Дилерство
            </h1>
        </HeaderText>
        <Content>
            <Text>
                <p>
                    В рамках существующей стратегии развития бизнеса в России, приглашаем лифтовые организации к сотрудничеству по продаже и сервисному обслуживанию гидравлических лифтов и электрических лифтов без машинного отделения, на очень выгодных условиях!
                </p>
                <li>
                    Монтажные организации и управления
                </li>
                <li>
                    Дизайнеров и проектировщиков
                </li>
                <li>
                    Архитектурные мастерские и проектные бюро
                </li>
                <li>
                    Строительные компании, занимающиеся строительством коттеджных поселков, таунхаусов
                </li>
                <li>
                    Инвесторов, девелоперов и застройщиков
                </li>
                <li>
                    Всех, кто хочет добавить дому комфорта, презентабельности, эксклюзивности
                </li>
                <p>
                    Для подачи заявки, необходимо заполнить анкету. В ходе дальнейшего рассмотрения у компаний-заявителей запрашиваются бизнес-план по созданию дилерского центра <span>CITYLIFT</span> и дополнительные документы, касающиеся финансового и юридического статуса компании-заявителя.
                    Заявки от кандидатов рассматриваются в течении 5 (пяти) рабочих дней. В случае возникновения дополнительных вопросов, связанных с получением статуса официального дилера <span>CITYLIFT</span> в Вашем регионе, Вы можете задать их сотрудникам группы по развитию дилерской сети  <span>ООО ПО «СитиЛифт»</span> по тел.: <br /> <span>+7 (495) 550-53-53</span>
                </p>
            </Text>
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

export default Dealership

const HeaderText = style.div`
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
    margin: 0 auto;
    width: 70vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    line-height: 1.1em;

`

const Text = style.div`
    width: 33vw;
    font-size: 1em;
    line-height: 1.4em;
    color: rgb(100, 100, 100);
    font-weight: 300;
    
    p{
        margin: 1.5em 0 ;

        span {
            color: rgb(70, 70, 70);
            font-weight: 600;
        }
    }

    li  {
        list-style-type: circle;
    }

`

const Input = style.div`
    width: 33vw;
    display: flex;
    flex-direction: column;

    input{
        padding: 1.5em 1em;
        margin: 1em 0;
        font-size: 1em;
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
            font-size: 1.5em;
        }
    }

    p {
        font-size: 1em;
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