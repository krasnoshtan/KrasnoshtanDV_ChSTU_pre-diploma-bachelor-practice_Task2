import logo from './logo.svg';
import './App.css';

function Blog() {
  return (
    <div class="main_container">

        <header class="main_header some_red_brown">
            <div class="logo_name"><a href="/">{'{'}Finsweet</a></div>
                <div class="subheading some_centering">Blog..</div>
            <div class="menu">
                <a href="Contact_page">Contact</a>
                <a href="Blog">Blog</a>
                <a href="About">About us</a>
            </div>
        </header>


        <div class="heading blog_heading">Blog..</div>

        <div class="six_blog_cards_container">
            <div class="blog_card">
                <img src="media_res/blog_img1.png" class="tooltip"></img>
                
                {/* <!-- https://www.pexels.com/photo/photo-of-people-using-laptops-3182833/ --> */}
                <div class="date">27 Jun 2021</div>
                <div class="title">How one Webflow user grew his single person consultancy from $0-100k in 14 months</div>
                <div class="subtitle">The selector also plays a role in what priority the properties have, not just where in the file they appear.</div>
                <a href="#">Read More {'>'}</a>
            </div>
            <div class="blog_card">
                <img src="media_res/blog_img2.png" class="tooltip"></img>
                
                {/* <!-- https://www.pexels.com/photo/side-view-photo-of-smiling-woman-in-a-black-and-white-striped-top-sitting-on-a-bed-while-using-a-laptop-3765035/  --> */}
                <div class="date">27 Jun 2021</div>
                <div class="title">How one Webflow user grew his single person consultancy from $0-100k in 14 months</div>
                <div class="subtitle">The selector also plays a role in what priority the properties have, not just where in the file they appear.</div>
                <a href="#">Read More {'>'}</a>
            </div>
            <div class="blog_card">
                <img src="media_res/blog_img3.png" class="tooltip"></img>
                
                {/* <!-- https://www.pexels.com/photo/top-view-photo-of-person-holding-earphones-3183198/ --> */}
                <div class="date">27 Jun 2021</div>
                <div class="title">How one Webflow user grew his single person consultancy from $0-100k in 14 months</div>
                <div class="subtitle">The selector also plays a role in what priority the properties have, not just where in the file they appear.</div>
                <a href="#">Read More {'>'}</a>
            </div>
            <div class="blog_card">
                <img src="media_res/blog_img4.png" class="tooltip"></img>
                
                {/* <!-- https://www.pexels.com/photo/top-view-photo-of-people-having-a-meeting-3182822/ --> */}
                <div class="date">27 Jun 2021</div>
                <div class="title">How one Webflow user grew his single person consultancy from $0-100k in 14 months</div>
                <div class="subtitle">The selector also plays a role in what priority the properties have, not just where in the file they appear.</div>
                <a href="#">Read More {'>'}</a>
            </div>
            <div class="blog_card">
                <img src="media_res/blog_img5.png" class="tooltip"></img>
                
                {/* <!-- https://www.pexels.com/photo/man-wearing-red-crew-neck-shirt-1125028/ --> */}
                <div class="date">27 Jun 2021</div>
                <div class="title">How one Webflow user grew his single person consultancy from $0-100k in 14 months</div>
                <div class="subtitle">The selector also plays a role in what priority the properties have, not just where in the file they appear.</div>
                <a href="#">Read More {'>'}</a>
            </div>
            <div class="blog_card">
                <img src="media_res/blog_img6.png"></img>
                
                {/* <!-- https://www.pexels.com/photo/group-of-person-sitting-indoors-3184306/ --> */}
                <div class="date">27 Jun 2021</div>
                <div class="title">How one Webflow user grew his single person consultancy from $0-100k in 14 months</div>
                <div class="subtitle">The selector also plays a role in what priority the properties have, not just where in the file they appear.</div>
                <a href="#">Read More {'>'}</a>
            </div>

        </div>




        <div class="blue_footer flex_row">
            <div class="flex_column">
                <div class="text_box some_title">
                    <div class="heading">{'{'}Finsweet</div>
                    <div class="text">Lorem ipsum..We are always open to discuss your project and improve your online presence. ..lorem ipsum..</div>
                </div>
                <div class="yellow_footer flex_row">
                    <div class="text_box">
                        <div class="footer_contrast_text">Email..</div>
                        <div><a href="mailto:loremipsum@example.com">example@example.com</a></div>
                    </div>
                    <div class="text_box">
                        <div class="footer_contrast_text">Call..</div>
                        <div><a href="tel:+380472550390">+380472550390</a></div>
                    </div>

                </div>
            </div>
            <div>
                <div class="heading">Lets talk!</div>
                <div class="subheading">Lorem ipsum..We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges. ..lorem ipsum..</div>
                <div class="flex_row" style={{"gap": 15, "margin-top": 20}}>
                    <a href="https://facebook.com"><img src="media_res/Facebook_Vector_logo.svg"/></a>
                    <a href="https://twitter.com"><img src="media_res/Twitter_Vector_logo.svg"/></a>
                    <a href="https://instagram.com"><img src="media_res/Instagram_Vector_logo_inv.svg"/></a>
                    <a href="https://linkedin.com"><img src="media_res/LinkedIn_Vector_logo.svg"/></a>
                
                </div>

            </div>

        </div>
        <div></div>
</div>
  );
}

export default Blog;
