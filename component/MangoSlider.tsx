import React, { useState } from "react";
import Image from "next/image"; // Assuming you're using Next.js for image handling

// Your mango images
import R2E2 from "../public/assets/component/R2E2/R2E2 02.png";
import { Carousel } from "antd";
import { useRouter } from "next/navigation";
export interface MangoCard {
  image: any; // The image or mango variety
  title: string; // The title of the card
  text: string; // The text content of the card
  go_to_url?: string;
}

interface MangoSliderProps {
  data: MangoCard[];
}

const MangoSlider: React.FC<MangoSliderProps> = ({ data }) => {
  const router = useRouter();
  const renderCards = () => {
    return data.map((item: MangoCard) => {
      return <div key={item.title}> {Card(item)}</div>;
    });
  };

  const Card = (MangoCard: MangoCard) => {
    return (
      <div
        className="card-mango"
        style={{ cursor: MangoCard.go_to_url ? "pointer" : "" }}
        onClick={() => {
          if (MangoCard.go_to_url) {
            router.push(MangoCard.go_to_url);
          }
        }}
      >
        <Image src={MangoCard.image} alt={MangoCard.title}></Image>
        <div className="card-mango-body">
          <h2 className="card-mango-title">{MangoCard.title}</h2>
          <p className="card-mango-text">{MangoCard.text}</p>
        </div>
      </div>
    );
  };

  return (
    data && (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          flexDirection: "row",
        }}
      >
        {renderCards()}
      </div>
    )
  );
};

export default MangoSlider;
