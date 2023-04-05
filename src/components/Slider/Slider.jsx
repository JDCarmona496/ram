import Carousel from 'react-bootstrap/Carousel';
import uno from '../../assets/uno.svg'
import dos from '../../assets/dos.svg'
import tres from '../../assets/tres.svg'
import as from '../../assets/as.svg'
import asd from '../../assets/asd.svg'
import asda from '../../assets/asda.svg'
import asds from '../../assets/asds.svg'
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