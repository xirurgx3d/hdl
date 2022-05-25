import React, {MutableRefObject} from "react";
import AboutSlider from "../AboutSlide/AboutSlide";

type Props = {
    reference: MutableRefObject<any>
}

const AboutSection = ({reference}: Props) => {

    return (
        <section className="about" ref={reference}>
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
                            <article className="col-sm-6 col-md-6 col-12 d-flex">
                                <div className="about__features__ico">
                                    <img src="/assets/img/icon/prem3.png" alt="smart"/>
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
                            </article>
                            <article className="col-sm-6 col-md-6 col-12 d-flex">
                                <div className="about__features__ico">
                                    <img src="/assets/img/icon/prem1.png" alt="smart"/>
                                </div>
                                <div className="about__features__content">
                                    <div className="about__features__header">Умный жилой комплекс</div>
                                    <div className="about__features__description">
                                        <ul>
                                            <li>Адаптивное освещение территории</li>
                                            <li>Система «Умный дом»</li>
                                            <li>Домофон с видеонаблюдением
                                                и управлением с мобильного
                                                телефона
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </article>
                            <article className="col-sm-6 col-md-6 col-12 d-flex">
                                <div className="about__features__ico">
                                    <img src="/assets/img/icon/prem2.png" alt="smart"/>
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
                            </article>
                            <article className="col-sm-6 col-md-6 col-12 d-flex">
                                <div className="about__features__ico">
                                    <img src="/assets/img/icon/prem4.png" alt="smart"/>
                                </div>
                                <div className="about__features__content">
                                    <div className="about__features__header">Проектом предусмотрено
                                        строительство
                                    </div>
                                    <div className="about__features__description">
                                        <ul>
                                            <li>Современной школы на более
                                                чем 1000 мест
                                            </li>
                                            <li>Двух детских садиков более чем
                                                на 380 мест
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </article>
                            <article className="col-sm-6 col-md-6 col-12 d-flex">
                                <div className="about__features__ico">
                                    <img src="/assets/img/icon/prem5.png" alt="smart"/>
                                </div>
                                <div className="about__features__content">
                                    <div className="about__features__header">Собственная инфраструктура</div>
                                    <div className="about__features__description">
                                        <ul>
                                            <li>Центр по занятию фитнесом</li>
                                            <li>Торговые помещения для бизнеса
                                                (магазины фермерских продуктов,
                                                аптека, школа для развития деток)
                                            </li>
                                            <li>Общественные пространства</li>
                                            <li>Спортивные и детские площадки</li>
                                        </ul>
                                    </div>
                                </div>
                            </article>
                            <article className="col-sm-6 col-md-6 col-12 d-flex">
                                <div className="about__features__ico">
                                    <img src="/assets/img/icon/prem7.png" alt="smart"/>
                                </div>
                                <div className="about__features__content">
                                    <div className="about__features__header">Транспортная доступность</div>
                                    <div className="about__features__description">
                                        <ul>
                                            <li>10 минут до центра Симферополя</li>
                                            <li>В шаговой доступности остановки общественного транспорта</li>
                                            <li>Наземная и многоуровневая парковка</li>
                                        </ul>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                    <div className="col-12 about__slider mt-4">
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection;