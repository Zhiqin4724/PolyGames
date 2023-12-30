import './portfolio.css';


function Portfolio() {
  return (
    <>
    <div className='portfolio-container'>
        <div className='portfolio-titre'>Lorem Ipsum</div>
        <div className='portfolio-list'>
            <div className='portfolio-card-1'>
                <div className='portfolio-image-container'>
                <img src='' alt='' className='portfolio-image'></img>
                </div>
                <div className='portfolio-titre-image'></div>
                <div className='portfolio-description'></div>
            </div>
            <div className='portfolio-card-2'>
            <div className='portfolio-image-container'>
                <img src='' alt='' className='portfolio-image'></img>
                </div>
                <div className='portfolio-description'></div>
            </div>
        </div>
        <div className='portfolio-list'>
            <div className='portfolio-card-1'>
            <div className='portfolio-image-container'>
                <img src='' alt='' className='portfolio-image'></img>
                </div>
                <div className='portfolio-description'></div>
            </div>
            <div className='portfolio-card-2'>
            <div className='portfolio-image-container'>
                <img src='' alt='' className='portfolio-image'></img>
            </div>
            <div className='portfolio-description'></div>
            </div>
        </div>
    </div></>
  );
}
export default Portfolio;
