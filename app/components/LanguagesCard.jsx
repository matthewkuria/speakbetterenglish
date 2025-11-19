import React from 'react'

const LanguagesCard = () => {
  return (
     <div class="languages  px-6  font-bold w-full">
        <h3>Multilingual Expertise</h3>
        <p className='font-semibold'>Professional translation and tutoring services available across seven languages</p>
        <div class="language-list">
            <span class="language-badge">Hindi</span>
            <span class="language-badge">English</span>
            <span class="language-badge">Telugu</span>
            <span class="language-badge">Bhojpuri</span>
            <span class="language-badge">Banjara</span>
            <span class="language-badge">Tamil</span>
            <span class="language-badge">Urdu</span>
        </div>
    </div>
  )
}

export default LanguagesCard