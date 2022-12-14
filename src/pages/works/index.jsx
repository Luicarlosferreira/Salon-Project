import { ServiceContainer } from "./styles";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet-async";

export const Services = () => {
  return (
    <Fade delay={100}>
      <Helmet>
        <title>Dijiane's Serviços</title>
        <link rel="icon" type="image/svg+xml" href="/icons/logo.png" />
      </Helmet>
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
            <div className="costs">
              <h1>- Tabela de preços -</h1>
              <ul>
                <li>Sobrancelha - €7,00</li>
                <li>Sobrancelha + henna - € 10,00 </li>
                <li>Sobrancelha masculina - € 9,00 </li>
                <li>Buço - € 4,00 </li>
                <li>Axilas - € 6,00 </li>
                <li>Meio braço - € 7,00 </li>
                <li>Braço inteiro - € 12,00 </li>
                <li>Virilha cavada - € 12,00 </li>
                <li>Virilha total - € 15,00 </li>
                <li>Meia perna - € 8,00 </li>
                <li>Perna inteira - € 13,00 </li>
                <li>Rosto e linha - € 22,00 </li>
                <li>
                  Micropigmentação <i>(a partir)</i> - € 130,00{" "}
                </li>
              </ul>
              <p>
                <Link to="/contact">Faça um contacto</Link>
              </p>
            </div>
          </div>
        </section>
      </ServiceContainer>
    </Fade>
  );
};
