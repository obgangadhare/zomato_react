import React from 'react';
import './App.css';
import zImage from './images/z.avif';
import hImage from './images/h.avif';
import searchIcon from './images/search-interface-symbol.png';
import mobileImage from './images/mobile.avif';
import orderon from './images/1.avif';
import dining from './images/2.avif';
import nightlife from './images/3.avif';
import top from './images/4.avif';
import newopen from './images/5.avif';
import best from './images/6.jpeg';
import rom from './images/7.avif';
import g  from './images/g.webp';
import iph from './images/iph.png';

function App() {
  return (
    <div>
      <div className="head">
        <img src={zImage} alt="Zomato Banner" height="450px" width="100%" />
        <ul>
          <li><a href="#">Investor relations</a></li>
          <li><a href="#">Add restaurant</a></li>
          <li><a href="#">Log in</a></li>
          <li><a href="#">Sign up</a></li>
        </ul>
        <img className="zomato-txt" src={hImage} alt="Zomato Logo" height="60px" width="300px" />
        <h3>Discover the best food & drinks in Pune</h3>
        <div className="searchbox">
          <select id="count">
            <option value="" disabled selected>Select your city</option>
            <option value="Kolhapur">Kolhapur</option>
            <option value="Pune">Pune</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Nagpur">Nagpur</option>
          </select>
          <div className="search-icon">
            <img src={searchIcon} alt="Search Icon" height="20px" width="20px" />
          </div>
          <input type="text" placeholder="Search for restaurant, cuisine, or a dish" />
        </div>
      </div>
      
      <div className="body">
        <div className="card1">
          <div className="heading">
            <img className='card1img' src={orderon}/>
            <p className="h1">Order online</p>
            <p className="h2">Stay home and order to your doorstep</p>
          </div>
        </div>
        <div className="card2">
          <div className="heading">
          <img className='card1img' src={dining}/>
            <p className="h1">Dining</p>
            <p className="h2">View the city's favourite dining venues</p>
          </div>
        </div>
        <div className="card3">
          <div className="heading">
          <img className='card1img' src={nightlife}/>
            <p className="h1">Nightlife and Clubs</p>
            <p className="h2">Explore the city's top nightlife outlets</p>
          </div>
        </div>
        
        <p className="Collections">Collections</p>
        <p className="Collections-subhead">
          Explore curated lists of top restaurants, cafes, pubs, and bars in Pune, based on trends
        </p>
        
      
        <div className="card4">
          <div className="heading1">
          <img className='card2img' src={top}/>
            <p className="h1">Top trending spots</p>
            <p className="h2">27 places </p>
          </div>
        </div>
        <div className="card5">
          <div className="heading1">
          <img className='card2img' src={newopen}/>
            <p className="h1">Newly Opened Places</p>
            <p className="h2">9 places </p>
          </div>
        </div>
        <div className="card6">
          <div className="heading1">
          <img className='card2img' src={best}/>
            <p className="h1">Best of live screenings</p>
            <p className="h2">29 places </p>
          </div>
        </div>
        <div className="card7">
          <div className="heading1">
          <img className='card2img' src={rom}/>
            <p className="h1">Romantic Dining Places</p>
            <p className="h2">19 places </p>
          </div>
        </div>
        
        <div className="localities">
          <p className="localities-head">Popular localities in and around <b>Pune</b></p>
        </div>
        
        <div className="locality-main-box">
          <div className="lacality-box">
            <p className="locality-box-head">Baner</p>
            <p className="locality-box-subhead">652 Places</p>
          </div>
          <div className="lacality-box">
            <p className="locality-box-head">Viman Nagar</p>
            <p className="locality-box-subhead">122 Places</p>
          </div>
          <div className="lacality-box">
            <p className="locality-box-head">Hinjawadi</p>
            <p className="locality-box-subhead">92 Places</p>
          </div>
          <div className="lacality-box">
            <p className="locality-box-head">Koregaon Park</p>
            <p className="locality-box-subhead">987 Places</p>
          </div>
          <div className="lacality-box">
            <p className="locality-box-head">Wakad</p>
            <p className="locality-box-subhead">422 Places</p>
          </div>
          <div className="lacality-box">
            <p className="locality-box-head">Kothrud</p>
            <p className="locality-box-subhead">1032 Places</p>
          </div>
          <div className="lacality-box">
            <p className="locality-box-head">Kalyani Nagar</p>
            <p className="locality-box-subhead">523 Places</p>
          </div>
          <div className="lacality-box">
            <p className="locality-box-head">Kharadi</p>
            <p className="locality-box-subhead">940 Places</p>
          </div>
          <div className="lacality-box">
            <p className="locality-box-head">See more</p>
          </div>
        </div>
        
        <div className="getapp">
          <img className="getappimg" src={mobileImage} alt="Get the App" />
          <p className='footerhead'>Get the Zomato app</p>
          <p className='footersubhead'>We will send you a link, open it on your phone to download <br/>the app</p>
          <div className='btnselect'>
  <label className='embtn'>
    <input className='btnround' type="radio" name="contact-method" value="email" selected /> Email
  </label>
  <label>
    <input className='btnround' type="radio" name="contact-method" value="phone" /> Phone
  </label>
</div>
<input className='inputep' type='text' placeholder='Email / Phone'></input>
<button className='btninputep'>share App Link</button>
<p className='footerpara'>Download app from</p>
<img className='card3img' src={g}/>
<img className='card4img' src={iph}/>
{/* ---------------------------------------------------------------------------- */}
        </div>
        <div className='exploreoptions'>
          <p className='explhead'>Explore options near me</p>
          {/* -------------------- */}
          <div className='drop1zomato'>
       <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Popular Cuisines Near Me
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <a href="#">Beverages near me</a> · 
              <a href="#">Biryani near me</a> · 
              <a href="#">Burger near me</a> · 
              <a href="#">Chinese near me</a> · 
              <a href="#">Coffee near me</a> · 
              <a href="#">Desserts near me</a> · 
              <a href="#">Ice Cream near me</a> · 
              <a href="#">Kebab near me</a> · 
              <a href="#">Maharashtrian near me</a> · 
              <a href="#">Momos near me</a> · 
              <a href="#">Mughlai near me</a> · 
              <a href="#">North Indian near me</a> · 
              <a href="#">Pizza near me</a> · 
              <a href="#">Rolls near me</a> · 
              <a href="#">Sandwich near me</a> · 
              <a href="#">Seafood near me</a> · 
              <a href="#">Shake near me</a> · 
              <a href="#">Sichuan near me</a> · 
              <a href="#">South Indian near me</a> · 
              <a href="#">Street near me</a>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header header2">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Popular Restaurant Types Near me
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <a href="#">Bakeries near me</a> · 
  <a href="#">Bars near me</a> · 
  <a href="#">Beverage Shops near me</a> · 
  <a href="#">Bhojanalya near me</a> · 
  <a href="#">Cafés near me</a> · 
  <a href="#">Casual Dining near me</a> · 
  <a href="#">Clubs near me</a> · 
  <a href="#">Cocktail Bars near me</a> · 
  <a href="#">Confectioneries near me</a> · 
  <a href="#">Dessert Parlors near me</a> · 
  <a href="#">Dhabas near me</a> · 
  <a href="#">Fine Dining near me</a> · 
  <a href="#">Food Courts near me</a> · 
  <a href="#">Food Trucks near me</a> · 
  <a href="#">Irani Cafes near me</a> · 
  <a href="#">Kiosks near me</a> · 
  <a href="#">Lounges near me</a> · 
  <a href="#">Microbreweries near me</a> · 
  <a href="#">Paan Shop near me</a> · 
  <a href="#">Pubs near me</a> · 
  <a href="#">Quick Bites near me</a> · 
  <a href="#">Sweet Shops near me</a>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header header2">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Top Restaurant Chains
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <a href="#">Burger Singh</a> · 
  <a href="#">Domino's</a> · 
  <a href="#">Dunkin' Donuts</a> · 
  <a href="#">Faasos</a> · 
  <a href="#">KFC</a> · 
  <a href="#">McDonald's</a> · 
  <a href="#">Paradise Biryani</a> · 
  <a href="#">Subway</a> · 
  <a href="#">WOW! Momo</a>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header header2">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
      Cities We Deliver To
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <a href="#">Delhi NCR</a> · 
  <a href="#">Kolkata</a> · 
  <a href="#">Mumbai</a> · 
  <a href="#">Bengaluru</a> · 
  <a href="#">Pune</a> · 
  <a href="#">Hyderabad</a> · 
  <a href="#">Chennai</a> · 
  <a href="#">Lucknow</a> · 
  <a href="#">Kochi</a> · 
  <a href="#">Jaipur</a> · 
  <a href="#">Ahmedabad</a> · 
  <a href="#">Chandigarh</a> · 
  <a href="#">Goa</a> · 
  <a href="#">Indore</a> · 
  <a href="#">Gangtok</a> · 
  <a href="#">Nashik</a> · 
  <a href="#">Ooty</a> · 
  <a href="#">Shimla</a> · 
  <a href="#">Ludhiana</a> · 
  <a href="#">Guwahati</a> · 
  <a href="#">Amritsar</a> · 
  <a href="#">Kanpur</a> · 
  <a href="#">Allahabad</a> · 
  <a href="#">Aurangabad</a> · 
  <a href="#">Bhopal</a> · 
  <a href="#">Ranchi</a> · 
  <a href="#">Visakhapatnam</a> · 
  <a href="#">Bhubaneswar</a> · 
  <a href="#">Coimbatore</a> · 
  <a href="#">Mangalore</a> · 
  <a href="#">Vadodara</a> · 
  <a href="#">Nagpur</a> · 
  <a href="#">Agra</a> · 
  <a href="#">Dehradun</a> · 
  <a href="#">Mysore</a> · 
  <a href="#">Puducherry</a> · 
  <a href="#">Surat</a> · 
  <a href="#">Varanasi</a> · 
  <a href="#">Patna</a> · 
  <a href="#">Udaipur</a> · 
  <a href="#">Srinagar</a> · 
  <a href="#">Khajuraho</a> · 
  <a href="#">Neemrana</a> · 
  <a href="#">Cuttack</a> · 
  <a href="#">Trivandrum</a> · 
  <a href="#">Haridwar</a> · 
  <a href="#">Leh</a> · 
  <a href="#">Pushkar</a> · 
  <a href="#">Rajkot</a> · 
  <a href="#">Madurai</a> · 
  <a href="#">Kozhikode</a> · 
  <a href="#">Alappuzha</a> · 
  <a href="#">Thrissur</a> · 
  <a href="#">Manipal</a> · 
  <a href="#">Vijayawada</a> · 
  <a href="#">Jodhpur</a> · 
  <a href="#">Kota</a> · 
  <a href="#">Ajmer</a> · 
  <a href="#">Mussoorie</a> · 
  <a href="#">Rishikesh</a> · 
  <a href="#">Jalandhar</a> · 
  <a href="#">Jammu</a> · 
  <a href="#">Manali</a>
      </div>
    </div>
  </div>
</div>
  </div>
      </div>
      {/* -------------footer--------------------- */}
      <div className='footer'>
        <p className='zofoot'>Zomato</p>
        <select className='countryzomato'>
  
  <option value="eng">India</option>
  <option value="hindi">UAE</option>
</select>
        <select className='languageszomato'>
  
  <option value="eng">English</option>
  <option value="hindi">Hindi</option>
</select>
<div className='footcolumns'>
<div className='footcol1'>
<ul>
  <p>
    About Zomato
  </p>
  <li><a href="#">Who we are</a></li>
  <li><a href="#">Blog</a></li>
  <li><a href="#">Work With Us</a></li>
  <li><a href="#">Investor Relations</a></li>
  <li><a href="#">Report Fraud</a></li>
  <li><a href="#">Press Kit</a></li>
  <li><a href="#">Contact Us</a></li>
</ul>

</div>
<div className='footcol2'>
<ul>
  <p>
    Zomaverse
  </p>
  <li><a href="#">Zomato</a></li>
  <li><a href="#">Blinkit</a></li>
  <li><a href="#">District</a></li>
  <li><a href="#">Feeding India</a></li>
  <li><a href="#">Hyperpure</a></li>
  <li><a href="#">Zomato Live</a></li>
  <li><a href="#">Zomaland</a></li>
  <li><a href="#">Weather Union</a></li>
</ul>

</div>
<div className='footcol3'>
<ul>
  <p>
  For Restaurants
  </p>
  <li><a href="#">Partner with us</a></li>
  <li><a href="#">Apps for you</a></li>
  
</ul>

</div>
<div className='footcol4'>
<ul>
  <p>
   Learn More
  </p>
  <li><a href="#">Privacy</a></li>
  <li><a href="#">Security</a></li>
  <li><a href="#">Term</a></li>
  
</ul>

</div>

</div>
<  hr/>
<p className='footlinez'>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2024 © Zomato™ Ltd. All rights reserved.</p>
      </div>
      
      
    </div>
    </div>
  );
}

export default App;
