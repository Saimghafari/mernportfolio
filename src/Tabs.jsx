import React, { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabsData = [
    {
      label: "Tab 1",
      time:"2025",
      content: "This is the content of Tab 1",
      time1:"2023",
      content1: "This is the contentone of Tab 1",
      time2:"2027",
      content2: "This is the contenttwo of Tab 1",

    },
    {
      label: "Tab 2",
      time:"2021",
      content: "This is the content of Tab 2",
    },
    {
      label: "Tab 3",
      time:"2024",
      content: "This is the content of Tab 3",
    },
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="">
      {/* Tab Buttons */}
      <div className="flex lg:flex-nowrap flex-wrap space-x-8 mb-6">
        {tabsData.map((tab, index) => (
          <button
            key={index}
            className={`tab-button w-full text-lg font-medium transition-colors duration-300 ${
              activeTab === index
                ? "border-b-2 border-b-red-500 w-16 text-white"
                : "text-white"
            }`}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="w-full">
      <p className=" text-red-500 text-lg">{tabsData[activeTab].time}</p>
      <p className="text-left text-white text-lg">{tabsData[activeTab].content}</p>
      <p className=" text-red-500 text-lg">{tabsData[activeTab].time1}</p>
      <p className="text-left text-white text-lg">{tabsData[activeTab].content1}</p>
      <p className=" text-red-500 text-lg">{tabsData[activeTab].time2}</p>       
        <p className="text-left text-white text-lg">{tabsData[activeTab].content2}</p>
      </div>
    </div>
  );
};

export default Tabs;
