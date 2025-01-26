import Container from "@/app/components/client/Container";

export const metadata = {
  title: "Senior Secondary",
};

const SeniorSecondary = () => {
  return (
    <Container>
      <div className=" mx-auto p-5 sm:pt-5 sm:px-10 container">
        <h1 className="text-lg text-center uppercase sm:text-2xl font-semibold text-indigo-600">
          Assessment and Promotion Criteria
        </h1>
        <p className="text-base text-center uppercase sm:text-xl font-semibold text-indigo-600 mb-2">
          Class XI
        </p>
        <ol className="list-decimal list-outside">
          <li>
            In order to <u className="font-semibold">declare pass</u>, a student
            must secure{" "}
            <u className="font-semibold">
              at least 33% marks in each of the subject
            </u>{" "}
            studied by him/her separately both in Theory and Practical/
            Project/IA Exam.
          </li>
          <li>
            If a student has{" "}
            <u className="font-semibold">
              failed to secure at least 33% in theory in one subject,
              compartment
            </u>{" "}
            is given in theory only. Same policy applies for practical/project/
            IA also.
          </li>
          <li>
            A student shall be{" "}
            <u className="font-semibold">detained in Class XI</u> if he/ she is{" "}
            <u className="font-semibold">unable to secure 33% marks</u>{" "}
            separately in both Theory and Practical/ Project / IA examinations
            of two or more than two subjects.
          </li>
          <li>
            It is compulsory for the students to appear in all Examinations/
            Assessments. However, if a student remains absent on any exam day
            due to unavoidable circumstances or medical reasons, parents are
            requested to inform the school reception or mail at the school email
            ID on the very same day/ at the earliest.
          </li>
          <li>
            Retest will be conducted only in genuine Medical Emergencies/ On
            Duty cases.
          </li>
          <li>
            Any Application/ Medical certificate with a request letter should be
            submitted within three days of the leave taken after which it will
            not be accepted and the student will be marked absent. No mark,
            credit or allowance shall be given for the days of the absence.
          </li>
          <li>
            For a student using unfair means/ cheating during any examination,
            the answer sheet would not be evaluated and the student would be
            awarded zero in that exam.
          </li>
          <li>
            No student shall be allowed to take the Annual Examination unless
            he/she has <u className="font-semibold">completed 75% attendance</u>
            .
          </li>
          <li>
            In case of long term absenteeism on medical grounds, only 15% of
            medical leave shall be considered and 60% normal attendance is
            compulsory as per CBSE attendance bye laws.
          </li>
        </ol>
        <p className="font-semibold">
          In case, a student wishes to take-up a{" "}
          <u>Sixth (additional) subject in Class XII</u>, it is mandatory for
          him/ her to pass the <u>Mid Term Examination</u> of that subject with{" "}
          <u>at least 33% in Class XI</u>.
        </p>
        <h2 className="font-semibold text-center my-4">
          Weightage Calculation for Promotion
        </h2>
        <div className="overflow-x-auto">
          <table className="w-[100%] text-sm">
            <tbody>
              <tr>
                <td rowSpan="2" className="border border-gray-600 p-2">
                  <p align="center">
                    <span className="color:#000000;">
                      <strong>Subjects involving Practical</strong>
                    </span>
                  </p>
                </td>
                <td colSpan="2" className="border border-gray-600 p-2">
                  <p align="center">
                    <span className="color:#000000;">
                      <strong>Mid Term Examination</strong>
                    </span>
                  </p>
                </td>
                <td colSpan="2" className="border border-gray-600 p-2">
                  <p align="center">
                    <span className="color:#000000;">
                      <strong>Annual Examination</strong>
                    </span>
                  </p>
                </td>
                <td rowSpan="2" className="border border-gray-600 p-2">
                  <p>
                    <span className="color:#000000;"></span>
                  </p>

                  <p>
                    <span className="color:#000000;"></span>
                  </p>

                  <p>
                    <span className="color:#000000;">
                      <strong>Overall </strong>
                    </span>
                  </p>

                  <p>
                    <span className="color:#000000;">
                      <strong>(A+B)</strong>
                    </span>
                  </p>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-600 p-2">
                  <p>
                    <span className="color:#000000;">
                      <strong>Maximum Marks </strong>
                    </span>
                  </p>
                </td>
                <td className="border border-gray-600 p-2 ">
                  <p>
                    <span className="color:#000000;">
                      <strong>Weightage</strong>
                    </span>
                  </p>

                  <p>
                    <span className="color:#000000;">
                      <strong>(A)</strong>
                    </span>
                  </p>
                </td>
                <td className="border border-gray-600 p-2">
                  <p>
                    <span className="color:#000000;">
                      <strong>Maximum Marks </strong>
                    </span>
                  </p>
                </td>
                <td className="border border-gray-600 p-2">
                  <p>
                    <span className="color:#000000;">
                      <strong>Weightage</strong>
                    </span>
                  </p>

                  <p>
                    <span className="color:#000000;">
                      <strong>(B)</strong>
                    </span>
                  </p>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-600 p-2">
                  <p>
                    <span className="color:#000000;">
                      Physics, Chemistry, Biology, Psychology, Physical
                      Education, Geography, Home Science, and Computer Science
                    </span>
                  </p>
                </td>
                <td className="border border-gray-600 p-2">
                  <p>
                    <span className="color:#000000;">Theory -70</span>
                  </p>

                  <p>
                    <span className="color:#000000;">Practical - 30</span>
                  </p>
                </td>
                <td className="border border-gray-600 p-2">
                  <p>
                    <span className="color:#000000;">Theory -20</span>
                  </p>

                  <p>
                    <span className="color:#000000;">Practical – 10</span>
                  </p>
                </td>
                <td className="border border-gray-600 p-2">
                  <p>
                    <span className="color:#000000;">Theory -70</span>
                  </p>

                  <p>
                    <span className="color:#000000;">Practical - 30</span>
                  </p>
                </td>
                <td className="border border-gray-600 p-2">
                  <p>
                    <span className="color:#000000;">Theory -50</span>
                  </p>

                  <p>
                    <span className="color:#000000;">Practical - 20</span>
                  </p>
                </td>
                <td className="border border-gray-600 p-2">
                  <p>
                    <span className="color:#000000;">Theory -70</span>
                  </p>

                  <p>
                    <span className="color:#000000;">Practical – 30</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-600 p-2">
                  <p>
                    <span className="color:#000000;">Painting</span>
                  </p>
                </td>
                <td className="border border-gray-600 p-2">
                  <p>
                    <span className="color:#000000;">Theory -30</span>
                  </p>

                  <p>
                    <span className="color:#000000;">Practical – 70</span>
                  </p>
                </td>
                <td className="border border-gray-600 p-2">
                  <p>
                    <span className="color:#000000;">Theory -10</span>
                  </p>

                  <p>
                    <span className="color:#000000;">Practical – 20</span>
                  </p>
                </td>
                <td className="border border-gray-600 p-2">
                  <p>
                    <span className="color:#000000;">Theory -30</span>
                  </p>

                  <p>
                    <span className="color:#000000;">Practical – 70</span>
                  </p>
                </td>
                <td className="border border-gray-600 p-2">
                  <p>
                    <span className="color:#000000;">Theory -20</span>
                  </p>

                  <p>
                    <span className="color:#000000;">Practical – 50</span>
                  </p>
                </td>
                <td className="border border-gray-600 p-2">
                  <p>
                    <span className="color:#000000;">Theory -30</span>
                  </p>

                  <p>
                    <span className="color:#000000;">Practical – 70</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-600 p-2">
                  <p>
                    <span className="color:#000000;">
                      Fashion Studies and Web application
                    </span>
                  </p>
                </td>
                <td className="border border-gray-600 p-2">
                  <p>
                    <span className="color:#000000;">Theory -60</span>
                  </p>

                  <p>
                    <span className="color:#000000;">Practical - 40</span>
                  </p>
                </td>
                <td className="border border-gray-600 p-2">
                  <p>
                    <span className="color:#000000;">Theory -20</span>
                  </p>

                  <p>
                    <span className="color:#000000;">Practical – 15</span>
                  </p>
                </td>
                <td className="border border-gray-600 p-2">
                  <p>
                    <span className="color:#000000;">Theory -60</span>
                  </p>

                  <p>
                    <span className="color:#000000;">Practical - 40</span>
                  </p>
                </td>
                <td className="border border-gray-600 p-2">
                  <p>
                    <span className="color:#000000;">Theory -40</span>
                  </p>

                  <p>
                    <span className="color:#000000;">Practical - 25</span>
                  </p>
                </td>
                <td className="border border-gray-600 p-2">
                  <p>
                    <span className="color:#000000;">Theory -60</span>
                  </p>

                  <p>
                    <span className="color:#000000;">Practical – 40</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-600 p-2">
                  <p>
                    <span className="color:#000000;">Yoga</span>
                  </p>
                </td>
                <td className="border border-gray-600 p-2">
                  <p>
                    <span className="color:#000000;">Theory -50</span>
                  </p>

                  <p>
                    <span className="color:#000000;">Practical - 50</span>
                  </p>
                </td>
                <td className="border border-gray-600 p-2">
                  <p>
                    <span className="color:#000000;">Theory -20</span>
                  </p>

                  <p>
                    <span className="color:#000000;">Practical - 20</span>
                  </p>
                </td>
                <td className="border border-gray-600 p-2">
                  <p>
                    <span className="color:#000000;">Theory -50</span>
                  </p>

                  <p>
                    <span className="color:#000000;">Practical - 50</span>
                  </p>
                </td>
                <td className="border border-gray-600 p-2">
                  <p>
                    <span className="color:#000000;">Theory -30</span>
                  </p>

                  <p>
                    <span className="color:#000000;">Practical - 30</span>
                  </p>
                </td>
                <td className="border border-gray-600 p-2">
                  <p>
                    <span className="color:#000000;">Theory -50</span>
                  </p>

                  <p>
                    <span className="color:#000000;">Practical - 50</span>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="overflow-x-auto">
          <table className="w-[100%] mt-6 text-sm">
            <tbody>
              <tr>
                <td rowSpan="2" className="border border-gray-600 w-1/2">
                  <p align="center">
                    <span className="color:#000000;">
                      <strong>
                        Subjects involving Project/Internal Assessment (IA)
                      </strong>
                    </span>
                  </p>
                </td>
                <td colSpan="2" className="border border-gray-600">
                  <p align="center">
                    <span className="color:#000000;">
                      <strong>Mid Term Examination</strong>
                    </span>
                  </p>
                </td>
                <td colSpan="2" className="border border-gray-600">
                  <p align="center">
                    <span className="color:#000000;">
                      <strong>Annual Examination</strong>
                    </span>
                  </p>
                </td>
                <td rowSpan="2" className="border border-gray-600">
                  <p align="center">
                    <span className="color:#000000;">
                      <strong>Overall</strong>
                    </span>
                  </p>

                  <p align="center">
                    <span className="color:#000000;">
                      <strong>(A+B)</strong>
                    </span>
                  </p>
                </td>
              </tr>
              <tr className="text-center">
                <td className="border border-gray-600">
                  <p>
                    <span className="color:#000000;">
                      <strong>Maximum Marks </strong>
                    </span>
                  </p>
                </td>
                <td className="border border-gray-600">
                  <p>
                    <span className="color:#000000;">
                      <strong>Weightage</strong>
                    </span>
                  </p>

                  <p>
                    <span className="color:#000000;">
                      <strong>(A)</strong>
                    </span>
                  </p>
                </td>
                <td className="border border-gray-600">
                  <p>
                    <span className="color:#000000;">
                      <strong>Maximum Marks </strong>
                    </span>
                  </p>
                </td>
                <td className="border border-gray-600">
                  <p>
                    <span className="color:#000000;">
                      <strong>Weightage</strong>
                    </span>
                  </p>

                  <p>
                    <span className="color:#000000;">
                      <strong>(B)</strong>
                    </span>
                  </p>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-600 pl-2">
                  <p>
                    <span className="color:#000000;">
                      English, Maths, Accounts, Business Studies, Political
                      Science, Legal Studies, Sociology, History and Economics
                    </span>
                  </p>
                </td>
                <td className="border border-gray-600 py-2">
                  <p>
                    <span className="color:#000000;">Theory -80</span>
                  </p>

                  <p>
                    <span className="color:#000000;">Project/ IA-20</span>
                  </p>
                </td>
                <td className="border border-gray-600">
                  <p>
                    <span className="color:#000000;">Theory -30</span>
                  </p>

                  <p>
                    <span className="color:#000000;">Project/ IA-10</span>
                  </p>
                </td>
                <td className="border border-gray-600">
                  <p>
                    <span className="color:#000000;">Theory -80</span>
                  </p>

                  <p>
                    <span className="color:#000000;">Project/ IA-20</span>
                  </p>
                </td>
                <td className="border border-gray-600">
                  <p>
                    <span className="color:#000000;">Theory -50</span>
                  </p>

                  <p>
                    <span className="color:#000000;">Project/ IA-10</span>
                  </p>
                </td>
                <td className="border border-gray-600">
                  <p>
                    <span className="color:#000000;">Theory -80</span>
                  </p>

                  <p>
                    <span className="color:#000000;">Project/ IA- 20</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-600 pl-2">
                  <p>
                    <span className="color:#000000;">Entrepreneurship</span>
                  </p>
                </td>
                <td className="border border-gray-600 py-2">
                  <p>
                    <span className="color:#000000;">Theory -70</span>
                  </p>

                  <p>
                    <span className="color:#000000;">Project/ IA-30</span>
                  </p>
                </td>
                <td className="border border-gray-600">
                  <p>
                    <span className="color:#000000;">Theory -20</span>
                  </p>

                  <p>
                    <span className="color:#000000;">Project/ IA- 10</span>
                  </p>
                </td>
                <td className="border border-gray-600">
                  <p>
                    <span className="color:#000000;">Theory -70</span>
                  </p>

                  <p>
                    <span className="color:#000000;">Project/ IA-30</span>
                  </p>
                </td>
                <td className="border border-gray-600">
                  <p>
                    <span className="color:#000000;">Theory -50</span>
                  </p>

                  <p>
                    <span className="color:#000000;">Project/ IA-20</span>
                  </p>
                </td>
                <td className="border border-gray-600">
                  <p>
                    <span className="color:#000000;">Theory -70</span>
                  </p>

                  <p>
                    <span className="color:#000000;">Project/IA- 30</span>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  );
};

export default SeniorSecondary;
