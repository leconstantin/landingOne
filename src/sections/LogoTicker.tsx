import { FaApple } from "react-icons/fa";
import { RiNetflixFill } from "react-icons/ri";
import { FaShopify } from "react-icons/fa";
import { FaVolleyballBall } from "react-icons/fa";
import { MdEmojiFoodBeverage } from "react-icons/md";
import { FaHeadphonesAlt } from "react-icons/fa";
import { BsHypnotize } from "react-icons/bs";
import { FaCamera } from "react-icons/fa";
const logos = [
  { name: "Netflix", image: <RiNetflixFill className="h-10" /> },
  { name: "Apple", image: <FaApple /> },
  { name: "Shopify", image: <FaShopify /> },
  { name: "BallIn", image: <FaVolleyballBall /> },
  { name: "Coffin", image: <MdEmojiFoodBeverage /> },
  { name: "MusiK", image: <FaHeadphonesAlt /> },
  { name: "Hyponi", image: <BsHypnotize /> },
  { name: "BiShot", image: <FaCamera /> },
];

export default function LogoTicker() {
  return (
    <section className="px-4 py-24 overflow-x-clip">
      <div className="container">
        <h3 className="text-center text-white/50 text-xl">
          Alraedy have chosen by these market leaders
        </h3>
        <div className="overflow-hidden mt-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-24 pr-24">
            {logos.map((logo) => (
              <div
                className="inline-flex gap-2 items-center text-2xl"
                key={logo.name}
              >
                {logo.image} {logo.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
