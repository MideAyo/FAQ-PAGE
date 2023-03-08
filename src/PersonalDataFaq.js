import React, { useState } from "react";
import Helpful from "./Helpful";

const PersonalDataFaq = ({
  id,
  showData,
  statement,
  receivedInfo,
  personalDetails,
  chevronUp,
  chevronDown,
  helpful,
  yes,
  no,
  deviceInfo,
  otherSource,
}) => {
  const [showInfo, setShowInfo] = useState(false);

  const openInfo = () => {
    setShowInfo(!showInfo);
  };
  return (
    <article className="bg-bgColor px-4 md:px-8 py-4 max-w-4xl mx-auto mt-8 capitalize">
      {/* question*/}
      <div className="py-4 flex justify-between items-center">
        <h3 className=" xxs:text-sm xs:text-md sm:text-lg text-md md:text-xl md:max-w-xl font-600 max-w-md md: text-xl">
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
            <p className="text-sm text-textColor mt-4">{receivedInfo}</p>
          </div>
          {/* end of text  */}

          {/* details */}
          <ul className="mt-6">
            {personalDetails.map(function (detail) {
              return (
                <li key={id} className="mt-2 text-sm">
                  {detail}
                </li>
              );
            })}
          </ul>
          {/* infos  */}
          {showData ? (
            <article className="mt-6">
              {/* device info  */}
              <div className="text-sm">
                <span className="font-600">
                  Information received from your devices:
                </span>
                {deviceInfo}
                {/* end of device info  */}
              </div>
              {/* device info  */}
              <div className="text-sm mt-4">
                <span className="font-600">
                  Information we receive about you from other sources:
                </span>
                {otherSource}
                {/* end of device info  */}
              </div>
            </article>
          ) : null}
          <Helpful helpful={helpful} yes={yes} no={no} />
        </div>
      )}
    </article>
  );
};

export default PersonalDataFaq;
