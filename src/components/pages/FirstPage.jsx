import React from "react";
import Pic from "../../assets/arjunVivad.png"
const FirstPage = () => {
  return (
    <div className="h-full border-1-2 border-black">
      <main className="h-full w-full">
        <div className="text-center">
          <h2 className=" mt-3 mb-3  text-black font-bold text-1xl">
            अध्याय 1
          </h2>
          <h1 className=" mb-3  text-red-600 font-bold text-2xl">
            अर्जुनविषादयोग
          </h1>
          <img src={Pic} className="h-60 w-80 m-auto mb-5 mt-5 border rounded" alt="" />
          <p className="w-96 m-auto text-red-600 font-bold ">
            भगवद गीता का पहला अध्याय अर्जुन विशाद योग उन पात्रों और परिस्थितियों
            का परिचय कराता है जिनके कारण पांडवों और कौरवों के बीच महाभारत का
            महासंग्राम हुआ। यह अध्याय उन कारणों का वर्णन करता है जिनके कारण भगवद
            गीता का ईश्वरावेश हुआ। जब महाबली योद्धा अर्जुन दोनों पक्षों पर युद्ध
            के लिए तैयार खड़े योद्धाओं को देखते हैं तो वह अपने ही रिश्तेदारों एवं
            मित्रों को खोने के डर तथा फलस्वरूप पापों के कारण दुखी और उदास हो
            जाते हैं। इसलिए वह श्री कृष्ण को पूरी तरह से आत्मसमर्पण करते हैं। इस
            प्रकार, भगवद गीता के ज्ञान का प्रकाश होता है।
          </p>
          <p className="text-gray text-xl mt-1 font-bold">पृष्ठ 1</p>
        </div>
      </main>
    </div>
  );
};

export default FirstPage;
