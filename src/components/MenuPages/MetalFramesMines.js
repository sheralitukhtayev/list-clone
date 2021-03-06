import React from 'react'
import style from "styled-components"

function MetalFramesMines() {
  return (
    <>
        <HeadTitle>
            <h1>
                Изготовление металлокаркасных шахт
            </h1>
        </HeadTitle>
        <Content>
            <div>
                <img src="	https://citylift.ru/wp-content/uploads/888766.jpg" alt="" />
                <p>
                    <span>Изготовление металлокаркасных шахт</span> – одна из специализаций компании <span>CITYLIFT</span>. Это сложный технологический процесс, но за годы работы мы накопили изрядный опыт, позволяющий нам решать любые задачи. В металлокаркасной шахте могут быть реализованы любые проекты с использованием любых доступных современных материалов. Шахты выполняются из металлов различных профилей. Наши дизайнеры и проектировщики разрабатывают любые конструкции. После чего мы в кратчайшие сроки производим и изготавливаем все возможные варианты шахт, а наши специалисты могут их смонтировать.
                </p>
            </div>
            <div>
                <p>
                    Производство и монтаж выполняются в соответствии с международными и российскими стандартами безопасности. В металлокаркасной шахте соблюдаются все технические правила, предъявляемые к работе действующим российским законодательством.
                    Полный спектр услуг по проектированию и монтажу конструкций включает также предварительную экспертизу проекта на предмет соответствия сертификатам безопасности, как международным, так российским. Наши эксперты и технические специалисты разрабатывают и тщательно подготавливают подробное техническое задание на установку подъемного механизма и всего подъемного оборудования в вашей металлокаркасной шахте.
                </p>
                <img src="https://citylift.ru/wp-content/uploads/88876.jpg" alt="" />
            </div>
        </Content>
    </>
  )
}

export default MetalFramesMines

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
    width: 80vw;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    div{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        // margin: 0.5em 0;
    }

    img{
        width: 49%;
    }
    p{
        width: 46%;
        font-size: 1.3em;
        color: rgb(80, 80, 80);
        line-height: 2em;
        padding-top: 1.5em;
    }


`