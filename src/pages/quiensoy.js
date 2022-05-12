import React from "react";
import logo from "../img/logo-vector.svg";
import logoV from "../img/logo-video.mp4";
import { Page } from "../components/page";
import { Modal, useModal, Text } from "@nextui-org/react";
import img from "../img/unnamed.webp"

export const QuienSoy = () => {
  const { setVisible, bindings } = useModal();
  return (
    <div>
      <Page
        scroll1="header"
        scroll2="quienSoy"
        scrollText1="Inicio"
        scrollText2="Quien soy"
        classtitle="titulo-soy"
        titleText="Hola, soy Jerónimo"
        description="Desarrollador Full-stack"
        infoImg={img}
        textInfo=""
        btnTo="quienSoy"
        btnText="Ver"
        titleClass="header-text_first-quienSoy"
        imgClass="picture-QS"
      />

      <div className="quienSoy" name="quienSoy">
        <div className="content-QuienSoy">
          <h1 className="quienSoy-title">Quien soy</h1>
          <p className="texto">
            Hola, mi nombre es Jerónimo Robalino, tengo 15 años, actualmente soy
            desarrollador full-stack. Tengo conocimientos amplios en HTML5,
            CSS3, JavaScript, TypeScript y librerías como React JS, manejadores
            de estados como Redux, Frameworks como NextJS para server side
            rendering, preprocesadores de CSS como SASS, Responsive Design,
            bootstrap, maquetación con CSS Grid Layoud y Flexbox, etc. Utilizó
            tecnologias como nodeJs y bases de datos como Firebase. Ademas
            conozco sobre programas de diseño como Figma y photoshop y de creación de
            imagenes como photoshop e ilustrator.
            <br />
            Como programador me considero una persona muy creativa y capaz de
            desarrollar cualquier tipo de soluciones. Me gusta mucho el diseño de interfaces modernas para aplicaciones. 
            Ademas tengo gran capacidad de aprendizaje, tanto de leguajes de programación o
            cualquier otro ambito.
            <br />
            Como persona tengo una buena capacidad para adaptarme a cualquier
            situación para poder generar una solución. Me gusta trabajar en equipo y guiarlo con mis conocimientos para llegar a una solución.
          </p>
          <img
            alt="Jerónimo"
            className="picture-quienSoy"
            src={img}
          />
          <img alt="logo" src={logo} className="logo-quienSoy" />
          <p className="video" onClick={() => setVisible(true)}>
            - Video
          </p>
        </div>
        <Modal
          closeButton
          width="80vw"
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
          {...bindings}
          blur="true"
          color="black"
        >
          <Modal.Header>
            <Text id="modal-title" className="titulo-modal" color="white" b size={18}>
              Video de mi logo
            </Text>
          </Modal.Header>
          <Modal.Body>
            <video className="video_logo" controls src={logoV}></video>
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};
