import React, { useEffect, useState } from 'react';
import {Link as Links} from "react-scroll/modules";
import Link from "next/link";
import Api from '../../Api/Api';

type Props = {
    footerRef: any;
    footerScroll: any;
    aboutSectionScroll: any;
    handleSellsOfficeModal: (bool: boolean) => void;
    handleChessMacro: () => void;
    locationScroll: any;
    handleSettingPage: (pageNum: number) => void;
    handleIsSettingModalOpen: (bool: boolean) => void;
    handleIsMaterialModalOpen: (bool: boolean) => void;
    handleIsDocModalOpen: (bool: boolean) => void;
}

const Footer = (props: Props) => {
    const { footerRef, footerScroll, handleSellsOfficeModal, aboutSectionScroll, handleChessMacro, locationScroll } = props;
    const { handleSettingPage, handleIsSettingModalOpen, handleIsMaterialModalOpen, handleIsDocModalOpen } = props;

		const [slide, setSlide] = useState<any>(null);
		const getSlide = async () =>{
			const {data}:any = await Api.tellidelist()
			if(data){
				setSlide(data[0])
			}else{
				setSlide(null)
			}
		}
		
			useEffect(()=>{
				getSlide()
			},[])

    return (
        <>
            <footer className="prefooter" ref={footerRef}>
                <div className="container">
                    <div className='prefooter_box'>
                        <div className="prefooter__top">
                            <div className="prefooter__contact ">
                                <a className="phone" href='tel:+7 978 718 08 08'>
                                    <div>{slide && slide.title}</div>
                                </a>
                            </div>
                            <div className="zastr">
                                <button className="btn prefooter__btn"
                                        onClick={() => handleSellsOfficeModal(true)}>Обратиться к
                                    застройщику
                                </button>
                            </div>
                        </div>
                        <div className="upe">
                            Наверх
                            <Links className="nav-menu__link col" activeClass="active" to="test0" spy={true}
                                   smooth={true} duration={100}>
                                <img src="/assets/img/up.png" alt="to up" onClick={aboutSectionScroll}/>
                            </Links>
                        </div>
                    </div>
                    <hr/>
                    <div className="row prefooter__middle">
                        <div className="col-md-4 col-12 mb-md-0 mb-5 flatic_cvart">
                            <div onClick={handleChessMacro} className="builders flat">КВАРТИРЫ</div>
                            <div onClick={handleChessMacro} className="builders builder">Коммерческая недвижимость</div>
                        </div>
                        <div className="col">
                            <div className="prefooter__link-header">О проекте</div>
                            <ul className="prefooter__list">
                                <a onClick={aboutSectionScroll}>
                                    <li>Безопасность</li>
                                </a>
                                <a onClick={aboutSectionScroll}>
                                    <li>Умный жилой комплекс</li>
                                </a>
                                <a onClick={aboutSectionScroll}>
                                    <li>Транспорт</li>
                                </a>
                                <a onClick={aboutSectionScroll}>
                                    <li>Собственная инфраструктура</li>
                                </a>
                                <a onClick={aboutSectionScroll}>
                                    <li>Аллея здоровья и экопарк</li>
                                </a>
                                <a onClick={aboutSectionScroll}>
                                    <li>Все для детей</li>
                                </a>
                            </ul>
                        </div>
                        <div className="col">
                            <div className="prefooter__link-header">Подбор квартиры</div>
                            <ul className="prefooter__list">
                                <a onClick={handleChessMacro}>
                                    <li>Однокомнатные</li>
                                </a>
                                <a onClick={handleChessMacro}>
                                    <li>Двухкомнатные</li>
                                </a>
                                <a onClick={handleChessMacro}>
                                    <li>Трехкомнатные</li>
                                </a>
                                <a onClick={handleChessMacro}>
                                    <li>Четырехкомнатные</li>
                                </a>
                                <a onClick={handleChessMacro}>
                                    <li>Двухуровневые</li>
                                </a>
                            </ul>
                        </div>
                        <div className="col">
                            <div className="prefooter__link-header">Расположение</div>
                            <ul className="prefooter__list">
                                <a onClick={locationScroll}>
                                    <li>Инфраструктура</li>
                                </a>
                                <a onClick={locationScroll}>
                                    <li>Транспорт</li>
                                </a>
                            </ul>
                        </div>
                        <div className="col">
                            <div className="prefooter__link-header">Преимущество</div>
                            <ul className="prefooter__list">
                                <a onClick={() => {
                                    handleSettingPage(1)
                                    handleIsSettingModalOpen(true)
                                }}>
                                    <li>Архитектура и фасады</li>
                                </a>
                                <a onClick={() => {
                                    handleSettingPage(2)
                                    handleIsSettingModalOpen(true)
                                }}>
                                    <li>Технология строительства</li>
                                </a>
                                <a onClick={() => {
                                    handleSettingPage(3)
                                    handleIsSettingModalOpen(true)
                                }}>
                                    <li>Инфраструктура</li>
                                </a>
                                <a onClick={() => {
                                    handleSettingPage(4)
                                    handleIsSettingModalOpen(true)
                                }}>
                                    <li>Общественные пространства</li>
                                </a>
                                <a onClick={() => {
                                    handleSettingPage(5)
                                    handleIsSettingModalOpen(true)
                                }}>
                                    <li>Планировочные решения</li>
                                </a>
                                <a onClick={() => {
                                    handleSettingPage(6)
                                    handleIsSettingModalOpen(true)
                                }}>
                                    <li>Локация</li>
                                </a>
                            </ul>
                        </div>
                        <div className="col">
                            <div className="prefooter__link-header">Контакты</div>
                            <ul className="prefooter__list">
                                <Link href="">
                                    <li>Офис продаж</li>
                                </Link>
                                <a onClick={() => handleIsMaterialModalOpen(true)}>
                                    <li>Условия приобритения</li>
                                </a>
                                <a onClick={() => handleIsDocModalOpen(true)}>
                                    <li>Документы</li>
                                </a>
                                <a onClick={footerScroll}>
                                    <li>Ход строительства</li>
                                </a>
                            </ul>
                        </div>
                    </div>

                    <div className="prefooter__bottom row justify-content-between">
                        <div className="search col-md-3 col-12"/>
                        <div
                            className="prefooter__social col-md-4 col-12 mt-4 d-flex justify-content-between align-items-center">
                            Мы в социальных сетях:
                            <Link href="https://www.youtube.com/channel/UCfwmRlxxlBg-Ich06wVevVw">
                                <a><img src="/assets/ico/social/yt.svg" alt="youtube"/></a>
                            </Link>
                            <Link href="https://vk.com/jksunnypark">
                                <a><img src="/assets/ico/social/vk.svg" alt="vkontakte"/></a>
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
                        <div className="middle-text col-md-4 col-12 my-md-0 my-4">Любая информация, представленная на
                            данном сайте, носит исключительно информационный характер и ни при каких условиях не
                            является публичной офертой, определяемой положениями статьи 437 Гражданского кодекса РФ.
                            Группа компаний «Аркада Крым» принимает на себя гражданско-правовые обязательства
                            исключительно в результате отдельно и специально совершенных сделок.
                        </div>
                        <div className="who-create d-flex col-md-4 col-12 justify-content-end">
                            Сайт создан — &nbsp;<a href="https://nvlshk.ru/" target="_blank" rel="noreferrer"><b>студией Неваляшка</b></a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;
