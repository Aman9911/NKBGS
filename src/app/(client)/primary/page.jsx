import Container from "@/app/components/client/Container";
import React from "react";

const Primary = () => {
  return (
    <Container>
      <div className=" mx-auto p-5 sm:pt-5 sm:px-10 container">
        <div className="mb-10  overflow-hidden flex flex-col mx-auto">
          <h1 className="text-lg text-center uppercase sm:text-2xl font-semibold text-indigo-600">
            Assessment and Promotion Criteria
          </h1>
          <p className="text-base text-center uppercase sm:text-xl font-semibold text-indigo-600 mb-2">
            Class V
          </p>
          <p className="underline">
            Guidelines of Examination and Promotion for Class V has been issued
            by the Directorate of Education, Delhi.
          </p>
          <p className="my-4">
            Regular Assessment of students will be done throughout the Academic
            Session as per the weightage of marks given in the table:
          </p>
          <div className="overflow-x-auto ">
            <table className=" min-w-full text-xs border border-gray-800">
              <thead className=" ">
                <tr className="text-center">
                  <th
                    title="Ranking"
                    colSpan={7}
                    className="px-1 md:px-2 py-2 border border-gray-800"
                  >
                    Internal Assessment
                  </th>
                  <th
                    title="Team name"
                    className="px-1 md:px-2 py-2 border border-gray-800"
                  >
                    Total(IA)
                  </th>
                  <th
                    title="Team name"
                    colSpan={2}
                    className="px-1 md:px-2 py-2 border border-gray-800"
                  >
                    Term End Examination
                  </th>
                  <th
                    title="Team name"
                    className="px-1 md:px-2 py-2 border border-gray-800"
                  >
                    Total(WA)
                  </th>
                  <th
                    title="Team name"
                    className="px-1 md:px-2 py-2 border border-gray-800"
                  >
                    Total
                  </th>
                </tr>
              </thead>
              <tbody className="text-center">
                <tr className="border-b border-gray-800 ">
                  <td className="px-1 md:px-2 py-2 border border-gray-800">
                    <span></span>
                  </td>
                  <td className="px-1 md:px-2 py-2 border border-gray-800">
                    <span>Attendance of Student (A)</span>
                  </td>
                  <td className="px-1 md:px-2 py-2 border border-gray-800">
                    <span className="cursor-pointer ">
                      Subject Enrichment (B)
                    </span>
                  </td>
                  <td className="px-1 md:px-2 py-2 border border-gray-800">
                    <span className="cursor-pointer ">
                      Project Based Activities (C)
                    </span>
                  </td>
                  <td className="px-1 md:px-2 py-2 border border-gray-800">
                    <span className="cursor-pointer ">Portfolio (D)</span>
                  </td>
                  <td className="px-1 md:px-2 py-2 border border-gray-800">
                    <span className="cursor-pointer ">
                      Multiple Assessment (E)
                    </span>
                  </td>
                  <td className="px-1 md:px-2 py-2 border border-gray-800">
                    <span className="cursor-pointer ">Periodic Test (F)</span>
                  </td>
                  <td className="px-1 md:px-2 py-2 border border-gray-800">
                    <span className="cursor-pointer ">A+B+C+D+E+F</span>
                  </td>
                  <td className="px-1 md:px-2 py-2 border border-gray-800">
                    <span className="cursor-pointer ">
                      Mid Term Examination (G)
                    </span>
                  </td>
                  <td className="px-1 md:px-2 py-2 border border-gray-800">
                    <span className="cursor-pointer ">
                      Annual Examination (H)
                    </span>
                  </td>
                  <td className="px-1 md:px-2 py-2 border border-gray-800">
                    <span className="cursor-pointer ">G+H</span>
                  </td>
                  <td className="px-1 md:px-2 py-2 border border-gray-800">
                    <span className="cursor-pointer font-semibold">IA+WA</span>
                  </td>
                </tr>
                <tr className=" border border-gray-800">
                  <td className="px-1 md:px-2 py-2 border border-gray-800">
                    <span className="font-semibold">Weightage</span>
                  </td>
                  <td className="px-1 md:px-2 py-2 border border-gray-800">
                    <span className="cursor-pointer ">5</span>
                  </td>
                  <td className="px-1 md:px-2 py-2 border border-gray-800">
                    <span className="cursor-pointer ">5</span>
                  </td>
                  <td className="px-1 md:px-2 py-2 border border-gray-800">
                    <span className="cursor-pointer ">5</span>
                  </td>
                  <td className="px-1 md:px-2 py-2 border border-gray-800">
                    <span className="cursor-pointer ">5</span>
                  </td>
                  <td className="px-1 md:px-2 py-2 border border-gray-800">
                    <span className="cursor-pointer ">5</span>
                  </td>
                  <td className="px-1 md:px-2 py-2 border border-gray-800">
                    <span className="cursor-pointer ">5</span>
                  </td>
                  <td className="px-1 md:px-2 py-2 border border-gray-800">
                    <span className="cursor-pointer font-semibold">30</span>
                  </td>
                  <td className="px-1 md:px-2 py-2 border border-gray-800">
                    <span className="cursor-pointer ">20</span>
                  </td>
                  <td className="px-1 md:px-2 py-2 border border-gray-800">
                    <span className="cursor-pointer ">50</span>
                  </td>
                  <td className="px-1 md:px-2 py-2 border border-gray-800">
                    <span className="cursor-pointer font-semibold">70</span>
                  </td>
                  <td className="px-1 md:px-2 py-2 border border-gray-800">
                    <span className="cursor-pointer font-semibold">100</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <ul className="list-inside list-disc text-gray-700 ml-4">
            <li>
              Mid Term and Annual Examination will be conducted for 50 marks
              each.
            </li>
            <li>
              Question papers for the Mid Term Examinations will be set out of
              the syllabus of the First Term.
            </li>
            <li>
              Question papers for the Annual Examinations will be set out of the
              syllabus of the Second Term only.
            </li>
          </ul>
        </div>

        <div className="mb-10  overflow-hidden flex flex-col mx-auto">
          <h1 className="text-lg text-center uppercase font-semibold text-indigo-600">
            Parameters of Internal Assessment (30 Marks)
          </h1>
          <ul className="list-inside list-decimal">
            <li className="mt-4 font-semibold">
              Attendance of Student (5 Marks)
            </li>
            <div className="overflow-x-auto md:ml-20">
              <table className="min-w-fit text-xs mt-2">
                <thead>
                  <tr className="text-center">
                    <th className="px-1 md:px-2 py-2 border border-gray-800">
                      Attendance Range in Percentage
                    </th>
                    <th className="px-1 md:px-2 py-2 border border-gray-800">
                      96-100
                    </th>
                    <th className="px-1 md:px-2 py-2 border border-gray-800">
                      91-95
                    </th>
                    <th className="px-1 md:px-2 py-2 border border-gray-800">
                      86-90
                    </th>
                    <th className="px-1 md:px-2 py-2 border border-gray-800">
                      81-85
                    </th>
                    <th className="px-1 md:px-2 py-2 border border-gray-800">
                      76-80
                    </th>
                    <th className="px-1 md:px-2 py-2 border border-gray-800">
                      Up to 75
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-center">
                    <td className="px-1 md:px-2 py-2 border border-gray-800">
                      Marks
                    </td>
                    <td className="px-1 md:px-2 py-2 border border-gray-800">
                      5
                    </td>
                    <td className="px-1 md:px-2 py-2 border border-gray-800">
                      4
                    </td>
                    <td className="px-1 md:px-2 py-2 border border-gray-800">
                      3
                    </td>
                    <td className="px-1 md:px-2 py-2 border border-gray-800">
                      2
                    </td>
                    <td className="px-1 md:px-2 py-2 border border-gray-800">
                      1
                    </td>
                    <td className="px-1 md:px-2 py-2 border border-gray-800">
                      NIL
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <li className="mt-4 font-semibold">Subject Enrichment (5 Marks)</li>
            <p>
              These are subject specific application activities aimed at
              enrichment of the understanding and skill development.
            </p>
            <li className="mt-4 font-semibold">
              Project Based Activities (5 Marks)
            </li>
            <p>
              These activities facilitate the development of key skills like
              Identification of Problems, Logical Thinking, Creativity,
              Inference Making and Problem Solving in real world.
            </p>
            <li className="mt-4 font-semibold">Portfolio (5 Marks)</li>
            <p>
              It is a collection of students’ work representing a selection of
              performances that is assembled over time and describes the
              students’ efforts, progress, growth & achievements in key areas.
            </p>
            <li className="mt-4 font-semibold">
              Multiple Assessments (5 Marks)
            </li>
            <p>
              It is aimed at evaluating the performance of the students more
              comprehensively and provide flexibility to use multiple and
              diverse techniques to assess them.
            </p>
            <li className="mt-4 font-semibold">Periodic Tests (5 Marks)</li>
            <p>
              The pattern of Periodic Tests will be same as the Term End
              Examination. One Periodic Test will be conducted in each Term for
              20 marks.
            </p>
          </ul>
          <h1 className="font-semibold mt-5 underline">Co-Scholastic Areas</h1>
          <p className="mt-4">
            For the Holistic development of the students the co-scholastic
            activities like Physical Education/Yoga/Health &Well
            Being/Self-Defence, Work Education/SUPW, Art/Craft Education and
            Social & Emotional Skills will be graded on 3 point grading scale(A
            to C) -{" "}
          </p>
          <p className="font-semibold flex flex-row gap-5 ml-4">
            <span>A=Outstanding </span> <span>B=Very Good</span>{" "}
            <span>C=Fair</span>
          </p>
        </div>

        <div className="mb-10  overflow-hidden flex flex-col mx-auto">
          <h1 className="text-lg text-center uppercase font-semibold text-indigo-600">
            General Guidelines
          </h1>
          <h4 className="text-base font-semibold underline">
            Passing Criteria
          </h4>
          <ul className="list-inside list-decimal mt-2">
            <li>
              In order to be declared “Pass” at the end of the session for
              promotion to the next higher class, a student must secure at least
              33% marks in each subject studied by him/her during the session.
            </li>
            <li>
              The promotion to the next higher class will also be subject to the
              condition that a minimum of 25 % of marks in Mid Term + Annual
              Examination.
            </li>
            <li>
              {" "}
              Grace Marks up to maximum of 10 marks in all (not more than 5
              marks in one subject) shall be awarded to a student to reach the
              minimum required 33% of marks in each subject provided that a
              minimum of 25% of marks are secured in each subject in Mid Term +
              Annual Examination.
            </li>
            <li>
              Students entitled for Grace Marks will be declared &apos;Promoted&apos; at
              the end of the session.
            </li>
          </ul>
          <h4 className="text-base font-semibold underline mt-4">
            Re - Examination
          </h4>
          <ul className="list-inside list-decimal mt-2">
            <li>
              A candidate who appears in Annual Examination can be declared
              eligible for appearing for the Re- Examination in all the failing
              subject(s).
            </li>
            <li>
              Re- Examination will be conducted on the same syllabus and pattern
              of Annual Examination.
            </li>
            <li>
              Marks obtained in Internal Assessment will be carried forward and
              added with the marks obtained by the student in the Re-
              Examination.
            </li>
            <li>
              {" "}
              In order to be declared “Pass” in Re – Examination a student will
              have to secure at least 25 % marks in the subject(s) in which
              he/she has taken the Re-Examination.
            </li>
          </ul>
          <h4 className="text-base font-semibold underline mt-4">
            Criteria For Essential Repeat (ER)
          </h4>
          <p className="mt-2">
            If a student does not secure at least 25 % marks in the subject(s)
            in which he/she has taken the Re- Examination or does not appear in
            the Re- Examination, he/she will be placed in the category of
            “Essential Repeat”.
          </p>
          <h4 className="text-base font-semibold underline mt-4">
            Rules regarding Absence during Examination
          </h4>
          <p className="mt-2">
            Absence in the examination or part thereof without medical
            certificate, (to be submitted within three working days of the date
            of absence) will be considered as wilful absence and no mark, credit
            or allowance will be given.
          </p>
          <h4 className="text-base font-semibold underline mt-4">
            Attendance Criteria
          </h4>
          <p className="mt-2">
            Student will not be eligible to appear in Annual Examination if
            he/she has not put in at least 75% actual attendance of the total
            attendance.
          </p>
          <h4 className="text-base font-semibold underline mt-4">
            Points to be noted:
          </h4>
          <ol className="list-inside list-decimal mt-2">
            <li>
              It is compulsory for the students to appear in all Assessments.
              However, if a student remains absent on any Assessment Day due to
              unavoidable circumstances or medical reasons, parents are
              requested to inform the school reception or mail at the school
              email ID (itlschool@yahoo.in) on the very same day at the
              earliest.
            </li>
            <li>
              Re-Examination will be conducted only in the case of genuine
              Medical Emergencies/ On Duty/ marriage in first relation. In case
              of marriage prior approval is must (a copy of wedding card to be
              attached).
            </li>
            <li>
              Any Application/ Medical certificate with a request letter should
              be submitted within one week of the leave taken, after which it
              will not be accepted and the student will be marked{" "}
              <span className="underline"> absent and awarded Zero.</span>
            </li>
          </ol>
          <p className="mt-5">
            <span className="font-semibold">NOTE:</span> Assessment of Classes
            III & IV will be done on the same examination pattern as of Class V
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Primary;
