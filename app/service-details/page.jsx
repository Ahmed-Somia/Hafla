"use client";

import { useState } from "react";
import ServiceCard from "@components/service/ServiceCard";
import SearchFilter from "@components/service/SearchFilter";
import Link from "next/link";

const venues = [
  {
    title: "Salle de fête Versaille",
    image: "/assets/image14.png",
    rating: 4.5,
    region: "Sousse",
    spaceType: "Closed space",
  },
  {
    title: "Salle de fête Farah",
    image: "/assets/image15.png",
    rating: 3,
    region: "Tunisia",
    spaceType: "Open space",
  },
  {
    title: "Salle de fête Kaka",
    image: "/assets/image16.png",
    rating: 2.5,
    region: "Hammamet",
    spaceType: "Closed space",
  },
  {
    title: "Salle de fête Paradox",
    image: "/assets/image14.png",
    rating: 5,
    region: "Sousse",
    spaceType: "Villa",
  },
  {
    title: "Salle de fête Paradox",
    image: "/assets/image15.png",
    rating: 5,
    region: "Tunisia",
    spaceType: "Closed space",
  },
  {
    title: "Salle de fête Paradox",
    image: "/assets/image16.png",
    rating: 5,
    region: "Hammamet",
    spaceType: "Open space",
  },
];

const Home = () => {
  const [filteredVenues, setFilteredVenues] = useState(venues);

  const handleSearch = (searchTerm) => {
    const lowercasedTerm = searchTerm.toLowerCase();
    setFilteredVenues(
      venues.filter((venue) =>
        venue.title.toLowerCase().includes(lowercasedTerm)
      )
    );
  };

  const handleFilterChange = (filterName, filterValue) => {
    setFilteredVenues(
      venues.filter((venue) => {
        const lowercasedValue = filterValue.toLowerCase();
        switch (filterName) {
          case "region":
            return (
              lowercasedValue === "" ||
              venue.region.toLowerCase() === lowercasedValue
            );
          case "spaceType":
            return (
              lowercasedValue === "" ||
              venue.spaceType.toLowerCase() === lowercasedValue
            );
          case "rating":
            return (
              lowercasedValue === "" ||
              venue.rating >= parseFloat(lowercasedValue)
            );
          default:
            return true;
        }
      })
    );
  };

  return (
    <div className="mt-24">
      <div className="inner-width paddings">
        <SearchFilter
          onSearch={handleSearch}
          onFilterChange={handleFilterChange}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mt-10 ">
          {filteredVenues.map((venue, index) => (
            <Link href="/service">
              <ServiceCard key={index} {...venue} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
