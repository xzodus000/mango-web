"use client";
import { ReactNode, useEffect, useState } from "react";
import Image from "next/image";

import NDM1 from "../../../../public/assets/component/NDM/M1.png";
import NDM2 from "../../../../public/assets/component/NDM/M2.png";
import NDM3 from "../../../../public/assets/component/NDM/M3.png";

import MHN1 from "../../../../public/assets/component/MHN/M1.png";
import MHN2 from "../../../../public/assets/component/MHN/M2.png";
import MHN3 from "../../../../public/assets/component/MHN/M3.png";

import R2E21 from "../../../../public/assets/component/R2E2/M1.png";
import R2E22 from "../../../../public/assets/component/R2E2/M2.png";

import icon_mango from "../../../../public/assets/icon/mango.png";

import wrong from "../../../../public/assets/component/wrong.png";
import correct from "../../../../public/assets/component/correct.png";
import m1_bg from "../../../../public/assets/component/m1_bg.png";

import tri from "../../../../public/assets/icon/tri.png";
import tree from "../../../../public/assets/mango/tree.png";

import { Carousel } from "antd";
import { useRouter } from "next/navigation";
var _ = require("lodash");
interface pageProps {
  params: {
    id: string;
  };
}
interface Mango {
  id: string;
  name: string;
  maturityStage: string;
  remark: string;
  type: string;
  desc: string;
  image: any; // Assuming the image path or identifier is a string
  maturity: any;
}

// const Layout: React.FC<pageProps> = ({ params }) => {
// immature;
export default function Mango({ params }: pageProps) {
  const router = useRouter();
  const [dataset, setDataset] = useState([
    {
      id: "MHN_M1",
      name: "Mahachanok Mango",
      maturityStage: "M1",
      remark: "immature",
      type: "MHN",
      desc: "“Float in water, saline solution 2% and 3%”.",
      image: MHN1,
      maturity: {
        water: true,
        saline2: true,
        saline3: true,
      },
    },

    {
      id: "MHN_M2",
      name: "Mahachanok Mango",
      maturityStage: "M2",
      remark: "Exporting maturity",
      type: "MHN",
      desc: "“Float in saline solution 2% and 3%”.",
      image: MHN2,
      maturity: {
        water: false,
        saline2: true,
        saline3: true,
      },
    },

    {
      id: "MHN_M3",
      name: "Mahachanok Mango",
      maturityStage: "M3",
      remark: "Domestic maturity",
      type: "MHN",
      desc: "“Not float in water, saline solution 2% and 3%”.",
      image: MHN3,
      maturity: {
        water: false,
        saline2: false,
        saline3: false,
      },
    },

    {
      id: "NDM_M1",
      name: "Namdokmai Sithong Mango",
      maturityStage: "M1",
      remark: "immature",
      type: "NDM",
      desc: "“Float in water, saline solution 2% and 3%”.",
      image: NDM1,
      maturity: {
        water: true,
        saline2: true,
        saline3: true,
      },
    },

    {
      id: "NDM_M2",
      name: "Namdokmai Sithong Mango",
      maturityStage: "M2",
      remark: "Exporting maturity",
      type: "NDM",
      desc: "“Float in water, saline solution 2% and 3%”.",
      image: NDM2,
      maturity: {
        water: false,
        saline2: true,
        saline3: true,
      },
    },

    {
      id: "NDM_M3",
      name: "Namdokmai Sithong Mango",
      maturityStage: "M3",
      remark: "Domestic maturity",
      type: "NDM",
      desc: "“Not float in water, saline solution 2% and 3%”.",
      image: NDM3,
      maturity: {
        water: false,
        saline2: false,
        saline3: false,
      },
    },

    {
      id: "R2E2_M1",
      name: "R2E2 Mango",
      maturityStage: "M1",
      remark: "immature",
      type: "R2E2",
      desc: "“Dry matter less han or equal 13%”.",
      image: R2E21,
      maturity: {
        dryLess: true,
        dryMore: false,
      },
    },

    {
      id: "R2E2_M2",
      name: "R2E2 Mango",
      maturityStage: "M2",
      remark: "Exporting maturity",
      type: "R2E2",
      desc: "“Dry matter more than 13%”.",
      image: R2E22,
      maturity: {
        dryLess: false,
        dryMore: true,
      },
    },
  ]);
  const [selectedMango, setselectedMango] = useState<Mango>({
    id: "MHNM1",
    name: ".....?",
    maturityStage: "?",
    remark: "immature",
    type: "MHN",
    desc: "“..?”",
    image: m1_bg,
    maturity: {
      water: true,
      saline2: true,
      saline3: true,
    },
  });
  useEffect(() => {
    let filtered_array = _.filter(dataset, function (o: any) {
      return o.id === params.id;
    });

    if (filtered_array.length > 0) {
      setselectedMango(filtered_array[0]);
    }
  }, [params, dataset]);

  return (
    <div className="mango-wrapper">
      <div className="sec">
        <div className="name">
          {selectedMango.name}{" "}
          <Image
            // className="mango-img"
            style={{ width: "70px" }}
            src={icon_mango} // Path relative to the public directory
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
                src={selectedMango.image} // Path relative to the public directory
                alt="Example Image"
              ></Image>
            </div>
          </div>
          <div className="right">
            <div className="box-content">
              <div className="red-desc">WHAT THEY SAY</div>
              <div className="black-desc"> {selectedMango.name}</div>
              <div className="grading-desc">{selectedMango.desc}</div>
              <div
                onClick={() => {
                  // /mango-varieties/DMN;
                  router.push(`/mango-varieties/${selectedMango.type}`);
                }}
                className={`learn-more ${selectedMango.maturityStage}`}
                style={{ cursor: "pointer" }}
              >{`Learn more >>>`}</div>
            </div>
            <div className="box-res-grading">
              <div
                className={`triangle left ${selectedMango.maturityStage}`}
              ></div>
              <div className="card">
                <div className={`main-text ${selectedMango.maturityStage}`}>
                  {selectedMango.maturityStage}
                </div>
                <div className={`desc-text ${selectedMango.maturityStage}`}>
                  ({selectedMango.remark})
                </div>
              </div>
              <div
                className={`triangle right ${selectedMango.maturityStage}`}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="sec">
        <div className="table-maturity">
          <div className="row line-text bottom">Maturity</div>
          {selectedMango.type === "R2E2" ? (
            <>
              <div className="row line-text bottom">
                <div className="column line-text right">{`Dry matter <= 13%`}</div>
                <div className="column line-text right">{`Dry matter > 13%`}</div>
              </div>
              <div className="row tiktok">
                <div className="column line-text right">
                  <Image
                    src={selectedMango.maturity?.dryLess ? correct : wrong}
                    alt="footer1"
                  ></Image>
                </div>

                <div className="column">
                  <Image
                    src={selectedMango.maturity?.dryMore ? correct : wrong}
                    alt="footer1"
                  ></Image>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="row line-text bottom">
                <div className="column line-text right">water</div>
                <div className="column line-text right">saline solution 2%</div>
                <div className="column line-text">saline solution 3%</div>
              </div>
              <div className="row tiktok">
                <div className="column line-text right">
                  <Image
                    src={selectedMango.maturity?.water ? correct : wrong}
                    alt="footer1"
                  ></Image>
                </div>
                <div className="column line-text right">
                  <Image
                    src={selectedMango.maturity?.saline2 ? correct : wrong}
                    alt="footer1"
                  ></Image>
                </div>
                <div className="column">
                  <Image
                    src={selectedMango.maturity?.saline3 ? correct : wrong}
                    alt="footer1"
                  ></Image>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
