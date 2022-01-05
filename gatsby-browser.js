// const scrollToElement = require("scroll-to-element");

// exports.onRouteUpdate = ({ location }) => {
//   checkHash(location);
// };

// const checkHash = (location) => {
//   let { hash } = location;
//   if (hash) {
//     scrollToElement(hash, {
//       offset: -95,
//       duration: 1000,
//     });
//   }
// };

// require("prismjs/themes/prism-twilight.css");

// in gastby-browser.js
exports.shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  const { pathname } = location;
  // list of routes for the scroll-to-top-hook
  const scrollToTopRoutes = [];
  // if the new route is part of the list above, scroll to top (0, 0)
  if (scrollToTopRoutes.indexOf(pathname) !== -1) {
    window.scrollTo(0, 0);
  }

  return false;
};
