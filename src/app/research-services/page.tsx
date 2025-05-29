import Link from "next/link";

export default function ResearchServices() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">Research Collaboration & Support</h1>
      <p className="text-lg text-gray-700 mb-6">VeroKnows connects students and professionals with top researchers and provides comprehensive support for academic and technical projects.</p>
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-blue-800 mb-2">Types of Collaboration</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Joint research projects</li>
          <li>Mentorship and project guidance</li>
          <li>Publication and conference support</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-blue-800 mb-2">Fields Covered</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>STEM (Science, Technology, Engineering, Mathematics)</li>
          <li>Humanities and Social Sciences</li>
          <li>Business and Economics</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-blue-800 mb-2">Support Services</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Editing and proofreading</li>
          <li>Project management and planning</li>
          <li>Technical and academic writing assistance</li>
        </ul>
      </div>
      <div className="text-center mt-10">
        <Link href="mailto:info@veroknows.com">
          <button className="bg-blue-700 text-white px-8 py-3 rounded-full font-semibold shadow hover:bg-blue-800 transition">Contact Research Team</button>
        </Link>
      </div>
    </div>
  );
} 