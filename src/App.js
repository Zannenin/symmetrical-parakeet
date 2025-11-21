import React from "react";
import { useLanguage } from "./LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import "./styles.css";

const App = () => {
  const { language, translations } = useLanguage();

  return (
    <div className="app">
      <div className="card">
        <div className="controls">
          <span className="badge">
            <span className="badge-dot" />
            {language.toUpperCase()}
          </span>
          <LanguageSwitcher />
        </div>

        <h1 className="h1">{translations[language].hello}</h1>
        <p className="lead">{translations[language].welcome}</p>

        <p className="helper">{translations[language].change}</p>
      </div>
    </div>
  );
};

export default App;