"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface CardProps {
  data: {
    id: string;
    name: string;
    img: any;
  };
}

const MangoCard: React.FC<CardProps> = ({ data }) => {
  const router = useRouter();
  return (
    <div className="card">
      <p>{data.name}</p>
      <div
        className="mango-img"
        onClick={() => {
          router.push(`grading/phase/${data.id}`);
        }}
      >
        <Image
          // className="mango-img"
          src={data.img} // Path relative to the public directory
          alt="Example Image"
          height={200} // Update with the appropriate height
        />
      </div>
    </div>
  );
};

export default MangoCard;
