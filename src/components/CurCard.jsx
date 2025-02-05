import React from "react";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";

function  CurCard(src) {

  const { ref, inView } = useInView({
    threshold: 0.2, 
    triggerOnce: true, 
  });

  const { t } = useTranslation();


  const cards = [
    { 
      src: 'cur/ethereum.jpeg',
      title: 'Ethereum',
      desc: t("blockChain.curcard.card1.desc"),
    },
    { 
        src: 'cur/binance.jpeg',
        title: 'Binance Smart Chain',
        desc: t("blockChain.curcard.card2.desc"),
      },
      { 
        src: 'cur/algorand.webp',
        title: 'Algorand',
        desc: t("blockChain.curcard.card3.desc"),
      },
      { 
        src: 'cur/cardano.jpeg',
        title: 'Cardano',
        desc: t("blockChain.curcard.card4.desc"),
      },
      { 
        src: 'cur/solana.jpeg',
        title: 'Solana',
        desc: t("blockChain.curcard.card5.desc"),
      },
      { 
        src: 'cur/matic.jpeg',
        title: 'Matic/Polygon',
        desc: t("blockChain.curcard.card6.desc"),
      },
      { 
        src: 'cur/polkadot.jpeg',
        title: 'Polkadot',
        desc: t("blockChain.curcard.card7.desc"),
      },
      { 
        src: 'cur/stellar.webp',
        title: 'Stellar',
        desc: t("blockChain.curcard.card8.desc"),
      },
      { 
        src: 'cur/theta.webp',
        title: 'Theta',
        desc: t("blockChain.curcard.card9.desc"),
      },
      { 
        src: 'cur/eos.jpeg',
        title: 'EOS',
        desc: t("blockChain.curcard.card10.desc"),
      },
      { 
        src: 'cur/multichain.jpeg',
        title: 'Multichain',
        desc: t("blockChain.curcard.card11.desc"),
      },
      { 
        src: 'cur/tron.jpeg',
        title: 'TRON',
        desc: t("blockChain.curcard.card12.desc"),
      },
      { 
        src: 'cur/casper.webp',
        title: 'Casper',
        desc: t("blockChain.curcard.card13.desc"),
      },
      { 
        src: 'cur/solidity.jpeg',
        title: 'Solidity',
        desc: t("blockChain.curcard.card14.desc"),
      },
      { 
        src: 'cur/hyperledger.jpeg',
        title: 'Hyperledger',
        desc: t("blockChain.curcard.card15.desc"),
      },
      { 
        src: 'cur/near.jpeg',
        title: 'Near',
        desc: t("blockChain.curcard.card16.desc"),
      },
      { 
        src: 'cur/aptos.jpeg',
        title: 'Aptos',
        desc: t("blockChain.curcard.card17.desc"),
      },
      { 
        src: 'cur/optimism.jpeg',
        title: 'Optimism',
        desc: t("blockChain.curcard.card18.desc"),
      },

]

  return (
    <div className="blocksol-card" ref={ref}>
      <div className="blocksol-card-cont">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`blocksol-card-body ${inView ? "animate" : ""}`}
            style={{ transitionDelay: `${index * 0.3}s` }} 
          >
            <div className="cur-img">
        <img src={card.src} alt="" />
      </div>
            <div className="blocksol-card-text">
              <span className="blocksol-card-title">{card.title}</span>
              <span className="blocksol-card-desc">{card.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CurCard;