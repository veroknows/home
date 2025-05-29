import Link from "next/link";

export default function StudyAbroad() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">Study Abroad Consulting</h1>
      <p className="text-lg text-gray-700 mb-6">VeroKnows offers personalized, data-driven guidance for students seeking to study abroad. Our expert consultants help you find the best-fit school, prepare your application, and ace your interviews.</p>
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-blue-800 mb-2">Countries & Universities Covered</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>United States (Ivy League, top public and private universities)</li>
          <li>United Kingdom (Russell Group, Oxbridge, top universities)</li>
          <li>Canada, Australia, Europe, and more</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-blue-800 mb-2">Application & Interview Preparation</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Personal statement and essay editing</li>
          <li>Mock interviews and feedback</li>
          <li>Comprehensive application review</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-blue-800 mb-2">Student Success Stories</h2>
        <blockquote className="bg-blue-50 border-l-4 border-blue-700 p-4 rounded mb-4">
          <p className="mb-1">“With VeroKnows&apos; help, I got into my dream school in the US. Their advice was spot-on!”</p>
          <footer className="text-sm text-blue-700 font-semibold">— Kevin, High School Student of 2025</footer>
        </blockquote>
        <blockquote className="bg-blue-50 border-l-4 border-blue-700 p-4 rounded">
          <p className="mb-1">“The interview prep made me feel confident and ready. Thank you, VeroKnows!”</p>
          <footer className="text-sm text-blue-700 font-semibold">— Priya, High School Student of 2025</footer>
        </blockquote>
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-blue-800 mb-2">Our Data & AI-Driven Methodology</h2>
        <p className="text-gray-700">We use advanced data analytics and artificial intelligence to match students with schools that fit their unique profiles, ensuring a scientific, efficient, and human-centered process.</p>
      </div>
      <div className="text-center mt-10">
        <Link href="mailto:info@veroknows.com">
          <button className="bg-blue-700 text-white px-8 py-3 rounded-full font-semibold shadow hover:bg-blue-800 transition">Contact a Consultant</button>
        </Link>
      </div>
    </div>
  );
} 