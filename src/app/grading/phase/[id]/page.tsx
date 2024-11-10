"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

const MHN_M = [
  { id: "M1", name: "M1" },
  { id: "M2", name: "M2" },
  { id: "M3", name: "M3" },
];

const NDM_M = [
  { id: "M1", name: "M1" },
  { id: "M2", name: "M2" },
  { id: "M3", name: "M3" },
];

const R2E2_M = [
  { id: "M1", name: "M1" },
  { id: "M2", name: "M2" },
];

type MaturityStage = { id: string; name: string };

type MessageBoxProps = {
  message: string;
  id: string;
  mango: MaturityStage[];
};

const MessageBox: React.FC<MessageBoxProps> = ({ message, mango, id }) => {
  const router = useRouter();
  const handleClick = (maturity: string) => {
    router.push(`/grading/${id}_${maturity}`);
  };

  return (
    <div className="max-w-md mx-auto p-4 rounded-lg  text-center">
      <div className="grid gap-4">
        {mango.map((stage) => (
          <div
            onClick={() => {
              handleClick(stage.id);
            }}
            key={stage.id}
            className="p-4 bg-gray-100 border cursor-pointer flex items-center justify-center text-[60px] my-10 border-white-300 rounded-lg shadow-sm text-center w-[541px] h-[192px]"
          >
            <div
              className={`text-gray-800 font-medium ${stage.name} cursor-pointer`}
            >
              {stage.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Mango() {
  const [mango, setMango] = useState<MaturityStage[]>(MHN_M);
  const { id } = useParams();
  const router = useRouter();
  useEffect(() => {
    if (id === "NDM") {
      setMango(NDM_M);
    } else if (id === "R2E2") {
      setMango(R2E2_M);
    } else {
      setMango(MHN_M); // Default to MHN if id is unrecognized
    }
  }, [id]);

  return (
    <div className="wrapper">
      <div className="variety-container">
        <MessageBox
          message="This is a centered message with rounded corners!"
          mango={mango}
          id={id as string}
        />
        {/* Add MangoCard components or other UI elements as needed */}
      </div>
    </div>
  );
}
