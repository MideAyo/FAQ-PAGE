import React, { useState } from "react";
import { faqData } from "./faqData";
import SingleFaq from "./SingleFaq";
import { InfoUsage } from "./faqData";
import InfoUsageFaq from "./InfoUsageFaq";
import { personalData } from "./faqData";
import PersonalDataFaq from "./PersonalDataFaq";

const FaqCenter = () => {
  return (
    <section>
      {/* faq-heading*/}
      <div>
        <h2 className="text-center mt-6 text-4xl font-600 text-textColor md:text-5xl">
          FAQ
        </h2>
        <div className="border-t border-textColor text-center w-[10rem] mx-auto mt-2  "></div>
      </div>

      {/* FaqCenter  */}
      <div className="p-4">
        {/* single Faq  */}
        {faqData.map(function (data) {
          return <SingleFaq {...data} key={data.id} />;
        })}

        {/* Info usage faq */}
        {InfoUsage.map(function (info) {
          return <InfoUsageFaq {...info} key={info.id} />;
        })}

        {/* personalData faq  */}
        {personalData.map(function (data) {
          return <PersonalDataFaq {...data} key={data.id}  />;
        })}
        {/* end of faqcenter */}
      </div>
    </section>
  );
};

export default FaqCenter;
