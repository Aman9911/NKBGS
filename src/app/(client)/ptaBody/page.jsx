import Container from "@/app/components/client/Container";

import React from "react";

const PtaBodyData = [
  {
    class: "Pre School",
    name: "Sandeep gagan",
    contact: 9876543210,
    email: "sandeep.gagan@gmail.com",
  },
  {
    class: "Pre Primary",
    name: "Mandeep",
    contact: 9876543210,
    email: "mandeep@gmail.com",
  },
  {
    class: "I",
    name: "Randeep",
    contact: 9876543210,
    email: "Randeep@gmail.com",
  },
  {
    class: "II",
    name: "Chandeep",
    contact: 9876543210,
    email: "chandeep@gmail.com",
  },
  {
    class: "III",
    name: "Handeep",
    contact: 9876543210,
    email: "handeep@gmail.com",
  },
  {
    class: "IV",
    name: "Sandy",
    contact: 9876543210,
    email: "sandy@gmail.com",
  },
  {
    class: "V",
    name: "Candy",
    contact: 9876543210,
    email: "candy@gmail.com",
  },
  {
    class: "VI",
    name: "Mandy",
    contact: 9876543210,
    email: "mandy@gmail.com",
  },
  {
    class: "VII",
    name: "Pandy",
    contact: 9876543210,
    email: "pandy@gmail.com",
  },
  {
    class: "VIII",
    name: "Sonu",
    contact: 9876543210,
    email: "sonu@gmail.com",
  },
  {
    class: "IX",
    name: "Golu",
    contact: 9876543210,
    email: "golu@gmail.com",
  },
  {
    class: "X",
    name: "Monu",
    contact: 9876543210,
    email: "monu@gmail.com",
  },
  {
    class: "XI",
    name: "Tony",
    contact: 9876543210,
    email: "tony@gmail.com",
  },
  {
    class: "XII",
    name: "Rony",
    contact: 9876543210,
    email: "rony.mony@gmail.com",
  },
];

const PtaBody = () => {
  return (
    <Container>
      <div className="container p-2 mx-auto rounded-md sm:p-4 text-gray-800 ">
        <h2 className="mb-6 text-2xl font-semibold leading-tight text-center text-indigo-600">
          Elected Members of PTA Body
        </h2>
        <div className="overflow-x-auto ">
          <table className="min-w-full text-xs md:text-base">
            <thead className="rounded-t-lg ">
              <tr className="text-right">
                <th title="Ranking" className="text-center ">
                  Representative of Class
                </th>
                <th title="Team name" className=" text-center">
                  Name
                </th>
                <th title="Wins" className="text-center">
                  Contact no.
                </th>
                <th title="Losses" className="text-center">
                  Email ID
                </th>
              </tr>
            </thead>
            <tbody>
              {PtaBodyData.map((item) => (
                <tr
                  key={item.class}
                  className="text-center border-b border-opacity-20 border-gray-800"
                >
                  <td className="px-2 py-2 text-center">
                    <span>{item.class}</span>
                  </td>
                  <td className="px-2 py-2 text-center">
                    <span>{item.name}</span>
                  </td>
                  <td className="px-2 py-2 text-center">
                    <span>{item.contact}</span>
                  </td>
                  <td className="px-2 py-2 text-center">
                    <span>{item.email}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  );
};

export default PtaBody;
