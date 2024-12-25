"use client";
import infrastructureService from "@/appwrite/appwriteInfrastructure";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

const links = [
  {
    name: "About us",
    submenu: true,
    sublinks: [
      {
        Head: "Rule & Regulations",
        link: "/rules",
        submenu: false,
        sublink: [{ name: "", link: "/" }],
      },
      {
        Head: "Our Vision",
        link: "/ourVision",
        submenu: false,
        sublink: [{ name: "", link: "/" }],
      },
      {
        Head: "PTA body",
        link: "/ptaBody",
        submenu: false,
        sublink: [{ name: "", link: "/" }],
      },
      // {
      //   Head: "Information about the school",
      //   link: "/informationAboutTheSchool",
      //   submenu: false,
      //   sublink: [{ name: "", link: "/" }],
      // },
      // {
      //   Head: "List of Mandatory Committees",
      //   link: "/listOfMandatoryCommittees",
      //   submenu: false,
      //   sublink: [{ name: "", link: "/" }],
      // },
      // {
      //   Head: "Mandatory Public Disclosure",
      //   link: "/mandatoryPublicDisclosure",
      //   submenu: false,
      //   sublink: [{ name: "", link: "/" }],
      // },
      // {
      //   Head: "Books & Uniform",
      //   link: "/booksAndUniform",
      //   submenu: false,
      //   sublink: [{ name: "", link: "/" }],
      // },
      {
        Head: "Infrastructure",
        link: "",
        submenu: true,
        sublink: [
          { name: "Transport", link: "/infrastructure/TRANSPORT" },
          { name: "Sick Bay", link: "/infrastructure/SICK_BAY" },
          { name: "Smart Class", link: "/infrastructure/SMART_CLASSES" },
          { name: "Labs", link: "/infrastructure/LABS" },
          { name: "Language Lab", link: "/infrastructure/LANGUAGE_LAB" },
          { name: "Library", link: "/infrastructure/LIBRARY" },
        ],
      },
      {
        Head: "Parent's Feedback",
        link: "/parentsFeedback",
        submenu: false,
        sublink: [{ name: "", link: "/" }],
      },
      {
        Head: "Contact us",
        link: "/contactUs",
        submenu: false,
        sublink: [{ name: "", link: "/" }],
      },
    ],
  },
  {
    name: "Admission",
    submenu: true,
    sublinks: [
      {
        Head: "Admission Process",
        link: "/admissionProcess",
        submenu: false,
        sublink: [{ name: "", link: "/" }],
      },
      {
        Head: "Admission Enquiry",
        link: "/admissionEnquiry",
        submenu: false,
        sublink: [{ name: "", link: "/" }],
      },
      {
        Head: "Pre School Admission",
        link: "/preSchoolAdmission",
        submenu: false,
        sublink: [{ name: "", link: "/" }],
      },
    ],
  },
  {
    name: "Academics",
    submenu: true,
    sublinks: [
      {
        Head: "Primary",
        link: "/primary",
        submenu: false,
        sublink: [{ name: "", link: "/" }],
      },
      {
        Head: "Middle",
        link: "/middle",
        submenu: false,
        sublink: [{ name: "", link: "/" }],
      },
      {
        Head: "Secondary",
        link: "/secondary",
        submenu: false,
        sublink: [{ name: "", link: "/" }],
      },
      {
        Head: "Senior Secondary",
        link: "/seniorSecondary",
        submenu: false,
        sublink: [{ name: "", link: "/" }],
      },
      {
        Head: "Previous year paper",
        link: "",
        submenu: true,
        sublink: [
          { name: "Class III", link: "/previousYearPaper/classIII" },
          { name: "Class IV", link: "/previousYearPaper/classIV" },
          { name: "Class V", link: "/previousYearPaper/classV" },
          { name: "Class VI", link: "/previousYearPaper/classVI" },
          { name: "Class VII", link: "/previousYearPaper/classVII" },
          { name: "Class VIII", link: "/previousYearPaper/classVIII" },
          { name: "Class IX", link: "/previousYearPaper/classIX" },
          { name: "Class X", link: "/previousYearPaper/classX" },
          { name: "Class XI", link: "/previousYearPaper/classXI" },
          { name: "Class XII", link: "/previousYearPaper/classXII" },
        ],
      },
      {
        Head: "CCE and CBSE initiatives",
        link: "/cceAndCbseInitiatives",
        submenu: false,
        sublink: [{ name: "", link: "/" }],
      },
      {
        Head: "CBSE Result",
        link: "",
        submenu: true,
        sublink: [
          { name: "Class X CBSE Result", link: "/cbseResult-X" },
          { name: "Class XII CBSE Result", link: "/cbseResult-XII" },
        ],
      },
      {
        Head: "Competetive Exams",
        link: "/competetiveExams",
        submenu: false,
        sublink: [{ name: "", link: "/" }],
      },
      {
        Head: "Academic Update",
        link: "/academicUpdate",
        submenu: false,
        sublink: [{ name: "", link: "/" }],
      },
      {
        Head: "Transfer Certificate",
        link: "/transferCertificate",
        submenu: false,
        sublink: [{ name: "", link: "/" }],
      },
    ],
  },
  {
    name: "Beyond Curriculum",
    submenu: true,
    sublinks: [
      {
        Head: "Inter school COMPETITIONS",
        link: "/interSchoolCompetitions",
        submenu: false,
        sublink: [{ name: "", link: "/" }],
      },
      {
        Head: "Teacher care & Development",
        link: "/teacherCareAndDevelopment",
        submenu: false,
        sublink: [{ name: "", link: "/" }],
      },
      {
        Head: "Workshop by Principal",
        link: "/workshopByPrincipal",
        submenu: false,
        sublink: [{ name: "", link: "/" }],
      },
      {
        Head: "International visit",
        link: "/internationalVisit",
        submenu: false,
        sublink: [{ name: "", link: "/" }],
      },
      {
        Head: "Excursions",
        link: "/excursions",
        submenu: false,
        sublink: [{ name: "", link: "/" }],
      },
      {
        Head: "Sports",
        link: "/sports",
        submenu: false,
        sublink: [{ name: "", link: "/" }],
      },
      {
        Head: "Clubs",
        link: "/clubs",
        submenu: false,
        sublink: [{ name: "", link: "/" }],
      },
      {
        Head: "Special Education",
        link: "/specialEducation",
        submenu: false,
        sublink: [{ name: "", link: "/" }],
      },
      {
        Head: "Student Enrichment Programe",
        link: "/studentEnrichmentPrograme",
        submenu: false,
        sublink: [{ name: "", link: "/" }],
      },
      {
        Head: "Photo Gallery",
        link: "/gallery/photo",
        submenu: false,
        sublink: [{ name: "", link: "/" }],
      },
      {
        Head: "Community Outreach Program",
        link: "/communityOutreachProgram",
        submenu: false,
        sublink: [{ name: "", link: "/" }],
      },
      {
        Head: "Value Education",
        link: "/valueEducation",
        submenu: false,
        sublink: [{ name: "", link: "/" }],
      },
      {
        Head: "ISA Corner",
        link: "/IsaCorner",
        submenu: false,
        sublink: [{ name: "", link: "/" }],
      },
      {
        Head: "National and International Days",
        link: "/nationalAndInternationalDays",
        submenu: false,
        sublink: [{ name: "", link: "/" }],
      },
      {
        Head: "Campus Happening",
        link: "/campusHappening",
        submenu: false,
        sublink: [{ name: "", link: "/" }],
      },
    ],
  },
  {
    name: "Faculty",
    submenu: true,
    sublinks: [
      {
        Head: "NKBGS Family",
        link: "/nkbgsFamily",
        submenu: false,
        sublink: [{ name: "", link: "/" }],
      },
      {
        Head: "Vacancy",
        link: "/vacancy",
        submenu: false,
        sublink: [{ name: "", link: "/" }],
      },
    ],
  },
];

