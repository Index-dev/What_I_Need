const size = {
  mobile: "600px",
  tablet: "900px",
  laptop: "1200px",
  desktop: "1800px"
};

const theme = {
  mainColor: "#0a4297",
  backgColor: "#00EAD3",
  subTopkColor: "#005F99",
  subBackColor: "#FFF5B7",
  backBarColor: "#4472C4",
  progressBarColor: "#FF449F",
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`
};

export default theme;
