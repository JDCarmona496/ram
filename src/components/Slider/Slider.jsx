import Carousel from 'react-bootstrap/Carousel';
import uno from '../../assets/uno.png'
import dos from '../../assets/dos.png'
import tres from '../../assets/tres.png'
import as from '../../assets/as.png'
import asd from '../../assets/asd.png'
import asda from '../../assets/asda.png'
import asds from '../../assets/asds.png'
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