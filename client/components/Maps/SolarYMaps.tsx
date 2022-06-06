import React, {useMemo, useState} from "react";
import {YMaps, Map, Placemark} from "react-yandex-maps";
import cn from "classnames";

const placeMarkOption = {
  iconLayout: 'default#image',
  iconImageHref: '/assets/img/metka.svg',
  iconImageSize: [50, 50],
  iconImageOffset: [-25, -60]
}

type Map = {
    title: string,
    count: number,
    name: string,
    checked: boolean,
    cord: number [][]
}

const maps: Map[] = [
    {
        title: 'Остановки',
        count: 2,
        name: 'ost',
        checked: false,
        cord: [[45.008881, 34.056425], [45.008222, 34.056667]]
    },
    {
        title: 'Спорт',
        count: 1,
        name: 'park',
        checked: false,
        cord: [[45.013709, 34.060769]]
    },
    {
        title: 'Здоровье',
        count: 1,
        name: 'sport',
        checked: true,
        cord: [[45.030301, 34.050313]]
    },
    {
        title: 'Торговые центры',
        count: 3,
        name: 'gal',
        checked: true,
        cord: [[44.986573, 34.086374], [44.985240, 34.086684], [44.970114, 34.076873]]
    },
    {
        title: 'Развлечения',
        count: 3,
        name: 'fan',
        checked: false,
        cord: [[45.013760, 34.053381], [44.987727, 34.076397]]
    },
    {
        title: 'Образование',
        count: 2,
        name: 'scoll',
        checked: false,
        cord: [[45.016802, 34.054376], [45.014904, 34.058490]]
    }
]

type Props = {
    setIsModalOpen: (bool: boolean) => void;
}

const SolarYMaps = ({setIsModalOpen}: Props) => {
    const [stateMap, setStateMap] = useState<any>([45.008543, 34.060798])
		const [dis, setdis] = useState<any>(true)

		const CN = cn("wrapMap", { wrapMapactive: !dis})

    const [mapval, setMapval] = useState<any>([
        {
            title: 'Здоровье',
            count: 1,
            name: 'sport',
            checked: true,
            cord: [[45.030301, 34.050313]]
        },
        {
            title: 'Торговые центры',
            count: 3,
            name: 'gal',
            checked: true,
            cord: [[44.986573, 34.086374], [44.985240, 34.086684], [44.970114, 34.076873]]
        },
    ])
    const [checkedState, setCheckedState] = useState(
        [false, false, true, true, false, false]
    );

    const mapstate = useMemo(() => {
        return ({center: stateMap, zoom: 12})
    }, [stateMap])

    const handl = (e: React.ChangeEvent<HTMLInputElement>, val: any, position: string | number) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );
        setCheckedState(updatedCheckedState);

        if (e.target.checked) {
            if (position === 'all') {
                setMapval(val) //new Array(mapes.length).fill(false)
                setCheckedState(new Array(maps.length).fill(true));
            } else {
                setMapval((prev: any) => {
                    return [...prev, val]
                })
                setStateMap(val.cord[0])
            }
        } else {
            if (position === 'all') {
                setMapval([])
                setCheckedState(new Array(maps.length).fill(false));
            } else {
                setMapval((prev: any) => {
                    return prev.filter((value: any) => value.name !== val.name)
                })
            }
        }
    }

    return (
        <>
				
            <YMaps
                enterprise
                query={{apikey: "25ff2aee-f172-4ef8-9ba4-6e829954c5b5"}}
            >
							
                <Map style={{position: "absolute", width: "100%", height: "100%"}} modules={['geocode']}
                     state={mapstate} defaultState={
                    {
                        center: [45.008164, 34.060774],
                        zoom: 17,
                        controls: [],
                        scrollZoom: false,
                    }
                }
                >
									<div id="wrapMap" className={CN}  onClick={() => setdis(false)}></div>	
                    <div className="location__select-window d-flex flex-wrap">
                        <div className="location__select__memo d-md-block d-none">инфраструктура</div>
                        <div className="section-header">ЖК «Солнечный Парк»</div>
                        <label className="checkbox col-md-12 col-6 d-flex align-items-center">
                            <input type="checkbox" onChange={(e) => handl(e, maps, 'all')}/>
                            <span/>
                            <span className="checkbox__value">Все объекты</span>
                            <div className="checkbox__count">
                                12
                            </div>
                        </label>
                        {maps.map((val: Map, index: number) => {
                            return (
                                <label key={index} className="checkbox col-md-12 col-6 d-flex align-items-center">
                                    <input type="checkbox"
                                           checked={checkedState[index]}
                                           defaultChecked={true}
                                           onChange={(e) => handl(e, {
                                               name: val.name,
                                               cord: val.cord
                                           }, index)}/>
                                    <span/>
                                    <span className="checkbox__value">{val.title}</span>
                                    <div className="checkbox__count">
                                        {val.count}
                                    </div>
                                </label>
                            );
                        })}
                        <button className="btn" onClick={() => setIsModalOpen(true)}>
                            Заявка на экскурсию
                        </button>
                    </div>
                    <Placemark
                        options={placeMarkOption}
                        geometry={[45.008164, 34.060774]}
                    />
                    {
                        mapval.map((address: Map) => {
                            return address.cord.map((val: number[], i: number) => {
                                return (<Placemark
                                    key={i}
                                    options={placeMarkOption}
                                    geometry={[val[0], val[1]]}
                                />)
                            })
                        })
                    }
									
                </Map>
								
            </YMaps>
						
        </>
    )
}

export default SolarYMaps