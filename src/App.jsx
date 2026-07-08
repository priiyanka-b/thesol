import React, { useState, useEffect } from "react";
// Visual Redesign Routing Configuration
import SmokeCanvas from "./components/SmokeCanvas";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import CustomManufacturing from "./pages/CustomManufacturing";
import Facilities from "./pages/Facilities";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Legal from "./pages/Legal";

// Category Subpages
import RetailPackaging from "./pages/RetailPackaging";
import WholesalePackaging from "./pages/WholesalePackaging";
import PreRolledConesPage from "./pages/PreRolledConesPage";
import FilterTipsPage from "./pages/FilterTipsPage";
import PreRolledTubesPage from "./pages/PreRolledTubesPage";
import CustomBrandingPage from "./pages/CustomBrandingPage";
import CustomPackagingPage from "./pages/CustomPackagingPage";

// Global stylesheet imports
import "./index.css";

export default function App() {
  const [route, setRoute] = useState("home");
  const [productDetailId, setProductDetailId] = useState("silk-flax-cone");
  const [legalSection, setLegalSection] = useState("privacy");

  // History-based routing listener (PopState)
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      
      if (path === "/" || path === "") {
        setRoute("home");
      } else if (path === "/products" || path === "/products/") {
        setRoute("products");
      } else if (path === "/products/retail-packaging") {
        setRoute("products-retail-packaging");
      } else if (path === "/products/wholesale-packaging") {
        setRoute("products-wholesale-packaging");
      } else if (path === "/products/pre-rolled-cones") {
        setRoute("products-pre-rolled-cones");
      } else if (path === "/products/filter-tips") {
        setRoute("products-filter-tips");
      } else if (path === "/products/pre-rolled-tubes") {
        setRoute("products-pre-rolled-tubes");
      } else if (path === "/products/custom-branding") {
        setRoute("products-custom-branding");
      } else if (path === "/products/custom-packaging") {
        setRoute("products-custom-packaging");
      } else if (path.startsWith("/product/")) {
        const id = path.substring(9);
        setProductDetailId(id);
        setRoute("product-detail");
      } else if (path === "/custom-manufacturing") {
        setRoute("custom-mfg");
      } else if (path === "/facilities") {
        setRoute("facilities");
      } else if (path === "/blog") {
        setRoute("blog");
      } else if (path === "/contact") {
        setRoute("contact");
      } else if (["/privacy", "/terms", "/shipping", "/returns"].includes(path)) {
        setLegalSection(path.substring(1));
        setRoute("legal");
      } else {
        setRoute("home");
      }
    };

    window.addEventListener("popstate", handlePopState);
    handlePopState(); // Invoke once on initialization

    return () => window.removeEventListener("popstate", handlePopState);
  }, [productDetailId, legalSection]);

  // Global IntersectionObserver scroll reveal setup on route change
  useEffect(() => {
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view");
              observer.unobserve(entry.target); // Trigger once
            }
          });
        },
        { threshold: 0.05, rootMargin: "0px 0px -50px 0px" }
      );

      const revealables = document.querySelectorAll(".reveal-on-scroll");
      revealables.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    }, 120); // Small delay to ensure render complete

    return () => clearTimeout(timer);
  }, [route]);

  // Routing bridge utilizing pushState
  const changeRoute = (newRoute) => {
    let path = "/";
    if (newRoute === "home") {
      path = "/";
    } else if (newRoute === "products") {
      path = "/products";
    } else if (newRoute === "products-retail-packaging") {
      path = "/products/retail-packaging";
    } else if (newRoute === "products-wholesale-packaging") {
      path = "/products/wholesale-packaging";
    } else if (newRoute === "products-pre-rolled-cones") {
      path = "/products/pre-rolled-cones";
    } else if (newRoute === "products-filter-tips") {
      path = "/products/filter-tips";
    } else if (newRoute === "products-pre-rolled-tubes") {
      path = "/products/pre-rolled-tubes";
    } else if (newRoute === "products-custom-branding") {
      path = "/products/custom-branding";
    } else if (newRoute === "products-custom-packaging") {
      path = "/products/custom-packaging";
    } else if (newRoute === "product-detail") {
      path = `/product/${productDetailId}`;
    } else if (newRoute === "custom-mfg") {
      path = "/custom-manufacturing";
    } else if (newRoute === "facilities") {
      path = "/facilities";
    } else if (newRoute === "blog") {
      path = "/blog";
    } else if (newRoute === "contact") {
      path = "/contact";
    } else if (["privacy", "terms", "shipping", "returns"].includes(newRoute)) {
      setLegalSection(newRoute);
      path = `/${newRoute}`;
    } else if (newRoute === "legal") {
      path = `/${legalSection}`;
    }
    
    window.history.pushState({}, "", path);
    window.dispatchEvent(new Event("popstate"));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Render view router helper
  const renderView = () => {
    switch (route) {
      case "home":
        return <Home setRoute={changeRoute} setProductDetailId={setProductDetailId} />;
      case "products":
        return <Products setRoute={changeRoute} />;
      case "products-retail-packaging":
        return <RetailPackaging setRoute={changeRoute} />;
      case "products-wholesale-packaging":
        return <WholesalePackaging setRoute={changeRoute} />;
      case "products-pre-rolled-cones":
        return <PreRolledConesPage setRoute={changeRoute} setProductDetailId={setProductDetailId} />;
      case "products-filter-tips":
        return <FilterTipsPage setRoute={changeRoute} setProductDetailId={setProductDetailId} />;
      case "products-pre-rolled-tubes":
        return <PreRolledTubesPage setRoute={changeRoute} setProductDetailId={setProductDetailId} />;
      case "products-custom-branding":
        return <CustomBrandingPage setRoute={changeRoute} setProductDetailId={setProductDetailId} />;
      case "products-custom-packaging":
        return <CustomPackagingPage setRoute={changeRoute} setProductDetailId={setProductDetailId} />;
      case "product-detail":
        return <ProductDetail productDetailId={productDetailId} setRoute={changeRoute} />;
      case "custom-mfg":
        return <CustomManufacturing setRoute={changeRoute} />;
      case "facilities":
        return <Facilities />;
      case "blog":
        return <Blog />;
      case "contact":
        return <Contact />;
      case "legal":
        return (
          <Legal
            legalSection={legalSection}
            setRoute={changeRoute}
            setLegalSection={setLegalSection}
          />
        );
      default:
        return <Home setRoute={changeRoute} setProductDetailId={setProductDetailId} />;
    }
  };

  return (
    <div className="app-shell">
      {/* Background Interactive Smoke Canvas */}
      <SmokeCanvas />

      {/* Global Header Megamenu */}
      <Header currentRoute={route} setRoute={changeRoute} />

      {/* Page Content View Router */}
      <main className="view-transition-wrapper">
        {renderView()}
      </main>

      {/* Global Footer */}
      <Footer setRoute={changeRoute} />
    </div>
  );
}
