import { useInView } from 'react-intersection-observer';

function DoCard({ title, desc, src }) {
  const { ref, inView } = useInView({
    threshold: 0.2, 
    triggerOnce: true, 
  });

  return (
    <div className={`card-body ${inView ? 'animate' : ''}`} ref={ref}>
      <div className="card-text">
        <span className="card-title">{title}</span>
        <span className="card-desc">{desc}</span>
      </div>
      <div className="card-image">
        <img src={src} alt="" />
      </div>
    </div>
  );
}

export default DoCard;
