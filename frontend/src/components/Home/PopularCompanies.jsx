import React from "react";
import { FaMicrosoft, FaApple } from "react-icons/fa";
import { SiGoogle } from "react-icons/si";

const PopularCompanies = () => {
  const companies = [
    {
      id: 1,
      title: "Microsoft",
      location: "April 4, 1975 in Albuquerque, New Mexico, U.S.",
      openPositions: 10,
      icon: <FaMicrosoft />,
    },
    {
      id: 2,
      title: "Google",
      location: "September 4, 1998 in Menlo Park, California, United States",
      openPositions: 5,
      icon: <SiGoogle />,
    },
    {
      id: 3,
      title: "Apple",
      location: "April 1, 1976 in Los Altos, California, U.S.",
      openPositions: 20,
      icon: <FaApple />,
    },
  ];
  return (
    <div className="companies">
      <div className="container">
        <h3>TOP COMPANIES</h3>
        <div className="banner">
          {companies.map((element) => {
            return (
              <div className="card" key={element.id}>
                <div className="content">
                  <div className="icon">{element.icon}</div>
                  <div className="text">
                    <p>{element.title}</p>
                    <p>{element.location}</p>
                  </div>
                </div>
                <button>Open Positions {element.openPositions}</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularCompanies;
