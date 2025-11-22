import React from 'react'

const page = () => {
  return (
      <main className="">
          {/* banner section */}
          <section className="bg-white text-white px-6 md:px-12 py-16 md:h-96 flex items-center justify-center mb-12"
              style={{ backgroundImage: 'url(/indian_tourist.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
          >                  
            <h1 className="text-2xl md:text-5xl font-bold leading-tight  mb-6">
                Welcome to My Professional <span className="text-blue-600"> Tourist Guide & Translation Services</span>
            </h1>
            </section>
          <div className="p-4 md:p-8 max-w-6xl mx-auto space-y-8">
              {/* Content Section */}
          <p className="border-l-4 border-blue-600 pl-4 text-lg leading-relaxed">
              I am delighted to introduce myself as a professional tourist guide offering translation and history‑based guiding services for visitors coming from abroad to explore the beauty and heritage of India. With my background, experience, and passion for sharing knowledge, I aim to provide travellers with a memorable, meaningful, and safe journey across India.
          </p>
          <div className="">
              <h2 className="text-2xl font-semibold">About Me</h2>
              <p className="">
                As a former police officer with strong communication and translation skills, I bring discipline, responsibility, and cultural understanding to my work. I can translate, explain, and interpret the history and significance of major tourist destinations across India in a clear and friendly manner.
                  My goal is to help tourists understand the true cultural, historical, and spiritual value of the places they visit.
                </p>                  
          </div>
          <div className="">
              <h2 className="text-2xl font-semibold">What I Offer</h2>
              <ul className="list-disc list-inside">
                <li>Professional Tourist Guiding for individuals, families, and groups</li>
                <li>Translation Services for foreign travellers</li>                    
                <li>Historical Explanation & Storytelling at all major Indian tourist spots</li>
                <li>Trip Assistance including travel support, navigation, and safety</li>
                <li>Custom Travel Plans based on visitor interests</li>
                <li>Friendly communication with clear, simple explanations</li>     
              </ul>
          </div>
          {/* Cards for places */}
          <div className="">
              <h2 className="text-2xl font-semibold">Major Tourist Spots I Can Guide</h2>
              <p className="">I can guide visitors to many famous and important locations in India, including:</p>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 my-4">
                  <div className="p-2 text-center bg-[#0000ff80] text-white rounded-lg">
                      <h3 className="font-semibold">Taj Mahal – Agra</h3>
                      <p className="">One of the Seven Wonders of the World, known for its breathtaking beauty and Mughal architecture.</p>
                  </div>
                  <div className="p-2 text-center bg-[#0000ff80] text-white rounded-lg">
                      <h3 className="font-semibold"> Delhi Historical Monuments</h3>
                      <ul className="">
                          <li>Red Fort</li>
                          <li>Qutub Minar</li>
                          <li>India Gate</li>
                          <li className="">Humayun’s Tomb</li>
                      </ul>
                  </div>
                  <div className="p-2 text-center bg-[#0000ff80] text-white rounded-lg">
                      <h3>Varanasi – The Spiritual Capital of India</h3>
                      <p className="">Known for Ganga Aarti, temples, ghats, and ancient traditions.</p>
                  </div>
                  <div className="p-2 text-center bg-[#0000ff80] text-white rounded-lg">
                      <h3 className="font-semibold">Jaipur – The Pink City</h3>
                      <ul className="">
                          <li>Amber Fort</li>
                          <li>City Palace</li>
                          <li>Hawa Mahal</li>
                      </ul>
                  </div>
                  <div className="p-2 text-center bg-[#0000ff80] text-white rounded-lg">
                      <h3 className="">Goa Beaches & Portuguese Heritage Sites</h3>
                      <p className="">Relaxation, culture, churches, and beautiful coastal views.</p>
                  </div>
                  <div className="p-2 text-center bg-[#0000ff80] text-white rounded-lg">
                      <h3 className="">Kerala – God’s Own Country</h3>
                      <ul className="">
                          <li className="">Backwaters</li>
                          <li className="">Alleppey Houseboats</li>
                          <li className="">Munnar Tea Estates</li>
                      </ul>
                  </div>
                  <div className="p-2 text-center bg-[#0000ff80] text-white rounded-lg">
                      <h3 className="">Hyderabad</h3>
                      <ul className="">
                          <li className="">Charminar</li>
                          <li className="">Golconda Fort</li>
                          <li className="">Ramoji Film City</li>
                        </ul>
                  </div>
                  <div className="p-2 text-center bg-[#0000ff80] text-white rounded-lg">
                      <h3 className="">Mumbai</h3>
                      <ul className="">
                          <li className="">Gateway of India</li>
                          <li className="">Elephanta Caves</li>
                          <li className="">Marine Drive</li>
                      </ul>
                  </div>
                  <div className="p-2 text-center bg-[#0000ff80] text-white rounded-lg">
                      <h3 className="">South Indian Temples</h3>
                      <ul className="">
                          <li>Tirupati</li>
                          <li>Meenakshi Amman Temple</li>
                          <li>Srirangam</li>
                      </ul>
                  </div>
                  <div className="p-2 text-center bg-[#0000ff80] text-white rounded-lg">
                      <h3 className="">Himalayan Region</h3>
                      <ul className="">
                          <li className="">Manali</li>
                          <li className="">Shimla</li>
                          <li className="">Dharamshala</li>                  
                      </ul>
                  </div>
                </div>
          </div>
          <div className="">
              <h3 className="text-2xl font-semibold">Why Choose Me as Your Tourist Guide?</h3>
              <ul className="list-disc list-inside">
                  <li>Respectful and trustworthy service</li>
                  <li>Clear explanation of history and meaning</li>
                  <li>Knowledge of culture, traditions, and Indian heritage</li>
                  <li>Safe and comfortable guidance for all travellers</li>
                  <li>Ability to translate and communicate effectively</li>                  
                </ul>
          </div>
          <div className="bg-blue-100 text-black p-4  mt-6">
              <h4 className="font-semibold text-xl">Contact for Tourist Guide Bookings</h4>
              <p className="">
                  If you are planning to visit India and would like a friendly, knowledgeable guide who can explain and translate the history of India, please feel free to contact me.
              </p>
              <p className="">
                  I would be honoured to serve you and make your journey unforgettable.
              </p>
              <p className="">
                  Thank you and God bless you!
              </p>

          </div>
          </div>
    </main>
  )
}

export default page