import { FaStar, FaHeart } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface CardProps {
  city: string;
  country: string;
  dates: string;
  price_per_night: number;
  rating: number;
  owner: string;
  images: string[];
}


const Card: React.FC<CardProps> = (props) => {
  const { images, ...otherProps } = props;

  return (
    <div style={{
      width: '100%',
      overflow: "hidden",
      cursor: 'pointer',
      position: 'relative'
    }}>
      <div style={{
        color: 'white',
        position: 'absolute',
        top: '1.25rem',
        right: '1.25rem',
        zIndex: '50',
        fontSize: '1.25rem',
        lineHeight: '1.75rem'
      }}>
        <FaHeart />
      </div>
      <Carousel
        showStatus={false}
        showIndicators={true}
        showThumbs={false}
        infiniteLoop={false}
        autoPlay={false}
      >

        {images.map((image, index) => (
          <div
            key={index}>
            <img
              src={image}
              alt={`Image ${index + 1}`}
              style={{
                borderRadius: '0.75rem'
              }}
              className="carousel-image"
            />
          </div>
        ))}
      </Carousel>
      <div style={{
        padding: '1rem 0.25rem'
      }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',

            gap: '1'
          }}>
          <h3 style={{
            fontWeight: 'bold',
            fontSize: '0.75rem',
            lineHeight: 'calc(1 / 0.75)'
          }}>
            {otherProps.city}.{otherProps.country}
          </h3>
          <span style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '3',
            fontSize: '0.75rem',
            lineHeight: 'calc(1 / 0.75)'
          }}>
            <FaStar />
            {otherProps.rating}
          </span>
        </div>
        <p style={{
          color: '#4a5568',
          fontSize: '1.25rem',
          lineHeight: '1.75rem'
        }}>
          Proposée par : {otherProps.owner}
        </p>
        <p style={{
          color: '#4a5568',
          fontSize: '1.25rem',
          lineHeight: '1.75rem'
        }}>
          {otherProps.dates}
        </p>
        <p style={{
          color: '#4a5568',
          fontSize: '1.25rem',
          lineHeight: '1.75rem'
        }}>
          {otherProps.price_per_night}
        </p>
      </div>
    </div>
  )
}

export default Card;
//57:50