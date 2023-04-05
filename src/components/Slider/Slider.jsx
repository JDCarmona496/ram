import Carousel from 'react-bootstrap/Carousel';
import uno from '../../assets/uno.jpg'
import dos from '../../assets/dos.jpg'
import tres from '../../assets/tres.jpg'
import as from '../../assets/as.png'
import asd from '../../assets/asd.png'
import asda from '../../assets/asda.jpg'
import asds from '../../assets/asds.jpg'
function UncontrolledExample() {
  return (
    
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={as}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={asd}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={asda}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={asds}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={uno}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={dos}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={tres}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;