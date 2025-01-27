

const PortfoiloCard = (props) => {
    
    
    const imgClass = props.class === 'Mobile application' ? 'app-img' : 'web-img';
  
    return (
      <>
        <div className="p-cardinfo">
          <span className="p-cardname">{props.name}</span>
          <span className="p-cardtype">{props.type}</span>
        </div>
        <div className="p-cardimg">
        
          <img src={props.image} alt="" className={imgClass} />
        </div>
        </>
    );
  };
  
  export default PortfoiloCard;
  