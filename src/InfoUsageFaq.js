import React, { useState } from "react";
import Helpful from "./Helpful";
import img from "./img/Ellipse 189.svg";

export const InfoUsageFaq = ({
  id,
  statement,
  infoUsage,
  disclaimer,
  anonymized,
  list,
  retainInfo,
  chevronUp,
  chevronDown,
  helpful,
  yes,
  no,
}) => {
  const [showInfo, setShowInfo] = useState(false);

  const openInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <article className="bg-bgColor px-4 md:px-8 py-4 max-w-4xl mx-auto mt-8 capitalize">
      {/* question  */}
      <div className="py-4 flex justify-between items-center">
        <h3 className="xxs:text-sm xs:text-md sm:text-lg  text-md md:text-xl md:max-w-xl font-600 max-w-md md: text-xl">
          {statement}
        </h3>
        <button className="md: text-2xl" onClick={openInfo}>
          {showInfo ? chevronUp : chevronDown}
        </button>
      </div>
      {/* info  */}
      {showInfo && (
        <div>
          <div className="border-t border-slate-300"></div>
          {/* text  */}
          <div>
            <p className="text-sm text-textColor mt-4">{infoUsage}</p>
            <p className="text-sm text-textColor mt-4">{disclaimer}</p>
          </div>
          {/* end of text  */}
          {/* list  */}
          <article className=" p-2 text-sm md:pl-16 mt-8">
            {list.map(function (list, index) {
              return (
                <div className="flex space-x-8 mt-4 items-center" key={index}>
                  <img src={img} alt="img" />
                  <p className="self-end">{list}</p>
                </div>
              );
            })}
          </article>
          {/* end of list  */}

          {/* info  */}
          <div className="mt-4">
            <p className="text-sm text-textColor mt-4">{anonymized}</p>
            <p className="text-sm text-textColor mt-4">{retainInfo}</p>
          </div>

          <Helpful helpful={helpful} yes={yes} no={no} />
        </div>
      )}
    </article>
  );
};

export default InfoUsageFaq;
