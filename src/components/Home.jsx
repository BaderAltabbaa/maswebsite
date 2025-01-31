import './styles/home.css'
import DoCard from './DoCard'
import React, {useState} from 'react'
import PortfoiloCard from '../PortfolioCard'
import ImageSlider from './ImageSlider'
import HowCard from './HowCrad'
import ChooseCard from './ChooseCard'
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';




const Home = () => {

  
  const { t } = useTranslation(); 
  
  const { ref: ref2,inView: inView2 } = useInView({
    threshold: 0.2, 
    triggerOnce: true, 
  });

  const { ref: ref3,inView: inView3 } = useInView({
    threshold: 0.2, 
    triggerOnce: true, 
  });


  const { ref: ref5,inView: inView5 } = useInView({
    threshold: 0.2, 
    triggerOnce: true, 
  });

  const { ref: ref6,inView: inView6 } = useInView({
    threshold: 0.2, 
    triggerOnce: true,
  });

  const { ref: textRef, inView: textInView } = useInView({
    threshold: 0.2, 
    triggerOnce: true, 
  });

  const { ref: imgRef, inView: imgInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });


  const portfolio =[
    {id:1, class:'Mobile application', type: t('home.portfolio.typemoblie'),name:'Goldmall',image:'App 1.png'},
    {id:2, class:'Mobile application', type: t('home.portfolio.typemoblie'),name:'Goldmall',image:'App 2.png'},
    {id:3, class:'Mobile application',type: t('home.portfolio.typemoblie'),name:'Goldmall',image:'App 3.png'},
    {id:4, class:'web',type: t('home.portfolio.typeweb'),name:'Goldmall',image:'web 1.png'},
    {id:5, class:'web',type: t('home.portfolio.typeweb'),name:'Goldmall',image:'web 2.png'},
    {id:6, class:'web',type: t('home.portfolio.typeweb'),name:'Goldmall',image:'web 3.png'}
  ]

  const images =[
    { src: 'graphic.jpg', title: t('slider.image.titleg') , text: t('slider.image.textg')},
    { src: 'marketing.jpg', title:t('slider.image.titleo'), text:  t('slider.image.texto')},
    { src: 'web.jpg', title: t('slider.image.titlew'), text:  t('slider.image.textw')},
    { src: 'appdev.jpg', title:t('slider.image.titlem'), text:  t('slider.image.textm')},
    { src: 'voiceover.jpg', title:t('slider.image.titlev'), text:  t('slider.image.textv')}
  ]

  const weDoContent = [
    { title: t('home.weDo.mobileAppDev'), desc: t('home.weDo.mobileAppDevDesc'), src: 'mobile_app.webp' },
    { title: t('home.weDo.desktopAppDev'), desc: t('home.weDo.desktopAppDevDesc'), src: 'bt-altyapi-donusumu-basari-metodolojisi-601x520-removebg-preview.webp' },
    { title: t('home.weDo.digitalMarketing'), desc: t('home.weDo.digitalMarketingDesc'), src: '—Pngtree—business professional analyzing stock market_20116370.png' },
  ];
 
    return<>
    
    <div className="header-sec">
    <div className="dis-cover"></div>
    </div>
      <div className="header-content">
        <div className="header-text">
          <span className='header-text-1'>{t('home.header.startYourBusiness')}</span>
          <span className='header-text-2'>{t('home.header.simpleFaster')}</span>
          <span className='header-text-3'>{t('home.header.discovery')}</span>
        </div>
        <div className="header-animation">
        <img src="—Pngtree—social media marketing viral mms_5332751.png" alt="" />
        </div>
      </div>

      <div className="slider-sec">
      <span className='we-do-title'>{t('home.weDo.title')}</span>
<ImageSlider images={images} autoPlayInterval={5000} />;
     </div>

    <div className="we-do-sec">
<div className="we-do-content">
<div className="cards">
<div  className="card-container">
{weDoContent.map((props) => (
          <DoCard title={props.title} desc={props.desc} src={props.src}/>
        ) )}
