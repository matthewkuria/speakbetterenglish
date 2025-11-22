import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex items-center justify-center min-h-screen md:py-5 md:px-10 ">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full justify-center items-center gap-8 md:gap-16 p-2">
      {/* Column 1 */}
        <div className="text-center md:text-left w-full mt-28 md:mt-0 md:pl-8 p-2">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Speak <span className="text-blue-700">Better </span>English 
          </h1>
          <h2 className="text-xl md:text-2xl my-2 text-gray-900 leading-tight">Professional Translation & Tutoring Services</h2>
          <p className="mt-4  text-gray-700 ">
            Empowering business leaders and service industry professionals across India to communicate confidently in English.
          </p>
          <p className="">
            Our other services include <span className="font-semibold text-blue-600">
              <Link href="/tourist-guide-services" className="hover:underline">tourist guide services</Link>
            </span> for visitors exploring India's rich heritage and culture.
          </p>

          <div className="mt-6 flex flex-row gap-10 justify-center md:justify-start md:w-full mx-auto">
            <Link
              href="#get-started"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Get Started
            </Link>

            <Link
              href="about"
              className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition"
            >
              Learn More
            </Link>
          </div>
      </div>
        {/* End of column 1 */}

        {/* Services cards */}
        <div className="flex flex-col items-center md:items-end mt-8 md:mt-0">
          <div className="card bg-blue-100  w-96 service-card mb-6 hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="card-body">
              <h2 className="card-title">English Translation Services</h2>
              <p className="font-semibold">Expert translation services bridging communication across multiple languages</p>
                <ul>
                  <li>Business documents</li>
                  <li>Technical materials</li>
                  <li>Professional correspondence</li>
                  <li>Industry-specific content</li>
                </ul>
            </div>
          </div>
          {/* Card 2 */}
          <div className="service-card bg-primary text-primary-content w-96 service-card">
            <div className="card-body">
              <h3 className="card-title">English Tutoring Services</h3>
              <p className="font-semibold">Personalized tutoring for professionals seeking English fluency</p>
              <ul>
                  <li>Business English</li>
                  <li>Conversational skills</li>
                  <li>Online and in-person sessions</li>
                  <li>Flexible scheduling</li>
              </ul>
              </div>
          </div>
       </div>
      </div>
    </section>
  );
}
