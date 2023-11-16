import Link from "next/link";
import "./contact.css";
import ContactPage from "./ContatUs";
export default function Overview(params) {
  return (
    <>
      <main className="lg:my-32 my-16 max-w-5xl mx-auto">
        <div className="lg:ring-1 ring-zinc-900 lg:p-16 p-6 rounded-3xl">
          <div className="lg:lg:text-center mb-5">
            <h1 className="lg:text-5xl text-2xl font-semibold bg-gradient-to-r from-20% bg-clip-text text-transparent from-emerald-400 to-yellow-300 tracking-tight">
              Contact Us
            </h1>
          </div>
          <ContactPage />
        </div>
      </main>
    </>
  );
}
