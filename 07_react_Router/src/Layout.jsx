import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
//Layout component is used to wrap the main content of the application.
// It includes the Header and Footer components, and uses the Outlet component from react-router-dom to render the child routes.  
// The Outlet component is a placeholder that will be replaced by the child route components when the route matches.
// This allows for a consistent layout across different pages of the application.
// The Header component is rendered at the top of the page, and the Footer component is rendered at the bottom.
// The Outlet component is rendered in between the Header and Footer components, allowing the main content of the page to be displayed in that area.
// This structure helps in maintaining a consistent layout while allowing for dynamic content to be displayed based on the current route.