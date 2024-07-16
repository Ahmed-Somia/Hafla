"use client";

import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";

const SearchFilter = ({ onSearch, onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [toggleFilter, setToggleFilter] = useState(false);
  const [filters, setFilters] = useState({
    region: "",
    spaceType: "",
    rating: "",
  });

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
    onFilterChange(name, value);
  };

  return (
    <div className="w-full h-[76px] border py-[10px] px-[20px] border-[#5C749F] rounded-[15px] flex flex-row">
      <div className="w-[20%] flex items-center justify-between h-full">
        <div className="flex gap-2 relative hover:cursor-pointer">
          <Image
            src="/assets/filter.svg"
            alt="filter"
            height={22}
            width={24}
            className="object-contain"
            onClick={() => setToggleFilter((prev) => !prev)}
          />
          <span
            className="font-urbanist font-normal text-[24px] text-customBlue leading-[26px] lg:block hidden"
            onClick={() => setToggleFilter((prev) => !prev)}
          >
            Filters
          </span>
          {toggleFilter && (
            <div className="flex flex-col w-[186px] border border-[#13274B] absolute top-14 -left-3 rounded-[28px] py-[16px] px-[14px] bg-white">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="font-urbanist font-normal text-customBlue">
                    Categories
                  </AccordionTrigger>
                  <AccordionContent className="font-urbanist font-normal text-customBlue">
                    Region
                  </AccordionContent>
                  <AccordionContent className="flex items-center space-x-2">
                    <Checkbox id="sousse" />
                    <label
                      htmlFor="sousse"
                      className="text-sm font-normal text-[#5C749F] font-urbanist leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Sousse
                    </label>
                  </AccordionContent>
                  <AccordionContent className="flex items-center space-x-2">
                    <Checkbox id="tunisia" />
                    <label
                      htmlFor="tunisia"
                      className="text-sm font-normal text-[#5C749F] font-urbanist leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Tunisia
                    </label>
                  </AccordionContent>
                  <AccordionContent className="flex items-center space-x-2">
                    <Checkbox id="hamamet" />
                    <label
                      htmlFor="hamamet"
                      className="text-sm font-normal text-[#5C749F] font-urbanist leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Hamamet
                    </label>
                  </AccordionContent>
                  <AccordionContent>Space Type</AccordionContent>
                  <AccordionContent className="flex items-center space-x-2">
                    <Checkbox id="open-space" />
                    <label
                      htmlFor="open-space"
                      className="text-sm font-normal text-[#5C749F] font-urbanist leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Open Space
                    </label>
                  </AccordionContent>
                  <AccordionContent className="flex items-center space-x-2">
                    <Checkbox id="closed-space" />
                    <label
                      htmlFor="closed-space"
                      className="text-sm font-normal text-[#5C749F] font-urbanist leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Closed Space
                    </label>
                  </AccordionContent>
                  <AccordionContent className="flex items-center space-x-2">
                    <Checkbox id="villa" />
                    <label
                      htmlFor="villa"
                      className="text-sm font-normal text-[#5C749F] font-urbanist leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Villa
                    </label>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="font-urbanist font-normal text-customBlue">
                    Rating
                  </AccordionTrigger>
                  <AccordionContent className="flex items-center space-x-2">
                    <Checkbox id="5-stars" />
                    <label
                      htmlFor="5-stars"
                      className="text-sm font-normal text-[#5C749F] font-urbanist leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      5 Stars
                    </label>
                  </AccordionContent>
                  <AccordionContent className="flex items-center space-x-2">
                    <Checkbox id="4-stars&up" />
                    <label
                      htmlFor="4-stars&up"
                      className="text-sm font-normal text-[#5C749F] font-urbanist leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      4 Stars & up
                    </label>
                  </AccordionContent>
                  <AccordionContent className="flex items-center space-x-2">
                    <Checkbox id="3-stars&up" />
                    <label
                      htmlFor="3-stars&up"
                      className="text-sm font-normal text-[#5C749F] font-urbanist leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      3 Stars & up
                    </label>
                  </AccordionContent>
                  <AccordionContent className="flex items-center space-x-2">
                    <Checkbox id="2-stars&up" />
                    <label
                      htmlFor="2-stars&up"
                      className="text-sm font-normal text-[#5C749F] font-urbanist leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      2 Stars & up
                    </label>
                  </AccordionContent>
                  <AccordionContent className="flex items-center space-x-2">
                    <Checkbox id="1-star&up" />
                    <label
                      htmlFor="1-star&up"
                      className="text-sm font-normal text-[#5C749F] font-urbanist leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      1 Star & up
                    </label>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          )}
        </div>
        <Image
          src="/assets/search-line.svg"
          alt="search-line"
          height={5}
          width={5}
          className="h-full w-full"
        />
      </div>

      <div className="w-[80%] flex items-center justify-between h-full">
        <Input
          type="text"
          id="search"
          placeholder="Search...."
          className="border-none bg-white placeholder:text-[#B2B2B2] w-[70%] focus:outline-none"
        />
        <div className="flex items-center lg:gap-8 gap-4">
          <Image
            src="/assets/search-line.svg"
            alt="search-line"
            height={5}
            width={5}
            className="h-full w-full"
          />
          <Image
            src="/assets/search.svg"
            alt="search"
            height={28}
            width={28}
            className="object-contain"
          />
          <span className="font-urbanist font-normal text-[24px] text-customBlue leading-6 lg:block hidden">
            Search
          </span>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
