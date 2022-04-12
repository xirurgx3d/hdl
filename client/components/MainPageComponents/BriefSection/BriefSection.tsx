import React from "react";

type Props = {
    handlefratis: () => void;
}

const BriefSection = ({handlefratis}: Props) => {
    return <section className="brief">
        <div className="container">
            <div className="row">
                <div className="col-md-5 col-sm-3 d-sm-block d-flex flex-column-reverse">
                    <div className="brief__name">Солнечный Парк</div>
                    <div className="brief__memo">Жилой квартал</div>
                </div>
                <div className="col-sm-2 col-12 d-sm-block d-flex flex-column-reverse">
                    <div className="brief__name">от 3,6 млн ₽</div>
                    <div className="brief__memo">ЦЕНА квартиры</div>
                </div>
                <div className="col-sm-2 col-12 d-sm-block d-flex flex-column-reverse">
                    <div className="brief__name">
                        1кв.
                        2024
                        <img src="/assets/ico/question.svg" alt="question"/>
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
    </section>;
}

export default BriefSection;
