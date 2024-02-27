import React from 'react'
import trophy from '../images/1.png'
import image from '../images/2.png'
import tools from '../images/3.png'
const Body = () => {
    return (
        <> 
           <div className="body">
            <div className="leftcontent">
                <img src={trophy} alt="trophy" />
            </div>
            <div className="rightcontent">
                <h4 className="heading">C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h4>
                <ul>
                    <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                    <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </li>
                </ul>
                <img src={image} alt="image" />
                <p >Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>

            </div>
            </div>

            <div className="middlecontent">
                <p className='center'>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</p>
              <img src={tools} alt="tools"  />
              <p className='center'>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
              <hr color='red'/>
              <h5 className='center'>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
 </h5>

           <p className='center'>CHEMICALS & PROCESS POWER WATER & WASTE WATER OILS & GAS PHARMA SUGARS & DISTILLERIES PAPER & PULP MARINE & DEFENCE METAL & MINING FOOD & BEVERAGE PETROCHEMICAL & REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING AGRICULTURE & RESIDENTIAL</p>
            </div>

            
        </>
    )
}

export default Body;