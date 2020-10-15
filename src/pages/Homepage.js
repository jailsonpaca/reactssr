import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh   
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { useMediaQuery } from '@material-ui/core';
import Header from "components/Header/Header.js";
import HeaderLogo from "assets/img/logo.png";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Story from "components/Story";
import Footer from "components/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/Button.js";
import Parallax from "components/Parallax.js";
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import fabianoCircle from 'assets/img/fabianoCircle.png'
// sections for this page

import Services from "./Sections/Services.js";
import Courses from "./Sections/Courses.js";
import Online from "./Sections/Online.js";
import Depoiments from "./Sections/Depoiments.js";

import styles from "assets/jss/material-kit-react/views/components.js";

const defaultplans = [{
  title: "Sessão Inicial / Sessão Avulsa", description: "Sessão Inicial ou Avulsa de 80 minutos por chamada de vídeo via WhatsApp.", price: "300", totalPrice: "300,00",
  obs: ['Todos os serviços podem ser parcelados no Cartão de Crédito via Mercado Pago em até 12x.',
    'Atendimento de segunda a sexta-feira, das 08:00 às 18:00 horas.',
    'Aos sábados, das 08:00 às 17:00 horas, mediante agendamento prévio.'], color: "#dadada"
},
{
  title: "Pacote de 02 Sessões", description: "Pacote de 02 sessões de 80 minutos que podem ser usadas de acordo com a necessidade.", price: "260", totalPrice: "520,00",
  obs: ['Todos os serviços podem ser parcelados no Cartão de Crédito via Mercado Pago em até 12x.',
    'Atendimento de segunda a sexta-feira, das 08:00 às 18:00 horas.',
    'Aos sábados, das 08:00 às 17:00 horas, mediante agendamento prévio.'], color: "rgba(224, 194, 0, 1)"
},
{
  title: "Pacote de 03 Sessões", description: "Pacote de 03 Sessões de 80 minutos que podem ser usadas de acordo com a necessidade.", price: "250", totalPrice: "750,00",
  obs: ['Todos os serviços podem ser parcelados no Cartão de Crédito via Mercado Pago em até 12x.',
    'Atendimento de segunda a sexta-feira, das 08:00 às 18:00 horas.',
    'Aos sábados, das 08:00 às 17:00 horas, mediante agendamento prévio.'], color: "rgba(7, 181, 244, 1)"
},
{
  title: "Pacote de 4 Sessões", description: "Pacote de 03 Sessões de 80 minutos que podem ser usadas de acordo com a necessidade.", price: "240", totalPrice: "960,00",
  obs: ['Todos os serviços podem ser parcelados no Cartão de Crédito via Mercado Pago em até 12x.',
    'Atendimento de segunda a sexta-feira, das 08:00 às 18:00 horas.',
    'Aos sábados, das 08:00 às 17:00 horas, mediante agendamento prévio.'], color: "#07DAA5"
}];
const useStyles = makeStyles(styles);

export default function Components(props) {
  var plans;
  if (typeof props.data.plans != undefined) {
    plans = props.data.plans;
  } else {
    plans = defaultplans;
  }
  //const posts = props.data.posts;
  const classes = useStyles();
  const { ...rest } = props;
  const isSmall = useMediaQuery('(max-width:450px)');
  return (
    <div className={classes.backStage}>
      <Header
        brand={<img src={HeaderLogo} alt="Fabiano Correa hipnose e psicanalistalogia" className={classes.headerLogo} />}
        rightLinks={<HeaderLinks />}
        fixed
        color="white"
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax /*image={require("assets/img/storyImage.png")}*/ isImage={false} className={classes.parallax}>
        <img src={fabianoCircle} className={classes.fabianoCircle} alt="hipnoterapeuta fabiano correa" />
        <div className="waveEffect">
          <div className="wave"></div>
          <div className="wave"></div>
        </div>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <Story />
              <div className={classes.brand}>
                <h1 className={classes.title}>Seja quem você gostaria de ter por perto</h1>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <Services />
        <Depoiments />
        <Online plans={plans} />
        <Courses />
        {/*
        <GridItem md={12} className={classes.textCenter}>
          <Link to={"/login-page"} className={classes.link}>
            <Button color="primary" size="lg" simple>
              Minhas aquisições
            </Button>
          </Link>
        </GridItem>*/}
      </div>
      {isSmall && (<Button color="success" justIcon round className={classes.whatsAppBtn}>
        <WhatsAppIcon />
      </Button>)}
      <Footer />
    </div>
  );
}
