import logo from './logo.svg';
import './App.css';

function Contact_page() {
  return (
<div>

<header class="main_header some_red_brown">
    <div class="logo_name"><a href="/">{'{'}Finsweet</a></div>
        <div class="subheading some_centering">Contact page..</div>
    <div class="menu">
        <a href="Contact_page">Contact</a>
        <a href="Blog">Blog</a>
        <a href="About">About us</a>
    </div>
</header>

<div className="contact-container">
    <img src="media_res/Background_contactPage.png" class="contactPage_image"/>


    <div className="contact-background">
        <div className="heading contact_text">Send inquiry</div>
        <div className="contact_text">Contact with us about Your project and we will listen to You. Or send additional info to work with us...Lorem ipsum dolor sit amet..</div>
        <form className="input_form_contact">
            
            <input type="text" placeholder="Your Name" class="input_contact"/>

            
            <input type="email" placeholder="Email" class="input_contact"/>

            <input type="text" placeholder="Type Your message here" class="input_contact"/>
            <input type="button" value="Contact us for doing job" class="contact_button"/>
            <a href="#" class="work_with_us_link">Work with us</a>
        </form>


    </div>
</div>



</div>


    // 

  );
}

export default Contact_page;
