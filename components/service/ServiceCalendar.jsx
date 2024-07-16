"use client";

import Calendar from "react-calendar";
import { Button } from "@components/ui/button";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";

const ServiceCalendar = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div className="lg:w-1/2 w-full flex flex-col bg-customBlue rounded-[30px] p-4">
      <Calendar
        onChange={onChange}
        value={value}
        className="rounded-md border min-w-[100%] bg-white h-full"
      />
      <div className="w-full flex items-center justify-between mt-6 p-4 gap-4">
        <Button className="text-white border border-white w-full bg-customBlue  hover:bg-white hover:text-customBlue">
          More Info
        </Button>
        <Button className="bg-white text-customBlue w-full hover:bg-customBlue border border-customBlue hover:border-white hover:text-white">
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default ServiceCalendar;
