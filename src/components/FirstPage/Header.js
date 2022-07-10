import React, { useState } from 'react'
import style from 'styled-components'
import { BsTelephoneFill } from "react-icons/bs";
import { FcDocument } from "react-icons/fc"
import { FaMoneyBillWave, FaHandshake, FaCalendarCheck, FaRegLightbulb } from "react-icons/fa"
import { HiPencilAlt } from "react-icons/hi"
import { TbRocket } from "react-icons/tb"
import { IoMdSettings } from "react-icons/io";

function Header() {
  return (
    <Nav>
        <Picture> 
          <PictureText>
            <h1>
              ПРОИЗВОДСТВО И МОНТАЖ ЛИФТОВОГО ОБОРУДОВАНИЯ
            </h1>
            <h4>
              Дизайнерские, инновационные пассажирские
              и грузовые лифты от производителя
            </h4>
          </PictureText>
        </Picture>
        <BlueText>
          <h1>УНИКАЛЬНЫЕ РОССИЙСКИЕ ЛИФТЫ ПО ЕВРОПЕЙСКОЙ ТЕХНОЛОГИИ</h1>
          <button>
            <a href="#">
              ЗАКАЗАТЬ ЛИФТ
            </a>
          </button>
        </BlueText>
        <ProfessionalLift>
          <h3>
            Профессионалы в лифтовом производстве
          </h3>
          <Line></Line>
          <p>
            Компания <span>CITYLIFT</span> основана в 2007 году и с тех пор в ряду лидеров отрасли производителей энергосберегающих грузовых и пассажирских лифтов на территории России и стран СНГ. Завод находится в 5 км от Москвы в городе Дзержинский. Используя современные станки и оборудование, итальянские технологии и качественные комплектующие, специалисты компании изготавливают надежные лифты и подъемники, по ценам в 1.5 – 2 раза ниже зарубежных аналогов. Сотрудничество с <span>CITYLIFT</span> – выгодно и надежно.
          </p>
        </ProfessionalLift>
        <HowWork>
          <h3>
            Как мы работаем
          </h3>
          <Line></Line>
          <HoverChange>
            <Telephone>
              <BsTelephoneFill />
              <h3>
                Получение заявки
              </h3>
            </Telephone>
            <Document>
              <FcDocument />
              <h3>
                Оформление документов в офисе
              </h3>
            </Document>
            <Money>
              <FaMoneyBillWave />
              <h3>
                Оплата разработки проекта
              </h3>
            </Money>
            <Pencil>
              <HiPencilAlt />
              <h3>
                Разработка проекта специалистами
              </h3>
            </Pencil>
            <Rocket>
              <TbRocket />
              <h3>
                Запуск в производство
              </h3>
            </Rocket>
          </HoverChange>
        </HowWork>
        <OurAdvantage>
          <h3>Наши преимущества</h3>
          <Line></Line>
          <p>Компания <span>CITYLIFT</span> разрабатывает и производит лифтовое оборудование используя основные узлы ведущих европейских производителей</p>
          <Data>
            <Condition>
              <FaHandshake />
              <h3>
                Выгодные условия
              </h3>
              <littleLine></littleLine>
              <p>
                К каждому заказу подходим индивидуально. Учитывая Ваши финансовые возможности и пожелания – подберем оптимальный вариант на выгодных условиях!
              </p>
            </Condition>
            <Condition>
              <IoMdSettings />
              <h3>
              Наивысшее качество
              </h3>
              <littleLine></littleLine>
              <p>
                Работы выполняются только высококвалифицированными специалистами. Используем только качественное европейское оборудование.
              </p>
            </Condition>
            <Condition>
              <FaCalendarCheck />
              <h3>
                Реальные сроки
              </h3>
              <littleLine></littleLine>
              <p>
                Мы ценим время каждого клиента, поэтому всегда соблюдаем согласованные сроки доставки и монтажа.
              </p>
            </Condition>
            <Condition>
              <FaRegLightbulb />
              <h3>
                Креативные решения
              </h3>
              <littleLine></littleLine>
              <p>
                Преимущественно во всех объектах используем безредукторные лебедки с частотным преобразователем, что дает дополнительную экономию в 1.5 раза в процессе эксплуатации
              </p>
            </Condition>
          </Data>
        </OurAdvantage>
        <Trust>
          <h3>
            Клиенты, которые нам доверяют
          </h3>
          <Line></Line>
          <p>
            Клиенты ООО ПО «СитиЛифт» – это собственники зданий, строительные компании, генеральные подрядчики. Мы реализовали множество проектов для компаний из различных сегментов бизнеса. Вот некоторые из них:
          </p>
          <Images>
            <Image>
              <img src="	https://citylift.ru/wp-content/uploads/soyuzliftmontazh-yug.png" alt="" />
              <p>ЗАО «Союзлифтмонтаж-Юг»</p>
            </Image>
            <Image>
              <img src=" 	https://citylift.ru/wp-content/uploads/minfin.png " alt="" />
              <p>Министерство финансов Российской Федерации</p>
            </Image>
            <Image>
              <img src=" 	https://citylift.ru/wp-content/uploads/kontaktor.png " alt="" />
              <p>ООО «Контактор»</p>
            </Image>
            <Image>
              <img src="  https://citylift.ru/wp-content/uploads/prefektura-sao.png " alt="" />
              <p>Префектура САО города Москвы</p>
            </Image>
            <Image>
              <img src="	https://citylift.ru/wp-content/uploads/rzd.png" alt="" />
              <p>ОАО «РЖД»</p>
            </Image>
            <Image>
              <img src="	https://citylift.ru/wp-content/uploads/rusal.png" alt="" />
              <p>Объединённая компания «РУСАЛ»</p>
            </Image>
          </Images>
          <Images>
            <Image>
              <img src="	https://citylift.ru/wp-content/uploads/gfs.png" alt="" />
              <p>Государственная фельдъегерская служба Российской Федерации</p>
            </Image>
            <Image>
              <img src=" 	https://citylift.ru/wp-content/uploads/vertikal.png " alt="" />
              <p>ООО «Вертикаль»</p>
            </Image>
            <Image>
              <img src=" 	https://citylift.ru/wp-content/uploads/misk.png " alt="" />
              <p>ОАО «МИСК»</p>
            </Image>
            <Image>
              <img src="  	https://citylift.ru/wp-content/uploads/gosarhiv.png " alt="" />
              <p>Государственная архивная служба Российской Федерации</p>
            </Image>
            <Image>
              <img src="https://citylift.ru/wp-content/uploads/baltlift.png" alt="" />
              <p>ООО «Балтлифт»</p>
            </Image>
            <Image>
              <img src="https://citylift.ru/wp-content/uploads/belg-slm.png" alt="" />
              <p>ООО «Белгород СоюзлифтМонтаж»</p>
            </Image>
          </Images>
          <Images>
            <Image>
              <img src="https://citylift.ru/wp-content/uploads/liftovik.png" alt="" />
              <p>ООО «Лифтовик»</p>
            </Image>
            <Image>
              <img src=" https://citylift.ru/wp-content/uploads/uks-b.png " alt="" />
              <p>ГКУ УКС Республики Башкортостан </p>
            </Image>
            <Image>
              <img src=" 	https://citylift.ru/wp-content/uploads/mostliftstroy.png " alt="" />
              <p>ООО «Мостлифтстрой»</p>
            </Image>
            <Image>
              <img src="	https://citylift.ru/wp-content/uploads/morf.png" alt="" />
              <p>Министерство обороны Российской Федерации</p>
            </Image>
            <Image>
              <img src="	https://citylift.ru/wp-content/uploads/ao-gk-eks.png" alt="" />
              <p>АО “ГК “ЕКС”</p>
            </Image>
            <Image>
              <img src="	https://citylift.ru/wp-content/uploads/rpc.png" alt="" />
              <p>РПЦ</p>
            </Image>
          </Images>
        </Trust>
        <Sertificate>
          <h3>
            Сертификаты соответствия
          </h3>
          <Line></Line>
          <Lift>
            <Gydral>
              <h3>
                Гидравлические лифты
              </h3>
              <img src="	https://citylift.ru/wp-content/uploads/sert-gidr-1200x843.jpg" />
            </Gydral>
            <Electr>
              <h3>
                Электрические лифты
              </h3>
              <img src="https://citylift.ru/wp-content/uploads/sert-electr-1200x843.jpg " alt="" />
            </Electr>
          </Lift>
          <p>
              Наша продукция соответствует действующим стандартам качества и надежности, что подтверждено действующим сертификатом ГОСТ ISO 9001-2011 Системы менеджмента качества. Компания CITYLIFT является членом некоммерческого партнерства СРО «Российское лифтовое объединение», имеет все соответствующие сертификаты и разрешения на применение выпускаемой лифтовой продукции.
          </p>
        </Sertificate>
        <Question>
          <First>
            <h1>Остались вопросы?</h1>
            <Line></Line>
            <p>Мы будем рады с Вами пообщаться и ответить на любые вопросы. Свяжитесь с нами любым удобным способом.</p>
          </First>
          <Second>
            <button>Задад вопрос</button>
            <p>Напишите нам и мы ответим в течении 15 минут.</p>
          </Second>
        </Question>
    </Nav> 
  )
}

