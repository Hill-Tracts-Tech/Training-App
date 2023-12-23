import {
  Facebook,
  LocationCity,
  Mail,
  Phone,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import RoundAnimation from "../RoundAnimation/RoundAnimation";
import "./footer.css";

function Footer() {
  return (
    <div className="overflow-hidden">
      <div style={{ zIndex: "10" }} className="w-[85%] mx-auto">
        <footer className="footer p-10">
          <nav>
            <header className="customFooter">Useful Links</header>
            <a className="link link-hover text-black">Home</a>
            <a className="link link-hover text-black">About Us</a>
            <a className="link link-hover text-black">Privacy Policy</a>
          </nav>
          <nav>
            <header className="customFooter">Courses</header>
            <a className="link link-hover text-black">Basic MS Office</a>
            <a className="link link-hover text-black">Advance MS Office</a>
            <a className="link link-hover text-black">Basic Computer</a>
            <a className="link link-hover text-black">Advance Computer</a>
          </nav>
          <nav>
            <header className="customFooter">Contact Us</header>
            <a className="link link-hover text-black">
              <LocationCity /> S.I Villa, 6 No Ward,Satkania Municipality,
              Chattogram.
            </a>
            <a href="" className="link link-hover text-black">
              <Mail /> orion.sat88@gmail.com
            </a>
            <a href="" className="link link-hover text-black">
              <Mail /> ospc.Satkania@gmail.com
            </a>
            <div className="flex gap-2">
              <a href="tel:01688-718450" className="link link-hover text-black">
                <Phone /> 01688-718450,
              </a>
              <a href="tel:01824-779196" className="link link-hover text-black">
                01824-779196,
              </a>
              <a href="tel:01839-714714" className="link link-hover text-black">
                01839-714714.
              </a>
            </div>
          </nav>
          <nav>
            <header className="px-9 customFooter">Social Link</header>
            <div className="flex justify-around w-[100%]">
              <a href="#" className="cursor-pointer text-blue-500">
                <Twitter />
              </a>
              <a href="#" className="cursor-pointer text-red-500">
                <YouTube />
              </a>
              <a
                title="ORION COMPUTER INSTITUTE"
                href="https://www.facebook.com/profile.php?id=100076577532802"
                className="cursor-pointer text-blue-500"
              >
                <Facebook />
              </a>
              <a
                title="ORION SELAI PROSHIKHON CENTER"
                href="https://www.facebook.com/profile.php?id=100063605783497&locale=de_DE"
                className="cursor-pointer text-blue-500"
              >
                <Facebook />
              </a>
            </div>
          </nav>
        </footer>
        <footer className="footer px-9 mt-4">
          <aside style={{ zIndex: "99999" }} className="w-full hidden lg:block">
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
