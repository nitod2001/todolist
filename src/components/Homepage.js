import React from "react";
import AppContent from "./AppContent";
import AppHeader from "./AppHeader";
import PageTitle from "./PageTitle";
import styles from "../styles/modules/app.module.scss";
function Homepage() {
  return (
    <div className={styles.app__wrapper}>
      <PageTitle>TODO-APP</PageTitle>
      <AppHeader />
      <AppContent />
    </div>
  );
}

export default Homepage;
