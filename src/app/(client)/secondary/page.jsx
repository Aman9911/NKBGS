import Container from "@/app/components/client/Container";

export const metadata = {
  title: "Secondary",
};

const Secondary = () => {
  return (
    <Container>
      <div className=" mx-auto p-5 sm:pt-5 sm:px-10 container">
        <div className="mb-10  overflow-hidden flex flex-col mx-auto">
          <h1 className="text-lg text-center uppercase sm:text-2xl font-semibold text-indigo-600">
            Assessment and Promotion Criteria
          </h1>
          <p className="text-base text-center uppercase sm:text-xl font-semibold text-indigo-600 mb-2">
            Class X
          </p>
          <p className="">
            The assessment pattern is followed as per the guidelines issued by
            CBSE..
          </p>
          <div className="overflow-x-auto ">
            <table className="w-[100%] text-sm ">
              <tbody>
                <tr className="border border-gray-600">
                  <td colSpan="6">
                    <p align="center">
                      <strong>
                        <u>Assessment Structure</u>
                      </strong>
                      <br />
                      <strong>Total 100 Marks</strong>
                    </p>
                  </td>
                </tr>
                <tr className="border border-gray-600">
                  <td rowSpan="2" className=" border border-gray-600">
                    <p align="center">
                      <strong>Subjects</strong>
                    </p>
                  </td>
                  <td rowSpan="2" className=" border border-gray-600">
                    <ol>
                      <li align="center">
                        <strong>
                          1. Board Exam
                          <br />
                          <strong>(80 marks)</strong>
                        </strong>
                      </li>
                    </ol>

                    <p align="center">
                      Student has to secure 33% marks out of 80 marks in each
                      subject
                    </p>
                  </td>
                  <td colSpan="4" className=" text-center">
                    <ol>
                      <li value="2">
                        <strong>
                          2. Internal Assessment
                          <br />
                          <strong>
                            (20 marks)
                            <br />
                            Student has to secure 33% marks out of overall 20
                            marks in each subject
                          </strong>
                        </strong>
                      </li>
                    </ol>
                  </td>
                </tr>
                <tr className="border border-gray-600">
                  <td className=" border border-gray-600">
                    <p align="center">
                      Periodic tests
                      <br />
                      (5 Marks)
                    </p>
                  </td>
                  <td className=" border border-gray-600">
                    <p align="center">
                      Multiple Assessment
                      <br />
                      (5marks)
                    </p>
                  </td>
                  <td className=" border border-gray-600">
                    <p align="center">
                      Portfolio
                      <br />
                      (5 marks)
                    </p>
                  </td>
                  <td className=" border border-gray-600">
                    <p align="center">
                      Subject Enrichment Activity
                      <br />
                      (5 marks)
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className=" text-center border border-gray-600">
                    <p>English</p>
                  </td>
                  <td rowSpan="5" className="  border border-gray-600">
                    <p align="center">
                      The exam will be conducted by the CBSE covering 100%
                      syllabus of the subject
                    </p>
                  </td>
                  <td rowSpan="5" className=" border border-gray-600">
                    <p align="center">
                      Three Periodic Tests and the{" "}
                      <strong>average of best two tests</strong> will be taken
                      for the final marks submission.
                    </p>
                  </td>
                  <td rowSpan="5" className=" px-2 border border-gray-600">
                    <p>This will cover multiple and diverse techniques like</p>

                    <ul>
                      <li className="text-align: left;">Class Discussion</li>
                      <li className="text-align: left;">Oral Tests</li>
                      <li className="text-align: left;">Group Activities</li>
                      <li className="text-align: left;">Concept Map</li>
                      <li className="text-align: left;">Graphic Organizers</li>
                      <li className="text-align: left;">
                        PowerPoint Presentation etc
                      </li>
                    </ul>
                  </td>
                  <td rowSpan="5" className=" px-2">
                    <p className="text-align: left;">
                      It is a collection of students’ work representing a
                      selection of performances that is assembled over time and
                      describes the students’ effort, progress, growth and
                      achievement in key areas. The portfolio may take the form
                      of a journal or notebook.
                    </p>

                    <p className="text-align: left;">This will cover</p>

                    <ul className="list-disc list-inside">
                      <li className="text-align: left;">CW/HW Assignment</li>
                      <li className="text-align: left;">Self/Peer</li>
                      <li className="text-align: left;">Student Artefacts</li>
                      <li className="text-align: left;">Students Reflection</li>
                      <li className="text-align: left;">
                        Display of students’ exemplary work and finding in the
                        related area
                      </li>
                    </ul>
                  </td>
                  <td rowSpan="2" className=" px-2 border border-gray-600">
                    <p className="margin-left:2.45pt;">
                      Subject enrichment activities aim at enrichment of the
                      understanding and skill development of students.
                    </p>

                    <ul className="list-disc list-inside">
                      <li className="text-align: left;">
                        Speaking and listening skills
                      </li>
                      <li className="text-align: left;">
                        Vocabulary Enrichment
                      </li>
                      <li className="text-align: left;">
                        Enhancement of students’ awareness and sensitivity
                        through relevant literature
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr className="border border-gray-600">
                  <td className=" text-center border border-gray-600">
                    <p>Hindi/Sanskrit/ French</p>
                  </td>
                </tr>
                <tr>
                  <td className=" text-center border border-gray-600">
                    <p>­Science</p>
                  </td>
                  <td className=" border px-2 border-gray-600">
                    <p>
                      <strong>
                        <u>Science</u>
                      </strong>
                    </p>

                    <p className="text-left ">
                      Development of Scientific processes through experiments
                      and explorations.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className=" text-center border border-gray-600">
                    <p>Mathematics</p>
                  </td>
                  <td className=" px-2 border border-gray-600">
                    <p className="text-left">
                      <strong>
                        <u>Mathematics</u>
                      </strong>
                    </p>

                    <p className="text-left ">
                      Enhancement of Mathematical skills through lab activities
                      and explorations
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className=" text-center border border-gray-600">
                    <p>Social Science</p>
                  </td>
                  <td className=" px-2 border border-gray-600">
                    <p className="text-left ">
                      <strong>
                        <u>Social Science</u>
                      </strong>
                    </p>

                    <p className="text-left ">
                      Map work and Project work related to art and culture that
                      includes development of Life Skills
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className=" border border-gray-600 text-center">
                    <p>
                      6<sup>th</sup> Additional Skill subject (Artificial
                      Intelligence)
                    </p>
                  </td>
                  <td colSpan="2" className=" border border-gray-600">
                    <p align="center">Board Examination for 50 marks</p>
                  </td>
                  <td className=" border border-gray-600">
                    <p align="center"> </p>
                  </td>
                  <td colSpan="2" className=" border border-gray-600">
                    <p align="center">Practical Examination of 50 marks</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-5  overflow-hidden flex flex-col mx-auto">
          <h1 className="font-semibold underline text-center">
            Weightage Calculation for Promotion:
          </h1>
          <div className="overflow-x-auto md:ml-20">
            <table className="w-[100%] mt-2" width="730">
              <tbody>
                <tr>
                  <td colSpan="5" className=" border border-gray-600 p-2">
                    <p align="center">
                      <strong>Periodic Tests</strong>
                    </p>
                  </td>
                  <td rowSpan="3" className="border border-gray-600 p-2">
                    <p align="center">
                      <strong>Multiple Assessment (B)</strong>
                    </p>
                  </td>
                  <td rowSpan="3" className="border border-gray-600 p-2">
                    <p align="center">
                      <strong>Portfolio</strong>
                    </p>

                    <p align="center">
                      <strong>(C)</strong>
                    </p>
                  </td>
                  <td rowSpan="3" className="border border-gray-600 p-2">
                    <p align="center">
                      <strong>Subject Enrichment</strong>
                    </p>

                    <p align="center">
                      <strong>(D)</strong>
                    </p>
                  </td>
                  <td rowSpan="3" className="border border-gray-600 p-2">
                    <p align="center">
                      <strong>Board Exam</strong>
                    </p>

                    <p align="center">
                      <strong>(E)</strong>
                    </p>
                  </td>
                  <td rowSpan="3" className="border border-gray-600 p-2">
                    <p align="center">
                      <strong>Grand Total</strong>
                    </p>

                    <p align="center">
                      <strong>(A+B+C+D+E)</strong>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td rowSpan="2" className="border border-gray-600 p-2">
                    <p align="center"> </p>

                    <p align="center">
                      <strong>PT1</strong>
                    </p>

                    <p align="center">
                      <strong>(40)</strong>
                    </p>
                  </td>
                  <td rowSpan="2" className="border border-gray-600 p-2">
                    <p align="center"> </p>

                    <p align="center">
                      <strong>PT2</strong>
                    </p>

                    <p align="center">
                      <strong>(80)</strong>
                    </p>
                  </td>
                  <td className="border border-gray-600 p-2">
                    <p align="center">
                      <strong>PT3/</strong>
                    </p>

                    <p align="center">
                      <strong>Preboard - 1 (80)</strong>
                    </p>
                  </td>
                  <td className="border border-gray-600 p-2">
                    <p align="center">
                      <strong>Pre-Board -II (80)</strong>
                    </p>
                  </td>
                  <td rowSpan="2" className="border border-gray-600 p-2">
                    <p align="center">
                      <strong>Average of best</strong>
                    </p>

                    <p align="center">
                      <strong>two PBs</strong>
                    </p>

                    <p align="center">
                      <strong>(A)</strong>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="border border-gray-600 p-2">
                    <p align="center">
                      <strong>Best of PT 3/Pre Board</strong>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-600 p-2">
                    <p align="center">
                      <strong>10</strong>
                    </p>
                  </td>
                  <td className="border border-gray-600 p-2">
                    <p align="center">
                      <strong>10</strong>
                    </p>
                  </td>
                  <td colSpan="2" className="border border-gray-600 p-2">
                    <p align="center">
                      <strong>10</strong>
                    </p>
                  </td>
                  <td className="border border-gray-600 p-2">
                    <p align="center">
                      <strong>5</strong>
                    </p>
                  </td>
                  <td className="border border-gray-600 p-2">
                    <p align="center">
                      <strong>5</strong>
                    </p>
                  </td>
                  <td className="border border-gray-600 p-2">
                    <p align="center">
                      <strong>5</strong>
                    </p>
                  </td>
                  <td className="border border-gray-600 p-2">
                    <p align="center">
                      <strong>5</strong>
                    </p>
                  </td>
                  <td className="border border-gray-600 p-2">
                    <p align="center">
                      <strong>80</strong>
                    </p>
                  </td>
                  <td className="border border-gray-600 p-2">
                    <p align="center">
                      <strong>100</strong>
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <h2 className="mt-4 font-semibold">3. ART EDUCATION </h2>
          <p>
            Students will select either a Visual Art (includes Drawing,
            Painting, Craft etc.) or a Performing Art (either Dance or Music).
            Students’ participation in activities/competitions form the basis of
            assessing the students.
          </p>
          <h2 className="mt-4 font-semibold">
            4. HEALTH AND PHYSICAL EDUCATION
          </h2>
          <p>
            Students will select and participate in sports activities of their
            choice. An objective assessment will be made based on the level of
            performance/participation demonstrated by the students throughout a
            year.
          </p>

          <h1 className="font-semibold mt-5 ">
            Students will be graded on a 5 point scale (A to E) for Art
            Education and Health and Physical Education.
          </h1>
        </div>

        <div className="mb-5 overflow-hidden flex flex-col mx-auto">
          <h4 className="text-sm font-semibold underline">
            Points to be noted:
          </h4>
          <ul className="list-inside list-decimal mt-2 md:ml-4 text-sm">
            <li>
              <span className="underline">Retest</span> will be conducted only
              in{" "}
              <span className="underline">
                genuine Medical Emergencies/ On Duty cases.
              </span>
            </li>
            <li>
              <span className="underline">
                Any Application/ Medical certificate with a request letter
              </span>{" "}
              should be submitted{" "}
              <span className="underline">within one week of the leave</span>{" "}
              taken after which it will not be accepted and the student will be
              marked absent.
            </li>
            <li>
              For a student using{" "}
              <span className="underline">unfair means/ cheating</span> during
              any examination, the{" "}
              <span className="underline">
                answer sheet would not be evaluated
              </span>{" "}
              and the student would be awarded{" "}
              <span className="underline">‘Zero’</span> in that exam.
            </li>
            <li>
              No student shall be allowed to take the Board Examination unless
              he/she has{" "}
              <span className="underline">completed 75% attendance</span>.
            </li>
            <li>
              In case of long term absenteeism on medical grounds, only{" "}
              <span className="underline">15% of medical leave</span> shall be
              considered and{" "}
              <span className="underline">60% normal attendance</span> is
              compulsory as per CBSE attendance bye laws.
            </li>
          </ul>
        </div>
      </div>
      <div className=" mx-auto p-5 sm:pt-5 sm:px-10 container">
        <div className="mb-10  overflow-hidden flex flex-col mx-auto">
          <h1 className="text-lg text-center uppercase sm:text-2xl font-semibold text-indigo-600">
            Assessment and Promotion Criteria
          </h1>
          <p className="text-base text-center uppercase sm:text-xl font-semibold text-indigo-600 mb-2">
            Class IX
          </p>
          <p className="">
            The assessment pattern is followed as per the guidelines issued by
            CBSE.
          </p>

          <div className="overflow-x-auto ">
            <table className="w-[100%] text-sm">
              <tbody>
                <tr>
                  <td colSpan="6" className="border border-gray-600">
                    <p align="center">
                      <strong>
                        <u>Assessment Structure</u>
                      </strong>
                    </p>

                    <p align="center">
                      <strong>Total 100 Marks</strong>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td rowSpan="2" className="border border-gray-600">
                    <p align="center">
                      <strong>Subjects</strong>
                    </p>
                  </td>
                  <td rowSpan="2" className="border border-gray-600">
                    <p align="center">
                      <strong>
                        1. Annual Exam
                        <br />
                        (80 marks)
                      </strong>
                      <br />
                      Student has to secure 33% marks out of 80 marks in each
                      subject
                    </p>
                  </td>
                  <td colSpan="4" className="border border-gray-600">
                    <p align="center">
                      <strong>
                        2. Internal Assessment
                        <br />
                        (20 marks)
                      </strong>
                      <br />
                      Student has to secure 33% marks out of overall 20 marks in
                      each subject
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-600">
                    <p align="center">
                      Periodic tests
                      <br />
                      (5 Marks)
                    </p>
                  </td>
                  <td className="border border-gray-600">
                    <p align="center">
                      Multiple Assessment
                      <br />
                      (5marks)
                    </p>
                  </td>
                  <td className="border border-gray-600">
                    <p align="center">
                      Portfolio
                      <br />
                      (5 marks)
                    </p>
                  </td>
                  <td className="border border-gray-600">
                    <p align="center">
                      Subject Enrichment Activity
                      <br />
                      (5 marks)
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="text-center border border-gray-600">
                    <p>English</p>
                  </td>
                  <td rowSpan="5" className="border border-gray-600 px-2">
                    <ul className="list-inside list-disc">
                      <li>
                        The school will conduct Annual Exam for 80 marks in each
                        subject covering 100% syllabus of the subject.
                      </li>
                      <li>
                        Marks and Grades will be awarded for individual
                        subjects.
                      </li>
                      <li>8-point grading system will be followed.</li>
                    </ul>
                  </td>
                  <td rowSpan="5" className="border border-gray-600 px-2">
                    <p className="text-align: left;">
                      Three Periodic Tests and the{" "}
                      <strong>average of best two tests</strong> will be taken
                      for final marks submission.
                    </p>

                    <p className="text-align: left;"> </p>

                    <p className="text-align: left;">
                      For the purpose of gradient learning,{" "}
                      <strong>
                        the three tests will include Pre Mid Term (PT-1), Mid
                        Term (PT-2) and Post Mid Term (PT-3)
                      </strong>{" "}
                      with the portion of syllabus cumulatively covered. The
                      gradually increasing portion of contents would prepare
                      students acquire confidence for appearing in the Final
                      Exam with 100 % syllabus coverage
                    </p>
                  </td>
                  <td rowSpan="5" className="border border-gray-600 px-2">
                    <p className="text-align: left;">
                      This will cover multiple and diverse techniques like
                    </p>

                    <ul className="list-disc list-inside">
                      <li className="text-align: left;">Class Discussion</li>
                      <li className="text-align: left;">Oral Tests</li>
                      <li className="text-align: left;">Group Activities</li>
                      <li className="text-align: left;">Concept Map</li>
                      <li className="text-align: left;">Graphic Organizers</li>
                      <li className="text-align: left;">
                        PowerPoint Presentation etc
                      </li>
                    </ul>
                  </td>
                  <td rowSpan="5" className="border border-gray-600 px-2">
                    <p className="text-align: left;">
                      It is a collection of students’ work representing a
                      selection of performances that is assembled over time and
                      describes the students’ effort, progress, growth and
                      achievement in key areas. The portfolio may take the form
                      of a journal or notebook.
                    </p>

                    <p className="text-align: left;">This will cover</p>

                    <ul className="list-disc list-inside">
                      <li className="text-align: left;">CW/HW Assignment</li>
                      <li className="text-align: left;">Self/Peer</li>
                      <li className="text-align: left;">Student Artefacts</li>
                      <li className="text-align: left;">Students Reflection</li>
                      <li className="text-align: left;">
                        Display of students’ exemplary work and finding in the
                        related area
                      </li>
                    </ul>
                  </td>
                  <td rowSpan="2" className="border border-gray-600 px-2">
                    <p className="margin-left: 2.45pt; text-align: left;">
                      Subject enrichment activities aim at enrichment of the
                      understanding and skill development of students.
                    </p>

                    <ul className="list-disc list-inside">
                      <li className="text-align: left;">
                        Speaking and listening skills
                      </li>
                      <li className="text-align: left;">
                        Vocabulary Enrichment
                      </li>
                      <li className="text-align: left;">
                        Enhancement of students’ awareness and sensitivity
                        through relevant and suitable literature
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-600">
                    <p className="text-center">Hindi / Sanskrit / French</p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-600">
                    <p className="text-center">Science</p>
                  </td>
                  <td className="border border-gray-600 px-2">
                    <p className="text-align: left;">
                      <strong>
                        <u>Science</u>
                      </strong>
                    </p>

                    <p className="text-align: left;">
                      Development of Scientific processes through experiments
                      and explorations.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-600">
                    <p className="text-center">Mathematics</p>
                  </td>
                  <td className="border border-gray-600 px-2">
                    <p className="">
                      <strong>
                        <u>Mathematics</u>
                      </strong>
                    </p>

                    <p className="text-align: left;">
                      Enhancement of Mathematical skills through lab activities
                      and explorations
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-600">
                    <p className="text-center">Social Science</p>
                  </td>
                  <td className="border border-gray-600 px-2">
                    <p className="text-align: left;">
                      <strong>
                        <u>Social Science</u>
                      </strong>
                    </p>

                    <p>
                      Map work and Project work related to art and culture that
                      includes development of Life Skills
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-600 text-center">
                    <p>
                      6<sup>th</sup> Additional Skill subject (Artificial
                      Intelligence)
                    </p>
                  </td>
                  <td
                    colSpan="2"
                    className="border border-gray-600 text-center"
                  >
                    <p>Annual Examination for 50 marks</p>
                  </td>
                  <td className="border border-gray-600">
                    <p> </p>
                  </td>
                  <td
                    colSpan="2"
                    className="border border-gray-600 text-center"
                  >
                    <p>Practical Examination of 50 marks</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-5  overflow-hidden flex flex-col mx-auto">
          <h1 className="font-semibold underline mb-4 text-center">
            Weightage Calculation for Promotion:
          </h1>

          <div className="overflow-x-auto md:ml-20">
            <table className="w-[100%]">
              <tbody>
                <tr>
                  <td colSpan="4" className="border border-gray-600 p-2">
                    <p align="center">
                      <strong>Periodic Tests</strong>
                    </p>
                  </td>
                  <td rowSpan="2" className="border border-gray-600 p-2">
                    <p align="center">
                      <strong>Multiple Assessments</strong>
                    </p>

                    <p align="center">
                      <strong>(B)</strong>
                    </p>
                  </td>
                  <td rowSpan="2" className="border border-gray-600 p-2">
                    <p align="center">
                      <strong>Portfolio</strong>
                    </p>

                    <p align="center">
                      <strong>(C)</strong>
                    </p>
                  </td>
                  <td rowSpan="2" className="border border-gray-600 p-2">
                    <p align="center">
                      <strong>Subject </strong>
                      <strong>Enrichment</strong>
                    </p>

                    <p align="center">
                      <strong>(D)</strong>
                    </p>
                  </td>
                  <td
                    rowSpan="2"
                    className="text-center border border-gray-600 p-2"
                  >
                    <p>
                      <strong>IA</strong>
                    </p>

                    <p align="center">
                      <strong>(E)</strong>
                    </p>

                    <p align="center">
                      <strong>(A+B+C+D)</strong>
                    </p>
                  </td>
                  <td rowSpan="2" className="border border-gray-600 p-2">
                    <p align="center">
                      <strong>PT2/Mid term</strong>
                    </p>

                    <p align="center">
                      <strong>(F)</strong>
                    </p>

                    <p align="center">
                      <strong>(80)</strong>
                    </p>
                  </td>
                  <td rowSpan="2" className="border border-gray-600 p-2">
                    <p align="center">
                      <strong>Annual</strong>
                      <strong> Exam</strong>
                    </p>

                    <p align="center">
                      <strong>(G)</strong>
                    </p>

                    <p align="center">
                      <strong>(80)</strong>
                    </p>
                  </td>
                  <td rowSpan="2" className="border border-gray-600 p-2">
                    <p align="center">
                      <strong>Grand Total</strong>
                    </p>

                    <p align="center">
                      <strong>(E+F+G)</strong>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-600 p-2">
                    <p align="center">
                      <strong>PT1</strong>
                    </p>

                    <p align="center">
                      <strong>(40)</strong>
                    </p>
                  </td>
                  <td className="border border-gray-600 p-2">
                    <p align="center">
                      <strong>PT2/Mid term</strong>
                    </p>

                    <p align="center">
                      <strong>(80)</strong>
                    </p>
                  </td>
                  <td className="border border-gray-600 p-2">
                    <p align="center">
                      <strong>PT3</strong>
                    </p>

                    <p align="center">
                      <strong>(40)</strong>
                    </p>
                  </td>
                  <td className="border border-gray-600 p-2">
                    <p align="center">
                      <strong>Average of best two PTs</strong>
                    </p>

                    <p align="center">
                      <strong>(A)</strong>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-600 p-2">
                    <p align="center">
                      <strong>10</strong>
                    </p>
                  </td>
                  <td className="border border-gray-600 p-2">
                    <p align="center">
                      <strong>10</strong>
                    </p>
                  </td>
                  <td className="border border-gray-600 p-2">
                    <p align="center">
                      <strong>10</strong>
                    </p>
                  </td>
                  <td className="border border-gray-600 p-2">
                    <p align="center">
                      <strong>5</strong>
                    </p>
                  </td>
                  <td className="border border-gray-600 p-2">
                    <p align="center">
                      <strong>5</strong>
                    </p>
                  </td>
                  <td className="border border-gray-600 p-2">
                    <p align="center">
                      <strong>5</strong>
                    </p>
                  </td>
                  <td className="border border-gray-600 p-2">
                    <p align="center">
                      <strong>5</strong>
                    </p>
                  </td>
                  <td className="border border-gray-600 p-2">
                    <p align="center">
                      <strong>20</strong>
                    </p>
                  </td>
                  <td className="border border-gray-600 p-2">
                    <p align="center">
                      <strong>30</strong>
                    </p>
                  </td>
                  <td className="border border-gray-600 p-2">
                    <p align="center">
                      <strong>50</strong>
                    </p>
                  </td>
                  <td className="border border-gray-600 p-2">
                    <p align="center">
                      <strong>100</strong>
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <h1 className="font-semibold underline mb-4 text-center my-8">
            The 8 point grading system is appended below:
          </h1>
          <div className="overflow-x-auto md:ml-20">
            <table className="w-[100%]">
              <tbody>
                <tr>
                  <td className="border border-gray-600 p-2">
                    <p align="center">
                      <strong>Marks Range</strong>
                    </p>
                  </td>
                  <td className="border border-gray-600 p-2">
                    <p align="center">
                      <strong>91-100</strong>
                    </p>
                  </td>
                  <td className="border border-gray-600 p-2">
                    <p align="center">
                      <strong>81-90</strong>
                    </p>
                  </td>
                  <td className="border border-gray-600 p-2">
                    <p align="center">
                      <strong>71-80</strong>
                    </p>
                  </td>
                  <td className="border border-gray-600 p-2">
                    <p align="center">
                      <strong>61-70</strong>
                    </p>
                  </td>
                  <td className="border border-gray-600 p-2">
                    <p align="center">
                      <strong>51-60</strong>
                    </p>
                  </td>
                  <td className="border border-gray-600 p-2">
                    <p align="center">
                      <strong>41-50</strong>
                    </p>
                  </td>
                  <td className="border border-gray-600 p-2">
                    <p align="center">
                      <strong>33-40</strong>
                    </p>
                  </td>
                  <td className="border border-gray-600 p-2">
                    <p align="center">
                      <strong>32 &amp; below</strong>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-600 p-2">
                    <p align="center">
                      <strong>Grade</strong>
                    </p>
                  </td>
                  <td className="border border-gray-600 p-2">
                    <p align="center">A1</p>
                  </td>
                  <td className="border border-gray-600 p-2">
                    <p align="center">A2</p>
                  </td>
                  <td className="border border-gray-600 p-2">
                    <p align="center">B1</p>
                  </td>
                  <td className="border border-gray-600 p-2">
                    <p align="center">B2</p>
                  </td>
                  <td className="border border-gray-600 p-2">
                    <p align="center">C1</p>
                  </td>
                  <td className="border border-gray-600 p-2">
                    <p align="center">C2</p>
                  </td>
                  <td className="border border-gray-600 p-2">
                    <p align="center">D</p>
                  </td>
                  <td className="border border-gray-600 p-2">
                    <p align="center">E (Essential repeat)</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="mt-4 font-semibold">3. ART EDUCATION </h2>
          <p>
            Students will select either a Visual Art (includes Drawing,
            Painting, Craft etc.) or a Performing Art (either Dance or Music).
            Students’ participation in activities/competitions form the bases of
            assessing the students.
          </p>
          <h2 className="mt-4 font-semibold">
            4. HEALTH AND PHYSICAL EDUCATION
          </h2>
          <p>
            Students will select and participate in sports activities of their
            choice. An objective assessment will be made based on the level of
            performance/participation demonstrated by the students throughout a
            year.
          </p>

          <h1 className="font-semibold mt-5 ">
            Students will be graded on a 5 point scale (A to E) for Art
            Education and Health and Physical Education.
          </h1>
        </div>

        <div className="mb-5 overflow-hidden flex flex-col mx-auto">
          <h4 className="text-sm font-semibold underline">
            Points to be noted:
          </h4>
          <ul className="list-inside list-decimal mt-2 md:ml-4 text-sm">
            <li>
              In order to be declared <u>PASS</u>, a student must secure{" "}
              <u>at least 33% marks in each of the 5 main subjects</u>{" "}
              (separately in Theory and Internal Assessment) in Annual
              Examination.
            </li>
            <li>
              It is <u>compulsory</u> for the students to appear in all
              Examinations/ Assessments. However, if a student remains absent on
              any exam day due to unavoidable circumstances or medical reasons,
              parents are requested to <u>inform</u> the school reception or
              mail at the school email ID on the very same day/ at the earliest.
            </li>
            <li>
              <u>Retest</u> will be conducted only in{" "}
              <u>genuine Medical Emergencies/ On Duty cases</u>.
            </li>
            <li>
              <u>Any Application/ Medical certificate with a request letter</u>{" "}
              should be submitted <u>within one week of the leave</u> taken
              after which it will not be accepted and the student will be marked
              absent.
            </li>
            <li>
              For a student using <u>unfair means/ cheating</u> during any
              examination, the <u>answer sheet would not be evaluated</u> and
              the student would be awarded <u>‘Zero’</u> in that exam.
            </li>
            <li>
              No student shall be allowed to take the Annual Examination unless
              he/she has <u>completed 75% attendance</u>.
            </li>
            <li>
              In case of long term absenteeism on medical grounds, only{" "}
              <u>15% of medical leave</u> shall be considered and{" "}
              <u>60% normal attendance</u> is compulsory as per CBSE attendance
              bye laws.
            </li>
          </ul>
          <h4 className="text-sm font-semibold underline mt-4">
            Eligibility for Compartment:
          </h4>
          <ul className="list-inside list-decimal mt-2 md:ml-4 text-sm">
            <li>
              A student failing in 2 subjects shall be placed in compartment in
              those subjects, provided he/she qualifies in all the subjects of
              Internal Assessments.
            </li>
            <li>
              A maximum of 10 marks grace can be awarded for up to 2 subjects
              for promotion. A maximum of <u>5 marks grace</u> can be awarded
              for <u>one subject</u>.{" "}
              <u>Grace marks and compartment cannot be awarded together</u> to a
              student.
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Secondary;
