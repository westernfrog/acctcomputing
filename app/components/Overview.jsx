"use client";
import {
  DocumentTextIcon,
  DocumentArrowDownIcon,
} from "@heroicons/react/24/outline";
import { urlToUrlWithoutFlightMarker } from "next/dist/client/components/app-router";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
const links = [
  { name: "Call for Papers", href: "/call-for-papers", icon: DocumentTextIcon },
  {
    name: "Paper Submission",
    href: "/paper-submission",
    icon: DocumentArrowDownIcon,
  },
];
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";

// You can replace the image URL with the path to your own image
const backgroundImageUrl =
  "https://cdndailyexcelsior.b-cdn.net/wp-content/uploads/2023/03/P-29.jpg";

const containerStyle = {
  // background: `url(${backgroundImageUrl})`,
  background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImageUrl})`,
  backgroundSize: "cover",

  backgroundPosition: "center",
  height: "80vh", // Set the height as needed
  width: "100%", // Set the width as needed
  display: "flex",
  alignItems: "center",
  backgroundRepeat: "no-repeat", // Prevent image from repeating

  justifyContent: "center",
  color: "#fff", // Set the text color to be visible against the background
};

export default function Overview(params) {
  console.log(params);
  return (
    <>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showArrows={false}
        showIndicators={false}
        showStatus={false}
      >
        <div
          style={{
            // background: `url(${backgroundImageUrl})`,
            background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImageUrl})`,
            backgroundSize: "cover",

            backgroundPosition: "center",
            height: "80vh", // Set the height as needed
            width: "100%", // Set the width as needed
            display: "flex",
            alignItems: "center",
            backgroundRepeat: "no-repeat", // Prevent image from repeating

            justifyContent: "center",
            color: "#fff", // Set the text color to be visible against the background
          }}
        >
          <div className="absolute z-30 lg:top-40 top-24">
            <div className="max-w-4xl lg:text-center">
              <div className="px-6">
                <h1 className="lg:text-5xl text-2xl lg:font-bold font-semibold tracking-tight text-zinc-300 mb-3">
                  {params.dynamicData.Title}
                </h1>
                <p className="lg:text-lg text-zinc-300 font-medium">
                  {params.dynamicData.Location}
                </p>
                <p className="lg:text-lg text-zinc-300 font-medium">
                  {params.dynamicData.Date}
                </p>
              </div>
              <div className="max-w-2xl mx-auto flex lg:flex-row flex-col items-center gap-4 lg:mt-12 mt-8 px-6">
                {links.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="lg:p-5 p-4 rounded-2xl lg:text-2xl tracking-tight lg:font-semibold font-medium flex items-center gap-6 w-full h-full bg-white/10"
                  >
                    <div className="w-16 h-16 bg-[#eee] flex items-center justify-center rounded-xl">
                      <item.icon className="w-6 h-6 text-zinc-800" />
                    </div>
                    <h1 className="text-zinc-300">{item.name}</h1>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </>
  );
}
