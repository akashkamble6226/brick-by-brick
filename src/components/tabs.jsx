import { useState } from "react";

const Tabs = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const tabNames = ["Home", "AboutUs", "ContactUs"];
  const allTabsContent = [<Home />, <AboutUs />, <ContactUs />];

  const handleTabChange = (t) => {
    setCurrentTab(t);
  };
  return (
    <>
      <div style={{ border: "2px solid blue", height: "100vh" }}>
        {/* Renders tab buttons */}
        <span>
          {tabNames.map((tab, index) => (
            <button
              key={index}
              style={{
                backgroundColor: currentTab === index ? "purple" : "",
                color: currentTab === index ? "white" : "",
              }}
              onClick={() => handleTabChange(index)}
            >
              {tab}
            </button>
          ))}
        </span>
        {/* Displays the active tab content */}
        {allTabsContent[currentTab]}
      </div>
    </>
  );
};

const Home = () => {
  return (
    <>
      <h3>This is a home</h3>
    </>
  );
};

const AboutUs = () => {
  return (
    <>
      <h3>This is a About Us</h3>
    </>
  );
};

const ContactUs = () => {
  return (
    <>
      <h3>This is a Contact Us</h3>
    </>
  );
};
export default Tabs;
