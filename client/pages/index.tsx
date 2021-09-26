import type { NextPage } from 'next'
import React from 'react'
import Courusels from '../components/Corusels/Courusels'
import Sliders from '../components/Sliders/Sliders'

const Home: NextPage = () => {
  

  return (
    <>
      <header>
        <div className="container">
            <div className="row head">
                <div className="logo col-md-2 col-6">
                    <img src="./assets/img/logo.png" alt="logotype" />
                </div>
                <div className="nav-menu d-md-flex align-self-center align-items-end row px-0 col-6">
                    <a href="#" className="nav-menu__link col">О проекте</a>
                    <a href="#" className="nav-menu__link col">ПОДБОР КВАРТИРЫ</a>
                    <a href="#" className="nav-menu__link col">РАСПОЛОЖЕНИЕ</a>
                    <a href="#" className="nav-menu__link col">ХАРАКТЕРИСТИКИ</a>
                    <a href="#" className="nav-menu__link col">Контакты</a>
                    
                </div>
                <div className="flats_box col-2 px-0">
                    <a href="#" className="nav-menu__link green_link col">
                        <img src="./assets/ico/kvartiri.svg" alt="kvartiri" />

                        КВАРТИРЫ
                    </a>
                    <a href="#" className="nav-menu__link green_link col">
                        <img src="./assets/ico/estate.svg" alt="estate" />

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
      <section className="about">
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
                                <img src="./assets/ico/smart.svg" alt="smart"/>
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
                                <img src="./assets/ico/smart.svg" alt="smart"/>
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
                                <img src="./assets/ico/smart.svg" alt="smart"/>
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
                                <img src="./assets/ico/smart.svg" alt="smart"/>
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
                                <img src="./assets/ico/smart.svg" alt="smart"/>
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
                                <img src="./assets/ico/smart.svg" alt="smart"/>
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
                    <div className="arrow left"></div>
                    <img src="./assets/img/about-slider.png" alt="middle slider" />

                    <div className="arrow right"></div>

                    <div className="top-slider__navigation row justify-content-around align-items-center">
                        <div className="navigation__point active"></div>
                        <div className="navigation__point"></div>
                        <div className="navigation__point"></div>
                        <div className="navigation__point"></div>
                        <div className="navigation__point"></div>
                    </div>
                </div>
            </div>
        </div>
      </section>
      <section className="location">
        <div className="container">
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

                    <button className="btn">
                        Заявка на экскурсию
                    </button>
                </div>
            </div>
        </div>
      </section>  
      <section className="characteristic">
        <div className="container">
            <div className="row align-items-center mb-5">
                <div className="col-md-6 col-12 section-header">
                    Характеристики
                </div>
                <div className="col-md-6 col-12 section-btn d-flex justify-content-md-end align-self-center">
                    <button className="btn">Подробнее</button>
                </div>
            </div>

            <div className="characteristic__slider row flex-md-wrap flex-nowrap">
                

                <div className="characteristic__slider__item col-md-2 col-6">
                    <img src="./assets/img/characteristic__slider.png" alt="1"/>

                    <div className="characteristic__slider__title">
                        Фасад
                    </div>
                </div>
                <div className="characteristic__slider__item col-md-2 col-6">
                    <img src="./assets/img/characteristic__slider.png" alt="1"/>

                    <div className="characteristic__slider__title">
                        Фасад
                    </div>
                </div>
                <div className="characteristic__slider__item col-md-2 col-6">
                    <img src="./assets/img/characteristic__slider.png" alt="1"/>

                    <div className="characteristic__slider__title">
                        Фасад
                    </div>
                </div>
                <div className="characteristic__slider__item col-md-2 col-6">
                    <img src="./assets/img/characteristic__slider.png" alt="1"/>

                    <div className="characteristic__slider__title">
                        Фасад
                    </div>
                </div>
                <div className="characteristic__slider__item col-md-2 col-6">
                    <img src="./assets/img/characteristic__slider.png" alt="1"/>

                    <div className="characteristic__slider__title">
                        Фасад
                    </div>
                </div>
                <div className="characteristic__slider__item col-md-2 col-6">
                    <img src="./assets/img/characteristic__slider.png" alt="1"/>

                    <div className="characteristic__slider__title">
                        Фасад
                    </div>
                </div>

                
            </div>
        </div>
      </section>
      <section className="genplan">
        <div className="container">
            <div className="section-header col-12">
                Генплан
            </div>
        </div>

        <img src="./assets/img/genplan.png" alt="genplan" className="genplan__bg"/>
        </section>
        <div className="genplan__features">
            <div className="container">
                <div className="row gap-5 w-100 mx-auto genplan__features--box">
                    <div className="genplan__item col-md col-12 active">
                        <img src="./assets/ico/genplan/1.svg" alt="1"/>

                        <div className="genplan__item__text">
                            Ипотека<br />
                            <b>от 4,5%</b>
                        </div>
                    </div>
                    <div className="genplan__item col-md col-12">
                        <img src="./assets/ico/genplan/2.svg" alt="2"/>

                        <div className="genplan__item__text">
                            Условия<br />
                            приобретения
                        </div>
                    </div>
                    <div className="genplan__item col-md col-12">
                        <img src="./assets/ico/genplan/3.svg" alt="3"/>

                        <div className="genplan__item__text">
                            Выбрать<br />
                            квартиру
                        </div>
                    </div>
                    <div className="genplan__item col-md col-12">
                        <img src="./assets/ico/genplan/4.svg" alt="4"/>

                        <div className="genplan__item__text">
                            Информация<br />
                            о застройщике
                        </div>
                    </div>
                    <div className="genplan__item col-md col-12">
                        <img src="./assets/ico/genplan/5.svg" alt="5"/>

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
            <div className="section-header">
                Расположение и инфраструктура
            </div>

              <div className="row steps__slider flex-md-wrap flex-nowrap">
                  <div className="arrow left disabled"></div>

                  <div className="step col-md-3 col-6">
                      <img src="./assets/img/infrastructure-shop.png" alt="infrastructure"/>

                      <div className="step__date">Март 2021</div>
                      <div className="step__photo-count">5 фото</div>
                  </div>
                  <div className="step col-md-3 col-6">
                      <img src="./assets/img/infrastructure-shop.png" alt="infrastructure"/>

                      <div className="step__date">Март 2021</div>
                      <div className="step__photo-count">5 фото</div>
                  </div>
                  <div className="step col-md-3 col-6">
                      <img src="./assets/img/infrastructure-shop.png" alt="infrastructure"/>

                      <div className="step__date">Март 2021</div>
                      <div className="step__photo-count">5 фото</div>
                  </div>
                  <div className="step col-md-3 col-6">
                      <img src="./assets/img/infrastructure-shop.png" alt="infrastructure"/>

                      <div className="step__date">Март 2021</div>
                      <div className="step__photo-count">5 фото</div>
                  </div>

                  <div className="arrow right"></div>
              </div>

              <div className="slider__progress">
                  <div className="line"></div>
              </div>
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
      <section className="bottom-map">
        <div id="bottom-map">
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
                  <button className="btn yellow">Записаться</button>
              </div>
          </div>
      </section>
      <footer className="prefooter">
        <div className="container">
              <div className="prefooter__top row align-items-center">
                  <div className="to-up col-2 d-flex align-items-center">
                      <img src="./assets/ico/to-up.svg" alt="to up" />
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
                      <img src="./assets/ico/search.svg" id="search-ico" alt="search ico"/>
                      <input type="text" placeholder="Поиск по сайту" className="w-100" />
                  </div>

                  <div className="prefooter__social col-md-4 col-12 mt-4 d-flex justify-content-between align-items-center">
                      Мы в социальных сетях:
                      <a href="">
                          <img src="./assets/ico/social/yt.svg" alt="youtube"/>
                      </a>
                      <a href="">
                          <img src="./assets/ico/social/vk.svg" alt="vkontakte"/>
                      </a>
                      <a href="">
                          <img src="./assets/ico/social/inst.svg" alt="instagram"/>
                      </a>
                      <a href="">
                          <img src="./assets/ico/social/fb.svg" alt="facebook"/>
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
                      <img src="./assets/img/studio-logo.png" alt="studio logo"/>
                  </div>
              </div>
          </div>
      </footer>
      
      
      
    </>
  )
}

export default Home
