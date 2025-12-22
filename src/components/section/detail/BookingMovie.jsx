import { useState } from "react";
import CineOne21 from "../../../assets/CineOne21 2.svg";
import Ebv from "../../../assets/ebv.id 2.svg";
import Hivlix from "../../../assets/hiflix 2.svg";

export default function BookingMovie() {
  const [selectedCinema, setSelectedCinema] = useState(1);

  const handleCinemaClick = (cinemaId) => {
    setSelectedCinema(cinemaId);
  };

  return (
    <section className="lg:px-main mt-6 px-4 sm:mt-10 sm:px-6">
      <p className="text-2xl font-semibold sm:text-3xl">Book Tickets</p>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
        <div className="w-full">
          <label className="mb-2 block text-lg font-semibold sm:mb-3 sm:text-xl">
            Choose Date
          </label>
          <div className="relative">
            <input
              type="date"
              className="h-12 w-full appearance-none rounded-lg bg-[#EFF0F6] pr-4 pl-10 text-base outline-none sm:h-13 sm:pr-5 sm:pl-12 sm:text-lg"
            />
            <svg
              className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-600 sm:left-4 sm:h-5 sm:w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <svg
              className="pointer-events-none absolute top-1/2 right-3 h-3 w-3 -translate-y-1/2 text-gray-600 sm:right-4 sm:h-4 sm:w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

        <div className="w-full">
          <label className="mb-2 block text-lg font-semibold sm:mb-3 sm:text-xl">
            Choose Time
          </label>
          <div className="relative">
            <select className="h-12 w-full appearance-none rounded-lg bg-[#EFF0F6] pr-4 pl-10 text-base outline-none sm:h-13 sm:pr-5 sm:pl-12 sm:text-lg">
              <option value="">Select Time</option>
              <option value="">08:30 AM</option>
              <option value="">12:30 PM</option>
              <option value="">03:30 PM</option>
              <option value="">07:30 PM</option>
            </select>
            <svg
              className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-600 sm:left-4 sm:h-5 sm:w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <svg
              className="pointer-events-none absolute top-1/2 right-3 h-3 w-3 -translate-y-1/2 text-gray-600 sm:right-4 sm:h-4 sm:w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

        <div className="w-full">
          <label className="mb-2 block text-lg font-semibold sm:mb-3 sm:text-xl">
            Choose Location
          </label>
          <div className="relative">
            <select className="h-12 w-full appearance-none rounded-lg bg-[#EFF0F6] pr-4 pl-10 text-base outline-none sm:h-13 sm:pr-5 sm:pl-12 sm:text-lg">
              <option value="">Select Location</option>
              <option value="">Jakarta</option>
              <option value="">Bandung</option>
              <option value="">Surabaya</option>
              <option value="">Bogor</option>
            </select>
            <svg
              className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-600 sm:left-4 sm:h-5 sm:w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <svg
              className="pointer-events-none absolute top-1/2 right-3 h-3 w-3 -translate-y-1/2 text-gray-600 sm:right-4 sm:h-4 sm:w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

        <div className="flex w-full items-end sm:col-span-2 lg:col-span-1">
          <button className="bg-primary hover:bg-primary/80 h-12 w-full rounded-lg px-8 text-base font-medium text-white transition-colors sm:h-13 sm:px-12 sm:text-lg">
            Filter
          </button>
        </div>
      </div>

      <div className="mt-6 mb-6 flex flex-col gap-2 sm:mt-10 sm:mb-8 sm:flex-row sm:items-center sm:gap-4">
        <p className="text-lg font-semibold sm:text-xl">Choose Cinema</p>
        <span className="text-base text-[#8692A6] sm:text-xl">39 Results</span>
      </div>

      <div className="mb-8 grid grid-cols-2 gap-3 sm:mb-10 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
        <div
          onClick={() => handleCinemaClick(0)}
          className={`flex cursor-pointer items-center justify-center rounded-lg border-2 py-10 transition-colors sm:py-12 lg:py-16 ${
            selectedCinema === 0
              ? "border-primary bg-primary"
              : "hover:border-primary border-[#DEDEDE]"
          }`}
        >
          <img
            src={Ebv}
            alt="EBV Cinema"
            className={`h-full w-20 object-contain sm:w-24 lg:w-32 ${selectedCinema === 0 ? "brightness-0 invert" : ""}`}
          />
        </div>

        <div
          onClick={() => handleCinemaClick(1)}
          className={`flex cursor-pointer items-center justify-center rounded-lg border-2 py-10 transition-colors sm:py-12 lg:py-16 ${
            selectedCinema === 1
              ? "border-primary bg-primary"
              : "hover:border-primary border-[#DEDEDE]"
          }`}
        >
          <img
            src={Hivlix}
            alt="Hiflix Cinema"
            className={`h-full w-20 object-contain sm:w-24 lg:w-32 ${selectedCinema === 1 ? "brightness-0 invert" : ""}`}
          />
        </div>

        <div
          onClick={() => handleCinemaClick(2)}
          className={`flex cursor-pointer items-center justify-center rounded-lg border-2 py-10 transition-colors sm:py-12 lg:py-16 ${
            selectedCinema === 2
              ? "border-primary bg-primary"
              : "hover:border-primary border-[#DEDEDE]"
          }`}
        >
          <img
            src={CineOne21}
            alt="CineOne Cinema"
            className={`h-full w-20 object-contain sm:w-24 lg:w-32 ${selectedCinema === 2 ? "brightness-0 invert" : ""}`}
          />
        </div>

        <div
          onClick={() => handleCinemaClick(3)}
          className={`flex cursor-pointer items-center justify-center rounded-lg border-2 py-10 transition-colors sm:py-12 lg:py-16 ${
            selectedCinema === 3
              ? "border-primary bg-primary"
              : "hover:border-primary border-[#DEDEDE]"
          }`}
        >
          <img
            src={Ebv}
            alt="EBV Cinema"
            className={`h-full w-20 object-contain sm:w-24 lg:w-32 ${selectedCinema === 3 ? "brightness-0 invert" : ""}`}
          />
        </div>
      </div>

      <div className="mb-6 flex justify-center gap-2 sm:mb-8 sm:gap-3">
        <button className="bg-primary hover:bg-primary/80 flex h-9 w-9 items-center justify-center rounded-lg text-sm text-white transition-colors sm:h-10 sm:w-10 sm:text-base">
          1
        </button>
        <button className="hover:bg-primary flex h-9 w-9 items-center justify-center rounded-lg bg-[#F9FAFB] text-sm text-[#A0A3BD] transition-colors hover:text-white sm:h-10 sm:w-10 sm:text-base">
          2
        </button>
        <button className="hover:bg-primary flex h-9 w-9 items-center justify-center rounded-lg bg-[#F9FAFB] text-sm text-[#A0A3BD] transition-colors hover:text-white sm:h-10 sm:w-10 sm:text-base">
          3
        </button>
        <button className="hover:bg-primary flex h-9 w-9 items-center justify-center rounded-lg bg-[#F9FAFB] text-sm text-[#A0A3BD] transition-colors hover:text-white sm:h-10 sm:w-10 sm:text-base">
          4
        </button>
      </div>

      <div className="pb-8 text-center sm:pb-10">
        <button className="bg-primary hover:bg-primary/80 w-full rounded-lg px-12 py-3 text-base font-medium text-white transition-colors sm:w-auto sm:px-16 sm:py-4 sm:text-lg">
          Book Now
        </button>
      </div>
    </section>
  );
}
