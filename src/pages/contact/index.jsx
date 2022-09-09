import { ContactContainer } from "./styles";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { BsFacebook, BsInstagram, ImWhatsapp } from "react-icons/all";

export const Contact = () => {
  const facebook = import.meta.env.VITE_FACEBOOK_PERSONAL_LINK;
  const instagram = import.meta.env.VITE_INSTAGRAM_PERSONAL_LINK;
  const whatsapp = import.meta.env.VITE_WHATSAPP_PERSONAL_LINK;

  return (
    <Fade delay={100}>
      <ContactContainer>
        <div className="topBack">
          <Link to="/">Voltar</Link>
          <img src="public/icons/logo.png" alt="" width="100px" />
        </div>

        <section>
          <h1>Contatos</h1>
          <div className="socialMediaContainer">
            <a className="socialMedia" href={facebook}>
              <BsFacebook />
              <span>Facebook</span>
            </a>
            <a className="socialMedia" href={instagram}>
              <BsInstagram />
              <span>Instagram</span>
            </a>

            <a className="socialMedia" href={whatsapp}>
              <ImWhatsapp />
              <span>Whatsapp</span>
            </a>
          </div>
        </section>
      </ContactContainer>
    </Fade>
  );
};
