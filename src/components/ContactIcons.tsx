import { BsFillTelephoneFill, BsFillPersonFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";
const ContactIconsComponent = function () {
  return (
    <>
      <div className="contact-section__text">
        <h2 className="section__heading">{"/Contact"}</h2>
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
            <h4>Paweł Zawadzki, PhD, Founder, CEO</h4>
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
