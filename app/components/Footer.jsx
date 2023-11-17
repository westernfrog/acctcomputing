import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const social = [
  { name: "Facebook", href: "/" },
  { name: "Twitter", href: "/" },
  { name: "Linkedin", href: "/" },
  { name: "Pininterest", href: "/" },
  { name: "Mail", href: "/" },
];

const information = [
  { name: "Banur, Punjab, India", icon: MapPinIcon },
  { name: "+91 9216910212", icon: PhoneIcon, href: "tel:+919870398104" },
  {
    name: "conf2023@sviet.ac.in",
    icon: EnvelopeIcon,
    href: "mailto:conf2023@sviet.ac.in",
  },
];

export default function Footer(params) {
  return (
    <>
      <footer className="text-zinc-400 border-t border-neutral-900 pt-12">
        <div className="max-w-7xl mx-auto flex lg:flex-row flex-col items-start justify-between p-6 space-y-6 lg:space-y-0">
          <div className="max-w-sm">
            <h1 className="text-zinc-300 font-medium">
              Swami Vivekanand Institute of Engineering and Technology (SVIET),
              Banur, Punjab, India
            </h1>
            <div className="hidden lg:block">
              <p className="mt-10 mb-2 text-zinc-500">
                Copyright © 2023 ACCT All Rights Reserved
              </p>
              <Link href="/" className="text-zinc-500 hover:underline">
                Privacy Policy
              </Link>
            </div>
          </div>
          <div className="flex flex-col">
            {social.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="hover:underline pb-2"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-col">
            {information.map((item, index) => (
              <a
                href={item.href}
                key={index}
                className=" transform transition duration-500 hover:scale-110 lg:pb-4 pb-2 flex items-center gap-6"
              >
                <item.icon className="w-5 h-5 stroke-blue-600" />
                {item.name}
              </a>
            ))}
          </div>
          <div className="lg:hidden block">
            <p className="mb-2 text-zinc-500">
              Copyright © 2023 ACCT All Rights Reserved
            </p>
            <Link href="/" className="text-zinc-500 hover:underline">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
