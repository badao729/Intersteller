import "./Header.scss"
import logo from "../../asset/logo-and-badges/logo.png";


function Header() {

    return (

        <article className="header">
            <div className="header__container">
                <img className='logo' src={logo} alt="logo"></img>
                <div class="author">
                    <p>DESIGNED AND DEVELOPED</p>
                    <p>BY YING & LI</p>
                </div>
            </div>
            <iframe width="5%" height="50%" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/179526871&color=%23ff5500&auto_play=true&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true"></iframe>

        </article>
    )
}

export default Header
