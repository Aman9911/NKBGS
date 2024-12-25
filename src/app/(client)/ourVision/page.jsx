"use client";
import React, { useState } from "react";
import Container from "@/app/components/client/Container";
import VisionCard from "@/app/components/card/VisionCard";

const OurVision = () => {
  const [selectedItem, setSelectedItem] = useState("Our Vision");
  const [nav, setNav] = useState([
    {
      name: "Our Vision",
      heading: "Our Vision",
      content:
        "The aim of any good school should be to provide the best possible education to its students. Our primary aim is to develop in the students-qualities of integrity, honesty, trust, tolerance and compassion, to foster a scientific temper within the bonds of humanism, to help the student to become a meaningful part of his environment. The objective of the school is to assist the students to unfold their latent talents and to help them to grow to the highest possible level in as many fields as is possible for each individual. In addition to facilitating their physical, mental, spiritual, aesthetic and ethical growth the school invests them with an indomitable spirit. Our training here is geared to discovering their infinite worth as they grow up. It will be our endeavour to instill in them the quality of self-worth and they will be motivated in life to do the right thing. Our constant endeavour is to develop communication skills, leadership qualities and life skills such as problem solving, realistic goal setting, self-confidence, decision making, independent thought etc. For this purpose, wholesome activities like discussions, situations requiring independent thought are conceived and implemented. Such training opens the minds of children to a world beyond academia. Furthermore, they learn to face challenges. Briefly, we are imparting mind-enhancing education in the school. In the process of such education the parents have a great role to play. Children imitate their elders and try to behave just like them a they learn more from what we do than from what we say. Therefore, we should be careful in our behaviour, actions and speech, particularly in the presence of children. It is also advisable to encourage the child to develop a positive attitude in life by giving him success-experience. Another joint effort of home and school should be to hook the child on to reading. Let the child learn to read, and then he will read to learn. Although high academic achievement is undoubtedly our endeavour, our goal is the development of the children total personality-self discipline, self-reliance, alertness, team work, concern for others, to be in harmony with nature, are some important traits we are trying to inculcate, and for which plenty of opportunity is being provided. Your support and encouragement to participate in the varied school activities will enable your ward to truly benefit from everything the school offers.",
      pic: "/images/vision1.png",
      writer: "",
      current: true,
    },
    {
      name: "Our Mission",
      heading: "Our Mission",
      content:
        "We see our students and faculty strong and assured in their purpose, having a voice of influence and knowing they can make a difference. We see a school that is recognized widely for its culture, values, student's ownership and future oriented approach. We see a school which places high value on individuality, excellence and creativity. We see our school, our teaching and our students as significant and highly influential impacting. We believe our school will be the voice of influence in the education pursing innovative approaches which will make our school as different dynamic and future focused. The mission of the N. K. Bagrodia Global School System is to serve our community by providing each student educational opportunities designed to ensure success as an involved and responsible citizen. We are committed to providing a safe and positive environment, recognizing and addressing individual differences, involving parents, and making wise use of community resources.",
      pic: "/images/mission.png",
      writer: "",
      current: false,
    },
    {
      name: "Our Motto",
      heading: "Our Motton",
      content:
        "Focuses on Experiential learning and Nurtures young minds to believe in themeselves and to march with grace to own their future.",
      pic: "/logo.png",
      writer: "",
      current: false,
    },
    {
      name: "Message",
      heading: "Founder's Message",
      content:
        "The Founder Chairman of N. K. Bagrodia Group of Schools was a great visionary with a keen foresight and clear objective. He was a man of strong determination, will power and burning ambition. His dynamic management, remarkable efficiency and unparallel devotion built in him a philanthropist par excellence. He was a true ‘Karamyogi’ who translated all his faith and beliefs into action and had set a noble exemplary image of his fine thoughts and deeds. With an urge to serve mankind he started schools, vocational institutes in Delhi and at his native place Mukundgarh, Rajasthan catering to all sections of the society. Among the gamut of social activities, the construction of a Dharamshala near Rajiv Gandhi Cancer Institute, Rohini and a Vriddha Ashram in Mukundgarh are worth mentioning. His philanthropic ventures include the construction of numerous roads, tube wells for irrigation, drinking water facility to the public etc. His dream was to make this institute an ideal progressive school which will take care of wholesome education in development of mind, body and soul and producing the best human beings serving the country with a sense of patriotism.",
      pic: "/management/Founder.png",
      writer: "Nand Kishore Bagrodia",
      moreData: [
        {
          name: "Message",
          heading: "Trustee's Message",
          content:
            "Shri K.K. Dhanuka ji - A great Utopian, Thinker, Pragmatist, Visionary - par excellence is the driving force behind the golden legacy of the timeless value and rich principles bestowed upon his associates. ‘Simple living and high thinking’ personified his zeal and humility for mankind. A legendary who possessed ‘Midas Touch’ and revolutionized quality education in Delhi and Rajasthan.A legendary who possessed ‘Midas Touch’ and revolutionized quality education in Delhi and Rajasthan.",
          pic: "/management/Trustee.png",
          writer: "Shri K.K. Dhanuka ji",
        },
        {
          name: "Message",
          heading: "Trustee's Message",
          content:
            "Shri N. K. Bagrodia – The Founder Chairman of N. K. Bagrodia Group of Schools was a great visionary with a keen foresight and clear objective. He was a man of strong determination, will power and burning ambition. His dynamic management, remarkable efficiency and unparallel devotion built in him a philanthropist par excellence. He was a true ‘Karamyogi’ who translated all his faith and beliefs into action and had set a noble exemplary image of his fine thoughts and deeds. With an urge to serve mankind he started schools, vocational institutes in Delhi and at his native place Mukundgarh, Rajasthan catering to all sections of the society. Among the gamut of social activities, the construction of a Dharamshala near Rajiv Gandhi Cancer Institute, Rohini and a Vriddha Ashram in Mukundgarh are worth mentioning. His philanthropic ventures include the construction of numerous roads, tube wells for irrigation, drinking water facility to the public etc. His dream was to make this institute an ideal progressive school which will take care of wholesome education in development of mind, body and soul and producing the best human beings serving the country with a sense of patriotism.",
          pic: "/management/Guptasir.png",
          writer: "Shri Dinesh Gupta ji",
        },
        {
          name: "Message",
          heading: "Chairman's Message",
          content:
            "The day a child enrolls in a school, his formal education commences. A school is a place where personality of a child is groomed and nurtured. The staff members play an important role in the holistic development of a child. Apart from the indispensable role of the staff members, the school provides ample scope for honing the innate talents of the children by way of providing ample opportunities in sports, debate, cultural activities and community service. It is a matter of great privilege and pride for us to see children from all strata of the society benefit from the facilities provided to them in myriad forms. Sincere efforts are put to help the children grow organically and contribute to the betterment of the society and community at large. N. K. Bagrodia Global School, Sector-17, Dwarka was the brain child of Late Shri N. K. Bagrodia who had a crystal clear foresight to serve the mankind by providing quality education to students from all strata of life. I am grateful to the parents, management committee, staff members and our students for their unflinching support and wholehearted involvement to give shape to his dream. With the collaborative effort of all well wishers and other stakeholders the school is progressing in leaps and bounds. I sincerely believe that with the sincere and concerted efforts of all the stakeholders the school will be able to set higher and higher benchmarks for everyone else to imbibe.",
          pic: "/management/chairman1.png",
          writer: "Shri Raghav Bagrodia",
        },
        {
          name: "Message",
          heading: "Director's Message",
          content:
            "I am honoured and humbled to be the part of this great institution N. K. Bagrodia Public School, Sector-IV, Dwarka, New Delhi-110078 for the last 20 years as the founder Principal which was founded by a visionary par excellence Late Sh. Nand Kishore Bagrodiaji and now as the Director of this esteemed institution. The school has completed 21 glorious years to become one of the prestigious institutions catering to more than 3000 students. I believe that to be the best at whatever one endeavors to do is perhaps the most rewarding of all exercises in life. The institution has once again been ranked among the top ten schools (consecutively for the last 6 years) at the All India level for its academic reputation. To begin with I would like to place on record the dedication and commitment of the Bagrodian faculty at Dwarka who have dedicated their lives to the cause of education which apparently has been the prime and inevitable determinant of excellence. Many of our Alumni have been offered good placements in top companies of the world. For our children their world is a confusing quagmire of emotional crevasses and high walls of knowledge. Teachers on the contrary tap the potential of each student by holding their hands to access, then climb and reach the heights of knowledge and learning. Teachers are the classroom heroes who identify and clear the path of the students, while parents give roots to the child; teachers shape their minds and give them wings to soar high. We as teachers should guide each and every student imbibe better values, right skills and a qualitative life to become a good human being. I seek blessings from the God Almighty to shower his choicest blessings on the entire Bagrodian fraternity at Dwarka to persistently walk on the path of educational excellence only to leave a trail and a roadmap for making this institution become a world class school perhaps the best in the world!",
          pic: "/management/director.jpg",
          writer: "Dr.(Mrs) Rajee N. Kumar",
        },
        {
          name: "Message",
          heading: "Principal's Message",
          content:
            "I am honoured and humbled to be the part of this great institution N. K. Bagrodia Public School, Sector-IV, Dwarka, New Delhi-110078 for the last 20 years as the founder Principal which was founded by a visionary par excellence Late Sh. Nand Kishore Bagrodiaji and now as the Director of this esteemed institution. The school has completed 21 glorious years to become one of the prestigious institutions catering to more than 3000 students. I believe that to be the best at whatever one endeavors to do is perhaps the most rewarding of all exercises in life. The institution has once again been ranked among the top ten schools (consecutively for the last 6 years) at the All India level for its academic reputation. To begin with I would like to place on record the dedication and commitment of the Bagrodian faculty at Dwarka who have dedicated their lives to the cause of education which apparently has been the prime and inevitable determinant of excellence. Many of our Alumni have been offered good placements in top companies of the world. For our children their world is a confusing quagmire of emotional crevasses and high walls of knowledge. Teachers on the contrary tap the potential of each student by holding their hands to access, then climb and reach the heights of knowledge and learning. Teachers are the classroom heroes who identify and clear the path of the students, while parents give roots to the child; teachers shape their minds and give them wings to soar high. We as teachers should guide each and every student imbibe better values, right skills and a qualitative life to become a good human being. I seek blessings from the God Almighty to shower his choicest blessings on the entire Bagrodian fraternity at Dwarka to persistently walk on the path of educational excellence only to leave a trail and a roadmap for making this institution become a world class school perhaps the best in the world!",
          pic: "/management/principal.jpeg",
          writer: "Ms. Jaishree Nawani",
        },
      ],
      current: false,
    },
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
      <div className="flex flex-row gap-2">
        {nav.map((data, index) => (
          <button
          key={index*5}
            onClick={() => handleClick(index)}
            className={`relative py-2 px-4 rounded  ${
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

      {nav.map(
        (data, index) =>
          data.name === selectedItem && (
            <div key={index*25}>
              <VisionCard

                heading={data.heading}
                content={data.content}
                pic={data.pic}
                writer={data.writer}
              />
              {data.moreData &&
                data.moreData.map((item,index) => (
                  <VisionCard
                  key={index*231}
                    heading={item.heading}
                    content={item.content}
                    pic={item.pic}
                    writer={item.writer}
                  />
                ))}
            </div>
          )
      )}
    </Container>
  );
};

export default OurVision;
