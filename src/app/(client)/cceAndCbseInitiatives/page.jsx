import Container from "@/app/components/client/Container";
import Image from "next/image";
import React from "react";

const CceAndCbseInitiatives = () => {
  return (
    <Container>
      <div className="m-1 p-1 w-[90%]">
        <h1 className="md:text-xl text-lg text-indigo-600 font-semibold md:font-bold">
          Implementation of Value Education Cards :
        </h1>
        <p className="text-sm md:text-base">
          As per the CCE a child should be well acquainted with a value systems.
          At NKBGS moral values are taught across all standards, though special
          emphasis is laid on value education at primary level. Topic like: Love
          for Family, Helping Others, Bringing Life Style Changes, Striving for
          Better Life, No Wastage of Food, Eco Buddies, Safety Around, Being
          Polite, Honesty, Team work, Celebrating Diversity, Nurturing Nature
          etc. Among the multiple value cards, the teacher chooses one and reads
          out a story / case study. The children try to decipher the problem and
          look for solutions. The card also mentions the learning outcomes.
          Moral issues are discussed with the aid of anecdotes. This is further
          discussed in an open forum.
        </p>
        <div className="flex justify-center items-center">
          <Image
            width={1200}
            height={1200}
            alt="Admission"
            src="/images/cce.png"
            className="md:w-auto "
          />
        </div>
        <h1 className="md:text-xl text-lg text-indigo-600 font-semibold md:font-bold mt-4">
          Physical Education Cards (PEC) :
        </h1>
        <p className="text-sm md:text-base">
          Integrating Physical Education with scholastic for holistic
          development of students. Linking PEC activities to know the principles
          of movement and understand the impact they have on child development,
          understand the importance of agility, balance, coordination, speed and
          strength to the physical development of young children. PEC activities
          are fruitful as they keep the students active for most of the time.
          Such settings creates a health promoting environment which in turn
          promotes learning. As a result more emphasis is laid on being
          physically active and enjoyment of physical activity rather than just
          winning competitions and excelling. These cards when used effectively,
          would result in achieving desired outcomes through behavioral
          modification.
        </p>
        <p className="text-sm md:text-base mt-2">
          Each Card is aimed at providing the essential information needed for
          engaging all the students of the concerned class in the selected game/
          activity . The title of the Card specifies the abilities to be focused
          by the particular activities, the activities to be organized , the
          process of organising the activities, equipment that will be needed,
          safety measures to be taken and the skills to be developed. Lesson are
          designed to inspire students and have fun with while helping them to
          learn and physically confident and competent. Workshop on the same has
          been conducted by Mr Mukesh Kohli, a CBSE authorized resource person,
          who has trained teachers on its implementation.
        </p>
      </div>
    </Container>
  );
};

export default CceAndCbseInitiatives;
