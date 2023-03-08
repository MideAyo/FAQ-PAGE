import React, { useState } from "react";
import Helpful from "./Helpful";

const SingleFaq = ({
  id,
  question,
  article,
  helpful,
  yes,
  no,
  chevronUp,
  chevronDown,
  text,
}) => {
  const [showInfo, setShowInfo] = useState(false);

  const openInfo = () => {
    setShowInfo(!showInfo);
  };
  return (
    <article className="bg-bgColor px-4 md:px-8 py-4 max-w-4xl mx-auto mt-8 capitalize">
      {/* question  */}
      <div className="py-4 flex justify-between items-center">
        <h3 className="xxs:text-sm xs:text-md sm:text-lg md:text-xl md:max-w-xl font-600 max-w-md md: text-xl">
          {question}
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
            <p className="text-sm text-textColor mt-4">{article}</p>
            <p className="text-sm text-textColor mt-4">{text}</p>
          </div>

          {/* helpful?  */}
          <Helpful helpful={helpful} yes={yes} no={no} />
        </div>
      )}
    </article>
  );
};

export default SingleFaq;
