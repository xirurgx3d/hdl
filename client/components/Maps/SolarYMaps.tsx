import { useMemo, useState } from "react";
import { YMaps, Map, SearchControl, Placemark, YMapsApi, withYMaps } from "react-yandex-maps";

const placeMarkOption = {
  iconLayout: 'default#image',
  iconImageHref: '/assets/img/metka.svg',
  iconImageSize: [50, 50],
  iconImageOffset: [-25, -60]
}

const mapes = [
	{
		name: 'all',
		cord:[45.008543, 34.060798]
	},
	{
		name: 'ost',
		cord:[45.009526, 34.056458]
	},
	{
		name: 'park',
		cord:[45.014437, 34.053395]
	},
	{
		name: 'sport',
		cord:[45.014326, 34.060658]
	},
	{
		name: 'gal',
		cord:[44.988045, 34.086582]
	},
	{
		name: 'fan',
		cord:[44.986804, 34.077440]
	},
	{
		name: 'scoll',
		cord:[45.015730, 34.058494]
	}
]


const SolarYMaps = ({mod}:any) => {
	const [stateMap, setStateMap] = useState<any>([45.008543, 34.060798])
	const [mapval, setMapval] = useState<any>([
		{
			name: 'all',
			cord:[45.008543, 34.060798]
		},
		{
			name: 'sport',
			cord:[45.014326, 34.060658]
		},
		{
			name: 'gal',
			cord:[44.988045, 34.086582]
		}
	])
  

  const mapstate = useMemo(() => {
    return ({ center: stateMap, zoom: 17 })
  }, [stateMap])

  const onMapClick = () => {
    
  }
	const handl = (e: any, val: any) => {
		if (e.target.checked) {
			if (Array.isArray(val)) {
				setMapval(val)
			} else {
				setMapval((prev: any) => [...prev, val])
				setStateMap(val.cord)
			}
			
		} else {
			setMapval((prev: any) => {
				return prev.filter((value:any) => value.name !== val.name)
			})
			
		}
    
    
	}
	console.log(mapval);
  

  return (
    <>
    <YMaps
                enterprise
                query={{ apikey: "f5bd494f-4a11-4375-be30-1d2d48d88e93" }}
      >
        <Map style={{position: "absolute", width:"100%", height: "100%"}} modules={['geocode']} onClick={onMapClick} state={mapstate} defaultState={
                    {
                        center: mapval[0],
                        zoom: 17,
                        controls: [],
                        scrollZoom: false,

                    }
                }
        >
          
            <div className="location__select-window d-flex flex-wrap">
                    <div className="location__select__memo d-md-block d-none">инфраструктура</div>
                    <div className="section-header">ЖК «Солнечный Парк»</div>

                    <label className="checkbox col-md-12 col-6 d-flex align-items-center">
                        <input type="checkbox" onChange={(e) =>  handl(e,mapes)} />
                        <span></span>
                        <span className="checkbox__value">Все объекты</span>

                        <div className="checkbox__count">
                            12
                        </div>

                    </label>
                    <label className="checkbox col-md-12 col-6 d-flex align-items-center">
                        <input type="checkbox" onChange={(e) =>  handl(e,{
													name: 'ost',
													cord:[45.009526, 34.056458]
												})} />
                        <span></span>
                        <span className="checkbox__value">Остановки</span>

                        <div className="checkbox__count">
                            5
                        </div>

                    </label>
                    <label className="checkbox col-md-12 col-6 d-flex align-items-center">
                        <input type="checkbox" onChange={(e) =>  handl(e,{
													name: 'park',
													cord:[45.014437, 34.053395]
												})} />
                        <span></span>
                        <span className="checkbox__value">Спорт</span>

                        

                    </label>
                    <label className="checkbox col-md-12 col-6 d-flex align-items-center">
                        <input type="checkbox" onChange={(e) =>  handl(e,{
													name: 'sport',
													cord:[45.014326, 34.060658]
												})} defaultChecked={true} />
                        <span></span>
                        <span className="checkbox__value">Здоровье</span>

                        

                    </label>
                    <label className="checkbox col-md-12 col-6 d-flex align-items-center">
                        <input type="checkbox" onChange={(e) =>  handl(e,{
													name: 'gal',
													cord:[44.988045, 34.086582]
												})} defaultChecked={true}  />
                        <span></span>
                        <span className="checkbox__value">Торговые центры</span>

                       

                    </label>
                    <label className="checkbox col-md-12 col-6 d-flex align-items-center">
                        <input type="checkbox" onChange={(e) =>  handl(e,{
													name: 'fan',
													cord:[44.986804, 34.077440]
												})}  />
                        <span></span>
                        <span className="checkbox__value">Развлечения</span>

                        

                    </label>
                    <label className="checkbox col-md-12 col-6 d-flex align-items-center">
                        <input type="checkbox" onChange={(e) =>  handl(e,{
													name: 'scoll',
													cord:[45.015730, 34.058494]
												})}  />
                        <span></span>
                        <span className="checkbox__value">Образование</span>

                        

                    </label>
                    

                    <button className="btn" onClick={()=> mod(true)} >
                        Заявка на экскурсию
                    </button>
          </div>
          
          {
                                mapval.map((address:any, index:number) => {
                                    return (
                                        <Placemark
                                            
                                            key={index}
                                            options={placeMarkOption}
                                            geometry={[address.cord[0], address.cord[1]]}
                                        />
                                    );
                                })
                            }
                
       </Map>
        
     </YMaps>
    
    </>
  )
}
export default SolarYMaps