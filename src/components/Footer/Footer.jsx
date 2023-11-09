import {
  Facebook,
  LocationCity,
  Mail,
  Phone,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import RoundAnimation from "../RoundAnimation/RoundAnimation";

function Footer() {
  return (
    <div className="bg-base-200 overflow-hidden">
      <div style={{ zIndex: "10" }} className="w-[85%] mx-auto">
        <footer className="footer p-10 text-base-content">
          <nav>
            <header className="footer-title">Useful Links</header>
            <a className="link link-hover">Home</a>
            <a className="link link-hover">About Us</a>
            <a className="link link-hover">Privacy Policy</a>
          </nav>
          <nav>
            <a className="link link-hover">Basic MS Office</a>
            <a className="link link-hover">Advance MS Office</a>
            <a className="link link-hover">Basic Computer</a>
            <a className="link link-hover">Advance Computer</a>
          </nav>
          <nav>
            <header className="footer-title">Contact Us</header>
            <a className="link link-hover">
              <LocationCity /> GEC More Chattogram
            </a>
            <a href="mailto:info.ts@gmail.com" className="link link-hover">
              <Mail /> info.ts@gmail.com
            </a>
            <a href="tel:0151212112" className="link link-hover">
              <Phone /> 0151212112
            </a>
          </nav>
        </footer>
        <footer>
          <header className="px-9 footer-title">Social Link</header>
          <div className="flex gap-5 px-9 mb-6">
            <a href="#" className="cursor-pointer">
              <Twitter />
            </a>
            <a href="#" className="cursor-pointer">
              <YouTube />
            </a>
            <a href="#" className="cursor-pointer">
              <Facebook />
            </a>
          </div>
        </footer>
        <footer className="footer px-9 mt-4">
          <aside style={{ zIndex: "99999" }} className="w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.855568300565!2d91.81917207503444!3d22.359081790762772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd89aaa8239cd%3A0x6e65fa00001dd59f!2sGEC%20More%2C%20Chittagong!5e0!3m2!1sen!2sbd!4v1698037624684!5m2!1sen!2sbd"
              width="100%"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </aside>
        </footer>
      </div>
      <div className="relative">
        <RoundAnimation c_height={200} c_width={200} />
      </div>
    </div>
  );
}

export default Footer;
