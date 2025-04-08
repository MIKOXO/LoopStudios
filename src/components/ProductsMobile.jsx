import React from "react";
import image1 from "../assets/mobile/image-deep-earth.jpg";
import image2 from "../assets/mobile/image-night-arcade.jpg";
import image3 from "../assets/mobile/image-soccer-team.jpg";
import image4 from "../assets/mobile/image-grid.jpg";
import image5 from "../assets/mobile/image-from-above.jpg";
import image6 from "../assets/mobile/image-pocket-borealis.jpg";
import image7 from "../assets/mobile/image-curiosity.jpg";
import image8 from "../assets/mobile/image-fisheye.jpg";

const cards = [
  { title: "DEEP EARTH", image: image1 },
  { title: "NIGHT ARCADE", image: image2 },
  { title: "SOCCER TEAM VR", image: image3 },
  { title: "THE GRID", image: image4 },
  { title: "FROM UP ABOVE VR", image: image5 },
  { title: "POCKET BOREALIS", image: image6 },
  { title: "THE CURIOSITY", image: image7 },
  { title: "MAKE IT FISHEYE", image: image8 },
];

const ProductsMobile = () => {
  return (
    <section className="">
      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative overflow-hidden group cursor-pointer"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <h2 className="absolute bottom-4 left-4 text-white text-2xl w-[70%] font-thin tracking-wide">
              {card.title}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsMobile;
