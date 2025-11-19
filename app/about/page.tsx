import Image from "next/image";

export default function About() {
  return (
    <section className="bg-white text-gray-800 px-6 md:px-12 py-16">
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Image Section */}
        <div className="flex justify-center md:justify-start">
          <Image
            src="/paul_srinivasa (1).jpeg"
            alt="English learning community"
            width={500}
            height={500}
            className="rounded-xl object-contain"
          />
        </div>

        {/* Text Section */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-6">
            About <span className="text-blue-600">Paul Srinivasa</span>
          </h1>

          <p className="text-lg leading-relaxed mb-6">
            With a unique multilingual background spanning seven languages, Paul Srinivasa brings
            unparalleled expertise in bridging communication gaps for business leaders and service
            industry professionals across India.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg mb-6 border-l-4 border-blue-600">
            <h2 className="font-semibold">A Bridge Between Cultures and Languages</h2>
            <p className="">
              Paul's fluency in Hindi, English, Telugu, Bhojpuri, Banjara, Tamil, and Urdu provides him with a distinctive advantage in understanding the nuanced challenges faced by non-native English speakers in professional settings.
            </p>
           </div>
          <p className="text-lg leading-relaxed mb-8">
            Throughout his extensive career, Paul has worked with diverse groups across varying language backgrounds, developing proven methodologies for teaching English and facilitating clear communication in business contexts. His deep understanding of multiple linguistic frameworks enables him to explain English concepts in ways that resonate with speakers of different native languages.
          </p>            
        </div>
      </div>
      {/* Additional Information */}
      <div className="my-8 ">
         <p className="text-lg leading-relaxed">
            Whether you are a business leader preparing for international meetings, a service industry professional seeking to enhance customer interactions, or an organization looking for reliable translation services, Paul brings both linguistic expertise and cultural sensitivity to every engagement.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          Paul offers both online and in-person sessions, providing flexible options to meet your scheduling needs. Contact him today to discuss how he can help you achieve your English language goals.
        </p>
      </div>

      {/* Why Choose? */}
      <div className="mt-24 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Why <span className="text-blue-600">Choose</span>  Paul Srinivasa?
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed text-left border-l-4 border-blue-600 pl-4">
          His unique combination of multilingual fluency, extensive experience communicating across language barriers, and dedication to professional excellence makes him the ideal partner for individuals and businesses committed to improving their English communication skills.
        </p>
      </div>      
    </section>
  );
}
