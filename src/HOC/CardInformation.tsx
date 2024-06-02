import React from "react";
import { NameType } from "../types/types";
import ProgressBar from "../shared/components/UIElements/ProgressBar";

interface CardInformationProps {
  headers: NameType;
  type: string;
  values: any;
}

const CardInformation: React.FC<CardInformationProps> = ({
  headers,
  type,
  values,
}) => {
  return (
    <div>
      <div className="mb-4 flex gap-2 items-center">
        {headers.icon.length !== 0 && (
          <img src={headers.icon} className="block size-14" />
        )}
        <h3 className="text-2xl font-bold mb-4 text-gray-700">
          {headers.name}
        </h3>
      </div>
      {type === "infoGraph" && (
        <ul>
          {values.map((value: any) => (
            <li
              className="flex justify-between items-center text-center m-4"
              key={value.index}
            >
              <div className="text-4xl mb-2">{value.icon}</div>
              <h2 className="text-base font-normal text-gray-700">
                {value.name}
              </h2>
              <div className="w-16">
                <ProgressBar score={value.score} />
              </div>
            </li>
          ))}
        </ul>
      )}
      {type === "container" && (
        <ul>
          {values.map((value: any) => (
            <li
              className="flex justify-between items-center text-center m-4 "
              key={value.index}
            >
              <div className="text-4xl mb-2">{value.icon}</div>
              <h2 className="text-base font-bold text-gray-700">
                {value.name}
              </h2>
              <div className="text-base font-bold text-gray-700">
                {value.count}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CardInformation;
