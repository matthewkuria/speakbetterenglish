import React from 'react'

const CTA = () => {
    return (
        //   Call to Action Section
        <section className="bg-blue-600 text-white py-12 px-6  mt-4 text-center w-full" id='get-started'>    
            <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your English Skills?</h2>
            <p className="mb-6">Join thousands of learners who have transformed their communication skills with our expert tutoring and translation services.</p>
            {/* Email and phone */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <a href="mailto:naikeffort@gmail.com" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
                    Contact Us via Email
                </a>
                <a href="tel:+919440205772" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
                    Call Us: +91 94402 05772
                </a>
            </div>

           
        </section>
    
  )
}

export default CTA