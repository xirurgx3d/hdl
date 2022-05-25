import { FC, useEffect, useRef, useState } from "react"
import cn from "classnames";
import Plan from "../Plan/Plan";
import { Link as Links, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const SetingModal: FC<any> = ({ hndl, page = 0 }) => {
  const [gopage, sepage] = useState(page)

  const myRef1 = useRef<any>(null)
  const executeScroll1 = () => myRef1.current.scrollIntoView()

  const myRef2 = useRef<any>(null)
  const executeScroll2 = () => myRef2.current.scrollIntoView()

  const myRef3 = useRef<any>(null)
  const executeScroll3 = () => myRef3.current.scrollIntoView()

  const myRef4 = useRef<any>(null)
  const executeScroll4 = () => myRef4.current.scrollIntoView()

  const myRef5 = useRef<any>(null)
  const executeScroll5 = () => myRef5.current.scrollIntoView()

  const myRef6 = useRef<any>(null)
  const executeScroll6 = () => myRef6.current.scrollIntoView()

  const CN1 = cn("seting_page-nav-item", { active: gopage == 0 || gopage == 1})
  const CN2 = cn("seting_page-nav-item", { active: gopage == 2 })
  const CN3 = cn("seting_page-nav-item", { active: gopage == 3 })
  const CN4 = cn("seting_page-nav-item", { active: gopage == 4 })
  const CN5 = cn("seting_page-nav-item", { active: gopage == 5 })
  const CN6 = cn("seting_page-nav-item", { active: gopage == 6})

  useEffect(() => {
    if (gopage == 0) {
      executeScroll1()
    }
    gopage == 1 && scroller.scrollTo('set1', {
      offset: -100, // Scrolls to element + 50 pixels down the page
    })
    gopage == 2 && scroller.scrollTo('set2', {
      offset: -100, // Scrolls to element + 50 pixels down the page
    })
    gopage == 3 && scroller.scrollTo('set3', {
      offset: -100, // Scrolls to element + 50 pixels down the page
    })
    gopage == 4 && scroller.scrollTo('set4', {
      offset: -100, // Scrolls to element + 50 pixels down the page
    })
    gopage == 5 && scroller.scrollTo('set5', {
      offset: -100, // Scrolls to element + 50 pixels down the page
    })
    gopage == 6 && scroller.scrollTo('set6', {
      offset: -100, // Scrolls to element + 50 pixels down the page
    })
  }, [gopage])

    type distanceObj = {
        title: string;
        timeDistance: string
    }

    const distanceObjects: distanceObj[] = [
        {
            title: 'до Объездной дороги',
            timeDistance: '3 минуты',
        },
        {
            title: 'до Трассы Таврида',
            timeDistance: '7 минут',
        },
        {
            title: 'до Центра города',
            timeDistance: '10 минут',
        },
        {
            title: 'до Алушты',
            timeDistance: '55 минут',
        },
        {
            title: 'до Ялты',
            timeDistance: '1ч 40 минут',
        },
        {
            title: 'до Севастополя',
            timeDistance: '1ч 20 минут',
        },
        {
            title: 'до Евпатории',
            timeDistance: '1 час',
        },
        {
            title: 'до Керченского моста',
            timeDistance: '2 часа 15 минут',
        },
    ]

    return (
        <div className='seting_page' ref={myRef1}>
            <div className="seting_page-over" onClick={() => hndl(false)}/>
            <div className="seting_page-con">
                <div className="container">
                    <div className='seting_page-title'>
                        Характеристики
                        <span>солнечного комфорта</span>
                        <img className='close' src='/assets/img/seting/close.png' onClick={() => hndl(false)}/>
                    </div>
                </div>
                <div className='seting_page-nav-box'>
                    <div className="container">
                        <div className='seting_page-nav'>
                            <div className={CN1} onClick={() => sepage(1)}>Архитектура и фасады</div>
                            <div className={CN2} onClick={() => sepage(2)}>Технология строительства</div>
                            <div className={CN3} onClick={() => sepage(3)}>Инфраструктура</div>
                            <div className={CN4} onClick={() => sepage(4)}>Общественные пространства</div>
                            <div className={CN5} onClick={() => sepage(5)}>Планировочные решения</div>
                            <div className={CN6} onClick={() => sepage(6)}>Локация</div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className='seting_page-about'>
                        <div className='seting_page-aboutleft'>
                            <Element name="set1" className="element">
                                <div className='seting_page-about-title'>Архитектура и фасады</div>
                            </Element>
                            <div className='seting_page-about-text'>
                                <p>Для создания яркого и эстетического облика зданий используется декоративная фасадная
                                    штукатурка. Проектом предусмотрены изменения фасадных решений и применение
                                    вентилируемых фасадов с архитектурной подсветкой.
                                </p>
                                <p>
                                    При различных погодных условиях и за время эксплуатации не теряют своих
                                    свойств.Такое решение позволяет фасаду оставаться красивым и первозданным долгие
                                    годы без дополнительного ремонта.
                                </p>
                            </div>
                        </div>
                        <div className='seting_page-aboutright'>
                            <img className='seting_page-about-img' src='/assets/img/seting/img1.png'/>
                        </div>
                    </div>
                    <img className='seting_page-big' src='/assets/img/seting/img2.png'/>

                    <div className='seting_page-about'>
                        <div className='seting_page-aboutleft'>
                            <Element name="set2" className="element">
                                <div className='seting_page-about-title'>Технология строительства</div>
                            </Element>
                            <img className='seting_page-about-img' src='/assets/img/seting/img4.png'/>

                        </div>
                        <div className='seting_page-aboutright'>
                            <div className='seting_page-about-text'>
                                <p>«Солнечный парк» – современный жилой комплекс комфорт-класса, спроектированный в
                                    техно-стиле: с точными и прямыми архитектурными линиями, теплыми и яркими
                                    фасадами.</p>
                                <p>
                                    Жилой комплекс расположился в экологически чистом районе, вблизи объектов социальной
                                    значимости и развитой инфраструктурой города, но при этом недосягаем для городского
                                    шума и суеты. Оставаться на солнечной стороне, живя здесь - легко!
                                </p><p>
                                Передовые технологии строительства, которыми обладает строительная компания «Аркада
                                Крым», позволяют возводить комфортабельное современное жилье с применением
                                монолитно-каркасной технологии строительства. Благодаря тому, что каркас здания имеет
                                целостные и непрерывные монолитные колонны от фундамента до крыши, тем самым дома в
                                «Солнечном парке» обладают высокой сейсмостойкостью, повышенной энергоэффективностью и
                                шумоизоляцией, сохраняют свою конструкцию и прочность на долгие годы!
                            </p><p>
                                В строительстве применяется экологически чистый бетон B25, для утепления – здания
                                используется минеральная вата, которая создает эффект «термоса» и позволяет дому
                                «дышать». Соответственно, в квартирах не образуется сырость, грибок и влага.
                            </p><p>
                                Для кладки перегородок используется газобетон – легкий и экологически чистый
                                строительный материал, не вызывающий аллергических реакций.
                                Комплекс строится на суглинистых и каменистых грунтах, что важно для эффективного
                                возведения многоэтажных домов.
                            </p>
                            </div>
                        </div>
                    </div>

                    <div className='seting_page-about' ref={myRef3}>
                        <div className='seting_page-aboutleft'>
                            <Element name="set3" className="element">
                                <div className='seting_page-about-title'>Инфраструктура</div>
                            </Element>
                            <div className='seting_page-about-text'>
                                <p>
                                    ЖК «Солнечный парк» олицетворяет все то, что необходимо для комфортного
                                    круглогодичного проживания.
                                </p><p>
                                Проектом предусмотрено строительство современной школы на более 1000 мест
                                и двух детских садов на 380 мест. Архитектурным бюро предусмотрено строительство
                                помещений для бизнеса.
                            </p><p>
                                Там будут открыты: супермаркеты, банк, аптека, магазин фермерской продукции, спортзал,
                                школа танцев, кофейня, салон красоты, школа развития деток,
                                и многое другое, что создаст комфортную среду для жильцов.
                            </p>
                            </div>
                        </div>
                        <div className='seting_page-aboutright'>
                            <img className='seting_page-about-img' src='/assets/img/seting/img5.png'/>
                        </div>
                    </div>

                    <div className='seting_page-about' ref={myRef4}>
                        <div className='seting_page-aboutleft'>
                            <Element name="set4" className="element"/>
                            <img className='seting_page-about-img' src='/assets/img/seting/img4.png'/>

                        </div>
                        <div className='seting_page-aboutright'>
                            <div className='seting_page-about-title'>Общественные пространства</div>
                            <div className='seting_page-about-text'>
                                <p>
                                    Инновационное, охраняемое, закрытое дворовое пространство с уютными зелеными зонами
                                    – идеальное место для вечерних прогулок и отдыха с семьей и друзьями.
                                </p><p>
                                Каждый двор в «Солнечном парке» уникальный, с детскими площадками, зоной для воркаута
                                под открытым небом и эко-парком, который представляет собой 400 метров «зеленых дорог» –
                                насаждений хвойных и лиственных деревьев, кустарников. Во дворах действует адаптивное
                                освещение, которое включается в момент захода солнца и выключается при восходе.
                            </p><p>
                                Оставаться в форме, живя в ЖК «Солнечный парк», легко. Для любителей спорта
                                предусмотрена спортивная площадка, не говоря уже о тренировках в ближайшем фитнес-клубе
                                – всем этим можно заниматься недалеко от дома.
                            </p>
                            </div>
                        </div>

                    </div>
                    <img className='seting_page-big' src='/assets/img/seting/img7.png'/>
                    <Element name="set5" className="element"/>
                    <div ref={myRef5}>
                        <Plan/>
                    </div>


                    <div className='seting_page-about'>
                        <div className='seting_page-aboutleft'>
                            <Element name="set6" className="element"/>
                            <div className='seting_page-about-title' ref={myRef6}>Транспортная доступность</div>
                            <div className='seting_page-about-text'>
                                <p> Район отличается хорошей транспортной доступностью:
                                    в пешей доступности остановка общественного транспорта, где ходит транспорт в
                                    направлении центра города, автовокзала, ТРЦ «АШАН», Москольца, железнодорожного
                                    вокзала и больницы им. Семашко
                                </p><p>
                                Маршрутное такси: 21, 25, 99.
                            </p><p>
                                Автобусы: 13а, 55, 95, 104, 178, 446-23.
                            </p><p>
                                Троллейбусы: «16».
                            </p><p>
                                За 10 минут можно доехать до центра города, ТК «Метро», ТРК «Меганом», аэропорта (на
                                авто).
                            </p><p>
                                Напротив комплекса планируется строительство крытого рынка «Привоз».
                                В шаговой близости развлекательный комплекс-ресторан «Рыбацкая деревня», действующие
                                школы.
                            </p></div>
                        </div>
                        <div className='seting_page-aboutright'>
                            <img className='seting_page-about-img' src='/assets/img/seting/img9.png'/>
                        </div>
                    </div>
                    <div className='streenbox'>
                        {distanceObjects.map((distanceObjEl: distanceObj) => {
                            return (
                                <div key={distanceObjEl.title} className='streenbox-item'>
                                    <span>{distanceObjEl.title}</span>
                                    <div className='car'>{distanceObjEl.timeDistance}</div>
                                </div>
                            )
                        })
                        }
                    </div>
                    <img className='seting_page-big' src='/assets/img/seting/img10.png'/>
                </div>
            </div>
        </div>
    )
}
export default SetingModal
