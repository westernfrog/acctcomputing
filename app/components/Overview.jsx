import {
  DocumentTextIcon,
  DocumentArrowDownIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const links = [
  { name: "Call for Papers", href: "/", icon: DocumentTextIcon },
  { name: "Paper Submission", href: "/", icon: DocumentArrowDownIcon },
];

export default function Overview(params) {
  return (
    <>
      <main className="flex flex-col lg:items-center justify-center h-screen p-6 my-4">
        <div className="max-w-3xl mx-auto lg:text-center">
          <h1 className="lg:text-5xl text-2xl font-semibold mb-2 bg-gradient-to-r from-20% bg-clip-text text-transparent from-purple-400 to-amber-300">
            International Conference on Advanced Computing & Communication
            Technologies
          </h1>
          <p className="lg:text-lg text-zinc-400">
            SVIET, Banur (Near Chandigarh), Punjab, India
          </p>
          <p className="lg:text-lg text-zinc-400">23 - 24 December, 2023</p>
        </div>
        <div className="flex lg:flex-row flex-col items-center gap-4 lg:mt-12 mt-8">
          {links.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="lg:px-10 px-6 lg:py-6 py-4 bg-zinc-900 rounded-2xl lg:text-xl text-base tracking-tight lg:font-semibold font-medium flex items-center gap-6 w-full h-full"
            >
              <div className="w-16 h-16 bg-[#111] flex items-center justify-center rounded-xl">
                <item.icon className="w-6 h-6" />
              </div>
              {item.name}
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