export default Header

const Nav = style.div `
  display: flex;
  flex-direction: column;


`

const NavTop = style.div `
    top: 0;
    left: 0;
    right: 0;
    display: relative;
    background-color: rgb(62, 181, 240);
    color: rgb(242, 236, 246);
    
    p {
        font-size: 0.60em;
        right: 0;
        text-align: right;
        padding: 0.5em 3em;
    }
`

const Picture = style.div `
  height: 80wh;

  &:before {
    background: url("https://citylift.ru/wp-content/uploads/home-01.jpg") center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    max-width: 100%;
    height: 100vh;
    width: 100%;
  }
`

const PictureText = style.div `
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin: 30vh auto;
  width: 50vw;

    h1 {
      font-size: 3.4em;
      letter-spacing: 0.05em;
      margin-bottom: 0.3em;
      line-height: 1.6em;
    }

    h4 {
      width: 30vw;
      background-color: rgba(0, 0, 0, 0.3);
      color: white;
      font-weight: 500;
      line-height: 1.5em;
      letter-spacing: 0.06em;
      font-size: 1.55em;
    }


`
const BlueText = style.div `
  margin-top: -4em;
  background-color: rgb(62, 181, 240);
  padding: 3em 0;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;

  h1 {
    font-size: 1.7em;
    word-spacing: 0.3em;
    width: 70vw;
    color: rgb(51, 51, 51);
    font-weight: 500;
  }

  button {
    background-color: rgb(51, 51, 51);
    color: #fff;
    padding: 0.6em 2em;
    border: 1.5px solid #fff;
    position: absolute;
    margin-top: 4.5em;

    a {
      color: #fff;
      font-size: 1.4em;
      letter-spacing: 0.2em;
      font-weight: 500;
    }
  }

`

