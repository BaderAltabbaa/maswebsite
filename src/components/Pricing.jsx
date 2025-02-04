import ProgressCard from './ProgressCard'
import FAQ from './FAQ';
import { useInView } from 'react-intersection-observer';
import React from 'react';
import PriceCard from './PriceCard';
import './styles/pricing.css'
import { useTranslation } from 'react-i18next';


const Pricing = () => {


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
 

  const { ref: ref5,inView: inView5 } = useInView({
      threshold: 0.2, 
      triggerOnce: true, 
    });

    const cardData = t("price.cards", { returnObjects: true });


    return<>
    <div className="subpage-header">
    <div className="dis-cover"></div>
    </div>
      <div className="sub-header-content">
        <div className="sub-header-text">
        <span className="sub-header-text-1">{t("price.title")}</span>
        <span className="sub-header-text-2">{t("price.subtitle")}</span>
        </div>
      </div>

      <div className="deliver-sec">
        <div className="title-sec">
          <span  className={`price-text1 ${inView1 ? 'animate' : ''}`} ref={ref1}>{t("price.text1")}</span>
        </div>
        <div className="pricing-container">
      {cardData.map((card, index) => (
        <PriceCard
          key={index}
          title={card.title}
          description={card.description}
          price={card.price}
          priceSpan={card.priceSpan}
          features={card.features}
        />
      ))}
    </div>
</div>

      <div className="express-sec">
      <ProgressCard></ProgressCard>
     </div>

     <div className="faq-sec">
      <div className={`faq-top ${inView3 ? 'animate' : ''}`} ref={ref3}>
      <span className='faq-title'>{t("faq.title")}</span>
        <span className='faq-title2'>{t("faq.title2")}</span>
        <span className='faq-desc'>{t("faq.desc")}</span>
      </div>
      
      <div className={`faq-bottom ${inView4 ? 'animate' : ''}`} ref={ref4}>
      <FAQ></FAQ>
      </div>
     </div>

     <div className={`discover-sec ${inView5 ? 'animate' : ''}`} ref={ref5}>
      <div className='dis-cover'></div>
      <span className='dis-text1'>{t('price.dis')}</span>
      <a className='link-index' href="https://masfintech.com/wp-login.php?redirect_to=https%3A%2F%2Fmasfintech.com%2Fwp-admin%2Fpost.php%3Fpost%3D14107%26action%3Dedit&reauth=1"> <button className="dis-btn">{t('home.discover.button')}</button></a>
      
     </div>
    </>
  }
  
  export default Pricing