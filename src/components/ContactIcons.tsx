import { BsFillTelephoneFill, BsFillPersonFill } from "react-icons/bs/index";
import { MdEmail } from "react-icons/md/index";
import { HiLocationMarker } from "react-icons/hi/index";
const ContactIconsComponent = function () {
  return (
    <>
      <div className="contact-section__text">
        <p className="section__heading contact-section__heading">
          {"/Contact us if You want to unlock true potential of Your data"}
        </p>
        <div className="contact-section__grid">
          <div className="grid__card typewriter-2">
            <BsFillTelephoneFill />
            <h4>+1 857 639 0472</h4>
          </div>
          <div className="grid__card typewriter-3">
            <MdEmail />
            <h4>contact@gordion.bio</h4>
          </div>
          <div className="grid__card typewriter-4">
            <BsFillPersonFill />
            <h4>Pawel Zawadzki, PhD, Founder, CEO</h4>
          </div>
          <div className="grid__card typewriter-5">
            <HiLocationMarker />
            <h4>245 Main St, Cambridge, MA 02142, US</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactIconsComponent;
