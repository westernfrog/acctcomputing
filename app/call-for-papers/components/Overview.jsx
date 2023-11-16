import Link from "next/link";

export default function Overview(params) {
  return (
    <>
      <main className="lg:my-32 my-16 max-w-5xl mx-auto">
        <div className="lg:ring-1 ring-zinc-900 lg:p-16 p-6 rounded-3xl">
          <div className="lg:lg:text-center mb-5">
            <h1 className="lg:text-5xl text-2xl font-semibold bg-gradient-to-r from-20% bg-clip-text text-transparent from-emerald-400 to-yellow-300 tracking-tight">
              Call for Papers
            </h1>
          </div>
          <div className="max-w-3xl mx-auto lg:text-justify space-y-4 text-zinc-400">
            <p>
              Submissions are invited for International Conference on Advanced
              Computing and Communication Technologies India (23-24 December
              2023). This is an exceptional platform for researchers, academics,
              students, innovators, scientists and industry practitioners to
              discuss current research which is shaping a new world society.
              This conference will be a good platform to share research,
              innovations, and best-practices where constructive feedback and
              engagement with domain experts is expected. Many topics of the
              advanced computing technologies as a response to everyday
              challenges faced in both developing and developed world contexts
              will be discussed. We encourage submissions of cross-disciplinary
              nature cutting across many disciplines/subject-areas. We encourage
              any submissions that present novel ideas, works-in-progress or any
              concepts that you think can benefit from inputs from experts.
              Students and/or emerging researchers are encouraged to
              participate. The following are the different tracks in this
              conference:
            </p>
            <h1 className="font-semibold">
              Conference proceedings will be published with ISBN number in
              electronic form by CPS and shall be submitted to Xplore and CSDL
              by CPS.
            </h1>
            <h1 className="font-semibold">
              All accepted papers will be submitted by CPS to the indexing
              companies for possible indexing (Scopus, WoS, Ei Compendex and
              other major Indexes).
            </h1>
            <p>
              International Conference ICACCTech, 2023 invites original
              contributions on all topics related to Computational Science,
              including, but not limited to:
            </p>
            <div>
              {[
                "Artificial Intelligence and Machine Learning",
                "Digital security, Information Privacy and Web Technology",
                "Internet of Everything and Sensor networks",
                "Health care analytics, CoVID-19 Technologies and Data Analysis",
                "Software Engineering and Cloud Computing",
                "Digital Image and Video Processing",
                "Circuits and Systems and Quantum Computing",
                "Internet of Everything and Sensor Networks",
                "Communication Technologies",
                "E-Commerce and E-Governance",
              ].map((item, index) => (
                <h1 key={index} className="font-semibold">
                  {item}
                </h1>
              ))}
            </div>
            <h1 className="text-lg font-semibold pt-10 underline text-center">
              Special Session(s)
            </h1>
            <ul className="list-disc space-y-2">
              <li>
                Special Session on Computational Intelligence and Communication
                Technologies -CCICT
              </li>
              <li>
                Special Session on Data Science and Soft Computing: Innovations
                in Computational Science and Engineering
              </li>
            </ul>
            <p>
              This is a peer-reviewed conference. Authors are cordially invited
              to submit papers through on line paper submission process before
              extended deadline of 7th October 2023.
            </p>
            <h1 className="font-semibold pt-10 underline text-center">
              Instructions For Authors
            </h1>
            <ul className="list-disc space-y-2">
              <li>
                Original papers based on theoretical or experimental works
                related to the above mentioned sub themes are solicited for
                presentation in the conference. The paper should begin with
                title, short abstract and a list of keywords. Simultaneous
                submissions (papers already submitted to other
                conferences/journals) are not allowed.
              </li>
              <li>
                All papers must follow (given in point 5) formatting
                instructions
              </li>
              <li>Please do not submit plagiarized papers.</li>
              <li>
                Authors are requested to submit paper through given link:
                <Link href="/" className="text-blue-600 px-2 hover:underline">
                  Microsoft CMT Paper Submission Link
                </Link>
              </li>
              <li>IEEE Paper Format Link</li>
            </ul>
            <h1 className="font-semibold pt-10 underline text-center">
              Copy Right Form
            </h1>
            <p>
              In order to publish paper in the conference proceeding, the
              authors are required to submit a signed e-copyright form for each
              accepted paper during final camera ready paper submission.
            </p>
            <p className="pt-10">
              We look forward to a mutually rewarding and long lasting
              association with you and your esteemed organization.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
