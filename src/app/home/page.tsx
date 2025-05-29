"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      {/* Hero Banner */}
      <section className="relative flex flex-col items-center justify-center min-h-[60vh] py-16 text-center bg-gradient-to-b from-blue-50 to-white">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="flex justify-center mb-6">
            <div className="bg-white rounded-full border-4 border-blue-700 shadow-lg p-4 flex items-center justify-center">
              <Image src="/veroknows-logo.png" alt="VeroKnows Logo" width={160} height={160} className="w-40 h-40 object-contain" priority />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">Discover What VeroKnows Can Do for You</h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">Data-driven, AI-powered education consulting for your unique journey.</p>
          <Link href="/study-abroad">
            <button className="bg-blue-700 text-white px-8 py-3 rounded-full font-semibold shadow hover:bg-blue-800 transition">Explore Our Services</button>
          </Link>
        </motion.div>
      </section>

      {/* Company Vision */}
      <section className="flex justify-center items-center py-16 px-2 sm:px-0">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="w-full max-w-3xl mx-auto bg-white rounded-xl shadow-lg border-l-8 border-blue-700 p-8 flex flex-col items-start">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-800 text-left">Our Vision</h2>
          <p className="text-lg text-gray-700 mb-6">VeroKnows is a high-end education consulting company specializing in <b className='highlight-yellow'>data-driven and AI-powered matching</b>.</p>
          <ul className="space-y-4 w-full">
            <li className="flex items-start gap-3">
              <CheckCircle className="text-green-600 w-6 h-6 mt-1 flex-shrink-0" />
              <span className="text-gray-800 text-base leading-relaxed">Every student is <b className='highlight-yellow'>unique</b></span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-green-600 w-6 h-6 mt-1 flex-shrink-0" />
              <span className="text-gray-800 text-base leading-relaxed">The best-fit school is <b className='highlight-yellow'>not the &quot;top-ranked&quot;</b>, but the <b className='highlight-yellow'>&quot;one that fits the student best&quot;</b></span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-green-600 w-6 h-6 mt-1 flex-shrink-0" />
              <span className="text-gray-800 text-base leading-relaxed"><b className='highlight-yellow'>Data and artificial intelligence</b> enable a more <b className='highlight-yellow'>scientific</b>, <b className='highlight-yellow'>efficient</b>, and <b className='highlight-yellow'>human-centered</b> school selection process</span>
            </li>
          </ul>
        </motion.div>
      </section>

      {/* Services Overview */}
      <section className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-blue-800 text-center">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center border border-blue-100">
              <h3 className="text-xl font-semibold mb-2 text-blue-700">Study Abroad Consulting</h3>
              <p className="text-gray-600 mb-4">Personalized guidance for school selection, application, and interview preparation. Powered by data and AI for the best-fit match.</p>
              <Link href="/study-abroad" className="text-blue-700 font-medium hover:underline">Learn More</Link>
            </div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center border border-blue-100">
              <h3 className="text-xl font-semibold mb-2 text-blue-700">Research Collaboration & Support</h3>
              <p className="text-gray-600 mb-4">Connect with top researchers, get project guidance, and access editing and support services for academic and technical fields.</p>
              <Link href="/research-services" className="text-blue-700 font-medium hover:underline">Learn More</Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }}>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-blue-800 text-center">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <blockquote className="bg-blue-50 border-l-4 border-blue-700 p-6 rounded-xl shadow text-gray-800">
              <p className="mb-2">&quot;VeroKnows helped me find the perfect high school for my goals. Their data-driven approach made all the difference!&quot;</p>
              <footer className="text-sm text-blue-700 font-semibold">— Emily, High School Student of 2025</footer>
            </blockquote>
            <blockquote className="bg-blue-50 border-l-4 border-blue-700 p-6 rounded-xl shadow text-gray-800">
              <p className="mb-2">&quot;The research support was top-notch. I highly recommend VeroKnows to anyone seeking guidance in their high school journey.&quot;</p>
              <footer className="text-sm text-blue-700 font-semibold">— Dr. Chen, Parent of a High School Student of 2025</footer>
            </blockquote>
          </div>
        </motion.div>
      </section>

      {/* Contact Teaser */}
      <section className="container mx-auto px-4 text-center py-12">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.4 }}>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-800">Ready to Start Your Journey?</h2>
          <p className="text-lg text-gray-700 mb-6">Contact us today to discover how VeroKnows can help you achieve your academic dreams.</p>
          <Link href="mailto:info@veroknows.com">
            <button className="bg-blue-700 text-white px-8 py-3 rounded-full font-semibold shadow hover:bg-blue-800 transition">Contact Us</button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
