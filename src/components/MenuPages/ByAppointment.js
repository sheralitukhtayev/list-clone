import React from 'react'
import style from 'styled-components'


function ByAppointment() {
  return (
    <>
        <HeadTitle>
            <h1>
                Типы лифтов и область их применения
            </h1>
        </HeadTitle>
        <Content>
            <h5>
                Компания СитиЛифт предлагает весь спектр лифтового оборудования, способного удовлетворить запросы различных групп покупателей:
            </h5>
            <li>
                Пассажирский лифт — предназначен в основном для подъема и спуска пассажиров.
            </li>
            <li>
                Грузопассажирский лифт — предназначен в основном для транспортировки грузов, которые обычно сопровождаются людьми.
            </li>
            <li>
                Малый грузовой лифт или Сервисный лифт — предназначен только для подъема и спуска грузов, у которого размеры кабины и дверей шахты предотвращают свободный доступ в нее человека.
            </li>
            <li>
                Грузовой лифт — предназначен для транспортирования грузов без сопровождения людьми, оборудованный наружным управлением.
            </li>
            <h5>
                Имеется группа лифтов ограниченного / специального назначения:
            </h5>
            <li>
                Судовые лифты — подъемное оборудование установлено на речных или морских кораблях, морских буровых установках или морских нефтяных платформах в целях транспортировки персонала, технического обслуживания оборудования и судовых складов.
            </li>
            <li>
                Тротуарный — лифт, платформа которого выходит из шахты через люк, расположенный в ее верхней части.
            </li>
            <li>
                Строительный — лифт временного применения, используемый на период проведения строительства зданий.
            </li>
            <li>
                Панорамный — лифт со стеклянной кабиной, позволяющей пассажирам осматривать окрестности во время движения кабины.
            </li>
            <li>
                Лифт для инвалидов — лифт для категории людей с ограниченными возможностями.
            </li>
        </Content>
    </>
  )
}

export default ByAppointment

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
    margin: 0 auto;
    width: 65vw;
    color: rgb(70, 70, 70);
    padding: 2em 0;

    h5 {
        font-size: 1.2em;
        color: rgb(50, 50, 50);
        margin: 1.5em 0;
    }

    li{
        list-style-type: circle;
        font-size: 1em;
        line-height: 1.8em;
    }

`