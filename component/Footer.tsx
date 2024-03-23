// components/Footer.tsx

import Image from "next/image";
import React from "react";
import footer from "../public/assets/component/footer.png";
import footer1 from "../public/assets/component/footer1.png";
import footer2 from "../public/assets/component/footer2.png";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="footer-component footer1">
        <Image src={footer1} alt="footer1"></Image>
      </div>
      <div className="footer-component footer2">
        <Image src={footer2} alt="footer2"></Image>
      </div>
    </div>
  );
};

export default Footer;
