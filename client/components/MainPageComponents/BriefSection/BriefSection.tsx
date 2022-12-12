import React from "react";

type Props = {
    handleChessMacro: () => void;
}

const BriefSection = ({handleChessMacro}: Props) => {
    return <section className="brief">
        <div className="container">
            <div className="row">
                <div className="col-md-5 col-sm-3 d-sm-block d-flex flex-column-reverse">
                    <div className="brief__name">Солнечный Парк</div>
                    <div className="brief__memo">Жилой квартал</div>
                </div>
                <div className="col-sm-2 col-12 d-sm-block d-flex flex-column-reverse">
                    <div className="brief__name">от 3,0 млн ₽</div>
                    <div className="brief__memo">ЦЕНА квартиры</div>
                </div>
                <div className="col-sm-2 col-12 d-sm-block d-flex flex-column-reverse">
                    <div className="brief__name">
												I-II кв.
                        2023
                        <img src="/assets/ico/question.svg" alt="question"/>
                    </div>
                    <div className="brief__memo">ПЕРВИЧНая СДАЧа</div>
                </div>
                <div className="col-md-3 col-sm-5 col-12 d-sm-block d-flex flex-column-reverse">
                    <div className="brief__name row w-100 mx-auto gap-2">
                        <div onClick={handleChessMacro} className="col pointer">Ст</div>
                        <div onClick={handleChessMacro} className="col pointer">1к</div>
                        <div onClick={handleChessMacro} className="col pointer">2к</div>
                        <div onClick={handleChessMacro} className="col pointer">
                            Коммерческая недвижимость
                        </div>
                    </div>
                    <div className="brief__memo">Квартиры в продаже</div>
                </div>
            </div>
        </div>
    </section>;
}

export default BriefSection;
