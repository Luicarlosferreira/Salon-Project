import { useState } from "react";
import { HeaderContainer, HeaderContent, HeaderInfo } from "./styles";
import { HiOutlineMenuAlt3, VscClose } from "react-icons/all";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { MapsEnvironment } from "../services/maps";
import { Helmet } from "react-helmet-async";

export const Header = () => {
  const [mobile, setIsMobile] = useState(false);
  const SetFalse = () => setIsMobile(false);

  return (
    <Fade delay={100}>
      <Helmet>
        <title>Dijiane's Salon</title>
        <link rel="icon" type="image/svg+xml" href="public/icons/logo.png" />
      </Helmet>
      <HeaderContainer>
        <HeaderContent>
          <ul className="firstUl">
            <Link to="/about">Sobre</Link>
            <Link to="/services">Serviços</Link>
          </ul>
          <Link to="/" onClick={SetFalse}>
            <img src="/icons/logo.png" alt="" width="100px" />
          </Link>
          {!mobile ? (
            <ul>
              <Link to="/gallery">Galeria</Link>
              <Link to="/contact">Contato</Link>
            </ul>
          ) : (
            <ul className="ulMobileOpen">
              <Link to="/gallery" onClick={SetFalse}>
                Galeria
              </Link>
              <Link to="/contact" onClick={SetFalse}>
                Contato
              </Link>

              <Link to="/about" onClick={SetFalse}>
                Sobre
              </Link>
              <Link to="/services" onClick={SetFalse}>
                Serviços
              </Link>
            </ul>
          )}

          {mobile ? (
            <VscClose id="mobileMenu" onClick={() => setIsMobile(!mobile)} />
          ) : (
            <HiOutlineMenuAlt3
              id="mobileMenu"
              onClick={() => setIsMobile(!mobile)}
            />
          )}
        </HeaderContent>

        <HeaderInfo onClick={SetFalse}>
          <h1>Acorde Linda</h1>
          <p>
            Design de Sobrancelhas - Micropigmentação - Técnica em depilação
          </p>
          <Link to="/contact">
            <button>Agendar</button>
          </Link>
        </HeaderInfo>
      </HeaderContainer>
      <br />
      <br />
      <MapsEnvironment />
    </Fade>
  );
};
