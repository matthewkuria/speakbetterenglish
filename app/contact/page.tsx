import React from 'react'

const page = () => {
  return (
    <main className="min-h-screen bg-[#FAF9F6] text-[#1E3A2B] py-16 px-6 md:px-20">
      <section className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
        <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto">
          We'd love to hear from you! Whether you have questions, feedback, or want to learn more
          about Speak Better English, feel free to reach out.
        </p>

        <form className="space-y-6 max-w-3xl mx-auto text-left">
          <div>
            <label className="block mb-2 font-medium">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#4B8673] focus:outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#4B8673] focus:outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Message</label>
            <textarea
              rows={5}
              placeholder="Write your message..."
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#4B8673] focus:outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full md:w-auto bg-[#1E3A2B] text-[#FAF9F6] px-8 py-3 rounded-lg font-semibold hover:bg-[#4B8673] transition-all"
          >
            Send Message
          </button>
        </form>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">Other Ways to Reach Us</h2>
          <p>Email: support@speakbetterenglish.com</p>
          <p>Phone: +1 (555) 123-4567</p>
        </div>
      </section>
    </main>
  );
}


export default page