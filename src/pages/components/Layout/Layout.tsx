import { Brightness6Rounded } from "@material-ui/icons";
import Head from "next/head";
import { useEffect, useState } from "react";
import Logo from "../utils/Logo";

const Layout = ({ children, title = "World Ranks" as string }): JSX.Element => {
   const [theme, setTheme] = useState("light");

   useEffect(() => {
      document.documentElement.setAttribute(
         "data-theme",
         localStorage.getItem("theme")
      );

      setTheme(localStorage.getItem("theme"));
   }, []);

   const switchTheme = () => {
      if (theme === "light") {
         saveTheme("dark");
      } else {
         saveTheme("light");
      }
   };
   const saveTheme = (theme) => {
      setTheme(theme);
      localStorage.setItem("theme", theme);
      document.documentElement.setAttribute("data-theme", theme);
   };

   return (
      <div className="layout-container">
         <Head>
            <title></title>
            <link></link>
         </Head>

         <header className="layout-header">
            <Logo />

            <Brightness6Rounded onClick={switchTheme} />
         </header>

         <main className="layout-main">{children}</main>

         <footer className="layout-footer">Al Reasat Rafio @learning_pj</footer>
      </div>
   );
};

export default Layout;
