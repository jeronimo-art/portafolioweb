import React from "react";
import { Page } from "../components/page";
import proyetos from "../img/proyectos.svg";
import { Proyectos } from "../components/Proyectos";

export const Portafolio = () => {
  return (
    <>
      <Page
        scroll1="header"
        scroll2="portafolio"
        scrollText1="Inicio"
        classtitle="titulo-soy"
        scrollText2="Proyectos"
        titleText="Algunos proyectos"
        description="Proyectos front-end, full-stack"
        btnTo="portafolio"
        btnText="Ver"
        titleClass="header-text_first-quienSoy"
      />
      <h1 style={{ transform: "translateY(40%)" }} className="titulo-diseño">
        Maquetas
      </h1>
      <Proyectos
        name="portafolio"
        ClassBack="SOTREJR"
        textoProyecto="Una pequeña tienda de ropa, con un diseño moderno y avanzado."
        hrefGithub="https://github.com/jeronimo-art/"
        hrefLink="https://dev-storejr.pantheonsite.io/"
      />
      <Proyectos
        name="portafolio"
        ClassBack="BLOG"
        textoProyecto="Un blog relacionado con programación, buscaenseñar sobre codigo a través de blogs."
        hrefGithub="https://github.com/jeronimo-art/"
        hrefLink="https://dev-motriec.pantheonsite.io/"
      />
      <Proyectos
        name="portafolio"
        ClassBack="irina"
        textoProyecto="Una plataforma hecha para realizar venta y promoción de servicios tanto online como prensenciales."
        hrefGithub="https://github.com/jeronimo-art/react"
        hrefLink="https://jeronimo-art.github.io/react/"
      />

      <Proyectos
        name="portafolio"
        ClassBack="crypto"
        textoProyecto="El diseño de una aplicación de cursos y carreras orientadas a las cryptomonedas."
        hrefGithub="port#"
        hrefLink="https://www.figma.com/file/6ziKpANngfwXWcqk9yaKE5/Untitled"
      />
      <Proyectos
        name="portafolio"
        ClassBack="motriEC"
        textoProyecto="Una plataforma hecha para realizar venta y promoción de servicios tanto online como prensenciales."
        hrefGithub="https://github.com/jeronimo-art/"
        hrefLink="https://youtu.be/UaKGlJU3HkQ"
      />
      <Proyectos
        name="portafolio"
        ClassBack="irina"
        textoProyecto="Una plataforma hecha para realizar venta y promoción de servicios tanto online como prensenciales."
        hrefGithub="https://github.com/jeronimo-art/react"
        hrefLink="https://jeronimo-art.github.io/react/"
      />

      <h1 style={{ transform: "translateY(40%)" }} className="titulo-diseño">
        Codigo nativo
      </h1>
      <Proyectos
        name="portafolio"
        ClassBack="BIKE"
        textoProyecto="Pagina con información sobre bicicletas, tiene diseño y maquetado. Tiene falta de contenido, pero unas animaciones asombrosas"
        hrefGithub="https://github.com/ReactJeronimo/bike-parts"
        hrefLink="https://reactjeronimo.github.io/bike-parts/#/"
      />
      <Proyectos
        name="portafolio"
        ClassBack="todo"
        textoProyecto="Aplicación de actividades con autorización y base de datos."
        hrefGithub="https://github.com/jeronimo-art/todoserver"
        hrefLink="https://todoserver-silk.vercel.app/"
      />
      <Proyectos
        name="portafolio"
        ClassBack="Calculadora"
        textoProyecto="Una plataforma hecha para realizar venta y promoción de servicios tanto online como prensenciales."
        hrefGithub="https://github.com/jeronimo-art/calculadora"
        hrefLink="https://jeronimo-art.github.io/calculadora/"
      />
      <Proyectos
        name="portafolio"
        ClassBack="contraseña"
        textoProyecto="Pequeña herramienta para manejar contraseñas."
        hrefGithub="https://github.com/jeronimo-art/password"
        hrefLink="https://jeronimo-art.github.io/password/"
      />
    </>
  );
};
