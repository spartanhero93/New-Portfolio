# New-Portfolio

## [https://github.com/cameronbourke/react-hamburger-menu/issues/8](To fix the bool issue)

Hello, I upgraded to react 16 and PropTypes is deprecated. So I added.. to dist/index.js
var PropTypes = require('prop-types');

HamburgerMenu.PropTypes = {
isOpen: PropTypes.bool.isRequired,
menuClicked: PropTypes.func.isRequired,
width: PropTypes.number,
height: PropTypes.number,
strokeWidth: PropTypes.number,
rotate: PropTypes.number,
color: PropTypes.string,
borderRadius: PropTypes.number,
animationDuration: PropTypes.number
};
