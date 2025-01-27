import './styles/about.css'
import DoCard from './DoCard'
import ChooseCard from './ChooseCard'
import React, {useState} from 'react'
import ProgressCard from './ProgressCard'
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';


const AboutUs = () => {

   const { t } = useTranslation(); 

    const { ref: ref1,inView: inView1 } = useInView({
        threshold: 0.2, 
        triggerOnce: true, 
      });

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
    

        const weDoContent = [
          { title: t('home.weDo.mobileAppDev'), desc: t('home.weDo.mobileAppDevDesc'), src: 'mobile_app.webp' },
          { title: t('home.weDo.desktopAppDev'), desc: t('home.weDo.desktopAppDevDesc'), src: 'bt-altyapi-donusumu-basari-metodolojisi-601x520-removebg-preview.webp' },
          { title: t('home.weDo.digitalMarketing'), desc: t('home.weDo.digitalMarketingDesc'), src: '—Pngtree—business professional analyzing stock market_20116370.png' },
        ];
       

    return<>
    
    <div className="subpage-header">
    <div className="dis-cover"></div>
    </div>
      <div className="sub-header-content">
        <div className="sub-header-text">
          <span className='sub-header-text-1'>{t('aboutus.subHeader.text1')}</span>
          <span className='sub-header-text-2'>{t('aboutus.subHeader.text2')}</span>
        </div>
      </div>

      <div className="who-we-are-sec">
      <div className={`who-top-sec ${inView2 ? 'animate' : ''}`} ref={ref2}>
      <span className="who-title">{t("aboutus.whoWeAre.title")}</span>
      <span className="who-text1">{t("aboutus.whoWeAre.text1")}</span>
      <span className="who-text2">{t("aboutus.whoWeAre.text2")}</span>
      <button className="learn-btn">{t("aboutus.whoWeAre.button")}</button>
          
        </div>
        <div className={`who-bottom-sec ${inView3 ? 'animate' : ''}`} ref={ref3} >
          <img className='small-screen' src="about2.jpg" alt="" />
          <img className='big-screen' src="about.jpg" alt="" />
        </div>
      </div>

      <div className="we-do-sec">
<div className="we-do-content">
<span className='we-do-title'>{t('home.weDo.title')}</span>
<span className='we-do-text'>{t('aboutus.weDo.text')}</span>
<div className="cards" ref={ref1}>
<div  className={`card-container ${inView1 ? 'animate' : ''}`}>
{weDoContent.map((props) => (
          <DoCard title={props.title} desc={props.desc} src={props.src}/>
        ) )}
</div>
    </div>
    </div>
        </div>

        <div className="choose-us-sec">
        <span className='choose-title'>{t('home.chooseUs.title')}</span>
        <span className='choose-desc'>{t('home.chooseUs.desc')}</span>
      <div className="choose-card">
        <ChooseCard></ChooseCard>
      </div>
     </div>

     <div className="express-sec">
      <ProgressCard></ProgressCard>
     </div>

     <div className={`discover-sec ${inView5 ? 'animate' : ''}`} ref={ref5} style={{marginTop:'20px'}}>
      <div className='dis-cover'></div>
      <span className='dis-text1'>{t('home.discover.text1')}</span>
      <span className='dis-text2'>{t('home.discover.text2')}</span>
      <button className="dis-btn">{t('home.discover.button')}</button>
      
     </div>



    </>
  }
  
  export default AboutUs