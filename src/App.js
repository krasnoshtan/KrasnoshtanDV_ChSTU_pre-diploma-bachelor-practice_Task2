import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
        <div className="hello_container">
            <header className="main_header">
                <div className="logo_name"><a href="#">{'{'}Finsweet</a></div>
                <div className="menu">
                    <a href="Contact_page">Contact</a>
                    <a href="Blog">Blog</a>
                    <a href="About">About us</a>
                </div>
            </header>


            <div className="action_menu">
                <div className="action_menu_non-image">
                    <div className="heading" id="heading">Building stellar websites for early startups</div>
                    <div className="subheading">Lorem ipsum dolor sit amet. iqj98cwe7jq98j789qw e7q809 w79eq8w j7e q809jew7j
                        rq98we7q98w je7</div>
                    <div className="main_buttons">
                        <button type="button" className="hello_button" onclick="on_button1_click()">View projects</button>
                        <button type="button" className="hello_button" onclick="on_button2_click()">Pricing</button>
                    </div>
                </div>

                <div className="main_image"><img src="media_res/Illustration.svg"></img></div>
            </div>

        </div>
        <div className="gray_panel">
            <div className="information_panel_text">
                <div className="information_panel_heading">How we work</div>
                <div className="information_panel_text_additional">Lorem ipsum dolor sit amet. asfghk a ksgjdfha qweuqroy
                    zzbcvxbna ayf</div>
                <a className="informational_link" href="#">Get in touch with us</a>
            </div>

            <div className="four_pointers">
                <div className="pointer_card">
                    <img src="media_res/pointer_1.svg"></img>
                    <div className="pointer_heading">Inspecting</div>
                    <div className="pointer_description">Lorem ipsum dolor sit amet. asfghk a ksgjdfha qweuqroy zzbcvxbna
                        ayf</div>
                </div>
                <div className="pointer_card">
                    <img src="media_res/pointer_2.svg"></img>
                    <div className="pointer_heading">Wireframing</div>
                    <div className="pointer_description">Lorem ipsum dolor sit amet. asfghk a ksgjdfha qweuqroy zzbcvxbna
                        ayf</div>
                </div>
                <div className="pointer_card">
                    <img src="media_res/pointer_3.svg"></img>
                    <div className="pointer_heading">Design</div>
                    <div className="pointer_description">Lorem ipsum dolor sit amet. asfghk a ksgjdfha qweuqroy zzbcvxbna
                        ayf</div>
                </div>
                <div className="pointer_card">
                    <img src="media_res/pointer_4.svg"></img>
                    <div className="pointer_heading">Development</div>
                    <div className="pointer_description">Lorem ipsum dolor sit amet. asfghk a ksgjdfha qweuqroy zzbcvxbna
                        ayf</div>
                </div>

            </div>
        </div>

        <div className="white_panel">
            <div className="heading_and_link">
                <div className="white_panel_heading">View our projects</div>
                <a href="#" className="white_panel_link">View More</a>
            </div>
            <div className="cards_about_projects">
                <div className="project_card_1">
                    <div className="project_card_covering" style={{"width": 380}}>
                        <div>Workhub</div>
                        <div>Lorem ipsum dolor sit amet. asfghk a ksgjdfha qweuqroy zzbcvxbna ayf</div>
                        <a href="#">View project..</a>

                    </div>
                </div>
                <div className="vertical_cards">
                    <div className="project_card_2">
                        <div className="project_card_covering covering_centering">
                            <div>Lorem ipsum</div>
                            <a href="#">View project..</a>

                        </div>

                    </div>
                    <div className="project_card_3">
                        <img src="media_res/card_3.png"></img>

                    </div>


                </div>

            </div>

        </div>
    </div >
  );
}

export default App;
