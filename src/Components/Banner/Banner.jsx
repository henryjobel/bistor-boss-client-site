import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import caruselimg from '../../assets/home/01.jpg'
import caruselimg2 from '../../assets/home/02.jpg'
import caruselimg3 from '../../assets/home/03.png'
import caruselimg4 from '../../assets/home/04.jpg'
import caruselimg5 from '../../assets/home/05.png'
import caruselimg6 from '../../assets/home/06.png'


const Banner = () => {
    return (
        <div>
            <Carousel>
                <div>
                    <img src={caruselimg} />
                    
                </div>
                <div>
                    <img src={caruselimg2} />
                    
                </div>
                <div>
                    <img src={caruselimg3} />
                    
                </div>
                <div>
                    <img src={caruselimg4} />
                    
                </div>
                <div>
                    <img src={caruselimg5} />
                    
                </div>
                <div>
                    <img src={caruselimg6} />
                    
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;