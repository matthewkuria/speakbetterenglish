import Image from "next/image";

export default function About() {
  return (
    <section className="bg-white text-gray-800 px-6 md:px-12 py-20">
      <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Image Section */}
        <div className="flex justify-center md:justify-start">
          <Image
            src="/paul_srinivasa (1).jpeg" // Replace with your actual image
            alt="English learning community"
            width={500}
            height={500}
            className="rounded-xl object-cover"
          />
        </div>

        {/* Text Section */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-6">
            About <span className="text-blue-600">Speak Better English</span>
          </h1>

          <p className="text-lg leading-relaxed mb-6">
            Speak Better English was created to help learners communicate with
            clarity, confidence, and authenticity. Whether you're preparing for
            exams, interviews, travel, or simply improving your daily
            conversation skills, we are here to guide you every step of the way.
          </p>

          <p className="text-lg leading-relaxed mb-8">
            Our personalized lessons focus not only on grammar and vocabulary,
            but also on real-life usage, pronunciation, fluency, and listening
            skills. With patient support and practical practice methods, we help
            you feel more comfortable expressing yourself in English.
          </p>

          <a
            href="#get-started"
            className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Start Learning
          </a>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="mt-24 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Our Mission
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          To empower learners from all backgrounds to speak English with
          confidence and ease, unlocking new opportunities for connection,
          education, and personal growth.
        </p>
      </div>

      {/* Values Section */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto text-center">
        <div>
          <h3 className="text-xl font-semibold text-blue-600 mb-3">Patience</h3>
          <p className="text-gray-700 leading-relaxed">
            We understand that learning is a journey, and we walk with you at
            your pace.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-blue-600 mb-3">Clarity</h3>
          <p className="text-gray-700 leading-relaxed">
            We break down language in simple, meaningful ways you can apply
            immediately.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-blue-600 mb-3">Confidence</h3>
          <p className="text-gray-700 leading-relaxed">
            We help you speak comfortably in real situations, not just in theory.
          </p>
        </div>
      </div>
    </section>
  );
}
