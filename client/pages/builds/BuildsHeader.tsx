import React from "react";
import Link from "next/link";

const BuildsHeader = () => {

    return (
        <header>
            <div className="container">
                <div className="row head">
                    <div className="logo col-md-2 col-3">
                        <Link href="/">
                            <img src="/assets/img/logo3.svg" alt="logotype"/>
                        </Link>
                    </div>
                    <div className="flats_box col-2 px-0">
                        <a className="nav-menu__link green_link col">
                            <img src="/assets/ico/kvartiri.svg" alt="kvartiri"/>
                            КВАРТИРЫ
                        </a>
                        <a className="nav-menu__link green_link col">
                            <img src="/assets/ico/estate.svg" alt="estate"/>
                            Коммерческая
                            <br/>
                            недвижимость
                        </a>
                    </div>
                    <div className="contacts col-md-2 col-6">
                        <div className="contacts_box">
                            <div className="contacts__phone">
                                <Link href="tel:+7 9787180808"> +7 978 718 08 08</Link>
                            </div>
                            <div className="contacts__memo"/>
                        </div>
                        <img
                            src="/assets/img/call.png"
                            className="contacts_call"
                            alt="contacts"
                        />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default BuildsHeader;