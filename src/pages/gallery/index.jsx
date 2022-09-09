import { GalleryContainer } from "./styles";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet-async";
export const Gallery = () => {
  return (
    <Fade delay={100}>
      <Helmet>
        <title>Dijiane's Galeria</title>
        <link rel="icon" type="image/svg+xml" href="/icons/logo.png" />
      </Helmet>
      <GalleryContainer>
        <div className="topBack">
          <Link to="/">Voltar</Link>
          <img src="/icons/logo.png" alt="" width="100px" />
        </div>

        <section>
          <h1>Galeria</h1>
          <div className="galleryContent">
            <img src="/assets/2.jpeg" alt="gallery image" />
            <img src="/assets/3.jpeg" alt="gallery image" />
            <img src="/assets/4.jpeg" alt="gallery image" />
            <img src="/assets/5.jpeg" alt="gallery image" />
            <img src="/assets/6.jpeg" alt="gallery image" />
            <img src="/assets/7.jpeg" alt="gallery image" />
            <img src="/assets/8.jpeg" alt="gallery image" />
          </div>
        </section>
      </GalleryContainer>
    </Fade>
  );
};