</div>
    </div>
    </div>
        </div>

     <div className="portfolio-sec">
      <div className="port-top">
        <div className={`port-left ${inView2 ? 'animate' : ''}`} ref={ref2}>
         <div>
          <span>{t('home.portfolio.title')}</span>
          </div> 
          <span className='left-desc'>{t('home.portfolio.desc1')}</span>
          <span className='left-desc'>{t('home.portfolio.desc2')}</span>
        </div>
        <div className={`port-right ${inView3 ? 'animate' : ''}`} ref={ref3} >
          <div>
            <span>{t('home.portfolio.desc3')}</span>
          <span>{t('home.portfolio.desc4')}</span>
          <span>{t('home.portfolio.desc5')}</span>
          </div>
          <a href="https://masfintech.com/wp-login.php?redirect_to=https%3A%2F%2Fmasfintech.com%2Fwp-admin%2Fpost.php%3Fpost%3D14107%26action%3Dedit&reauth=1"><button className="learn-btn">{t('home.portfolio.learnMore')}</button></a>
       
        </div>
      </div>
      </div>
      
      <div className="center">
      <div className="port-bottom">
      {portfolio.map((card, index) => {
        const { ref, inView } = useInView({
          threshold: 0.2, 
          triggerOnce: true, 
        });

        return (
          <div
            key={card.id}
            className={`p-cardbody ${inView ? "animate" : ""}`}
            ref={ref}
           
          >
            <PortfoiloCard name={card.name} type={card.type} image={card.image} class={card.class} />
          </div>
        );
      })}
    </div>

      </div>

     <div className={`discover-sec ${inView5 ? 'animate' : ''}`} ref={ref5}>
      <div className='dis-cover'></div>
      <span className='dis-text1'>{t('home.discover.text1')}</span>
      <span className='dis-text2'>{t('home.discover.text2')}</span>
     <a className='link-index' href="https://masfintech.com/wp-login.php?redirect_to=https%3A%2F%2Fmasfintech.com%2Fwp-admin%2Fpost.php%3Fpost%3D14107%26action%3Dedit&reauth=1"> <button className="dis-btn">{t('home.discover.button')}</button></a>
      
     </div>

     <div className={`service-sec ${inView6 ? 'animate' : ''}`} ref={ref6}>
      <div className="dis-cover"></div>
      <div className="ser-top">
        <div className="ser-top-sec1">
        <span className='ser-title'>{t('home.services.title')}</span>
        <span className='ser-desc'>{t('home.services.desc')}</span>
        </div>
        <div className="ser-top-sec2">
          <span className='service-title'><i className="fa fa-circle"></i> {t('home.services.creativeSolutions')}</span>
          <span className='service-desc'>{t('home.services.creativeSolutionsDesc')}</span>

          <span className='service-title'><i className="fa fa-circle"></i> {t('home.services.digitalMarketing')}</span>
          <span className='service-desc'>{t('home.services.digitalMarketingDesc')}</span>

          <span className='service-title'><i className="fa fa-circle"></i> {t('home.services.iotProgramming')}</span>
          <span className='service-desc'>{t('home.services.iotProgrammingDesc')}</span>

        </div>
      </div>
      <div className="ser-bottom">
        <img src="imac_img.webp" alt="" />
      </div>
     </div>
    
     <div className="how-it-work-sec">
      <span className='how-title'>{t('home.howItWorks.title')}</span>
      <span className='how-decs'>{t('home.howItWorks.desc')}</span>
      <div className="how-card">
        <HowCard></HowCard>
      </div>
     </div>

     <div className="choose-us-sec">
     <span className='choose-title'>{t('home.chooseUs.title')}</span>
      <span className='choose-desc'>{t('home.chooseUs.desc')}</span>
      <div className="choose-card">
        <ChooseCard></ChooseCard>
      </div>
     </div>
     
     <div className="getstarted-sec">
      <div className="get-cont">
      <div
          className={`get-text ${textInView ? "animate-left" : ""}`}
          ref={textRef}
        >
      <span className='get-title'>{t('home.getStarted.title')}</span>
      <span className='get-desc'>{t('home.getStarted.text')}</span>
      <a href="https://masfintech.com/wp-login.php?redirect_to=https%3A%2F%2Fmasfintech.com%2Fwp-admin%2Fpost.php%3Fpost%3D14107%26action%3Dedit&reauth=1"><button className="learn-btn" >{t('home.getStarted.button')}</button></a>
      </div>
      <div
          className={`img-cont ${imgInView ? "animate-right" : ""}`}
          ref={imgRef}
        >
      <img src="Asset 2.png" alt="" />
      </div>
      </div>
     </div>
    </>
  }
  
  export default Home