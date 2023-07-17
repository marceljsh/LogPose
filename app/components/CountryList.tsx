"use client";

import { ChangeEvent, useEffect, useState } from "react";
import ICountry from "@intf/ICountry";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
import Pagination from "@cmp/Pagination";

const CountryList = () => {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<ICountry[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const c = await response.json();

      setCountries(c);
      setFilteredCountries(c);
    };

    fetchCountries();
  }, []);

  useEffect(() => {
    setFilteredCountries(() => {
      return countries.filter((c) => {
        return c.name.common.toLowerCase().includes(search.toLocaleLowerCase());
      });
    });
    setCurrentPage(1);
  }, [search]);

  const filterCountries = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const [currentPage, setCurrentPage] = useState(2);
  const [postsPerPage, setPostsPerPage] = useState(15);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPost = filteredCountries.slice(firstPostIndex, lastPostIndex);

  return (
    <section className="flex flex-col gap-6">
      <input
        type="search"
        value={search}
        className="w-60 px-4 py-2 rounded-full outline-none bg-slate-400 placeholder:text-slate-900 hover:bg-amber-400 transition-all hover:scale-110 focus:bg-amber-400 focus:scale-110"
        placeholder="Find out..."
        onChange={(e) => filterCountries(e)}
      />
      <h3 className="text-slate-200 font-bold text-3xl">Country List</h3>

      <div className="grid grid-cols-5 gap-5 justify-between">
        {currentPost.length == 0 ? (
          <h5 className="text-slate-200">No country found</h5>
        ) : (
          currentPost.map((c, k) => {
            return (
              <Fade triggerOnce={true} key={k}>
                <div className="bg-gradient-to-t from-slate-500 to-slate-400 h-72 rounded-lg flex flex-col px-4 py-8 items-center justify-between shadow-lg hover:shadow-2xl hover:scale-105 transition-all">
                  <Image
                    src={c.flags.svg}
                    width={72}
                    height={72}
                    alt={`${c.name.common} flag`}
                    className="shadow-lg rounded-full h-14 w-14"
                  />

                  <div className="flex flex-col items-center">
                    <h3 className="font-bold text-center text-slate-900">
                      {c.name.common}
                    </h3>
                    <div className="text-slate-900">{c.region}</div>
                  </div>

                  <Link
                    href={`/country/${c.ccn3}`}
                    className="text-center bg-slate-800 text-slate-200 py-1 px-6 rounded-2xl text-sm hover:bg-amber-500 hover:scale-110 transition-all"
                  >
                    View Details
                  </Link>
                </div>
              </Fade>
            );
          })
        )}
      </div>

      <Pagination
        totalPosts={filteredCountries.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </section>
  );
};

export default CountryList;
