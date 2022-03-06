import React from 'react';
import './aboutUs.css';
const AboutUs = () => {

    return (<>
        <div class="section">
		<div class="container">
			<div class="content-section">
				<div class="title">
					<h1>About Us</h1>
				</div>
				<div class="content">
					<h3>Delivering the latest technology at your finger tips.</h3>
					<p>We aim to provide EV owners the convenience of locating charging stations on aerial map, book a slot, 
                    pay your charges online! 						
                    We are trying to make EV charging quick and convenient for you. Get access to our growing 
                     network of EV Charging points across the country on our website. Relax and enjoy your EV ride
                    no matter where you are going. Get a seamless EV Charging and slot booking experience with us.
                    </p>
					<div class="button">
						<a href="/contact">Contact Us</a>
					</div>
				</div>
				<div class="social">
					<a href=""><i class="fab fa-facebook-f"></i></a>
					<a href=""><i class="fab fa-twitter"></i></a>
					<a href=""><i class="fab fa-instagram"></i></a>
				</div>
			</div>
			<div class="image-section">
				<img src="https://www.caverion.com/contentassets/950f92d501bc4a16991badd5047274e1/integrated/ionity-copyright-ionity.jpg?preset=w-full-window" />
			</div>
		</div>
	</div>
    </>);
}

export default AboutUs;