const ProfessionalLift = style.div `
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  width: 80vw;
  padding: 2.5em 0;
  margin: 0 auto;

  h3{
    font-weight: 500;
    font-size: 2em;
    color: rgb(51, 51, 51);
  }

  p {
    color: rgb(51, 51, 51);
    font-size: 1.2em;
    line-height: 1.7em;

    span {
      font-weight: 600;
    }
  }

`

const Line = style.div `
  height: 0.15em;
  width: 12em;
  background-color: rgb(62, 181, 240);
  margin: 1.5em 0;

`

const HowWork = style.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center
  width: 80vw;

  h3 {
    font-size: 2em;
    font-weight: 300;
  }

`

const HoverChange = style.div `
  display: flex;
  justify-content: space-between;
  text-align: center;
  width: 80vw;

`

const Telephone = style.div`
  background-color: rgb(245, 245, 245);
  width: 14vw;
  padding: 5em 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-radius: 0.5em;
  margin: 4em 0;


  h3 {
    color: rgb(51, 51, 51);
    font-weight: 300;
    font-size: 2.5em;
    margin: 0.5em 0;
  }

`
const Document = style(Telephone)`

`

const Money = style(Telephone)`

`

const Pencil = style(Telephone)`

`

const Rocket = style(Telephone)`

`

const OurAdvantage = style.div`
  background-color: rgb(245, 245, 245);
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  padding: 3em 0;

  h3 {
    color: rgb(51, 51, 51);
    font-weight: 400;
    font-size: 2.2em;
  }

  p {
    font-size: 1em;
    color: rgb(51, 51, 51);

    span {
      font-weight: 600;
    }
  }

`

const Data = style.div `
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 70vw;
  margin: 3em 0;
`
const Condition = style.div `
  width: 20%;
  display: flex;
  flex-direction : column;
  align-items: center;
  text-align: center;


  h3 {
    font-size: 1.6em;
    font-weight: 100;
    color: rgb(61, 61, 61);
    transition: all 150ms;
    margin: 1em 0;

  }

  h3:hover {
    color: rgb(62, 181, 240);
  }

  p {
    text-align: center;
    color: rgb(51, 51, 51);
    font-size: 1.1em;
    word-spacing: 0.5em;
  }
`

const Trust = style.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 3em 0;
  width: 60vw;
  margin: 0 auto;

  h3 {
    color: rgb(51, 51, 51);
    font-weight: 500;
    font-size: 2em;
  }

  p {
    font-size: 1.2em;
    color: rgb(51, 51, 51);
    font-weight: 300;
    line-height: 1.5em;
    margin: 1.5em 0;
  }

`

const Images = style.div `
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 65vw;

`

const Image = style.div `
  padding: 1em;
  width: 10vw;

  img {
    width: 100%;
  }

  p {
    font-size: 1em;
    font-weight: 600;
  }

`

const Sertificate = style.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 2em 0;

  h3 {
    color: rgb(51, 51, 51);
    font-weight: 500;
    font-size: 2em;
  }

  p {
    width: 67vw;
    font-size: 1.1em;
    text-align: left;
  }

`

const Lift = style.div`
  width: 70vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;



`

const Gydral = style.div `

  h3{
    font-size: 2em;
    margin: 0.5em 0;
  }
   
  img {
    width: 95%;
  }

  p {
    font-size: 3em;
  }
`

const Electr = style(Gydral) `


`

const Question = style.div `
  background-image: url("https://citylift.ru/wp-content/uploads/home-4322555.jpg");
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size:cover;

  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  color: rgb(249, 249,249);
  justify-content: space-around;
`

const First = style.div ` 
  padding: 5em 0;
  width: 30%;
  text-align: left;

  h1{
    font-size: 3em;
    font-weight: 400;
  }
  p {
    font-size: 1em;
    word-spacing: 0.6em;
  }

`

const Second = style.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  button {
    padding: 1em 2em;
    color: rgb(51, 51, 51);
    background-color: rgb(62, 181, 240);
    border: none;
    margin: 1em 0;
    font-size: 1em;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }
   
  p{ 
    font-size: 1em; 
   }

`