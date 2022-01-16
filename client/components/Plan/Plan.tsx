import SlidePlan1 from "./SlidePlan1"
import { useState } from 'react';
import SlidePlan2 from "./SlidePlan2";
import SlidePlan3 from "./SlidePlan3";

const Plan = () => {
  const [state, setstate] = useState(1)
  const flartis = global.window as any
    const handlefratis = () => {
        flartis.create_chess() as any
    }
  return (
    <>
      
      <div className='seting_page-about'>
        <div className='seting_page-aboutleft'>
          <div className='seting_page-about-title'>Планировочные решения</div>
          
        </div>
        <div className='seting_page-aboutright'>
            <div className='seting_page-about-text'>
                <p>Немаловажное достоинство  комплекса – широкий ассортимент квартир и уникальных планировок. В проекте доступно множество эргономичных планировочных решений, и все имеют свои преимущества. Каждая планировка – от студий до четырехкомнатных двухуровневых квартир – грамотно продумана и разработана архитектурным бюро из Санкт-Петербурга. </p>
            </div>
        </div>
        
      </div>

    <div className='check_hous'>
      <div className='check_hous-nav'>
          <div className='check_hous-item' onClick={()=> setstate(1)}>
            <img src='/assets/img/dom.png' />
            <span>Дом 1</span>
          </div>
          <div className='check_hous-item' onClick={()=> setstate(2)}>
            <img src='/assets/img/dom.png' />
            <span>Дом 2</span>
          </div>
          <div className='check_hous-item' onClick={()=> setstate(3)}>
            <img src='/assets/img/dom.png' />
            <span>Дом 3</span>
          </div>
      </div>
    </div>
    <div className='selet_hous_box'>
      <div className='selet_hous'>
        <div className='selet_hous-title'>
          <span>Выберите</span>
          <span className='tit'>свою Солнечную</span>
          <span>Квартиру</span>
        </div>
          <div className='selet_hous-text'>Квартира с уникальным планировочным решением, неповторимыми видовыми характеристиками и собственной террасой - современное решение для комфортной жизни. 
</div>
          <div className='selet_hous-button' onClick={()=> handlefratis()}>Выбрать квратиру</div>
      </div>
        <div className='selet_hous-slide'>
          {
            state === 1 && <SlidePlan1 /> 
            
          }
          {
            state === 2 && <SlidePlan2 /> 
          }
          {
            state === 3 && <SlidePlan3 /> 
          }
        
      </div>
        </div>
    
    </>
  )
}
export default Plan