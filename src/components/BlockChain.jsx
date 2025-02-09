import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import BlockDevCard from './BlockDevCard';
import BlockSolCard from './BlockSolCard';
import CurCard from './CurCard';
import './styles/block.css'

const BlockChain = () => {

  const { t } = useTranslation(); 

  const { ref, inView } = useInView({
    threshold: 0.2, 
    triggerOnce: true, 
  });

    return <>
    <div className="subpage-header">
    <div className="dis-cover"></div>
    </div>
      <div className="sub-header-content">
        <div className="sub-header-text">
          <span className='sub-header-text-1'>{t('blockChain.title')}</span>
        </div>
      </div>

      <div className="block-process-section">
      <span className='process-title'>{t('blockChain.processtitle')}</span>
      <span className='process-desc'>{t('blockChain.processdesc')}</span>
      <img
        ref={ref}
        src="blockchain.png"
        alt=""
        className={`process-image ${inView ? "animate-left" : ""}`}
      />


      </div>

      <div className="block-dev-type-section">
          <BlockDevCard></BlockDevCard>
      </div>

      <div className="block-sol-section">
      <span className='sol-title'>{t('blockChain.solTitle')}</span>
      <BlockSolCard></BlockSolCard>

      </div>

      <div className="block-expert-section">
      <span className='cur-title'>{t('blockChain.curTitle')}</span>
      <CurCard></CurCard>
      </div>

     
    </>
}

export default BlockChain