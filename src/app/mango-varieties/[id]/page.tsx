"use client";
import { ReactNode, useEffect, useState } from "react";
import Image from "next/image";

import NDM1 from "../../../../public/assets/component/NDM/NDM01.png";
import NDM2 from "../../../../public/assets/component/NDM/NDM02.png";
import NDM3 from "../../../../public/assets/component/NDM/NDM03.png";

import MHN1 from "../../../../public/assets/component/MHN/MHN01.png";
import MHN2 from "../../../../public/assets/component/MHN/MHN02.png";
import MHN3 from "../../../../public/assets/component/MHN/MHN03.png";

import R2E21 from "../../../../public/assets/component/R2E2/R2E2 01.png";
import R2E22 from "../../../../public/assets/component/R2E2/R2E2 02.png";
import R2E23 from "../../../../public/assets/component/R2E2/R2E2 03.png";

import icon_mango from "../../../../public/assets/icon/mango.png";
import tri from "../../../../public/assets/icon/tri.png";
import tree from "../../../../public/assets/mango/tree.png";
import { useRouter } from "next/router";
import { Carousel } from "antd";
interface pageProps {
  params: {
    id: string;
  };
}

interface Mango {
  id: string;
  img: any[]; // Assuming image paths or URLs are strings, adjust if needed
  name: string;
  super_title: string;
  desc: string;
  original: string;
  fact: string;
  botanical: string;
}

const dataset = [
  {
    id: "NDM",
    img: [NDM1, NDM2, NDM3],
    name: "Namdokmai Sithong Mango",
    super_title:
      "The benefits of a mango reach far beyond the flexibility of its juicy, mouth-watering flavor! This magical, most-marvelous super fruit is also a nutritious powerhouse, with over 20 vitamins and minerals.",
    desc: "This type of mango is Caused by removing the seeds of Mango Nam Dok Mai Phra Pradaeng Grow it as a seedling and plant it. Until the tree grew up and had flowers and fruit, it appeared that it was different from the original variety. While the fruit is still young for 1-2 months, the fruit color will It is green, but after 1-2 months it will turn pale yellow throughout the fruit. And it will be like this until the results. When old or ripe, the yellow color will become darker. Makes the whole tree look very beautiful when it has lots of fruit. Cooked meat tastes sweet and fragrant. Bang Saen seeds It's very delicious to eat. Can bear fruit throughout the year. Or popularly called Dawei. The owner of the plant is Col. Saman Aem-ong. It is believed to be a mutant mango. Therefore, the variety was planted and tested in many ways and many times until it was confident that it was a permanent new variety. Of course, that's why it was named “Nam Dok Mai Thong Thong Mango” and is ready to be copyrighted according to the law. and propagate Released for sale, it is popular with buyers who plant it widely and continuously until the present.",
    original:
      "Nam Dok Mai Mango It is a local mango in Thailand. Currently found growing in every region. and is grown for trade in much of the region Central, Northern, Northeastern, Eastern, and Western regions.",
    fact: "Nutritious and delicious, the mango delivers on all levels. In addition to their juicy tropical flavor, mangos deliver nutritional value and make healthy eating a joyful and nostalgic experience.",
    botanical:
      "Just like every other mango, the 'fruit' is round, oval and long. The shape of the fruit is beautiful. When fully grown, each fruit has an average weight of between 300-400 grams. It bears fruit in bunches of 5-7 fruits. Continuously throughout the year The fruit is yellow from small until the fruit is ripe and beautiful and delicious to eat. Small, thin, withered seeds, lots of flesh, sweet and fragrant taste, no burrs, very delicious to eat. As mentioned above Propagated generally by seeds, cuttings, grafting and grafting.",
  },
  {
    id: "MHN",
    img: [MHN1, MHN2, MHN3],
    name: "Mahachanok Mango",
    super_title:
      "The benefits of a mango reach far beyond the flexibility of its juicy, mouth-watering flavor! This magical, most-marvelous super fruit is also a nutritious powerhouse, with over 20 vitamins and minerals.",
    desc: "It is a good Thai mango variety created by crossing a Nang Klang Wan mango with a Sunset mango variety by Mr. Det Thewthong, a farmer from Lamphun province. In 1986, Mahachanok mangoes were registered. The breed was registered with the Department of Agriculture on September 27, 1990, and was praised as the 'King of Thai mangoes' because they have a sweet, fragrant taste, firm flesh, and are popular both domestically and abroad. Mr. Det Thewthong, a mango farmer in Li District, Lamphun Province, accidentally discovered the Mahachanok mango. In 1986, while experimenting with planting the Midday Mango and Sunset Mango, he found one mango tree that resulted from cross-breeding between the two breeds. It produced large fruits with an elongated shape, thick rind, firm flesh, and a sweet, fragrant taste. This discovery led to the propagation of the tree, named 'Mahachanok' in honor of His Majesty King Bhumibol Adulyadej. Det Borommanatbophit Mahachanok mangoes became well-known in the market in 1987 and became very popular quickly due to their distinctive taste and appeal to both Thai and foreign consumers. Mahachanok mangoes have been promoted as a Thai agricultural product and are currently exported to countries around the world.",
    original:
      "Mahachanok mango is a variety of mango that is widely grown in Thailand, mostly grown in northern areas. It is also cultivated in the central region, but like in the north, their availability in the market is limited to a single season, from April to May.",
    fact: "Nutritious and delicious, the mango delivers on all levels. In addition to their juicy tropical flavor, mangos deliver nutritional value and make healthy eating a joyful and nostalgic experience.",
    botanical:
      "The fruit is large, long, and has a thick rind. Its flesh is dense with a sweet and fragrant taste. It is harvested only once a year, typically between April and May, and withstands transportation well, making it suitable for export.",
  },
  {
    id: "R2E2",
    img: [R2E21, R2E22, R2E23],
    name: "R2E2 Mango",
    super_title:
      "The benefits of a mango reach far beyond the flexibility of its juicy, mouth-watering flavor! This magical, most-marvelous super fruit is also a nutritious powerhouse, with over 20 vitamins and minerals.",
    desc: "R2E2 is a mango variety known for its large fruit size and vibrant color. In 1985, mango scholars Mr. Ian Balle, Mr. Ross Wright, and Mr. Peter Beale from Australia developed this variety. It was selected from seedlings of the Florida Kent mango and named 'R2E2' (R2E2), which stands for 'Row 2, Experiment 2', reflecting its origin in the development process at the Horticultural Research Institute in Australia.",
    original:
      "R2E2 is a mango variety known for its large fruit size and vibrant color. In 1985, mango scholars Mr. Ian Balle, Mr. Ross Wright, and Mr. Peter Beale from Australia developed this variety. It was selected from seedlings of the Florida Kent mango and named 'R2E2' (R2E2), which stands for 'Row 2, Experiment 2', reflecting its origin in the development process at the Horticultural Research Institute in Australia.",
    fact: "Nutritious and delicious, the mango delivers on all levels. In addition to their juicy tropical flavor, mangos deliver nutritional value and make healthy eating a joyful and nostalgic experience.",
    botanical:
      "The R2E2 is a perennial plant that grows to be medium to very tall, resembling a canopy. However, the branches are brittle and prone to breaking easily. After planting, the R2E2 mango tree experiences rapid growth and begins producing fruit as early as the second year. However, it reaches its peak fruiting potential in the fourth year onwards, when the canopy becomes large and fully established.",
  },
];

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

