import { FC, useEffect, useRef, useState } from "react"
import AboutSliders from "../AboutSlide/AboutSlide"
import cn from "classnames"; 

const MatPage: FC<any> = ({ hndl, page = 0 }) => {
  const [gopage, sepage] = useState(page)

  const myRef1 = useRef<any>(null)
  const executeScroll1 = () => myRef1.current.scrollIntoView()

  const myRef2 = useRef<any>(null)
  const executeScroll2 = () => myRef2.current.scrollIntoView()

  const myRef3 = useRef<any>(null)
  const executeScroll3 = () => myRef3.current.scrollIntoView()

  const myRef4 = useRef<any>(null)
  const executeScroll4 = () => myRef4.current.scrollIntoView()

  const myRef5 = useRef<any>(null)
  const executeScroll5 = () => myRef5.current.scrollIntoView()

  const myRef6 = useRef<any>(null)
  const executeScroll6 = () => myRef6.current.scrollIntoView()
  
  const CN1 = cn("seting_page-nav-item", { active: gopage == 0 || gopage == 1})
  const CN2 = cn("seting_page-nav-item", { active: gopage == 2 })
  const CN3 = cn("seting_page-nav-item", { active: gopage == 3 })
  const CN4 = cn("seting_page-nav-item", { active: gopage == 4 })
  const CN5 = cn("seting_page-nav-item", { active: gopage == 5 })
  const CN6 = cn("seting_page-nav-item", { active: gopage == 6})
  

  useEffect(() => {
    gopage == 0 && executeScroll1()
    gopage == 1 && executeScroll1()
    gopage == 2 && executeScroll2()
    gopage == 3 && executeScroll3()
    gopage == 4 && executeScroll4()
    gopage == 5 && executeScroll5()
    gopage == 6 && executeScroll6()
  }, [gopage])
  console.log(gopage)


  return (
    <div className='seting_page' ref={myRef1}>
    <div className="container"> 
      <div className='seting_page-title'>
        Условия  
        <span>приобретения</span>
        <img className='close' src='/assets/img/seting/close.png' onClick={() => hndl(false)} />
      </div>
    </div>
    <div className='seting_page-nav-box'>
      <div className="container">
        <div className='seting_page-nav'>
          <div className={CN1} onClick={()=> sepage(1)}>МАТЕРИНСКИЙ КАПИТАЛ</div>
          <div className={CN2} onClick={()=> sepage(2)}>РАССРОЧКА</div>
          <div className={CN3} onClick={()=> sepage(3)}>ВОЕННАЯ ИПОТЕКА</div>
          <div className={CN4} onClick={()=> sepage(4)}>Ипотека с господдержкой</div>
          <div className={CN5} onClick={()=> sepage(5)}>Семейная ипотека</div>
          <div className={CN6} onClick={()=> sepage(6)}>Планировочные решения</div>
        </div>
      </div>
    </div>
    <div className="container">  
      <div className='seting_page-about'>
        <div className='seting_page-aboutright'>
          <img className='seting_page-about-img' src='/assets/img/mat/img1.png' />
        </div>
        <div className='seting_page-aboutleft'>
          <div className='seting_page-about-title'>Материнский капитал</div>
          <div className='seting_page-about-text'>
          <p>Использовать материнский капитал можно, при покупке жилого помещения
в любом из наших объектов.</p>
          </div>
        </div>
        
        
      </div>
      

      <div className='seting_page-about' ref={myRef2}>
        
        <div className='seting_page-aboutright'>
          <div className='seting_page-about-text'>
            <p>Дополнительную информацию о первоначальном взносе<br/> и сроках погашения рассрочки.<br/>

Вы можете узнать у наших менеджеров по телефону +7 978 718 08 08.</p>
          </div>
          </div>
         <div className='seting_page-aboutleft'>
            <div className='seting_page-about-title'>Рассрочка</div>
            <img className='seting_page-about-img' src='/assets/img/mat/img2.png' />
          
        </div>
        
      </div>

              
        <div className='seting_page-about' ref={myRef3}>
        <div className='seting_page-aboutright'>
          <img className='seting_page-about-img' src='/assets/img/mat/img3.png' />
        </div>
        <div className='seting_page-aboutleft'>
          <div className='seting_page-about-title'>Военная ипотека</div>
          <div className='seting_page-about-text'>
          <p>Целевой кредит на покупку готового или строящегося жилья для военнослужащих, который субсидируется государством. 

Детали по телефону +7 978 718 08 08.</p>

          </div>
        </div>
        
        
      </div>
      
              
      <div className='seting_page-about' ref={myRef4}>
        
        <div className='seting_page-aboutright'>
        <div className='seting_page-about-title'>Ипотека с господдержкой</div>
          <div className='seting_page-about-text'>
              <p>
              Государственная программа поддержки получения ипотечного кредита на цели приобретения недвижимости в новостройках. Такой льготный кредит отличается сниженными процентными ставками,  а разницу до фактической ставки компенсирует государство.  
        </p>
                          
          </div>
          </div>
          <div className='seting_page-aboutleft'>
          
          <img className='seting_page-about-img' src='/assets/img/mat/img4.png' />
          
        </div>
        
        </div>     

      <div className='seting_page-about' ref={myRef5}>
        <div className='seting_page-aboutleft'>
          
          <img className='seting_page-about-img' src='/assets/img/mat/img5.png' />
          
        </div>
        <div className='seting_page-aboutright'>
        <div className='seting_page-about-title'>Семейная ипотека</div>
          <div className='seting_page-about-text'>
             <p> Государственная программа льготного жилищного кредитования семей, в которых начиная с 01.01.2018 родился первый ребенок или последующие дети, а также дети с ограниченными возможностями. 
Согласно решению российского правительства, льготная программа «Семейная ипотека» будет расширена и продлена до конца 2023 года. Причем, если раньше воспользоваться этим видом ипотеки можно было только семьям с двумя и более детьми, теперь она доступна уже при рождении в семье первенца. </p>
                          
          </div>
        </div>
        
      </div>     
      
      
      <div className='seting_page-about' ref={myRef6}>
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
          <div className='check_hous-item'>
            <img src='/assets/img/dom.png' />
            <span>Дом 1</span>
          </div>
          <div className='check_hous-item'>
            <img src='/assets/img/dom.png' />
            <span>Дом 1</span>
          </div>
          <div className='check_hous-item'>
            <img src='/assets/img/dom.png' />
            <span>Дом 1</span>
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
          <div className='selet_hous-button'>Выбрать квратиру</div>
      </div>
      <div className='selet_hous-slide'>
        <AboutSliders cls="slide1" /> 
      </div>
              </div>
      

    </div>
  </div>  
  )
}
export default MatPage