/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unknown-property */
/* eslint-disable @next/next/no-sync-scripts */
import type { NextPage } from 'next'
import React, { Fragment, useEffect, useRef, useState } from 'react'
import AboutSliders from '../components/AboutSlide/AboutSlide'
import Courusels from '../components/Corusels/Courusels'
import SetingSlide from '../components/SetingSlide/SetingSlide'
import Sliders from '../components/Sliders/Sliders'
import StepBuild from '../components/StepBuild/StepBuild'
import { createTheme, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core'
import Api from '../Api/Api'
import SetingModal from './../components/SetingSlide/SetingModal';
import Link from 'next/link'
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import Stack from '@mui/material/Stack';
import TimePicker from '@mui/lab/TimePicker'
import MatPage from '../components/MatPage/MatPage'
import emailjs from '@emailjs/browser';

import Head from 'next/head';
import SolarYMaps from '../components/Maps/SolarYMaps'
import { ContactUs } from '../components/Mailer/Mailer'
import { Link as Links, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import ruLocale from 'date-fns/locale/ru';
import Image from 'next/image'
import Script from 'next/script'
import { YMInitializer } from 'react-yandex-metrika';
 
const Home: NextPage = () => {
    
    const [val1, setval1] = useState(10)
    const[val2,setval2] = useState(10)
    const handleChange1 = (e:any) => {
        setval1(e.target.value);
    }
    const handleChange2 = (e:any) => {
        setval2(e.target.value);
    }

    const[menu,setmenu] = useState(false)

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

    // характеристики
    const [seting, setseting] = useState(false)
    const[setingpage,setsetingpage] = useState<any>()
    
    
    // попап
    const [datevalue, setdateValue] = React.useState<Date | null>(new Date());
    const [timevalue, settimeValue] = React.useState<any>();

    const [kvartir, setkvartir] = React.useState<any>('Вопрос по покупке квартиры');
    const [kvartirbol, setkvartirbol] = React.useState<any>(false);

    //genplan_modal
    const [genplan_modal, setgenplan_modal] = React.useState<any>(false);
    //
    const [doc_modal, setdoc_modal] = React.useState<any>(false);
    // Условия приобретения 
    const [mat_modal, setmat_modal] = React.useState<any>(false);
    
    const flartis = global.window as any
    const handlefratis = () => {
        flartis.create_chess() as any
    }

    // дата в попапе
    const [date_modal, setdate_modal] = React.useState<any>(false);


    const formModal1 = useRef<any>();
    const sendEmailModal1 = (e:any) => {
      e.preventDefault();
  
      emailjs.sendForm('service_5f2mjwo', 'template_li7mqnj', formModal1.current, 'user_87qhZ0qw52GqaalcwFFTt')
        .then((result) => {
          console.log(result.text);
          setmodal1(false)
        }, (error) => {
          console.log(error.text);
          setmodal1(false)
        });
    };

    const formModal2 = useRef<any>();
    const sendEmailModal2 = (e:any) => {
      e.preventDefault();
  
      emailjs.sendForm('service_5f2mjwo', 'template_nmpmxap', formModal2.current, 'user_87qhZ0qw52GqaalcwFFTt')
        .then((result) => {
          console.log(result.text);
          setmodal2(false)
        }, (error) => {
          console.log(error.text);
          setmodal2(false)
        });
    };
    
  
  return (
    <>
       
      
       <Head>
            <script async type="text/javascript" src="https://a315.flatris.com.ua/public/web.js?cid=vbz3A0aZjxV1ZeB&hl=ru"></script>
            <script async src="https://api-maps.yandex.ru/2.1/?lang=ru_RU&apikey=25ff2aee-f172-4ef8-9ba4-6e829954c5b5"></script>
            <script src="//code-ya.jivosite.com/widget/xhQVlWMolS" async></script>
            <YMInitializer accounts={[70887214]} options={{webvisor: true}} />
         //Yandex.Metrika counter   
        <script src='/met.js'></script>
          <noscript><div><img src="https://mc.yandex.ru/watch/70887214" className='metka' alt="" /></div></noscript>
        ///Yandex.Metrika counter
          
      </Head>

		
		<div className='allcall' onClick={()=> setmodal2(true)}>
			<img src='/assets/img/allcall.png'  />
		</div>
    <Element name="test0" className="element"></Element>
      <header>
        <div className="container">
            <div className="row head">
                <div className="logo col-md-2 col-3">
                    <img src="/assets/img/logo3.svg"  alt="logotype" />
                </div>
                <div className="nav-menu d-md-flex align-self-center align-items-end row px-0 col-6">
                    
                    <Links className="nav-menu__link col" activeClass="active" to="test1" spy={true} smooth={true} offset={-110} duration={100}>
                      О проекте
                    </Links>
                    <a onClick={handlefratis} className="nav-menu__link col">ПОДБОР КВАРТИРЫ</a>
              <Links className="nav-menu__link col" activeClass="active" to="test2" spy={true} smooth={true} offset={-110} duration={100}>
                РАСПОЛОЖЕНИЕ</Links>
              <Links className="nav-menu__link col" activeClass="active" to="test3" spy={true} smooth={true} offset={-110} duration={100}>
                ХАРАКТЕРИСТИКИ</Links>
              <Links className="nav-menu__link col" activeClass="active" to="test4" spy={true} smooth={true} offset={-110} duration={100}>
                Контакты</Links>
                    
                </div>
                <div className="flats_box col-2 px-0">
                    <a onClick={handlefratis} className="nav-menu__link green_link col">
                        <img src="/assets/ico/kvartiri.svg"  alt="kvartiri" />

                        КВАРТИРЫ
                    </a>
                    <a onClick={handlefratis} className="nav-menu__link green_link col">
                        <img src="/assets/ico/estate.svg"  alt="estate" />

                        Коммерческая<br />недвижимость
                    </a>
                </div>
                <div className="contacts col-md-2 col-6">
                    <div className="contacts_box">
                        <div className="contacts__phone">
                           <Link href="tel:+7 9787180808"> +7 978 718 08 08</Link>
                        </div>
                        <div className="contacts__memo">
                            
                        </div> 
                    </div>
                    
                    <img src="/assets/img/call.png"  className="contacts_call" alt="contacts"/>
                    
                </div>
                <section className="top-nav mobbuerger col-2">
                    
                    
                    <label onClick={() => setmenu(true)} className='menu-button-container' htmlFor="menu-toggle">
                    <div  className='menu-button'></div>
                  </label>
                    
                </section>
                {
                    menu &&
                    <div className='mobile_menu'>
                        <img className='mobile_menu-close'  onClick={() => setmenu(false)}  src='/assets/ico/close.svg' />
                        <div className="nav-menu d-md-flex align-self-center align-items-end row px-0 col-6">
                        <Links className="nav-menu__link col" activeClass="active" to="test1" spy={true} smooth={true} offset={-110} duration={100}>
                      О проекте
                    </Links>
                    <a onClick={handlefratis} className="nav-menu__link col">ПОДБОР КВАРТИРЫ</a>
              <Links className="nav-menu__link col" activeClass="active" to="test2" spy={true} smooth={true} offset={-110} duration={100}>
                РАСПОЛОЖЕНИЕ</Links>
              <Links className="nav-menu__link col" activeClass="active" to="test3" spy={true} smooth={true} offset={-110} duration={100}>
                ХАРАКТЕРИСТИКИ</Links>
              <Links className="nav-menu__link col" activeClass="active" to="test4" spy={true} smooth={true} offset={-110} duration={100}>
                Контакты</Links>
                            
                        </div>
                    </div>
                }
                
            </div>
        </div>
      </header>
      <Sliders />
      <section className="brief">
        <div className="container">
            <div className="row">
                <div className="col-md-5 col-sm-3 d-sm-block d-flex flex-column-reverse">
                    <div className="brief__name">Солнечный Парк</div>

                    <div className="brief__memo">Жилой квартал</div>
                </div>

                <div className="col-sm-2 col-12 d-sm-block d-flex flex-column-reverse">
                    <div className="brief__name">от 3,31 млн ₽</div>

                    <div className="brief__memo">ЦЕНА квартиры</div>
                </div>

                <div className="col-sm-2 col-12 d-sm-block d-flex flex-column-reverse">
                    <div className="brief__name">
                        1кв.
                        2024
                        <img src="/assets/ico/question.svg"  alt="question" />
                    </div>

                    <div className="brief__memo">ПЕРВИЧНая СДАЧа</div>
                </div>

                <div className="col-md-3 col-sm-5 col-12 d-sm-block d-flex flex-column-reverse">
                    <div className="brief__name row w-100 mx-auto gap-2">
                        <div onClick={handlefratis} className="col">Ст</div>
                        <div onClick={handlefratis} className="col">1к</div>
                        <div onClick={handlefratis} className="col">2к</div>
                        <div onClick={handlefratis} className="col">
                            Коммерческая недвижимость
                        </div>
                    </div>

                    <div className="brief__memo">Квартиры в продаже</div>
                </div>
            </div>
        </div>
      </section>
      <Element name="test1" className="element">
      <section className="about" ref={myRef1}>
        <div className="container">
            <div className="row">
                <div className="col-md-5 col-sm-12 col-xl-6 col-12 about__description">
                    <div className="memo">О ПРОЕКТЕ</div>
                    <div className="section-header">Живи на солнечной стороне!</div>
                    <div className="description">
                        Современный жилой комплекс, расположенный у границы Симферополя,
                        поселок Молодежное, Республика Крым. Удобная транспортная доступность и
                        близость к центру города, является неоспоримым преимуществом. Квартиры с
                        удобными планировками и грамотной инсоляцией. Отсутствие точечной застройки,
                        продуманное расположение новостроек, своя территория, отсутствие проблем с парковой,
                        все это и многое другое означает Жить на солнечной стороне!
                    </div>
                </div>
                <div className="col-md-7 col-sm-12 col-xl-6 col-12 about__features">
                    <div className="d-flex flex-wrap about__features--box">
                        <div className="col-sm-6 col-md-6 col-12 d-flex">
                            <div className="about__features__ico">
                                <img src="/assets/img/icon/prem3.png"  alt="smart"/>
                            </div>
                            <div className="about__features__content">
                                <div className="about__features__header">Безопасность</div>
                                <div className="about__features__description">
                                    <ul>
                                        <li>Охрана территории</li>
                                        <li>Видеонаблюдение придомовой территории</li>
                                        <li>Закрытая территория</li>
                                    </ul>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-12 d-flex">
                            <div className="about__features__ico">
                                <img src="/assets/img/icon/prem1.png"  alt="smart"/>
                            </div>
                            <div className="about__features__content">
                                <div className="about__features__header">Умный жилой комплекс</div>
                                <div className="about__features__description">
                                    <ul>
                                        <li>Адаптивное освещение территории</li>
                                        <li>Система «Умный дом»</li>
                                        <li>Домофон с видеонаблюдением
и управлением с мобильного
телефона</li>
                                        
                                    </ul>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-12 d-flex">
                            <div className="about__features__ico">
                                <img src="/assets/img/icon/prem2.png"  alt="smart"/>
                            </div>
                            <div className="about__features__content">
                                <div className="about__features__header">Аллея здоровья и экопарк</div>
                                <div className="about__features__description">
                                <ul>
                                        <li>Зеленая прогулочная зона вдоль комплекса</li>
                                        <li>Зоны отдыха</li>
                                        <li>Собственный парк</li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-sm-6 col-md-6 col-12 d-flex">
                            <div className="about__features__ico">
                                <img src="/assets/img/icon/prem4.png"  alt="smart"/>
                            </div>
                            <div className="about__features__content">
                                <div className="about__features__header">Проектом предусмотрено строительство</div>
                                <div className="about__features__description">
                                <ul>
                                        
                                        <li>Современной школы на более
чем 1000  мест</li>
                                        <li>Двух детских садиков более чем
на 380 мест</li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-12 d-flex">
                            <div className="about__features__ico">
                                <img src="/assets/img/icon/prem5.png"  alt="smart"/>
                            </div>
                            <div className="about__features__content">
                                <div className="about__features__header">Собственная инфраструктура</div>
                                <div className="about__features__description">
                                <ul>
                                        <li>Центр по занятию фитнесом</li>
                                        <li>Торговые помещения для бизнеса
(магазины фермерских продуктов,
аптека, школа для развития деток) </li>
                                        <li>Общественные пространства</li>
                                        <li>Спортивные и детские площадки</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-12 d-flex">
                            <div className="about__features__ico">
                                <img src="/assets/img/icon/prem7.png"  alt="smart"/>
                            </div>
                            <div className="about__features__content">
                                <div className="about__features__header">Транспортная доступность</div>
                                <div className="about__features__description">
                                <ul>
                                        <li>10 минут до центра Симферополя</li>
                                        <li>В шаговой доступности остановки общественного транспорта </li>
                                        <li>Наземная и многоуровневая парковка</li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 about__slider mt-4">
                    
                    <AboutSliders cls="slide1" /> 
                </div>
            </div>
        </div>
        </section>
        </Element>
          <section className="location">
              
          <Element name="test2" className="element">      
        <div className="container" ref={myRef2}>
            <div className="section-header">
                Расположение и инфраструктура
          </div>
          <Courusels />
          </div> 
          </Element>
        <div className="location__map">
            <div className="container">
                <div className="location__description-header">
                    ЖК “Солнечный парк”расположен на границе с городом Симферополь, в 10 минутах от центра города.
                </div>
                <div className="location__description">
                    Адрес: Республика Крым, Симферопольский район, поселок Молодежное<br />
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
                            <img src="./assets/ico/close.svg"  alt="close"/>
                        </div>
                        <div className="section-header text-center">Заявка на консультацию</div>

                        <form ref={formModal1} onSubmit={sendEmailModal1}>
                            <input className='forme-input' type="text" name="fio" placeholder="ФИО" />
                            <input className='forme-input' type="text" name="phone" placeholder="Телефон" />
                            
                            <div className="custom-select active">
                                <div className="d-flex justify-content-between align-items-center" onClick={()=> setkvartirbol(true)}>
                                    <div className="custom-select__placeholder">Тема обращения</div>
                                    <div className="custom-select__value">{kvartir}</div>
                                </div>  
                                
                                {
                                    kvartirbol &&
                                    <div className="custom-select__list" onClick={()=> setkvartirbol(false)}>
                                        <div className="custom-select__option" onClick={()=> setkvartir('Вопрос по покупке квартиры')}>Вопрос по покупке квартиры</div>
                                        <div className="custom-select__option" onClick={()=> setkvartir('Запись на экскурсию')}>Запись на экскурсию</div>
                                        
                                    </div>
                                }
                                
                            </div>
                            <input type="text" hidden name="vopros" value={kvartir} />
                            <textarea name="message" placeholder="Комментарии"></textarea>
                            <input type="submit" className="btn" value="Отправить заявку" />
                            
                        </form>

                        <div className="confirm__memo">
                            Нажимая кнопку «Отправить заявку»,<br/>
                            вы соглашаетесь с <Link href="">условиями обработки личных данных</Link>
                        </div>
                      </div>
                          </>
                          }
                          

              <SolarYMaps mod={setmodal1} />
                
            </div>
        </div>
      </section>  
      <Element name="test3" className="element">
      <section className="characteristic" ref={myRef3}>
        <div className="container">
            <div className="row align-items-center mb-5">
                <div className="col-6 characteristic_h1 section-header">
                    Характеристики
                </div>
                <div className="col-6 characteristic_h1  section-btn d-flex justify-content-md-end align-self-center">
                <button className="btn" onClick={() => {
                  setsetingpage(0)
                  setseting(true)
                }}>Подробнее</button>
                </div>
            </div>

          <SetingSlide page={setsetingpage} hndl={setseting} />
          {
            seting && <SetingModal page={setingpage} hndl={setseting} />
          }
          
        </div>
        </section>
        </Element>
      {
                mat_modal &&  <MatPage hndl={setmat_modal} />
            }
        <div className="genplan__features">
            {
                genplan_modal &&
                <div className='genplan_modal'>
                    <div className="close" onClick={()=> setgenplan_modal(false)}>
                                <img src="/assets/ico/close.svg"  alt="close"/>
                            </div>
                    <div className='genplan_modal_title'>Рассчитайте свою ипотеку</div>
                    <div className='genplan_modal_text'>Приобретая жилье в жилом комплексе «Солнечный Парк», вы можете воспользоваться ипотечными программами от наших банков-партнеров:</div>
                    <div className='genplan_modal_title smaltit'>Выберите банк:</div>
                    <div className='genplan_modal_bank'>
                        <a href='https://www.rncb.ru/'><img src='/assets/img/bank1.png'  /></a>
                        <a href='https://www.genbank.ru/'><img src='/assets/img/bank2.png'  /></a>
                        <a href='https://abr.ru/'><img src='/assets/img/bank3.png'  /></a>
                    </div>
                </div>
              }
              {
                  doc_modal && 
                  <div className='genplan_modal genplan_modal_small'>
                        <div className="close" onClick={()=> setdoc_modal(false)}>
                                    <img src="/assets/ico/close.svg"  alt="close"/>
                                </div>
                        <div className='genplan_modal_title'>Документы</div>
                        
                        <div className='genplan_modal_bank'>
                            <a target="_blank" href='https://disk.yandex.ru/d/5MCvNtWhxRo0ew'><img src='/assets/img/dom1.png'  /></a>
                            <a target="_blank" href='https://disk.yandex.ru/d/89S31HqpRiSA9g'><img src='/assets/img/dom2.png'  /></a>
                            
                        </div>
                    </div>
              }
              
              
              
            <div className="container">
                <div className="row gap-5 w-100 mx-auto genplan__features--box">
                    <div className="genplan__item col-md col-12" onClick={()=> setgenplan_modal(true)}>
                    <svg width="17" height="22" viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.2571 0.785714C16.2571 0.57733 16.1744 0.37748 16.027 0.23013C15.8797 0.0827803 15.6798 0 15.4714 0H1.32856C1.12018 0 0.920327 0.0827803 0.772977 0.23013C0.625627 0.37748 0.542847 0.57733 0.542847 0.785714V21.2143C0.542847 21.4227 0.625627 21.6225 0.772977 21.7699C0.920327 21.9172 1.12018 22 1.32856 22H15.4714C15.6798 22 15.8797 21.9172 16.027 21.7699C16.1744 21.6225 16.2571 21.4227 16.2571 21.2143V0.785714ZM5.25713 19.6429H2.89999V17.2857H5.25713V19.6429ZM5.25713 15.7143H2.89999V13.3571H5.25713V15.7143ZM5.25713 11.7857H2.89999V9.42857H5.25713V11.7857ZM9.57856 19.6429H7.22142V17.2857H9.57856V19.6429ZM9.57856 15.7143H7.22142V13.3571H9.57856V15.7143ZM9.57856 11.7857H7.22142V9.42857H9.57856V11.7857ZM13.9 19.6429H11.5428V13.3571H13.9V19.6429ZM13.9 11.7857H11.5428V9.42857H13.9V11.7857ZM13.9 7.07143H2.89999V2.35714H13.9V7.07143Z" fill="#443571"/>
                    </svg>

                        <div className="genplan__item__text" >
                            Ипотека<br />
                            <b>от 4,5%</b>
                        </div>
                    </div>
                    <div className="genplan__item col-md col-12" onClick={()=> setmat_modal(true)}>
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.7231 0H3.87691C3.06113 0.000890796 2.27902 0.325352 1.70218 0.902194C1.12534 1.47904 0.800879 2.26115 0.799988 3.07692V16.9231C0.800879 17.7389 1.12534 18.521 1.70218 19.0978C2.27902 19.6746 3.06113 19.9991 3.87691 20H17.7231C18.5388 19.9991 19.321 19.6746 19.8978 19.0978C20.4746 18.521 20.7991 17.7389 20.8 16.9231V3.07692C20.7991 2.26115 20.4746 1.47904 19.8978 0.902194C19.321 0.325352 18.5388 0.000890796 17.7231 0ZM16.0043 6.64856L9.54278 14.3409C9.4719 14.4253 9.3837 14.4935 9.28416 14.5409C9.18463 14.5882 9.07607 14.6136 8.96585 14.6154H8.95287C8.84505 14.6153 8.73845 14.5926 8.63997 14.5487C8.54149 14.5048 8.45334 14.4407 8.38124 14.3606L5.61201 11.2837C5.54168 11.2091 5.48697 11.1212 5.4511 11.0251C5.41522 10.9291 5.39891 10.8268 5.40312 10.7244C5.40732 10.622 5.43196 10.5214 5.47558 10.4286C5.5192 10.3359 5.58093 10.2527 5.65714 10.1842C5.73334 10.1156 5.82249 10.0629 5.91933 10.0293C6.01618 9.99567 6.11877 9.98173 6.22108 9.98832C6.32338 9.9949 6.42335 10.0219 6.51508 10.0676C6.60682 10.1134 6.68849 10.177 6.75528 10.2548L8.93268 12.674L14.8264 5.65913C14.9586 5.50629 15.1457 5.41161 15.3471 5.39555C15.5486 5.3795 15.7483 5.44337 15.903 5.57335C16.0577 5.70333 16.1551 5.88899 16.1741 6.09018C16.193 6.29138 16.132 6.49196 16.0043 6.64856Z" fill="#D5D5D5"/>
                        </svg>

                        <div className="genplan__item__text">
                            Условия<br />
                            приобретения
                        </div>
                    </div>
                    <div className="genplan__item col-md col-12" onClick={()=> setmodal1(true)}>
                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.0032 16.9158L16.023 12.9355L18.8626 11.2954C19.0844 11.1672 19.2135 10.9236 19.1951 10.6681C19.1766 10.4125 19.0138 10.1899 18.7758 10.095L6.1138 5.04411C5.86558 4.94498 5.58215 5.00337 5.39312 5.19232C5.2041 5.38141 5.14572 5.66478 5.24477 5.913L10.2949 18.5765C10.3898 18.8145 10.6124 18.9774 10.868 18.9958C11.1236 19.0144 11.3673 18.8853 11.4953 18.6633L13.1353 15.8238L17.1152 19.804C17.2406 19.9295 17.4108 20 17.5881 20C17.7656 20 17.9357 19.9295 18.0611 19.804L20.0032 17.8616C20.2644 17.6004 20.2644 17.177 20.0032 16.9158Z" fill="#D5D5D5"/>
                    <path d="M3.13669 1.99003C2.87548 1.72902 2.45211 1.72896 2.19077 1.99003C1.92962 2.25125 1.92962 2.67475 2.19077 2.93596L3.67689 4.42209C3.80747 4.55266 3.97858 4.61798 4.14982 4.61798C4.32093 4.61798 4.49211 4.55266 4.62268 4.42209C4.8839 4.16088 4.8839 3.73744 4.62268 3.47623L3.13669 1.99003Z" fill="#D5D5D5"/>
                    <path d="M3.64033 6.6138C3.64033 6.24451 3.34087 5.94498 2.97144 5.94498H0.869756C0.500395 5.94498 0.200867 6.24444 0.200867 6.6138C0.200867 6.98316 0.500328 7.28269 0.869756 7.28269H2.97144C3.34087 7.28263 3.64033 6.98316 3.64033 6.6138Z" fill="#D5D5D5"/>
                    <path d="M3.36922 8.67805L1.88289 10.1643C1.62174 10.4255 1.62174 10.849 1.88289 11.1102C2.01353 11.2407 2.18471 11.3061 2.35582 11.3061C2.52693 11.3061 2.69817 11.2407 2.82875 11.1102L4.31501 9.62397C4.57622 9.36276 4.57622 8.93926 4.31501 8.67805C4.05386 8.41704 3.63056 8.41697 3.36922 8.67805Z" fill="#D5D5D5"/>
                    <path d="M6.81427 3.4396C7.18363 3.4396 7.48316 3.14013 7.48316 2.77071V0.668822C7.48316 0.299461 7.1837 0 6.81427 0C6.44497 0 6.14545 0.299394 6.14545 0.668822V2.77077C6.14545 3.14013 6.44491 3.4396 6.81427 3.4396Z" fill="#D5D5D5"/>
                    <path d="M9.3511 4.31017C9.52235 4.31017 9.69346 4.24485 9.82403 4.11428L11.3101 2.62815C11.5713 2.36694 11.5713 1.94343 11.3101 1.68222C11.0489 1.42114 10.6254 1.42114 10.3642 1.68222L8.87817 3.16842C8.61696 3.42963 8.61696 3.85313 8.87817 4.11428C9.00881 4.24485 9.17992 4.31017 9.3511 4.31017Z" fill="#D5D5D5"/>
                    </svg>

                        <div className="genplan__item__text">
                        Онлайн заявка<br />
на покупку квартиры
                        </div>
                    </div>
                    <div className="genplan__item col-md col-12" onClick={()=> handlefratis()}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.9571 8H15.2571V2.4C15.2571 1.76348 14.9997 1.15303 14.5416 0.702944C14.0835 0.252856 13.4621 0 12.8143 0H3.04283C2.39495 0 1.7736 0.252856 1.31547 0.702944C0.857347 1.15303 0.599976 1.76348 0.599976 2.4V23.2C0.599976 23.4122 0.685766 23.6157 0.838474 23.7657C0.991182 23.9157 1.1983 24 1.41426 24H6.70712C6.8151 24 6.91866 23.9579 6.99501 23.8828C7.07137 23.8078 7.11426 23.7061 7.11426 23.6V20.0225C7.11426 19.592 7.45117 19.2225 7.88936 19.201C7.99946 19.1958 8.10949 19.2126 8.21278 19.2504C8.31608 19.2882 8.41048 19.3462 8.49028 19.4209C8.57008 19.4956 8.63361 19.5855 8.67702 19.685C8.72043 19.7845 8.74282 19.8917 8.74283 20V23.6C8.74283 23.7061 8.78573 23.8078 8.86208 23.8828C8.93844 23.9579 9.04199 24 9.14997 24H22.5857C22.8016 24 23.0088 23.9157 23.1615 23.7657C23.3142 23.6157 23.4 23.4122 23.4 23.2V10.4C23.4 9.76348 23.1426 9.15303 22.6845 8.70294C22.2264 8.25286 21.605 8 20.9571 8ZM3.96298 20.7935C3.79433 20.8152 3.62301 20.7844 3.47307 20.7056C3.32312 20.6267 3.20207 20.5037 3.12691 20.3538C3.05175 20.2039 3.02626 20.0346 3.054 19.8698C3.08174 19.7049 3.16133 19.5527 3.28159 19.4346C3.40186 19.3164 3.55676 19.2382 3.72456 19.211C3.89237 19.1837 4.06464 19.2088 4.21722 19.2826C4.36979 19.3564 4.495 19.4754 4.57527 19.6227C4.65554 19.77 4.68684 19.9383 4.66479 20.104C4.64151 20.2789 4.56008 20.4412 4.43317 20.5659C4.30625 20.6906 4.14095 20.7706 3.96298 20.7935ZM3.96298 16.7935C3.79433 16.8152 3.62301 16.7844 3.47307 16.7056C3.32312 16.6267 3.20207 16.5037 3.12691 16.3538C3.05175 16.2039 3.02626 16.0346 3.054 15.8698C3.08174 15.7049 3.16133 15.5527 3.28159 15.4346C3.40186 15.3164 3.55676 15.2382 3.72456 15.211C3.89237 15.1837 4.06464 15.2088 4.21722 15.2826C4.36979 15.3564 4.495 15.4754 4.57527 15.6227C4.65554 15.77 4.68684 15.9383 4.66479 16.104C4.64151 16.2789 4.56008 16.4412 4.43317 16.5659C4.30625 16.6906 4.14095 16.7706 3.96298 16.7935ZM3.96298 12.7935C3.79433 12.8152 3.62301 12.7844 3.47307 12.7056C3.32312 12.6267 3.20207 12.5037 3.12691 12.3538C3.05175 12.2039 3.02626 12.0346 3.054 11.8698C3.08174 11.7049 3.16133 11.5527 3.28159 11.4346C3.40186 11.3164 3.55676 11.2382 3.72456 11.211C3.89237 11.1837 4.06464 11.2088 4.21722 11.2826C4.36979 11.3564 4.495 11.4754 4.57527 11.6227C4.65554 11.77 4.68684 11.9383 4.66479 12.104C4.64151 12.2789 4.56008 12.4412 4.43317 12.5659C4.30625 12.6906 4.14095 12.7706 3.96298 12.7935ZM3.96298 8.7935C3.79433 8.81517 3.62301 8.78441 3.47307 8.70555C3.32312 8.62669 3.20207 8.50368 3.12691 8.35378C3.05175 8.20389 3.02626 8.03463 3.054 7.86977C3.08174 7.70491 3.16133 7.55273 3.28159 7.43457C3.40186 7.31642 3.55676 7.23822 3.72456 7.21097C3.89237 7.18371 4.06464 7.20877 4.21722 7.28261C4.36979 7.35645 4.495 7.47537 4.57527 7.62269C4.65554 7.77 4.68684 7.93831 4.66479 8.104C4.64151 8.27885 4.56008 8.44125 4.43317 8.56594C4.30625 8.69063 4.14095 8.77063 3.96298 8.7935ZM3.96298 4.7935C3.79433 4.81517 3.62301 4.78441 3.47307 4.70555C3.32312 4.62669 3.20207 4.50368 3.12691 4.35378C3.05175 4.20388 3.02626 4.03463 3.054 3.86977C3.08174 3.70491 3.16133 3.55273 3.28159 3.43457C3.40186 3.31642 3.55676 3.23822 3.72456 3.21097C3.89237 3.18371 4.06464 3.20877 4.21722 3.28261C4.36979 3.35645 4.495 3.47537 4.57527 3.62269C4.65554 3.77 4.68684 3.93831 4.66479 4.104C4.64151 4.27885 4.56008 4.44125 4.43317 4.56594C4.30625 4.69063 4.14095 4.77063 3.96298 4.7935ZM8.0344 16.7935C7.86576 16.8152 7.69444 16.7844 7.5445 16.7056C7.39455 16.6267 7.2735 16.5037 7.19834 16.3538C7.12318 16.2039 7.09768 16.0346 7.12543 15.8698C7.15317 15.7049 7.23276 15.5527 7.35302 15.4346C7.47328 15.3164 7.62819 15.2382 7.79599 15.211C7.96379 15.1837 8.13607 15.2088 8.28864 15.2826C8.44122 15.3564 8.56643 15.4754 8.6467 15.6227C8.72697 15.77 8.75827 15.9383 8.73622 16.104C8.71294 16.2789 8.63151 16.4412 8.50459 16.5659C8.37767 16.6906 8.21238 16.7706 8.0344 16.7935ZM8.0344 12.7935C7.86576 12.8152 7.69444 12.7844 7.5445 12.7056C7.39455 12.6267 7.2735 12.5037 7.19834 12.3538C7.12318 12.2039 7.09768 12.0346 7.12543 11.8698C7.15317 11.7049 7.23276 11.5527 7.35302 11.4346C7.47328 11.3164 7.62819 11.2382 7.79599 11.211C7.96379 11.1837 8.13607 11.2088 8.28864 11.2826C8.44122 11.3564 8.56643 11.4754 8.6467 11.6227C8.72697 11.77 8.75827 11.9383 8.73622 12.104C8.71294 12.2789 8.63151 12.4412 8.50459 12.5659C8.37767 12.6906 8.21238 12.7706 8.0344 12.7935ZM8.0344 8.7935C7.86576 8.81517 7.69444 8.78441 7.5445 8.70555C7.39455 8.62669 7.2735 8.50368 7.19834 8.35378C7.12318 8.20389 7.09768 8.03463 7.12543 7.86977C7.15317 7.70491 7.23276 7.55273 7.35302 7.43457C7.47328 7.31642 7.62819 7.23822 7.79599 7.21097C7.96379 7.18371 8.13607 7.20877 8.28864 7.28261C8.44122 7.35645 8.56643 7.47537 8.6467 7.62269C8.72697 7.77 8.75827 7.93831 8.73622 8.104C8.71294 8.27885 8.63151 8.44125 8.50459 8.56594C8.37767 8.69063 8.21238 8.77063 8.0344 8.7935ZM8.0344 4.7935C7.86576 4.81517 7.69444 4.78441 7.5445 4.70555C7.39455 4.62669 7.2735 4.50368 7.19834 4.35378C7.12318 4.20388 7.09768 4.03463 7.12543 3.86977C7.15317 3.70491 7.23276 3.55273 7.35302 3.43457C7.47328 3.31642 7.62819 3.23822 7.79599 3.21097C7.96379 3.18371 8.13607 3.20877 8.28864 3.28261C8.44122 3.35645 8.56643 3.47537 8.6467 3.62269C8.72697 3.77 8.75827 3.93831 8.73622 4.104C8.71294 4.27885 8.63151 4.44125 8.50459 4.56594C8.37767 4.69063 8.21238 4.77063 8.0344 4.7935ZM12.1058 20.7935C11.9372 20.8152 11.7659 20.7844 11.6159 20.7056C11.466 20.6267 11.3449 20.5037 11.2698 20.3538C11.1946 20.2039 11.1691 20.0346 11.1969 19.8698C11.2246 19.7049 11.3042 19.5527 11.4244 19.4346C11.5447 19.3164 11.6996 19.2382 11.8674 19.211C12.0352 19.1837 12.2075 19.2088 12.3601 19.2826C12.5126 19.3564 12.6379 19.4754 12.7181 19.6227C12.7984 19.77 12.8297 19.9383 12.8076 20.104C12.7844 20.2789 12.7029 20.4412 12.576 20.5659C12.4491 20.6906 12.2838 20.7706 12.1058 20.7935ZM12.1058 16.7935C11.9372 16.8152 11.7659 16.7844 11.6159 16.7056C11.466 16.6267 11.3449 16.5037 11.2698 16.3538C11.1946 16.2039 11.1691 16.0346 11.1969 15.8698C11.2246 15.7049 11.3042 15.5527 11.4244 15.4346C11.5447 15.3164 11.6996 15.2382 11.8674 15.211C12.0352 15.1837 12.2075 15.2088 12.3601 15.2826C12.5126 15.3564 12.6379 15.4754 12.7181 15.6227C12.7984 15.77 12.8297 15.9383 12.8076 16.104C12.7844 16.2789 12.7029 16.4412 12.576 16.5659C12.4491 16.6906 12.2838 16.7706 12.1058 16.7935ZM12.1058 12.7935C11.9372 12.8152 11.7659 12.7844 11.6159 12.7056C11.466 12.6267 11.3449 12.5037 11.2698 12.3538C11.1946 12.2039 11.1691 12.0346 11.1969 11.8698C11.2246 11.7049 11.3042 11.5527 11.4244 11.4346C11.5447 11.3164 11.6996 11.2382 11.8674 11.211C12.0352 11.1837 12.2075 11.2088 12.3601 11.2826C12.5126 11.3564 12.6379 11.4754 12.7181 11.6227C12.7984 11.77 12.8297 11.9383 12.8076 12.104C12.7844 12.2789 12.7029 12.4412 12.576 12.5659C12.4491 12.6906 12.2838 12.7706 12.1058 12.7935ZM12.1058 8.7935C11.9372 8.81517 11.7659 8.78441 11.6159 8.70555C11.466 8.62669 11.3449 8.50368 11.2698 8.35378C11.1946 8.20389 11.1691 8.03463 11.1969 7.86977C11.2246 7.70491 11.3042 7.55273 11.4244 7.43457C11.5447 7.31642 11.6996 7.23822 11.8674 7.21097C12.0352 7.18371 12.2075 7.20877 12.3601 7.28261C12.5126 7.35645 12.6379 7.47537 12.7181 7.62269C12.7984 7.77 12.8297 7.93831 12.8076 8.104C12.7844 8.27885 12.7029 8.44125 12.576 8.56594C12.4491 8.69063 12.2838 8.77063 12.1058 8.7935ZM12.1058 4.7935C11.9372 4.81517 11.7659 4.78441 11.6159 4.70555C11.466 4.62669 11.3449 4.50368 11.2698 4.35378C11.1946 4.20388 11.1691 4.03463 11.1969 3.86977C11.2246 3.70491 11.3042 3.55273 11.4244 3.43457C11.5447 3.31642 11.6996 3.23822 11.8674 3.21097C12.0352 3.18371 12.2075 3.20877 12.3601 3.28261C12.5126 3.35645 12.6379 3.47537 12.7181 3.62269C12.7984 3.77 12.8297 3.93831 12.8076 4.104C12.7844 4.27885 12.7029 4.44125 12.576 4.56594C12.4491 4.69063 12.2838 4.77063 12.1058 4.7935ZM21.5678 22.4H15.2571V9.6H20.9571C21.1731 9.6 21.3802 9.68429 21.5329 9.83431C21.6856 9.98434 21.7714 10.1878 21.7714 10.4V22.2C21.7714 22.253 21.75 22.3039 21.7118 22.3414C21.6736 22.3789 21.6218 22.4 21.5678 22.4Z" fill="#443571"/>
<path d="M19.3286 19.1999C19.1675 19.1999 19.0101 19.2468 18.8762 19.3347C18.7423 19.4226 18.6379 19.5475 18.5763 19.6937C18.5146 19.8399 18.4985 20.0008 18.5299 20.1559C18.5613 20.3111 18.6389 20.4537 18.7528 20.5656C18.8666 20.6774 19.0117 20.7536 19.1697 20.7845C19.3277 20.8154 19.4914 20.7995 19.6402 20.739C19.789 20.6784 19.9161 20.5759 20.0056 20.4443C20.0951 20.3128 20.1428 20.1581 20.1428 19.9999C20.1428 19.7877 20.0571 19.5842 19.9043 19.4342C19.7516 19.2842 19.5445 19.1999 19.3286 19.1999Z" fill="#443571"/>
<path d="M19.3286 15.2001C19.1675 15.2001 19.0101 15.247 18.8762 15.3349C18.7423 15.4228 18.6379 15.5478 18.5763 15.6939C18.5146 15.8401 18.4985 16.001 18.5299 16.1562C18.5613 16.3113 18.6389 16.4539 18.7528 16.5658C18.8666 16.6777 19.0117 16.7539 19.1697 16.7847C19.3277 16.8156 19.4914 16.7997 19.6402 16.7392C19.789 16.6786 19.9161 16.5761 20.0056 16.4445C20.0951 16.313 20.1428 16.1583 20.1428 16.0001C20.1428 15.7879 20.0571 15.5844 19.9043 15.4344C19.7516 15.2844 19.5445 15.2001 19.3286 15.2001Z" fill="#443571"/>
<path d="M19.3286 11.1998C19.1675 11.1998 19.0101 11.2467 18.8762 11.3346C18.7423 11.4225 18.6379 11.5475 18.5763 11.6936C18.5146 11.8398 18.4985 12.0007 18.5299 12.1559C18.5613 12.3111 18.6389 12.4536 18.7528 12.5655C18.8666 12.6774 19.0117 12.7536 19.1697 12.7844C19.3277 12.8153 19.4914 12.7994 19.6402 12.7389C19.789 12.6783 19.9161 12.5758 20.0056 12.4443C20.0951 12.3127 20.1428 12.158 20.1428 11.9998C20.1428 11.7876 20.0571 11.5841 19.9043 11.4341C19.7516 11.2841 19.5445 11.1998 19.3286 11.1998Z" fill="#443571"/>
<path d="M16.0714 19.1999C15.9104 19.1999 15.753 19.2468 15.619 19.3347C15.4851 19.4226 15.3808 19.5475 15.3191 19.6937C15.2575 19.8399 15.2414 20.0008 15.2728 20.1559C15.3042 20.3111 15.3818 20.4537 15.4956 20.5656C15.6095 20.6774 15.7546 20.7536 15.9126 20.7845C16.0705 20.8154 16.2343 20.7995 16.383 20.739C16.5318 20.6784 16.659 20.5759 16.7485 20.4443C16.838 20.3128 16.8857 20.1581 16.8857 19.9999C16.8857 19.7877 16.7999 19.5842 16.6472 19.4342C16.4945 19.2842 16.2874 19.1999 16.0714 19.1999Z" fill="#443571"/>
<path d="M16.0714 15.2001C15.9104 15.2001 15.753 15.247 15.619 15.3349C15.4851 15.4228 15.3808 15.5478 15.3191 15.6939C15.2575 15.8401 15.2414 16.001 15.2728 16.1562C15.3042 16.3113 15.3818 16.4539 15.4956 16.5658C15.6095 16.6777 15.7546 16.7539 15.9126 16.7847C16.0705 16.8156 16.2343 16.7997 16.383 16.7392C16.5318 16.6786 16.659 16.5761 16.7485 16.4445C16.838 16.313 16.8857 16.1583 16.8857 16.0001C16.8857 15.7879 16.7999 15.5844 16.6472 15.4344C16.4945 15.2844 16.2874 15.2001 16.0714 15.2001Z" fill="#443571"/>
<path d="M16.0714 11.1998C15.9104 11.1998 15.753 11.2467 15.619 11.3346C15.4851 11.4225 15.3808 11.5475 15.3191 11.6936C15.2575 11.8398 15.2414 12.0007 15.2728 12.1559C15.3042 12.3111 15.3818 12.4536 15.4956 12.5655C15.6095 12.6774 15.7546 12.7536 15.9126 12.7844C16.0705 12.8153 16.2343 12.7994 16.383 12.7389C16.5318 12.6783 16.659 12.5758 16.7485 12.4443C16.838 12.3127 16.8857 12.158 16.8857 11.9998C16.8857 11.7876 16.7999 11.5841 16.6472 11.4341C16.4945 11.2841 16.2874 11.1998 16.0714 11.1998Z" fill="#443571"/>
</svg>


                        <div className="genplan__item__text">
                        Выбрать<br />
квартиру
                        </div>
                    </div>
                    <div className="genplan__item col-md col-12" onClick={()=> setdoc_modal(true)}>
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
      <section className="steps">
        <div className="container">
        <div className="row align-items-center mb-5">
                <div className="col-6 characteristic_h1 section-header">
                Ход строительства
                </div>
                <div className="col-6 characteristic_h1  section-btn d-flex justify-content-md-end align-self-center">
                 <a className="btn"><Link href="/builds"> Смотреть всё</Link></a>
                </div>
          </div>
          
            
          {
            false &&
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
                        <MenuItem value={10}>2022</MenuItem>
                        
                        </Select>
                    </FormControl>
            </div>
                  }
          <StepBuild />
          <div className='maaaar'></div>
          <div className="row align-items-center mb-5">
                <div className="col-6 characteristic_h1 section-header">
                Видеоотчет январь 2022
                </div>
                <div className="col-6 characteristic_h1  section-btn d-flex justify-content-md-end align-self-center">
                 <a className="btn"><Link href="https://www.youtube.com/channel/UCfwmRlxxlBg-Ich06wVevVw"> Смотреть всё</Link></a>
                </div>
          </div>
          
          <div className='characteristic_video'>

             <iframe width="560" height="315" src="https://www.youtube.com/embed/88HawK1Fzjc?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
               
          </div>
      </section>
      {
        false &&
        <section className="news">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-6 section-header">Новости</div>
                <div className="col-6 d-flex allnews align-self-center justify-content-end section-btn">
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
      }
      
      <Element name="test4" className="element">
      <section className="bottom-map" ref={myRef4}>
              <div id="bottom-map">
              { modal2 &&
                          <>  
                    <div className="dasboarde" onClick={()=> setmodal2(false)}></div>
                    <div className="modal-window">
                        <div className="close" onClick={()=> setmodal2(false)}>
                            <img src="/assets/ico/close.svg"  alt="close"/>
                        </div>
                        <div className="modal_header">
                          <div className="modal_header-box">
                            <section>
                            <div className="modal_header_title">Заказ обратного звонка</div>
                            <div className='modal_header_info'>
                              <p>Обращаем ваше внимание, что режим работы службы поддержки: 
<div className='modal_header-time'> с ПН по ПТ — 9:30 - 18:00, СБ — 10:00 - 14:00.</div>
<div className='modal_header-gren'>ВС — выходной</div></p>
                            </div>
                            </section>
                            <img src="/assets/img/baba.png"  alt="close"/>
                          </div>
                        </div>

                        <form ref={formModal2} onSubmit={sendEmailModal2}>
                            <input className='forme-input' type="text" name='phone' placeholder="Телефон" />

                            <input className='forme-input' type="text" name='username' placeholder="Ваше имя" />
                            <input className='forme-input' type="email" name='mails' placeholder="Email" />

                            <div className="row align-items-center">
                                <div className="modal-checkbox col-5">
                                    <label onClick={()=> setdate_modal(false)}>
                                        <input type="radio" name='radio' value="Сейчас" checked/>
                                        <span>
                                            <span className="checkbox"></span>
                                            <span className="text">Сейчас</span>
                                        </span>
                                    </label>
                                </div>
                                <div className="modal-checkbox col-5">
                                    <label onClick={()=> setdate_modal(true)}>
                                        <input type="radio" name='radio' value={`на время: дата - ${datevalue}, время ${timevalue}`}/>
                                        <span>
                                            <span className="checkbox"></span>
                                            <span className="text">Выбрать время</span>
                                        </span>
                                    </label>
                                </div>
                              </div>
                              {
                                date_modal &&
                                <LocalizationProvider dateAdapter={AdapterDateFns} locale={ruLocale}>
                                  <div className='datepiceres'>
                                    <div className='datepiceres_box'>
                                      
                                      <DatePicker
                                        label="Дата"
                                        value={datevalue}
                                        onChange={(newValue) => {
                                          setdateValue(newValue);
                                        }}
                                        renderInput={(params) => <TextField {...params} />}
                                      />
                                      </div>

                                      <div className='Время'>
                                      <TimePicker
                                        label="Время"
                                        value={timevalue}
                                        onChange={(newValue) => {
                                          settimeValue(newValue);
                                        }}
                                        renderInput={(params) => <TextField {...params} />}
                                      />
                                      </div>
								  </div>
								</LocalizationProvider>
                              }
                              
                             
                              <input type="submit" className="btn" value="Отправить заявку" />
                           
                        </form>

                        <div className="confirm__memo">
                            Нажимая кнопку «Отправить заявку»,<br/>
                            вы соглашаетесь с <Link href="">условиями обработки личных данных</Link>
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
                              
      
      
                              Посещение офиса возможно
                              только по предварительной записи.
                          </div>
                      </div>
                      
                  </div>

                  <div className="phone">
                      <div className="bottom-map__wrap">
                          +7 978 718 08 08

                          <div className="contacts__memo">
                          Обращаем ваше внимание, что режим работы службы поддержки: 
с ПН по ПТ — 9:30 - 18:00, 
СБ — 10:00 - 14:00. ВС — выходной
                          </div>
                      </div>
                  </div>

                  
                  <button className="btn yellow" onClick={()=> setmodal1(true)}>Записаться</button>
              </div>
          </div>
        </section>
      </Element>
      <Element name="test5" className="element"></Element>
      <footer className="prefooter" ref={myRef5}>
        <div className="container">
            <div className='prefooter_box'>
              <div className="prefooter__top">
                  
                  <div className="prefooter__contact ">
                      <a className="phone" href='tel:+7 978 718 08 08'><div>+7 978 718 08 08</div></a>
                      
                  </div>
                  <div className="zastr">
                      <button className="btn prefooter__btn" onClick={()=> setmodal2(true)}>Обратится к застройщику</button>

                  </div>
                  
                  </div>
                  <div className="upe">
              Наверх
              <Links className="nav-menu__link col" activeClass="active" to="test0" spy={true} smooth={true}  duration={100}>
                <img src="/assets/img/up.png"  alt="to up" onClick={executeScroll1} />
                </Links>
                      
                  </div>
            </div>
              <hr />

              <div className="row prefooter__middle">
                  <div className="col-md-4 col-12 mb-md-0 mb-5 flatic_cvart">
                      <div onClick={handlefratis} className="builders flat">КВАРТИРЫ</div>
                      <div onClick={handlefratis} className="builders builder">Коммерческая недвижимость</div>
                  </div>
                  <div className="col">
                      <div className="prefooter__link-header">О проекте</div>
                      <ul className="prefooter__list">
                          <a onClick={executeScroll1}><li>Безопасность</li></a>
                          <a onClick={executeScroll1}><li>Умный жилой комплекс</li></a>
                          <a onClick={executeScroll1}><li>Транспорт</li></a>
                          <a onClick={executeScroll1}><li>Собственная инфраструктура</li></a>
                          <a onClick={executeScroll1}><li>Аллея здоровья и экопарк</li></a>
                          <a onClick={executeScroll1}><li>Все для детей</li></a>
                      </ul>
                  </div>
                  <div className="col">
                      <div className="prefooter__link-header">Подбор квартиры</div>
                      <ul className="prefooter__list">
                          
                          <a onClick={handlefratis}><li>Однокомнатные</li></a>
                          <a onClick={handlefratis}><li>Двухкомнатные</li></a>
                          <a onClick={handlefratis}><li>Трехкомнатные</li></a>
                          <a onClick={handlefratis}><li>Четырехкомнатные</li></a>
                          <a onClick={handlefratis}><li>Двухуровневые</li></a>
                      </ul>
                  </div>
                  <div className="col">
                      <div className="prefooter__link-header">Расположение</div>
                      <ul className="prefooter__list">
                          <a onClick={executeScroll2}><li>Инфраструктура</li></a>
                          <a onClick={executeScroll2}><li>Транспорт</li></a>
                      </ul>
                  </div>
                  <div className="col">
                      <div className="prefooter__link-header">Преимущество</div>
                      <ul className="prefooter__list">
                          <a onClick={()=> {
                                  setsetingpage(1)
                                  setseting(true)
                          } }><li>Архитектура и фасады</li></a>
                          <a onClick={()=> {
                                  setsetingpage(2)
                                  setseting(true)
                          } }><li>Технология строительства</li></a>
                          <a onClick={()=> {
                                  setsetingpage(3)
                                  setseting(true)
                          } }><li>Инфраструктура</li></a>
                          <a onClick={()=> {
                                  setsetingpage(4)
                                  setseting(true)
                          } }><li>Общественные пространства</li></a>
                          <a onClick={()=> {
                                  setsetingpage(5)
                                  setseting(true)
                          } }><li>Планировочные решения</li></a>
                          <a onClick={()=> {
                                  setsetingpage(6)
                                  setseting(true)
                          } }><li>Локация</li></a>
                      </ul>
                  </div>
                  <div className="col">
                      <div className="prefooter__link-header">Контакты</div>
                      <ul className="prefooter__list">
                          <Link href=""><li>Офис продаж</li></Link>
                          <a onClick={()=> setmat_modal(true)}><li>Условия приобритения</li></a>
                          <a onClick={()=> setdoc_modal(true)}><li>Документы</li></a>
                          <a onClick={executeScroll5}><li>Ход строительства</li></a>
                      </ul>
                  </div>
              </div>

              <div className="prefooter__bottom row justify-content-between">
                  <div className="search col-md-3 col-12">
                      
                  </div>

                  <div className="prefooter__social col-md-4 col-12 mt-4 d-flex justify-content-between align-items-center">
                      Мы в социальных сетях:
                      <Link href="">
                          <img src="/assets/ico/social/yt.svg"  alt="youtube"/>
                      </Link>
                      <Link href="">
                          <img src="/assets/ico/social/vk.svg"  alt="vkontakte"/>
                      </Link>
                      <Link href="">
                          <img src="/assets/ico/social/inst.svg"  alt="instagram"/>
                      </Link>
                      <Link href="">
                          <img src="/assets/ico/social/fb.svg"  alt="facebook"/>
                      </Link>
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
                      
                  </div>
              </div>
          </div>
      </footer>
      
      
      
    </>
  )
}

export default Home
