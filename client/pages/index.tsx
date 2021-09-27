import type { NextPage } from 'next'
import React, { Fragment, useRef, useState } from 'react'
import AboutSliders from '../components/AboutSlide/AboutSlide'
import Courusels from '../components/Corusels/Courusels'
import SetingSlide from '../components/SetingSlide/SetingSlide'
import Sliders from '../components/Sliders/Sliders'
import StepBuild from '../components/StepBuild/StepBuild'
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@material-ui/core'
import { DatePicker, DesktopDatePicker } from '@material-ui/lab'

const Home: NextPage = () => {
    const [val1, setval1] = useState(10)
    const[val2,setval2] = useState(10)
    const handleChange1 = (e:any) => {
        setval1(e.target.value);
    }
    const handleChange2 = (e:any) => {
        setval2(e.target.value);
    }

    const [modal1, setmodal1] = useState(false)
    const[modal2,setmodal2] = useState(false)


    const [valuedate, setValuedate] = useState(new Date('2014-08-18T21:11:54'));

    const handleChangedate = (newValue:any) => {
        setValuedate(newValue);
    };

    // scroll
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

  return (
      <>
         
      <header>
        <div className="container">
            <div className="row head">
                <div className="logo col-md-2 col-6">
                    <img src="/assets/img/logo.png" alt="logotype" />
                </div>
                <div className="nav-menu d-md-flex align-self-center align-items-end row px-0 col-6">
                    <a onClick={executeScroll1} className="nav-menu__link col">О проекте</a>
                    <a onClick={executeScroll2} className="nav-menu__link col">ПОДБОР КВАРТИРЫ</a>
                    <a onClick={executeScroll3} className="nav-menu__link col">РАСПОЛОЖЕНИЕ</a>
                    <a onClick={executeScroll4}className="nav-menu__link col">ХАРАКТЕРИСТИКИ</a>
                    <a onClick={executeScroll5} className="nav-menu__link col">Контакты</a>
                    
                </div>
                <div className="flats_box col-2 px-0">
                    <a href="#" className="nav-menu__link green_link col">
                        <img src="/assets/ico/kvartiri.svg" alt="kvartiri" />

                        КВАРТИРЫ
                    </a>
                    <a href="#" className="nav-menu__link green_link col">
                        <img src="/assets/ico/estate.svg" alt="estate" />

                        Коммерческая<br />недвижимость
                    </a>
                </div>
                <a href="#" className="contacts col-md-2 col-6">
                    <div className="contacts_box">
                        <div className="contacts__phone">
                            +7 978 718 08 08
                        </div>
                        <div className="contacts__memo">
                            бесплатно по России
                        </div> 
                    </div>
                    
                    <img src="/assets/img/call.png" className="contacts_call" alt="contacts"/>
                    
                </a>
            </div>
        </div>
      </header>
      <Sliders />
      <section className="brief">
        <div className="container">
            <div className="row">
                <div className="col-md-5 col-12 d-md-block d-flex flex-column-reverse">
                    <div className="brief__name">ЖК «Солнечный Парк»</div>

                    <div className="brief__memo">Жилой квартал</div>
                </div>

                <div className="col-md-2 col-12 d-md-block d-flex flex-column-reverse">
                    <div className="brief__name">от 3,07 млн ₽</div>

                    <div className="brief__memo">ЦЕНА квартиры</div>
                </div>

                <div className="col-md-2 col-12 d-md-block d-flex flex-column-reverse">
                    <div className="brief__name">
                        1кв.
                        2024
                        <img src="/assets/ico/question.svg" alt="question" />
                    </div>

                    <div className="brief__memo">ПЕРВИЧНая СДАЧа</div>
                </div>

                <div className="col-md-3 col-12 d-md-block d-flex flex-column-reverse">
                    <div className="brief__name row w-100 mx-auto gap-2">
                        <div className="col">Ст</div>
                        <div className="col">1к</div>
                        <div className="col">2к</div>
                        <div className="col">
                            Коммерческая недвижимость
                        </div>
                    </div>

                    <div className="brief__memo">Квартиры в продаже</div>
                </div>
            </div>
        </div>
      </section>
      <section className="about" ref={myRef1}>
        <div className="container">
            <div className="row">
                <div className="col-md-5 col-xl-6 col-12 about__description">
                    <div className="memo">О ПРОЕКТЕ</div>
                    <div className="section-header">Живи на солнечной стороне!</div>
                    <div className="description">
                        Современный жилой комплекс, расположенный у границы Симферополя,
                        поселок Молодежное, республика Крым. Удобная транспортная доступность и
                        близость к центру города, является неоспоримым преимуществом. Квартиры с
                        удобными планировками и грамотной инсоляцией. Отсутствие точечной застройки,
                        продуманное расположение новостроек, своя территория, отсутствие проблем с парковой,
                        все это и многое другое означает Жить на солнечной стороне!
                    </div>
                </div>
                <div className="col-md-7 col-xl-6 col-12 about__features">
                    <div className="d-flex flex-wrap about__features--box">
                        <div className="col-sm-12 col-md-6 d-flex">
                            <div className="about__features__ico">
                                <img src="/assets/ico/smart.svg" alt="smart"/>
                            </div>
                            <div className="about__features__content">
                                <div className="about__features__header">Умный жилой комплекс</div>
                                <div className="about__features__description">
                                    Адаптивное освещение, домофон
                                    с видеонаблюдением и шлагбаум, управляемые с мобильного телефона
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 d-flex">
                            <div className="about__features__ico">
                                <img src="/assets/ico/smart.svg" alt="smart"/>
                            </div>
                            <div className="about__features__content">
                                <div className="about__features__header">Умный жилой комплекс</div>
                                <div className="about__features__description">
                                    Адаптивное освещение, домофон
                                    с видеонаблюдением и шлагбаум, управляемые с мобильного телефона
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 d-flex">
                            <div className="about__features__ico">
                                <img src="/assets/ico/smart.svg" alt="smart"/>
                            </div>
                            <div className="about__features__content">
                                <div className="about__features__header">Умный жилой комплекс</div>
                                <div className="about__features__description">
                                    Адаптивное освещение, домофон
                                    с видеонаблюдением и шлагбаум, управляемые с мобильного телефона
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 d-flex">
                            <div className="about__features__ico">
                                <img src="/assets/ico/smart.svg" alt="smart"/>
                            </div>
                            <div className="about__features__content">
                                <div className="about__features__header">Умный жилой комплекс</div>
                                <div className="about__features__description">
                                    Адаптивное освещение, домофон
                                    с видеонаблюдением и шлагбаум, управляемые с мобильного телефона
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 d-flex">
                            <div className="about__features__ico">
                                <img src="/assets/ico/smart.svg" alt="smart"/>
                            </div>
                            <div className="about__features__content">
                                <div className="about__features__header">Умный жилой комплекс</div>
                                <div className="about__features__description">
                                    Адаптивное освещение, домофон
                                    с видеонаблюдением и шлагбаум, управляемые с мобильного телефона
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 d-flex">
                            <div className="about__features__ico">
                                <img src="/assets/ico/smart.svg" alt="smart"/>
                            </div>
                            <div className="about__features__content">
                                <div className="about__features__header">Умный жилой комплекс</div>
                                <div className="about__features__description">
                                    Адаптивное освещение, домофон
                                    с видеонаблюдением и шлагбаум, управляемые с мобильного телефона
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 about__slider mt-4">
                    
                    <AboutSliders />
                </div>
            </div>
        </div>
      </section>
          <section className="location">
              
              
        <div className="container" ref={myRef2}>
            <div className="section-header">
                Расположение и инфраструктура
          </div>
          <Courusels />
        </div> 
        <div className="location__map">
            <div className="container">
                <div className="location__description-header">
                    ЖК “Солнечный парк”расположен на границе с городом Симферополь, в 10 минутах от центра города.
                </div>
                <div className="location__description">
                    Адрес: поселок Моложеное, Симферопольский район, республика Крым.<br />
                    Удачное транспортное расположение новостройки. Парки, скверы, магазины все расположено в пешей
                    доступности.
                </div>
            </div>
                  <div id="map">
                    
                      { modal1 &&
                          <>  
                    <div className="dasboarde" onClick={()=> setmodal1(false)}></div>
                    <div className="modal-window">
                        <div className="close" onClick={()=> setmodal1(false)}>
                            <img src="./assets/ico/close.svg" alt="close"/>
                        </div>
                        <div className="section-header text-center">Заявка на консультацию</div>

                        <form action="">
                            <input type="text" placeholder="Ваше имя" />
                            <input type="text" placeholder="Телефон" />
                            <input type="text" placeholder="Email" />
                            <div className="custom-select active">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="custom-select__placeholder">Тема обращения</div>
                                    <div className="custom-select__value">Вопрос по покупке квартиры</div>
                                </div>
                                

                                <div className="custom-select__list">
                                    <div className="custom-select__option">1</div>
                                    <div className="custom-select__option">2</div>
                                    <div className="custom-select__option">3</div>
                                    <div className="custom-select__option">4</div>
                                    <div className="custom-select__option">5</div>
                                </div>
                            </div>
                            <input type="text" placeholder="Ваш номер ДДУ" />
                            <textarea placeholder="Сообщение"></textarea>

                            <button className="btn">Отправить заявку</button>
                        </form>

                        <div className="confirm__memo">
                            Нажимая кнопку «Отправить заявку»,<br/>
                            вы соглашаетесь с <a href="">условиями обработки личных данных</a>
                        </div>
                      </div>
                          </>
                          }
                          

              <iframe className="solarmap" src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad7101d71b5e48403f7070e693c9bbdd9ef70cc6b284ae637d9e1edb34bd0613e&amp;source=constructor" width="100%" height="640" ></iframe>
         
                <div className="location__select-window d-flex flex-wrap">
                    <div className="location__select__memo d-md-block d-none">инфраструктура</div>
                    <div className="section-header">ЖК «Солнечный Парк»</div>

                    <label className="checkbox col-md-12 col-6 d-flex align-items-center">
                        <input type="checkbox" />
                        <span></span>
                        <span className="checkbox__value">Все объекты</span>

                        <div className="checkbox__count">
                            12
                        </div>

                    </label>
                    <label className="checkbox d-flex align-items-center">
                        <input type="checkbox" />
                        <span></span>
                        <span className="checkbox__value">Все объекты</span>

                        <div className="checkbox__count">
                            12
                        </div>

                    </label>
                    <label className="checkbox col-md-12 col-6 d-flex align-items-center">
                        <input type="checkbox" />
                        <span></span>
                        <span className="checkbox__value">Все объекты</span>

                        <div className="checkbox__count">
                            12
                        </div>

                    </label>
                    <label className="checkbox col-md-12 col-6 d-flex align-items-center">
                        <input type="checkbox" />
                        <span></span>
                        <span className="checkbox__value">Все объекты</span>

                        <div className="checkbox__count">
                            12
                        </div>

                    </label>

                    <button className="btn" onClick={()=> setmodal1(true)}>
                        Заявка на экскурсию
                    </button>
                </div>
            </div>
        </div>
      </section>  
      <section className="characteristic" ref={myRef3}>
        <div className="container">
            <div className="row align-items-center mb-5">
                <div className="col-md-6 col-12 section-header">
                    Характеристики
                </div>
                <div className="col-md-6 col-12 section-btn d-flex justify-content-md-end align-self-center">
                    <button className="btn">Подробнее</button>
                </div>
            </div>

            <SetingSlide />
        </div>
      </section>
      <section className="genplan">
        <div className="container">
            <div className="section-header col-12">
                Генплан
            </div>
        </div>

        <img src="/assets/img/genplan.png" alt="genplan" className="genplan__bg"/>
        </section>
        <div className="genplan__features">
            <div className="container">
                <div className="row gap-5 w-100 mx-auto genplan__features--box">
                    <div className="genplan__item col-md col-12 active">
                    <svg width="17" height="22" viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.2571 0.785714C16.2571 0.57733 16.1744 0.37748 16.027 0.23013C15.8797 0.0827803 15.6798 0 15.4714 0H1.32856C1.12018 0 0.920327 0.0827803 0.772977 0.23013C0.625627 0.37748 0.542847 0.57733 0.542847 0.785714V21.2143C0.542847 21.4227 0.625627 21.6225 0.772977 21.7699C0.920327 21.9172 1.12018 22 1.32856 22H15.4714C15.6798 22 15.8797 21.9172 16.027 21.7699C16.1744 21.6225 16.2571 21.4227 16.2571 21.2143V0.785714ZM5.25713 19.6429H2.89999V17.2857H5.25713V19.6429ZM5.25713 15.7143H2.89999V13.3571H5.25713V15.7143ZM5.25713 11.7857H2.89999V9.42857H5.25713V11.7857ZM9.57856 19.6429H7.22142V17.2857H9.57856V19.6429ZM9.57856 15.7143H7.22142V13.3571H9.57856V15.7143ZM9.57856 11.7857H7.22142V9.42857H9.57856V11.7857ZM13.9 19.6429H11.5428V13.3571H13.9V19.6429ZM13.9 11.7857H11.5428V9.42857H13.9V11.7857ZM13.9 7.07143H2.89999V2.35714H13.9V7.07143Z" fill="#443571"/>
                    </svg>

                        <div className="genplan__item__text">
                            Ипотека<br />
                            <b>от 4,5%</b>
                        </div>
                    </div>
                    <div className="genplan__item col-md col-12">
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.7231 0H3.87691C3.06113 0.000890796 2.27902 0.325352 1.70218 0.902194C1.12534 1.47904 0.800879 2.26115 0.799988 3.07692V16.9231C0.800879 17.7389 1.12534 18.521 1.70218 19.0978C2.27902 19.6746 3.06113 19.9991 3.87691 20H17.7231C18.5388 19.9991 19.321 19.6746 19.8978 19.0978C20.4746 18.521 20.7991 17.7389 20.8 16.9231V3.07692C20.7991 2.26115 20.4746 1.47904 19.8978 0.902194C19.321 0.325352 18.5388 0.000890796 17.7231 0ZM16.0043 6.64856L9.54278 14.3409C9.4719 14.4253 9.3837 14.4935 9.28416 14.5409C9.18463 14.5882 9.07607 14.6136 8.96585 14.6154H8.95287C8.84505 14.6153 8.73845 14.5926 8.63997 14.5487C8.54149 14.5048 8.45334 14.4407 8.38124 14.3606L5.61201 11.2837C5.54168 11.2091 5.48697 11.1212 5.4511 11.0251C5.41522 10.9291 5.39891 10.8268 5.40312 10.7244C5.40732 10.622 5.43196 10.5214 5.47558 10.4286C5.5192 10.3359 5.58093 10.2527 5.65714 10.1842C5.73334 10.1156 5.82249 10.0629 5.91933 10.0293C6.01618 9.99567 6.11877 9.98173 6.22108 9.98832C6.32338 9.9949 6.42335 10.0219 6.51508 10.0676C6.60682 10.1134 6.68849 10.177 6.75528 10.2548L8.93268 12.674L14.8264 5.65913C14.9586 5.50629 15.1457 5.41161 15.3471 5.39555C15.5486 5.3795 15.7483 5.44337 15.903 5.57335C16.0577 5.70333 16.1551 5.88899 16.1741 6.09018C16.193 6.29138 16.132 6.49196 16.0043 6.64856Z" fill="#D5D5D5"/>
                        </svg>

                        <div className="genplan__item__text">
                            Условия<br />
                            приобретения
                        </div>
                    </div>
                    <div className="genplan__item col-md col-12">
                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.0032 16.9158L16.023 12.9355L18.8626 11.2954C19.0844 11.1672 19.2135 10.9236 19.1951 10.6681C19.1766 10.4125 19.0138 10.1899 18.7758 10.095L6.1138 5.04411C5.86558 4.94498 5.58215 5.00337 5.39312 5.19232C5.2041 5.38141 5.14572 5.66478 5.24477 5.913L10.2949 18.5765C10.3898 18.8145 10.6124 18.9774 10.868 18.9958C11.1236 19.0144 11.3673 18.8853 11.4953 18.6633L13.1353 15.8238L17.1152 19.804C17.2406 19.9295 17.4108 20 17.5881 20C17.7656 20 17.9357 19.9295 18.0611 19.804L20.0032 17.8616C20.2644 17.6004 20.2644 17.177 20.0032 16.9158Z" fill="#D5D5D5"/>
                    <path d="M3.13669 1.99003C2.87548 1.72902 2.45211 1.72896 2.19077 1.99003C1.92962 2.25125 1.92962 2.67475 2.19077 2.93596L3.67689 4.42209C3.80747 4.55266 3.97858 4.61798 4.14982 4.61798C4.32093 4.61798 4.49211 4.55266 4.62268 4.42209C4.8839 4.16088 4.8839 3.73744 4.62268 3.47623L3.13669 1.99003Z" fill="#D5D5D5"/>
                    <path d="M3.64033 6.6138C3.64033 6.24451 3.34087 5.94498 2.97144 5.94498H0.869756C0.500395 5.94498 0.200867 6.24444 0.200867 6.6138C0.200867 6.98316 0.500328 7.28269 0.869756 7.28269H2.97144C3.34087 7.28263 3.64033 6.98316 3.64033 6.6138Z" fill="#D5D5D5"/>
                    <path d="M3.36922 8.67805L1.88289 10.1643C1.62174 10.4255 1.62174 10.849 1.88289 11.1102C2.01353 11.2407 2.18471 11.3061 2.35582 11.3061C2.52693 11.3061 2.69817 11.2407 2.82875 11.1102L4.31501 9.62397C4.57622 9.36276 4.57622 8.93926 4.31501 8.67805C4.05386 8.41704 3.63056 8.41697 3.36922 8.67805Z" fill="#D5D5D5"/>
                    <path d="M6.81427 3.4396C7.18363 3.4396 7.48316 3.14013 7.48316 2.77071V0.668822C7.48316 0.299461 7.1837 0 6.81427 0C6.44497 0 6.14545 0.299394 6.14545 0.668822V2.77077C6.14545 3.14013 6.44491 3.4396 6.81427 3.4396Z" fill="#D5D5D5"/>
                    <path d="M9.3511 4.31017C9.52235 4.31017 9.69346 4.24485 9.82403 4.11428L11.3101 2.62815C11.5713 2.36694 11.5713 1.94343 11.3101 1.68222C11.0489 1.42114 10.6254 1.42114 10.3642 1.68222L8.87817 3.16842C8.61696 3.42963 8.61696 3.85313 8.87817 4.11428C9.00881 4.24485 9.17992 4.31017 9.3511 4.31017Z" fill="#D5D5D5"/>
                    </svg>

                        <div className="genplan__item__text">
                            Выбрать<br />
                            квартиру
                        </div>
                    </div>
                    <div className="genplan__item col-md col-12">
                    <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.3637 1.59998C13.408 0.568195 12.0732 0 10.5999 0C9.11878 0 7.77957 0.564757 6.82833 1.59016C5.86677 2.62686 5.39826 4.0358 5.50827 5.55721C5.72631 8.55877 8.01039 11.0005 10.5999 11.0005C13.1895 11.0005 15.4696 8.55926 15.6911 5.55819C15.8026 4.05054 15.3311 2.64454 14.3637 1.59998Z" fill="#D5D5D5"/>
                    <path d="M19.2432 21.9999H1.95673C1.73046 22.0028 1.50639 21.9553 1.30081 21.8607C1.09522 21.7662 0.913303 21.627 0.768282 21.4533C0.449072 21.0717 0.320405 20.5507 0.415677 20.0237C0.83016 17.7244 2.1237 15.7929 4.15682 14.437C5.96306 13.2334 8.25107 12.5709 10.6 12.5709C12.9489 12.5709 15.2369 13.2339 17.0431 14.437C19.0762 15.7925 20.3698 17.7239 20.7843 20.0232C20.8795 20.5502 20.7509 21.0712 20.4317 21.4528C20.2867 21.6266 20.1048 21.7659 19.8992 21.8605C19.6936 21.9551 19.4695 22.0028 19.2432 21.9999Z" fill="#D5D5D5"/>
                    </svg>

                        <div className="genplan__item__text">
                            Информация<br />
                            о застройщике
                        </div>
                    </div>
                    <div className="genplan__item col-md col-12">
                    <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.35 10.2667H12.9333C12.3499 10.2667 11.7903 10.0349 11.3777 9.6223C10.9651 9.20972 10.7333 8.65014 10.7333 8.06667V1.65C10.7333 1.60138 10.714 1.55475 10.6796 1.52036C10.6453 1.48598 10.5986 1.46667 10.55 1.46667H8.10938C8.02379 1.30815 7.92408 1.15766 7.81147 1.01704C7.28301 0.361167 6.49788 0 5.60001 0C3.87301 0 2.66668 1.35713 2.66668 3.3V9.9C2.66668 11.0458 3.59893 11.7333 4.50001 11.7333C4.7415 11.736 4.98108 11.6904 5.20471 11.5992C5.42833 11.508 5.63148 11.373 5.80225 11.2022C5.97302 11.0315 6.10796 10.8283 6.19916 10.6047C6.29036 10.3811 6.33598 10.1415 6.33334 9.9V2.93333C6.33334 2.73884 6.25608 2.55232 6.11855 2.41479C5.98103 2.27726 5.7945 2.2 5.60001 2.2C5.40552 2.2 5.21899 2.27726 5.08146 2.41479C4.94394 2.55232 4.86668 2.73884 4.86668 2.93333V9.9C4.86827 9.94858 4.85988 9.99697 4.84201 10.0422C4.82415 10.0874 4.7972 10.1284 4.76283 10.1628C4.72846 10.1972 4.6874 10.2241 4.64219 10.242C4.59698 10.2599 4.54859 10.2683 4.50001 10.2667C4.3978 10.2667 4.13334 10.2007 4.13334 9.9V3.3C4.13334 2.41358 4.5188 1.46667 5.60001 1.46667C6.9608 1.46667 7.06668 2.84854 7.06668 3.27158V9.63096C7.06668 10.4307 6.81597 11.154 6.36038 11.6687C5.89793 12.1917 5.25488 12.4667 4.50001 12.4667C3.74513 12.4667 3.10209 12.1917 2.63963 11.6687C2.18405 11.154 1.93334 10.4307 1.93334 9.63096V5.86667C1.93334 5.67217 1.85608 5.48565 1.71855 5.34812C1.58103 5.2106 1.3945 5.13333 1.20001 5.13333C1.00552 5.13333 0.81899 5.2106 0.681463 5.34812C0.543936 5.48565 0.466675 5.67217 0.466675 5.86667V9.63096C0.466675 11.9918 1.98788 13.739 4.13334 13.9178V19.0667C4.13334 19.8446 4.44239 20.5907 4.9925 21.1408C5.5426 21.691 6.28871 22 7.06668 22H16.6C17.378 22 18.1241 21.691 18.6742 21.1408C19.2243 20.5907 19.5333 19.8446 19.5333 19.0667V10.45C19.5333 10.4014 19.514 10.3547 19.4796 10.3204C19.4453 10.286 19.3986 10.2667 19.35 10.2667Z" fill="#D5D5D5"/>
                    <path d="M12.9333 8.79983H18.8829C18.901 8.79976 18.9187 8.79434 18.9337 8.78426C18.9487 8.77419 18.9604 8.7599 18.9673 8.74319C18.9742 8.72649 18.976 8.70812 18.9725 8.69039C18.969 8.67266 18.9603 8.65636 18.9476 8.64354L12.3563 2.05225C12.3435 2.03951 12.3272 2.03084 12.3094 2.02733C12.2917 2.02383 12.2733 2.02564 12.2566 2.03255C12.2399 2.03945 12.2256 2.05114 12.2156 2.06615C12.2055 2.08115 12.2001 2.0988 12.2 2.11687V8.0665C12.2 8.26099 12.2772 8.44752 12.4148 8.58504C12.5523 8.72257 12.7388 8.79983 12.9333 8.79983Z" fill="#D5D5D5"/>
                    </svg>

                        <div className="genplan__item__text">
                            Документы<br />
                            по проекту
                        </div>
                    </div>
                </div>
            </div>
      </div>
      <section className="steps" ref={myRef3}>
        <div className="container">
            <div className="section-header">
                Ход строительства
            </div>
                  <div className="step_select">
                  <FormControl className="select-box1" fullWidth>
                        
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={val1}
                        label="Age"
                        onChange={handleChange1}
                        className="select-item"
                        >
                        <MenuItem value={10}>1-ая очередь </MenuItem>
                        <MenuItem value={20}>2-ая очередь </MenuItem>
                        <MenuItem value={30}>3-ая очередь </MenuItem>
                        </Select>
                      </FormControl>
                      <FormControl className="select-box1" fullWidth>
                        
                        <Select
                        labelId="demo-simple-select-label2"
                        id="demo-simple-select"
                        value={val2}
                        label="Age"
                        onChange={handleChange2}
                        className="select-item"
                        >
                        <MenuItem value={10}>2021</MenuItem>
                        <MenuItem value={20}>2022</MenuItem>
                        <MenuItem value={30}>2023</MenuItem>
                        </Select>
                    </FormControl>
            </div>
                <StepBuild />
              
          </div>
      </section>
      <section className="news">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-6 section-header">Новости</div>
                <div className="col-6 d-flex align-self-center justify-content-end section-btn">
                    <button className="btn">Смотреть все</button>
                </div>

                  <div className="row gap-5 news__list mx-auto news__item-box">
                      <div className="news__item col-md col-12">
                          <div className="news__title">
                              ЖК «Солнечный парк»
                              объявляет о результатах
                              за 6 месяцев 2021 года
                          </div>
                          <div className="news__text">
                              ЖК «Солнечный парк» объявляет
                              о результатах основной (операционной) деятельности за 6 месяцев.
                          </div>
                          <div className="news__date">5 августа 2021</div>
                      </div>
                      <div className="news__item col-md col-12">
                          <div className="news__title">
                              ЖК «Солнечный парк»
                              объявляет о результатах
                              за 6 месяцев 2021 года
                          </div>
                          <div className="news__text">
                              ЖК «Солнечный парк» объявляет
                              о результатах основной (операционной) деятельности за 6 месяцев.
                          </div>
                          <div className="news__date">5 августа 2021</div>
                      </div>
                      <div className="news__item col">
                          <div className="news__title">
                              ЖК «Солнечный парк»
                              объявляет о результатах
                              за 6 месяцев 2021 года
                          </div>
                          <div className="news__text">
                              ЖК «Солнечный парк» объявляет
                              о результатах основной (операционной) деятельности за 6 месяцев.
                          </div>
                          <div className="news__date">5 августа 2021</div>
                      </div>
                  </div>
              </div>

          </div>
      </section>
      <section className="bottom-map" ref={myRef4}>
              <div id="bottom-map">
              { modal2 &&
                          <>  
                    <div className="dasboarde" onClick={()=> setmodal2(false)}></div>
                    <div className="modal-window">
                        <div className="close" onClick={()=> setmodal2(false)}>
                            <img src="/assets/ico/close.svg" alt="close"/>
                        </div>
                        <div className="section-header text-center">Заявка на консультацию</div>

                        <form action="">
                            <input type="text" placeholder="Телефон" />

                            <input type="text" placeholder="Ваше имя" />
                            <input type="text" placeholder="Email" />

                            <div className="row align-items-center">
                                <div className="modal-checkbox col-5">
                                    <label>
                                        <input type="radio" name="radio" value="now" checked/>
                                        <span>
                                            <span className="checkbox"></span>
                                            <span className="text">Сейчас</span>
                                        </span>
                                    </label>
                                </div>
                                <div className="modal-checkbox col-5">
                                    <label>
                                        <input type="radio" name="radio" value="select"/>
                                        <span>
                                            <span className="checkbox"></span>
                                            <span className="text">Выбрать время</span>
                                        </span>
                                    </label>
                                </div>
                              </div>
                             

                            <button className="btn">Отправить заявку</button>
                        </form>

                        <div className="confirm__memo">
                            Нажимая кнопку «Отправить заявку»,<br/>
                            вы соглашаетесь с <a href="">условиями обработки личных данных</a>
                        </div>
                    </div>
                          </>
                          }
        <iframe className="solarmap" src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad7101d71b5e48403f7070e693c9bbdd9ef70cc6b284ae637d9e1edb34bd0613e&amp;source=constructor" width="100%" height="640" ></iframe>
              <div className="bottom-map__contacts">
                  <div className="memo">Контакты</div>
                  <div className="header">Офис продаж</div>

                  <div className="address">
                      <div className="bottom-map__wrap">
                          <div className="address__city">г. Симферополь</div>
                          ул. Набережная 75В<br/>
                          с3, офис 232
      
                          <div className="contacts__memo">
                              Ежедневно 9:00-21:00<br /><br />
      
      
                              Посещение офиса возможно
                              только по предварительной записи.
                          </div>
                      </div>
                      
                  </div>

                  <div className="phone">
                      <div className="bottom-map__wrap">
                          +7 978 718 08 08

                          <div className="contacts__memo">
                              Ежедневно 9:00-21:00
                          </div>
                      </div>
                  </div>

                  <div className="section-btn">
                      <button className="btn">Проложить маршрут</button>
                  </div>
                  <button className="btn yellow" onClick={()=> setmodal2(true)}>Записаться</button>
              </div>
          </div>
      </section>
      <footer className="prefooter" ref={myRef5}>
        <div className="container">
              <div className="prefooter__top row align-items-center">
                  <div className="to-up col-2 d-flex align-items-center">
                      <img src="/assets/ico/to-up.svg" alt="to up" onClick={executeScroll1} />
                      Наверх
                  </div>
                  <div className="prefooter__contact col-md-4 col-10">
                      <div className="phone">+7 978 718 08 08</div>
                      бесплатно по России
                  </div>
                  <div className="col-md-3 col-12 mt-3 d-flex justify-content-end">
                      <button className="btn prefooter__btn">Обратится к застройщику</button>

                  </div>
              </div>

              <hr />

              <div className="row prefooter__middle">
                  <div className="col-md-4 col-12 mb-md-0 mb-5">
                      <div className="builders flat">КВАРТИРЫ</div>
                      <div className="builders builder">Коммерческая недвижимость</div>
                  </div>
                  <div className="col">
                      <div className="prefooter__link-header">О проекте</div>
                      <ul className="prefooter__list">
                          <a href=""><li>Умный жилой комплекс</li></a>
                          <a href=""><li>Безопасность</li></a>
                          <a href=""><li>Аллея здоровья и экопарк</li></a>
                          <a href=""><li>Все для детей</li></a>
                      </ul>
                  </div>
                  <div className="col">
                      <div className="prefooter__link-header">Подбор квартиры</div>
                      <ul className="prefooter__list">
                          
                          <a href=""><li>Однокомнатные</li></a>
                          <a href=""><li>Двухкомнатные</li></a>
                          <a href=""><li>Трехкомнатные</li></a>
                          <a href=""><li>Четырехкомнатные</li></a>
                          <a href=""><li>Двухуровневые</li></a>
                      </ul>
                  </div>
                  <div className="col">
                      <div className="prefooter__link-header">Расположение</div>
                      <ul className="prefooter__list">
                          <a href=""><li>Инфраструктура</li></a>
                          <a href=""><li>Транспорт</li></a>
                      </ul>
                  </div>
                  <div className="col">
                      <div className="prefooter__link-header">Преимущество</div>
                      <ul className="prefooter__list">
                          <a href=""><li>Фасад</li></a>
                          <a href=""><li>Квартиры</li></a>
                          <a href=""><li>Отделка</li></a>
                          <a href=""><li>Архитектура</li></a>
                          <a href=""><li>Подъезды</li></a>
                          <a href=""><li>Этаж</li></a>
                      </ul>
                  </div>
                  <div className="col">
                      <div className="prefooter__link-header">Контакты</div>
                      <ul className="prefooter__list">
                          <a href=""><li>Офис продаж</li></a>
                          <a href=""><li>Условия приобритения</li></a>
                          <a href=""><li>Документы</li></a>
                          <a href=""><li>Ход строительства</li></a>
                      </ul>
                  </div>
              </div>

              <div className="prefooter__bottom row justify-content-between">
                  <div className="search col-md-3 col-12">
                      <img src="/assets/ico/search.svg" id="search-ico" alt="search ico"/>
                      <input type="text" placeholder="Поиск по сайту" className="w-100" />
                  </div>

                  <div className="prefooter__social col-md-4 col-12 mt-4 d-flex justify-content-between align-items-center">
                      Мы в социальных сетях:
                      <a href="">
                          <img src="/assets/ico/social/yt.svg" alt="youtube"/>
                      </a>
                      <a href="">
                          <img src="/assets/ico/social/vk.svg" alt="vkontakte"/>
                      </a>
                      <a href="">
                          <img src="/assets/ico/social/inst.svg" alt="instagram"/>
                      </a>
                      <a href="">
                          <img src="/assets/ico/social/fb.svg" alt="facebook"/>
                      </a>
                  </div>
              </div>
          </div>
      </footer>
      <footer className="footer">
          <div className="container">
              <div className="row align-items-center">
                  <div className="copyright col-md-4 col-12">
                      &copy; Все права защищены. ЖК «Солнечный парк» — ГК «Аркада Крым».
                  </div>
                  <div className="middle-text col-md-4 col-12 my-md-0 my-4">Любая информация, представленная на данном сайте, носит исключительно информационный характер и ни при каких условиях не является публичной офертой, определяемой положениями статьи 437 Гражданского кодекса РФ. Группа компаний «Аркада Крым» принимает на себя гражданско-правовые обязательства исключительно в результате отдельно и специально совершенных сделок.</div>
                  <div className="who-create d-flex col-md-4 col-12 justify-content-end">
                      Сайт создан — <b>студией Studio282</b>
                      <img src="/assets/img/studio-logo.png" alt="studio logo"/>
                  </div>
              </div>
          </div>
      </footer>
      
      
      
    </>
  )
}

export default Home
