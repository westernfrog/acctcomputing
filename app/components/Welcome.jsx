import Link from "next/link";

export default function Welcome(params) {
  console.log(params)
  return (
    <>
      <div className="max-w-5xl mx-auto mb-40">
        <div className="lg:ring-1 ring-zinc-900 lg:p-16 p-6 rounded-3xl">
          <div className="lg:lg:text-center mb-5">
            <h1 className="lg:text-5xl text-2xl font-semibold bg-gradient-to-r from-20% bg-clip-text text-transparent from-emerald-400 to-yellow-300 tracking-tight">
              Welcome ICACCTech 2023
            </h1>
          </div>
          <div className="max-w-3xl mx-auto lg:text-justify space-y-4 text-zinc-400">
            <p>
              Swami Vivekanand Institute of Engineering and Technology is
              organizing International Conference on Advanced Computing &
              Communication Technologies (ICACCTech 2023) in association with BM
              Institute of Engineering and Technology, Sonipat, Haryana and
              NOVEL Research Found at SVIET, Banur, Punjab, India on 23-24
              December 2023.
            </p>
            <p>
              International Conference on Advanced Computing & Communication
              Technologies (ICACCTech 2023) promises to address current state of
              the technology and the outcome of the ongoing research in the area
              of advance computing and communication. Computer and communication
              has immensely enhanced the level of information acquisition,
              retrieval and processing. ICACCTech 2023 would offer a forum to
              the academicians, researchers and students to interact with
              experts in the area and to learn the recent knowledge in advance
              computing. We invite original & unpublished work from individuals
              active in the broad theme of the conference.
            </p>
            <h1 className="font-semibold">
              Conference proceedings will be published with ISBN number in
              electronic form by CPS and shall be submitted to Xplore and CSDL
              by CPS.
            </h1>
            <h1 className="lg:text-center font-semibold text-lg py-4 text-blue-600 hover:underline">
              <a
                target="_blank"
                href={params.dynamicData.approveLink}
              >
                Conference Approval Link
              </a>
            </h1>
            <h1 className="lg:text-center font-semibold">
              All accepted papers will be submitted by CPS to the indexing
              companies for possible indexing (Scopus, Ei Compendex and other
              major Indexes).
            </h1>
            <p className="lg:text-center">
              Start of paper submissions: {params.dynamicData.paperSubmissionDate}
            </p>
            <h1 className="lg:text-center font-semibold text-lg">
              Extended Paper Submission Deadline: {params.dynamicData.extendedPaperSubmissionDate}
            </h1>
            <div className="lg:text-center space-y-3">
              <p>Authors Notified of Final Acceptance: 27 October 2023</p>
              <p>
                Camera-Ready Paper Submissions and Copyrights Due: 10 November
                2023
              </p>
              <p>Last date for Registration: 15 November 2023</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
