// components/Layout.tsx
import { ReactNode } from "react";
import Image from "next/image";
interface LayoutProps {
  children: ReactNode;
}
import NDM from "../../../public/assets/mango/NDM.png";
import MHN from "../../../public/assets/mango/MHN.png";
import R2E2 from "../../../public/assets/mango/R2E2.png";
import MangoCard from "../../../component/MangoCardMaturity";
// import MangoCard from "../../../component/MangoCard";

const dataset = [
  {
    id: "NDM",
    img: NDM,
    name: "Nam Dok Mai",
  },
  {
    id: "MHN",
    img: MHN,
    name: "Mahachanok",
  },
  {
    id: "R2E2",
    img: R2E2,
    name: "R2E2",
  },
];
// const Layout: React.FC<LayoutProps> = ({ children }) => {
export default function Mango() {
  return (
    <div className="wrapper">
      <div className="varity-container">
        {dataset.map((item, index) => {
          return <MangoCard key={index} data={item} />;
        })}
      </div>
    </div>
  );
}
