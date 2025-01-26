"use client";
import Container from "@/app/components/client/Container";
import LeaveRules from "@/app/components/client/rules/LeaveRules";
import SchoolRules from "@/app/components/client/rules/SchoolRules";
import WithdrawalRules from "@/app/components/client/rules/WithdrawalRules";
import { useState } from "react";

const RulesPage = () => {
  const [selectedItem, setSelectedItem] = useState("School Rules");
  const [nav, setNav] = useState([
    { name: "School Rules", current: true },
    { name: "Leave Rules", current: false },
    { name: "Withdrawal Rules", current: false },
  ]);
  const handleClick = (index) => {
    const updatedNav = nav.map((item, idx) => ({
      ...item,
      current: idx === index,
    }));
    setNav(updatedNav);
    setSelectedItem(updatedNav[index].name);
  };
  return (
    <Container>
      <div className="md:w-3/4 ">
        <div className="p-4">
          <div className="flex flex-row gap-2">
            {nav.map((data, index) => (
              <button
                key={index * 3}
                onClick={() => handleClick(index)}
                className={`relative py-2 px-1 md:px-4 rounded  ${
                  data.current ? "font-bold" : ""
                }`}
              >
                <span
                  className={`absolute left-0 bottom-0 h-0.5 bg-black transition-transform duration-700 ease-in-out ${
                    data.current ? "w-full" : "w-0"
                  }`}
                ></span>
                {data.name}
              </button>
            ))}
          </div>
          {selectedItem === "School Rules" && <SchoolRules />}
          {selectedItem === "Leave Rules" && <LeaveRules />}
          {selectedItem === "Withdrawal Rules" && <WithdrawalRules />}
        </div>
      </div>
    </Container>
  );
};

export default RulesPage;
