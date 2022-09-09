import { AboutContainer } from "./styles";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet-async";

export const About = () => {
  return (
    <Fade delay={100}>
      <Helmet>
        <title>Sobre Dijiane's </title>
        <link rel="icon" type="image/svg+xml" href="public/icons/logo.png" />
      </Helmet>
      <AboutContainer>
        <div className="topBack">
          <Link to="/">Voltar</Link>
          <img src="/icons/logo.png" alt="" width="100px" />
        </div>

        <section>
          <div>
            <h1>Sobre Dijiane</h1>
            <p>
              Olá, queridos! Sou a Dijiane Dutra e tenho 37 anos. Possuo
              experiência como designer de sobrancelhas, técnica em depilação há
              17 anos, e micropigmentação . Buscando reconstruir as estruturas
              naturais das sobrancelhas. Sou Brasileira atualmente morando em
              Porto - Portugal. E espero sempre trazer os principais requisitos
              para seu bem estar, com o trabalho mais delicado para a pele, o
              design mais adequado ao seu rosto, e te fazer sentir-se mais
              confiante e bonita. Venha conhecer o meu ambiente de trabalho!
            </p>
            <img
              className="imagePerfil"
              src="/assets/1.jpeg"
              alt="Perfil Designer"
            />
          </div>
        </section>
      </AboutContainer>
    </Fade>
  );
};