export default function MangoVariety({ params }: pageProps) {
  const emptyMango: Mango = {
    id: "",
    img: [],
    name: "",
    super_title: "",
    desc: "",
    original: "",
    fact: "",
    botanical: "",
  };
  const [mangoData, setMangoData] = useState<Mango>(emptyMango);
  useEffect(() => {
    const my_mango: Mango = dataset.filter((item) => {
      return item.id === params.id;
    })[0];
    setMangoData(my_mango);
  }, [params]);

  return (
    <div className="mango-wrapper">
      <div className="sec">
        <div className="name">
          {mangoData.name}{" "}
          <Image
            // className="mango-img"
            style={{ width: "70px" }}
            src={icon_mango} // Path relative to the public directory
            alt="Example Image"
          ></Image>
        </div>
        <div className="mango-slide">
          <Carousel autoplay>
            {mangoData.img.map((imageUrl, index) => (
              <div key={index}>
                <Image
                  src={imageUrl}
                  alt={`Slide ${index}`}
                  style={{ width: "100%" }}
                />
              </div>
            ))}
          </Carousel>
        </div>
        <div className="topic">Super Nutritious. Ultra Delicious!</div>
        <div className="topic-desc">{mangoData.super_title}</div>
        <div className="slogan">
          Keep scrolling or below to learn about the mango’s oh-so-good-for-you
          secrets!
        </div>
      </div>
      <div className="sec">
        <div className="tri">
          <Image
            // className="mango-img"
            style={{ width: "70px" }}
            src={tri} // Path relative to the public directory
            alt="Example Image"
          ></Image>
        </div>
      </div>
      <div className="sec">
        <div className="two-container">
          <div className="left">
            <div className="tree-container ">
              <Image
                // className="mango-img"
                // style={{ width: "70px" }}
                src={tree} // Path relative to the public directory
                alt="Example Image"
              ></Image>
            </div>
          </div>
          <div className="right">
            <div className="box-content">
              <div className="topic">Description</div>
              <div className="n-desc">{mangoData.desc}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="sec">
        <div className="two-container">
          <div className="left">
            <div className="box-content">
              <div className="topic">Origin and spread</div>
              <div className="n-desc">{mangoData.original}</div>
            </div>
          </div>
          <div className="right">
            <div className="box-content">
              <div className="topic">Mango Nutrition Facts</div>
              <div className="n-desc">{mangoData.fact}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="sec">
        <div className="topic">Botanical shape</div>
        <div className="n-desc">{mangoData.botanical}</div>
      </div>
    </div>
  );
}
