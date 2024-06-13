import React from 'react'
import './card.css';

const card = () => {
  return (
    <div className='card'>
      <div className='card-details'>
         <img src='./images/maldives.webp' alt=''/>
         <h3>Maldives</h3>
         <p>The Maldives officially the Republic of Maldives is an archipelagic state
          and country in South Asia, situated in the Indian Ocean.</p>
         <a href='card-page'className='card-btn'>Learn More</a>
      </div>
      <div className='card-details'>
         <img src='./images/brazil.jpg' alt=''/>
         <h3>Brazil</h3>
         <p>Brazil, country of South America that occupies half the continent's landmass. It is the fifth largest and fifth most-populous country in the world.</p>
         <a href='card-page'className='card-btn'>Learn More</a>
      </div>
      <div className='card-details'>
         <img src='./images/italy.jpg' alt=''/>
         <h3>Italy</h3>
         <p>Italy is a boot-shaped peninsula that juts out of southern Europe into the Adriatic Sea, Tyrrhenian Sea, Mediterranean Sea, and other waters.</p>
         <a href='card-page'className='card-btn'>Learn More</a>
      </div>
      <div className='card-details'>
         <img src='./images/swizterland.webp' alt=''/>
         <h3>Swizterland</h3>
         <p>Switzerland, officially the Swiss Confederation, is a landlocked country located at the confluence of Western, Central and Southern Europe.</p>
         <a href='card-page'className='card-btn'>Learn More</a>
      </div>
      <div className='card-details'>
         <img src='./images/srilanka.webp' alt=''/>
         <h3>Sri Lanka</h3>
         <p>Sri Lanka historically known as Ceylon and officially the Democratic Socialist Republic of Sri Lanka, is an island country in South Asia.</p>
         <a href='card-page'className='card-btn'>Learn More</a>
      </div>
      <div className='card-details'>
         <img src='./images/thailand.webp' alt=''/>
         <h3>Thailand</h3>
         <p>Thailand, officially the Kingdom of Thailand and historically known as Siam, is a country in Southeast Asia on the Indochinese Peninsula.</p>
         <a href='card-page'className='card-btn'>Learn More</a>
      </div>
    </div>
  )
}

export default card
