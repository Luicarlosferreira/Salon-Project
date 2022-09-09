import { GalleryContainer } from "./styles";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
export const Gallery = () => {
  return (
    <Fade delay={100}>
      <GalleryContainer>
        <div className="topBack">
          <Link to="/">Voltar</Link>
          <img src="public/icons/logo.png" alt="" width="100px" />
        </div>

        <section>
          <h1>Galeria</h1>
          <div className="galleryContent">
            <img src="public/assets/2.jpeg" alt="gallery image" />
            <img src="public/assets/3.jpeg" alt="gallery image" />
            <img src="public/assets/4.jpeg" alt="gallery image" />
            <img src="public/assets/5.jpeg" alt="gallery image" />
            <img src="public/assets/6.jpeg" alt="gallery image" />
            <img src="public/assets/7.jpeg" alt="gallery image" />
            <img src="public/assets/8.jpeg" alt="gallery image" />
          </div>
        </section>
      </GalleryContainer>
    </Fade>
  );
};
