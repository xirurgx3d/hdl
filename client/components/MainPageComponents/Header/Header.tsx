import {Link as Links} from "react-scroll/modules";
import Link from "next/link";
import React from "react";

type Props = {
    handlefratis: () => void;
}

const Header = ({handlefratis}: Props) => {
    return (
        <header>
            <div className="container">
                <div className="row head">
                    <div className="logo col-md-2 col-3">
                        <img src="/assets/img/logo3.svg" alt="logotype"/>
                    </div>
                    <div className="nav-menu d-md-flex align-self-center align-items-end row px-0 col-6">
                        <Links className="nav-menu__link col" activeClass="active" to="test1" spy={true}
                               smooth={true} offset={-110} duration={100}>
                            О проекте
                        </Links>
                        <a onClick={handlefratis} className="nav-menu__link col">ПОДБОР КВАРТИРЫ</a>
                        <Links className="nav-menu__link col" activeClass="active" to="test2" spy={true}
                               smooth={true} offset={-110} duration={100}>
                            РАСПОЛОЖЕНИЕ</Links>
                        <Links className="nav-menu__link col" activeClass="active" to="test3" spy={true}
                               smooth={true} offset={-110} duration={100}>
                            ХАРАКТЕРИСТИКИ</Links>
                        <Links className="nav-menu__link col" activeClass="active" to="test4" spy={true}
                               smooth={true} offset={-110} duration={100}>
                            Контакты</Links>
                    </div>
                    <div className="flats_box col-2 px-0">
                        <a onClick={handlefratis} className="nav-menu__link green_link col">
                            <img src="/assets/ico/kvartiri.svg" alt="kvartiri"/>
                            КВАРТИРЫ
                        </a>
                        <a onClick={handlefratis} className="nav-menu__link green_link col">
                            <img src="/assets/ico/estate.svg" alt="estate"/>
                            Коммерческая<br/>недвижимость
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
                        <img src="/assets/img/call.png" className="contacts_call" alt="contacts"/>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
