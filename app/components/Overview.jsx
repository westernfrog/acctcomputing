"use client";
import {
  DocumentTextIcon,
  DocumentArrowDownIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

const links = [
  { name: "Call for Papers", href: "/call-for-papers", icon: DocumentTextIcon },
  {
    name: "Paper Submission",
    href: "/paper-submission",
    icon: DocumentArrowDownIcon,
  },
];

export default function Overview(params) {
  console.log(params);
  return (
    <>
      <main className="relative flex flex-col lg:items-center justify-center h-screen">
        <div className="">
          <Image
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={2000}
            height={2000}
            alt=""
            className="absolute top-0 z-0 inset-0 h-full w-screen object-cover object-center"
          />
          <div className="absolute inset-0 z-10 h-screen w-screen bg-black/40 backdrop-blur-sm backdrop-opacity-50"></div>
        </div>
        <div className="absolute z-30 top-24">
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
      </main>
    </>
  );
}