const NavLinks = ({ open, setOpen }) => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  const [infra, setInfra] = useState([]);

  useEffect(() => {
    infrastructureService.getInfrastructure().then((data) => {
      if (data) {
        const change = data.documents.map(({ title, ...rest }) => ({
          name: title,
          ...rest,
        }));
        const finalData = change.map((data) => ({
          ...data,
          link: `/infrastructure/${data.name.split(" ").join("_")}`,
        }));
        setInfra(finalData);
      }
    });
  }, []);

  return (
    <>
      {links.map((link, index) => (
        <div key={index}>
          <div className="px-2 text-left lg:cursor-pointer group/menu ">
            <h1
              className="flex font-semibold cursor-pointer justify-between items-center group/menu pr-5 lg:pr-1 py-4 "
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
              }}
            >
              {link.name}
              {link.submenu ? (
                <>
                  <span className="lg:hidden inline text-xl">
                    {heading === link.name ? (
                      <IoChevronUp />
                    ) : (
                      <IoChevronDown />
                    )}
                  </span>
                  <span className="lg:text-xl lg:mt-1 lg:ml-2 lg:block hidden group-hover:rotate-180 group-hover:mb-2">
                    <IoChevronDown />
                  </span>
                </>
              ) : (
                ""
              )}
            </h1>
            {link.submenu && (
              <div>
                <div className="absolute top-12 hidden group-hover/menu:lg:block hover:lg:block ">
                  <div className="py-3">
                    <div
                      className="w-4 h-4 left-3 absolute 
                    mt-1 bg-white rotate-45"
                    ></div>
                  </div>
                  <div className="bg-white p-5 rounded-lg">
                    {link.sublinks.map((mysublinks, index) => (
                      <div key={index}>
                        <h1
                          onClick={() =>
                            subHeading !== mysublinks.Head
                              ? setSubHeading(mysublinks.Head)
                              : setSubHeading("")
                          }
                          className="text-base pb-2 fon-semibold hover:scale-105 hover:text-blue-700"
                        >
                          <Link href={mysublinks.link}>{mysublinks.Head}</Link>
                          {mysublinks.submenu && (
                            <span className="pl-2 inline-block">
                              {subHeading === mysublinks.Head ? (
                                <IoChevronUp />
                              ) : (
                                <IoChevronDown />
                              )}
                            </span>
                          )}
                        </h1>
                        <div
                          className={`${
                            subHeading === mysublinks.Head ? "" : "hidden"
                          }`}
                        >
                          {mysublinks.submenu &&
                          mysublinks.Head === "Infrastructure"
                            ? infra.map((slink, index) => (
                                <li
                                  key={index}
                                  className="text-sm pl-4 text-gray-600 my-2.5 hover:scale-105 hover:text-blue-700"
                                >
                                  <Link href={slink.link}>{slink.name}</Link>
                                </li>
                              ))
                            : mysublinks.sublink.map((slink, index) => (
                                <li
                                  key={index}
                                  className="text-sm pl-4 text-gray-600 my-2.5 hover:scale-105 hover:text-blue-700"
                                >
                                  <Link href={slink.link}>{slink.name}</Link>
                                </li>
                              ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile Menu */}
          <div className={`${heading === link.name ? "lg:hidden" : "hidden"}`}>
            {link.submenu &&
              link.sublinks.map((slinks, index) => (
                <div key={index}>
                  <div>
                    <h1
                      onClick={() =>
                        subHeading !== slinks.Head
                          ? setSubHeading(slinks.Head)
                          : setSubHeading("")
                      }
                      className="py-4 pl-7 lg:pr-0 pr-5 flex justify-between items-center cursor-pointer"
                    >
                      {slinks.link ? (
                        <Link href={slinks.link} onClick={() => setOpen(!open)}>
                          {" "}
                          {slinks.Head}
                        </Link>
                      ) : (
                        slinks.Head
                      )}
                      {slinks.submenu && (
                        <span>
                          {subHeading === slinks.Head ? (
                            <IoChevronUp className="cursor-pointer" />
                          ) : (
                            <IoChevronDown className="cursor-pointer" />
                          )}
                        </span>
                      )}
                    </h1>
                    {slinks.submenu && (
                      <div
                        className={`${
                          subHeading === slinks.Head ? "lg:hidden" : "hidden"
                        }`}
                      >
                        {slinks.Head === "Infrastructure"
                          ? infra.map((slink, index) => (
                              <li
                                className="py-3 pl-14 text-gray-600"
                                key={index}
                              >
                                <Link
                                  href={slink.link}
                                  onClick={() => setOpen(!open)}
                                >
                                  {slink.name}
                                </Link>
                              </li>
                            ))
                          : slinks.sublink.map((slink, index) => (
                              <li
                                className="py-3 pl-14 text-gray-600"
                                key={index}
                              >
                                <Link
                                  href={slink.link}
                                  onClick={() => setOpen(!open)}
                                >
                                  {slink.name}
                                </Link>
                              </li>
                            ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
