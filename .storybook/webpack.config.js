const rewireStyledComponents = require("react-app-rewire-styled-components");

module.exports = ({ config, mode }) => {
  return rewireStyledComponents(config, mode);
}
