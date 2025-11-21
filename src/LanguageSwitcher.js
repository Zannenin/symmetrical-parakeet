import React from "react";
import { useLanguage } from "./LanguageContext";
import "./styles.css";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <select
      className="lang-select"
      value={language}
      onChange={(e) => setLanguage(e.target.value)}
      aria-label="Select language"
    >
      <option value="en" style={{ color: "#000000" }}>English</option>
      <option value="ua" style={{ color: "#000000" }}>Українська</option>
      <option value="de" style={{ color: "#000000" }}>Deutsch</option>
      <option value="fr" style={{ color: "#000000" }}>Français</option>
      <option value="es" style={{ color: "#000000" }}>Español</option>
      <option value="it" style={{ color: "#000000" }}>Italiano</option>
      <option value="jp" style={{ color: "#000000" }}>日本語</option>
      <option value="cn" style={{ color: "#000000" }}>中文</option>
    </select>
  );
};

export default LanguageSwitcher;