import { useInView } from 'react-intersection-observer';
import ImageSlider from './ImageSlider'
import ChooseCard from './ChooseCard'
import './styles/service.css'
import FAQ from './FAQ';
import { useTranslation } from 'react-i18next';



const Services = () => {

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
   
     const { ref: ref4,inView: inView4 } = useInView({
       threshold: 0.01, 
       triggerOnce: true,  
     });


     const images =[
      { src: 'imageslider/graphicslide-100.jpg', title: t('slider.image.titleg') , text: t('slider.image.textg')},
      { src: 'imageslider/marketslide-100.jpg', title:t('slider.image.titleo'), text:  t('slider.image.texto')},
      { src: 'imageslider/webslide-100.jpg', title: t('slider.image.titlew'), text:  t('slider.image.textw')},
      { src: 'imageslider/appslide-100.jpg', title:t('slider.image.titlem'), text:  t('slider.image.textm')},
      { src: 'imageslider/voiceslide-100.jpg', title:t('slider.image.titlev'), text:  t('slider.image.textv')}
    ]

 
    return<>
    <div className="subpage-header">
    <div className="dis-cover"></div>
    </div>
      <div className="sub-header-content">
        <div className="sub-header-text">
          <span className='sub-header-text-1'>{t('service.title')}</span>
          <span className='sub-header-text-2'>{t('service.subtitle')}</span>
        </div>
      </div>


      <div className={`service-sec ${inView1 ? 'animate' : ''}`} ref={ref1} style={{backgroundImage:"none", paddingTop:'0'}}>
     
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

     <div className="slider-sec">
      <span className='we-do-title'>{t('home.weDo.title')}</span>
      <ImageSlider images={images} autoPlayInterval={5000} />;
     </div>

     <div className="choose-us-sec">
     <span className='choose-title'>{t('home.chooseUs.title')}</span>
     <span className='choose-desc'>{t('home.chooseUs.desc')}</span>
      <div className="choose-card">
        <ChooseCard></ChooseCard>
      </div>
     </div>

     <div className={`discover-sec ${inView2 ? 'animate' : ''}`} ref={ref2}>
      <div className='dis-cover'></div>
      <span className='dis-text1'>{t('home.discover.text1')}</span>
      <span className='dis-text2'>{t('home.discover.text2')}</span>
      <a className='link-index' href="https://masfintech.com/wp-login.php?redirect_to=https%3A%2F%2Fmasfintech.com%2Fwp-admin%2Fpost.php%3Fpost%3D14107%26action%3Dedit&reauth=1"> <button className="dis-btn">{t('home.discover.button')}</button></a>
      
     </div>

     <div className="faq-sec">
      <div className={`faq-top ${inView3 ? 'animate' : ''}`} ref={ref3}>
        <span className='faq-title'>{t("faq.title")}</span>
        <span className='faq-title2'>{t("faq.title2")}</span>
        <span className='faq-desc'>{t("faq.desc")}</span>
        <img className='questimg' src="question.webp" alt="" />
      </div>
      <div className={`faq-bottom ${inView4 ? 'animate' : ''}`} ref={ref4}>
      <FAQ></FAQ>
      </div>
     </div>

    </>
  }
  
  export default Services