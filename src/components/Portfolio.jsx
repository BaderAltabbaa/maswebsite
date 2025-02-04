import { useInView } from 'react-intersection-observer';
import ProgressCard from './ProgressCard'
import PortfoiloCard from '../PortfolioCard'
import './styles/home.css'
import { useTranslation } from 'react-i18next';


const Portfolio = () => {

 
 const { t } = useTranslation(); 
 
 const portfolio =[
  {id:1, class:'Mobile application', type: t('home.portfolio.typemoblie'),name:'Goldmall',image:'shop.png'},
  {id:2, class:'Mobile application', type: t('home.portfolio.typemoblie'),name:'SOUL',image:'soul.png'},
  {id:3, class:'Mobile application',type: t('home.portfolio.typemoblie'),name:'SIRAJ',image:'siraj.png'},
  {id:4, class:'web',type: t('home.portfolio.typeweb'),name:'Alsaad Group',image:'alsaad.png'},
  {id:5, class:'web',type: t('home.portfolio.typeweb'),name:'Royal.rtu',image:'royal.png'},
  {id:6, class:'web',type: t('home.portfolio.typeweb'),name:'Taizer shop',image:'taizer.png'}
]

   const { ref: ref2,inView: inView2 } = useInView({
      threshold: 0.2, 
      triggerOnce: true, 
    });
  
    const { ref: ref3,inView: inView3 } = useInView({
      threshold: 0.2, 
      triggerOnce: true, 
    });
  
   
    return<>
    <div className="subpage-header">
    <div className="dis-cover"></div>
    </div>
      <div className="sub-header-content">
        <div className="sub-header-text">
          <span className='sub-header-text-1'>{t('home.portfolio.subtitle')}</span>
          <span className='sub-header-text-2'>{t('home.portfolio.subtext')}</span>
        </div>
      </div>

      <div className="portfolio-sec">
       <div className="port-top">
        <div className={`port-left v2 ${inView2 ? 'animate' : ''}`} ref={ref2}>
         <div>
          <span>{t('home.portfolio.title')}</span>
        </div> 
          <span className='left-desc'>{t('home.portfolio.desc1')}</span>
          <span className='left-desc'>{t('home.portfolio.desc2')}</span>
        </div>       
       </div>
      </div>
      
      <div className="center">
      <div className="port-bottom" style={{marginBottom:'0'}}>
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
            <PortfoiloCard name={card.name} type={card.type} image={card.image} class={card.class}/>
          </div>
        );
      })}
     </div>
    </div>
      

      <div className="express-sec">
      <div className="margin-50">   
        </div>
      <ProgressCard></ProgressCard>
     </div>

    </>
  }
  
  export default Portfolio