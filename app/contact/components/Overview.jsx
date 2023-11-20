import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const information = [
  {
    name: "Banur, Punjab, India",
    icon: MapPinIcon,
    href: "https://goo.gl/maps/QcWzYETAh4FS3KTD7",
    title: "Location",
    desc: "Find us at our office",
  },
  {
    name: "+91 9216910212",
    icon: PhoneIcon,
    href: "tel:+919870398104",
    title: "Phone",
    desc: "Reach out to us by phone",
  },
  {
    name: "conf2023@sviet.ac.in",
    icon: EnvelopeIcon,
    href: "mailto:conf2023@sviet.ac.in",
    title: "Email",
    desc: "Contact us at",
  },
];

export default function Overview(params) {
  return (
    <>
      <main className="lg:my-40 my-20 max-w-5xl mx-auto">
        <div className="lg:ring-1 ring-zinc-900 lg:p-16 p-6 rounded-3xl">
          <div className="lg:lg:text-center mb-5">
            <h1 className="lg:text-5xl text-3xl font-bold bg-gradient-to-b from-20% bg-clip-text text-transparent from-[#555] to-[#171717] tracking-tight">
              Contact Us
            </h1>
          </div>
          <div className="grid grid-cols-12 items-center justify-between gap-4 my-14">
            {information.map((item, index) => (
              <Link
                key={index}
                target="_blank"
                href={item.href}
                className="col-span-4 p-6 font-semibold text-center"
              >
                <item.icon className="w-10 h-10 mx-auto mb-8 fill-blue-600" />
                <h1 className="text-4xl font-bold">{item.title}</h1>
                <p className="mb-3">{item.desc}</p>
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
