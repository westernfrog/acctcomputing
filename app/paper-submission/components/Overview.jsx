import Link from "next/link";

export default function Overview(params) {
  return (
    <>
      <main className="my-32 max-w-5xl mx-auto">
        <div className="lg:ring-1 ring-zinc-900 lg:p-16 p-6 rounded-3xl">
          <div className="lg:lg:text-center mb-5">
            <h1 className="lg:text-5xl text-2xl font-semibold bg-gradient-to-r from-20% bg-clip-text text-transparent from-emerald-400 to-yellow-300 tracking-tight">
              Paper Submission
            </h1>
          </div>
          <div className="max-w-3xl mx-auto lg:text-justify space-y-4 text-zinc-400">
            <h1 className="font-semibold text-lg lg:text-center pt-6">
              Guidelines For Authors
            </h1>
            <h1>
              Authors should submit their papers online using the
              <Link href="/" className="text-blue-600 px-2 hover:underline">
                Microsoft CMT Paper Submission Link.
              </Link>
              Unregistered authors should first create an account on
              <Link href="/" className="text-blue-600 px-2 hover:underline">
                Microsoft CMT
              </Link>
              to log on. The submission Web site for ICACCTech 2023 is through
              online submission process using
              <Link href="/" className="text-blue-600 px-2 hover:underline">
                Microsoft CMT Paper Submission Link.
              </Link>
            </h1>
            <p>The manuscripts should be submitted in .doc or .pdf format.</p>
            <p>
              All papers that conform to submission guidelines will be peer
              reviewed and evaluated based on originality, technical and/or
              research content/depth, correctness, relevance to conference,
              contributions, and readability. Acceptance of papers will be
              communicated to authors by email. The authors of the accepted
              papers will be allowed to make corrections in accordance with the
              suggestions of the reviewers and submit final camera-ready papers
              within the stipulated deadline.
            </p>
            <p>Before uploading your camera ready paper, please:</p>
            <ul className="list-disc space-y-2">
              <li>
                Upload the full length manuscript in online process using
                <Link href="/" className="text-blue-600 px-2 hover:underline">
                  Microsoft CMT Paper Submission Link.
                </Link>
              </li>
              <li>
                Use Title Case for the paper title, i.e. capitalizing all main
                words.
              </li>
              <li>
                Do not use academic titles such as Dr., Professor, HoD, Director
                etc…in your paper.
              </li>
            </ul>
            <h1 className="font-semibold">
              To submit paper click on following link:
            </h1>
            <Link href="/" className="text-blue-600 hover:underline">
              Microsoft CMT Paper Submission
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
