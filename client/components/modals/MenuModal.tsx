import React from "react";
import { Link as Links} from "react-scroll";
import Link from "next/link";

type Props = {
    isMenuModalHandler: (bool: boolean) => void;
    handleChessMacro: () => void;
}

const MenuModal = ({ isMenuModalHandler, handleChessMacro}: Props) => {

    const modalLinkObjArr = [
        {title: 'О ПРОЕКТЕ', to: 'test1'},
        {title: 'ПОДБОР КВАРТИРЫ', to: ''},
        {title: 'РАСПОЛОЖЕНИЕ', to: 'test2'},
        {title: 'ХАРАКТЕРИСТИКИ', to: 'test3'},
        {title: 'КОНТАКТЫ:', to: 'test4'},
    ]

    return (
        <div className='menu-modal'>
            <div className="menu-modal-overlay" onClick={() => isMenuModalHandler(false)}/>
            <div className="menu-modal-content">
                <div className="menu-title">
                    <div className="menu-title-star">
                        <img src="/assets/img/modal-assets/yellow-star.png" alt=""/>
                        <span className="title">МЕНЮ</span>
                    </div>
                    <img className='close' src='/assets/img/modal-assets/cross.png' onClick={() => isMenuModalHandler(false)}/>
                </div>
                <div className="menu-modal-links">
                    <ul>
                        {modalLinkObjArr.map(el => {
                           return <li key={el.title}><Links className="menu-modal__link" onClick={()=> {
                               if (el.to) isMenuModalHandler(false)
                               else handleChessMacro()
                           }} activeClass="active" to={el.to} spy={true}
                                       smooth={true} offset={-110} duration={100}>
                               {el.title}
                            </Links></li>
                        })
                        }
                    </ul>
                    <div className="contact-info">
                        <div className="contact-phone">+7 978 718 08 08</div>
                        <div className="emails">
                            <div><span className="contact-email">sale@arcadacrimea.ru</span> - Отдел продаж</div>
                            <div><span className="contact-email">info@arcadacrimea.ru</span> - Для предложений</div>
                        </div>
                    </div>
                    <div className="address">
                        <div className="menu-modal__link">АДРЕС:</div>
                        <div className="address__city">Г.Симферополь</div>
                        <div>ул.Набережная 75В с3</div>
                        <div>офис 232, 2 этаж</div>
                    </div>
                </div>
                <div className="social-network">
                    <Link href="https://vk.com/jksunnypark">
                        <a>Вконтакте</a>
                    </Link>
                    <Link href="https://t.me/arcadacrimea">
                        <a>Telegram</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default MenuModal;
