import { fabClasses } from "@material-ui/core";
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
    title: 'Остановки',
    coutn:2,
    name: 'ost',
    checed:false,
		cord:[[45.008881, 34.056425],[45.008222, 34.056667]]
	},
  {
    title: 'Спорт',
    coutn:1,
    name: 'park',
    checed:false,
		cord:[45.014437, 34.053395]
	},
  {
    title: 'Здоровье',
    coutn:1,
    name: 'sport',
    checed:true,
		cord:[45.014326, 34.060658]
	},
  {
    title: 'Торговые центры',
    coutn:3,
    name: 'gal',
    checed:true,
		cord:[44.988045, 34.086582]
	},
  {
    title: 'Развлечения',
    coutn:3,
    name: 'fan',
    checed:false,
		cord:[44.986804, 34.077440]
	},
  {
    title: 'Образование',
    coutn:2,
    name: 'scoll',
    checed:false,
		cord:[45.015730, 34.058494]
	}
]


const SolarYMaps = ({mod}:any) => {
  const [stateMap, setStateMap] = useState<any>([45.008543, 34.060798])
  
	const [mapval, setMapval] = useState<any>([
		{
			name: 'sport',
			cord:[45.014326, 34.060658]
		},
		{
			name: 'gal',
			cord:[44.988045, 34.086582]
		}
  ])
  const [checkedState, setCheckedState] = useState(
    [false,false,true,true,false,false]
  );
  

  const mapstate = useMemo(() => {
    return ({ center: stateMap, zoom: 17 })
  }, [stateMap])

  const onMapClick = () => {
    
  }
  const handl = (e: any, val: any,position:any) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);

		if (e.target.checked) {
			if (position === 'all') {
        setMapval(val) //new Array(mapes.length).fill(false)
        setCheckedState(new Array(mapes.length).fill(true));
      } else {
        
				setMapval((prev: any) => [...prev, val])
				setStateMap(val.cord)
			}
			
    } else {
      if (position === 'all') {
        setMapval([])
        setCheckedState(new Array(mapes.length).fill(false));
      } else {
        setMapval((prev: any) => {
				  return prev.filter((value:any) => value.name !== val.name)
			  })
      }
			
			
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
                        <input type="checkbox" onChange={(e) =>  handl(e,mapes,'all')} />
                        <span></span>
                        <span className="checkbox__value">Все объекты</span>

                        <div className="checkbox__count">
                            12
                        </div>

                    </label>
                    {mapes.map((val:any, index) => {
                    return (
                    <label key={index} className="checkbox col-md-12 col-6 d-flex align-items-center">
                        <input type="checkbox"
                          checked={checkedState[index]}
                          defaultChecked={true}
                          onChange={(e) => handl(e, {
													name: val.name,
													cord:val.cord
												},index)} />
                        <span></span>
                        <span className="checkbox__value">{val.title}</span>

                        <div className="checkbox__count">
                            {val.coutn}
                        </div>

                    </label>
                      );
                    })}
                    
                    

                    <button className="btn" onClick={()=> mod(true)} >
                        Заявка на экскурсию
                    </button>
          </div>
          
          {
            mapval.map((address: any, index: number) => {
              
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