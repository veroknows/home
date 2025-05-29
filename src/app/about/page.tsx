import Link from "next/link";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">About VeroKnows</h1>
      <p className="text-lg text-gray-700 mb-6">VeroKnows is dedicated to transforming education consulting through data and artificial intelligence. Our mission is to help every student find their best-fit school and research opportunities.</p>
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-blue-800 mb-2">Our Unique Approach</h2>
        <p className="text-gray-700">We combine deep educational expertise with advanced data analytics and AI to deliver a scientific, efficient, and human-centered school selection process.</p>
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-blue-800 mb-2">Meet the Team</h2>
        <p className="text-gray-700">Our team consists of experienced consultants, researchers, and technologists. (Team introduction coming soon.)</p>
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-blue-800 mb-2">Our History</h2>
        <p className="text-gray-700">Founded in 2025, VeroKnows has helped students and researchers achieve their dreams worldwide. (Company timeline coming soon.)</p>
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-blue-800 mb-2">Contact Information</h2>
        <p className="text-gray-700">Email: <a href="mailto:info@veroknows.com" className="underline">info@veroknows.com</a></p>
      </div>
      <div className="text-center mt-10">
        <Link href="mailto:info@veroknows.com">
          <button className="bg-blue-700 text-white px-8 py-3 rounded-full font-semibold shadow hover:bg-blue-800 transition">Get in Touch</button>
        </Link>
      </div>
    </div>
  );
} 