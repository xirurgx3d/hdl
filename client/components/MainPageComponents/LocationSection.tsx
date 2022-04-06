import React from 'react';
import {Element} from "react-scroll";
import Courusels from "../Corusels/Courusels";
import Link from "next/link";
import SolarYMaps from "../Maps/SolarYMaps";

type Props = {
    locationRef: any;
    isExcursionModalOpen: boolean;
    toggleExcursionModal: (bool: boolean) => void;
    formModalRef: any;
    onSubmitFormConsult: (evt: React.SyntheticEvent) => void;
    handleReasonModal: any;
    isReasonModalOpen: boolean;
    handleSetKvartir: (str: string) => void;
    reason: string;
}

const LocationSection = (props: Props) => {
    const {locationRef, isExcursionModalOpen, toggleExcursionModal, handleSetKvartir} = props;
    const {formModalRef, onSubmitFormConsult, reason, handleReasonModal, isReasonModalOpen } = props;

    return (
        <section className="location">
            <Element name="test2" className="element">
                <div className="container" ref={locationRef}>
                    <div className="section-header">
                        Расположение и инфраструктура
                    </div>
                    <Courusels/>
                </div>
            </Element>
            <div className="location__map">
                <div className="container">
                    <div className="location__description-header">
                        ЖК “Солнечный парк”расположен на границе с городом Симферополь, в 10 минутах от центра
                        города.
                    </div>
                    <div className="location__description">
                        Адрес: Республика Крым, Симферопольский район, поселок Молодежное<br/>
                        Удачное транспортное расположение новостройки. Парки, скверы, магазины все расположено в
                        пешей
                        доступности.
                    </div>
                </div>
                <div id="map">
                    {isExcursionModalOpen &&
                        <>
                            <div className="dasboarde" onClick={() => toggleExcursionModal(false)}/>
                            <div className="modal-window">
                                <div className="close" onClick={() => toggleExcursionModal(false)}>
                                    <img src="./assets/ico/close.svg" alt="close"/>
                                </div>
                                <div className="section-header text-center">Заявка на консультацию</div>
                                <form ref={formModalRef} onSubmit={onSubmitFormConsult}>
                                    <input className='forme-input' type="text" name="fio" placeholder="ФИО"/>
                                    <input className='forme-input' type="text" name="phone" placeholder="Телефон"/>

                                    <div className="custom-select active">
                                        <div className="d-flex justify-content-between align-items-center"
                                             onClick={() => handleReasonModal(true)}>
                                            <div className="custom-select__placeholder">Тема обращения</div>
                                            <div className="custom-select__value">{reason}</div>
                                        </div>
                                        { isReasonModalOpen &&
                                            <div className="custom-select__list"
                                                 onClick={() => handleReasonModal(false)}>
                                                <div className="custom-select__option"
                                                     onClick={() => handleSetKvartir('Вопрос по покупке квартиры')}>Вопрос
                                                    по покупке квартиры
                                                </div>
                                                <div className="custom-select__option"
                                                     onClick={() => handleSetKvartir('Запись на экскурсию')}>Запись на
                                                    экскурсию
                                                </div>
                                            </div>
                                        }
                                    </div>
                                    <input type="text" hidden name="vopros" value={reason}/>
                                    <textarea name="message" placeholder="Комментарии"/>
                                    <input type="submit" className="btn" value="Отправить заявку"/>
                                </form>

                                <div className="confirm__memo">
                                    Нажимая кнопку «Отправить заявку»,<br/>
                                    вы соглашаетесь с <Link href="">условиями обработки личных данных</Link>
                                </div>
                            </div>
                        </>
                    }
                    <SolarYMaps setIsModalOpen={toggleExcursionModal}/>
                </div>
            </div>
        </section>
    )
}

export default LocationSection;