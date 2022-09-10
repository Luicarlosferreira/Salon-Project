import { MapsContainer } from "./styles";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

export const MapsKey = import.meta.env.VITE_API_KEY_MAPS;

export const MapsEnvironment = () => {
  const localMap = {
    lat: 41.16010670847995,
    lng: -8.604622030791361,
  };
  const containerStyle = {
    width: "100%",
    height: "500px",
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: MapsKey,
  });
  return (
    <MapsContainer>
      <h1>Venha conhecer o nosso espaço, para te fazer linda como sempre.</h1>

      <p>Rua de Santa Catarina 1557 piso 1 loja 30 código postal 4000-448</p>
      <p>Galerias atlantis (marquês Bonfim)</p>
      {isLoaded ? (
        <GoogleMap
          className="MapsContent"
          mapContainerStyle={containerStyle}
          center={localMap}
          zoom={15}
        >
          <Marker
            position={localMap}
            options={{
              label: {
                text: "Salão Dijiane Dutra",
                className: "markerClass",
              },
            }}
          />
        </GoogleMap>
      ) : (
        <></>
      )}
      <br />
      <br />
      <br />
      <br />
      <br />
    </MapsContainer>
  );
};
