"use client";
import eventsService from "@/appwrite/appwriteEvents";
import Link from "next/link";
import React, { memo, useEffect, useState } from "react";

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    eventsService.getEvents().then((event) => {
      if (event) {
        setEvents(event.documents);
      }
    });
  }, []);

  return (
    <div className="relative text-center shadow-2xl rounded-xl overflow-hidden border-white border-2 m-4 lg:max-w-[30%] bg-teal-400/40">
      <div className="text-xl md:text-2xl font-bold py-2 z-40 relative shadow-2xl bg-teal-100">
        News & Upcoming Events
      </div>
      <div
        className="text-center animate-marquee"
        onMouseOver={(e) =>
          (e.currentTarget.style.animationPlayState = "paused")
        }
        onMouseOut={(e) =>
          (e.currentTarget.style.animationPlayState = "running")
        }
      >
        {events.map((event) => (
          <Link key={event.$id} href={"/events"}>
            <div
              className=" shadow-2xl rounded-xl flex justify-start bg-indigo-600 mb-4 "
              key={event.id}
            >
              <h4 className="text-sm bg-slate-200 text-center px-4 py-2 m-1 rounded-xl leading-3 md:font-semibold md:pt-[2%] ">
                {event.date}
              </h4>
              <p className="text-left text-xs pt-2 px-1 md:pt-[2%] text-white ">
                {event.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default memo(UpcomingEvents);
