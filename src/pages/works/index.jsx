import { ServiceContainer } from "./styles";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

export const Services = () => {
  return (
    <Fade delay={100}>
      <ServiceContainer>
        <div className="topBack">
          <Link to="/">Voltar</Link>
          <img src="public/icons/logo.png" alt="" width="100px" />
        </div>

        <section>
          <div>
            <h1>Serviços</h1>
            <p>Design de sobrancelhas </p>
            <p>Micropigmentação</p>
            <p>
              A Micropigmentacao envolve microblanding fios realistas Compacta,
              onde se pigmenta tudo e shadow efeito esfumado.
            </p>
            <p>
              Depilação com cera industrializada ou seja a base de mel no
              entanto vem a mim em barras tudo pronto onde não envolve o
              (vinagre e limão) componentes que aquecidos escurecem a pele, em
              alguns países conhecida como cera espanhola, trabalho com
              aplicação rápida puxo da pele com a própria cera sendo assim muito
              mais higiénica e única, tempo de duração de uma depilação completa
              com esta técnica dura 30 minutos no máximo e todo material usado é
              descartado.
            </p>
            <p>Técnica em depilação</p>
            <span>Atendimento exclusivo com hora marcada</span>
          </div>
        </section>
      </ServiceContainer>
    </Fade>
  );
};
