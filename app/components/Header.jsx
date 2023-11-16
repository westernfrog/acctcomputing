"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import {
  Bars3Icon,
  DocumentArrowDownIcon,
  DocumentTextIcon,
  HomeIcon,
  LinkIcon,
  PhoneIcon,
  UserGroupIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import Link from "next/link";

const navigation = [
  { name: "Home", href: "/", icon: HomeIcon },
  { name: "Call for Papers", href: "/call-for-papers", icon: DocumentTextIcon },
  { name: "Committee", href: "/", icon: UserGroupIcon },
  {
    name: "Paper Submission",
    href: "/paper-submission",
    icon: DocumentArrowDownIcon,
  },
  { name: "Contact", href: "/", icon: PhoneIcon },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 backdrop-blur bg-[#09090b]/30">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Acctcomputing</span>
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-zinc-400"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-4">
          {navigation.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="flex items-center gap-2 leading-6 text-zinc-300 hover:text-zinc-100 bg-zinc-900 px-4 py-2 rounded-xl transition duration-300 ease-in-out text-sm"
            >
              <item.icon className="w-4 h-4" />
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex flex-1 justify-end">
          <Link
            href="https://acctcomputing.netlify.app/"
            className="flex items-center gap-2 leading-6 text-zinc-300 hover:text-zinc-100 bg-zinc-900 px-4 py-2 rounded-xl transition duration-300 ease-in-out text-sm"
          >
            <LinkIcon className="w-5 h-5" />
            Registration
          </Link>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto p-4 px-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 bg-[#09090b]">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Acctcomputing</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-zinc-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-zinc-500/10">
              <div>
                <div className="space-y-2 py-8">
                  {navigation
                    .slice(0, navigation.length - 1)
                    .map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="flex items-center gap-2 leading-6 text-zinc-400 hover:text-zinc-300 py-2 rounded-full transition duration-300 ease-in-out"
                      >
                        <item.icon className="w-5 h-5" />
                        {item.name}
                      </Link>
                    ))}
                </div>
                <div className="py-8 border-t border-zinc-900">
                  <Link
                    href="https://acctcomputing.netlify.app/"
                    className="flex items-center gap-2 leading-6 text-zinc-400 hover:text-zinc-300 py-2 rounded-full transition duration-300 ease-in-out"
                  >
                    <LinkIcon className="w-5 h-5" />
                    Registration
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
