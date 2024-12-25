import React from "react";

const AdmissionRules = () => {
  return (
    <div className="mt-2 shadow-xl bg-gray-500/50 rounded-xl">
      <div className="pl-6">
        <ol className="text-left list-decimal ">
          <li>
            It is compulsory for all students to complete 75% attendance before
            every exam to make them eligible to sit for the examination.In case
            attendance is short, students will not be eligible for promotion/any
            academic award.
          </li>
          <li>
            All children are expected to attend school on the opening day after
            every vacation and must be present before closing for the vacation.
            Those absent because of sickness must present a medical certificate
            with a covering letter within 3 days of absence through Fax or a
            representative.
          </li>
          <li>
            A child returning to school after suffering from an infectious or
            contagious disease should produce a fitness certificate from a
            doctor.
          </li>
          <li>
            Only those students will be put &apos;on duty&apos; who represent the school
            while playing a tournament, a sport or participatein any other
            event. Any student, not representing the school, will have no such
            claim.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default AdmissionRules;
