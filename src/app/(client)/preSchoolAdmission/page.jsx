import Container from "@/app/components/client/Container";
import Image from "next/image";
import React from "react";

const PreSchoolAdmission = () => {
  return (
    <Container>
      <div className="max-w-screen mx-auto p-5 sm:pt-5 sm:px-10">
        <div className="mb-10 rounded overflow-hidden flex flex-col mx-auto">
          <h1 className="text-xl text-center uppercase sm:text-2xl font-semibold text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">
            Pre School Admission
          </h1>
          <div className="md:w-[1200px] md:h-[400px] md:mt-10">
            <div className="flex md:flex-row flex-col">
              <div className="overflow-x-auto ">
                <table className="md:w-full text-xs md:text-base border border-gray-800">
                  <tbody className="text-left">
                    <tr className=" border-b border-gray-800">
                      <td className="px-1 md:px-2 py-2 ">
                        <span>Admission Policy for Pre School Admission</span>
                      </td>
                      <td className="px-1 md:px-2 py-2">
                        <span className="cursor-pointer text-blue-600">
                          Click to View
                        </span>
                      </td>
                    </tr>
                    <tr className=" border-b border-gray-800">
                      <td className="px-1 md:px-2 py-2 ">
                        <span>Distance Criteria</span>
                      </td>
                      <td className="px-1 md:px-2 py-2 ">
                        <span className="cursor-pointer text-blue-600">
                          Click to View
                        </span>
                      </td>
                    </tr>

                    <tr className=" border-b border-gray-800">
                      <td className="px-1 md:px-2 py-2">
                        <span>
                          Online Registration form for Pre School Admission
                        </span>
                      </td>
                      <td className="px-1 md:px-2 py-2 ">
                        <span className="cursor-pointer text-blue-600">
                          Click to Open
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <ul className="mt-4 list-disc list-inside text-red-700">
                  <li>
                    The Offline Registration Forms will be available at the
                    School Reception.
                  </li>
                  <span className="md:ml-8 ml-4">
                    Timings : 9:00 AM - 2:00 PM on all working days.
                  </span>
                </ul>
              </div>

              <Image width={1200} height={1200} alt="Admission" src="/images/admission.png" className="md:w-96" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default PreSchoolAdmission;
