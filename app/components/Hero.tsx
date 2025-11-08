import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-6 md:px-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Right Image */}
        <div className="flex justify-center md:justify-end md:order-2">
          <Image
            src="/paul_srinivasa (2).jpeg" // <-- Replace with your actual image path
            alt="Speak Better English Learning Illustration"
            width={500}
            height={500}
            className="object-contain"
            priority
          />
        </div>

        {/* Right Content */}
        <div className="text-center md:text-left md:order-1">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Speak Better English with Confidence
          </h1>
          <p className="mt-4 text-lg text-gray-700 max-w-md">
            Improve your English fluency, pronunciation, and vocabulary with
            personalized lessons designed to help you communicate clearly and
            confidently in everyday life.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start">
            <a
              href="#get-started"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Get Started
            </a>

            <a
              href="#learn-more"
              className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
