import React from "react";

import "./RightSideBarCSS_Files/converter.css";

import { Select } from "antd";
import { Input } from "antd";

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

export const Coverter = () => {
  return (
    <>
      <div className="converter_section">
        <Input type="number" />
        <Select
          defaultValue="INR"
          style={{
            borderRadius: "10px",
          }}
          onChange={handleChange}
          options={[
            {
              value: "USD",
              label: "USD",
            },
            {
              value: "INR",
              label: "INR",
            },

            {
              value: "EURO",
              label: "EURO",
            },
          ]}
        />
      </div>
      <div className="converter_section">
        <Input type="number" />
        <Select
          defaultValue="BTC"
          style={{
            borderRadius: "10px",
          }}
          onChange={handleChange}
          options={[
            {
              value: "BTC",
              label: "BTC",
            },
            {
              value: "ETH",
              label: "ETH",
            },

            {
              value: "DOGE",
              label: "DOGE",
            },
          ]}
        />
      </div>
    </>
  );
};
