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


export default function Card() {
  return (
    <div>Card</div>
  )
}


//57:50