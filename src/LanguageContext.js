import React, { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

const translations = {
  en: {
    hello: "Hello",
    welcome: "Welcome to our site!",
    change: "Change language",
  },
  ua: {
    hello: "Привіт",
    welcome: "Ласкаво просимо на наш сайт!",
    change: "Змінити мову",
  },
  de: {
    hello: "Hallo",
    welcome: "Willkommen auf unserer Seite!",
    change: "Sprache ändern",
  },
  fr: {
    hello: "Bonjour",
    welcome: "Bienvenue sur notre site !",
    change: "Changer de langue",
  },
  es: {
    hello: "¡Hola!",
    welcome: "¡Bienvenido a nuestro sitio!",
    change: "Cambiar idioma",
  },
  it: {
    hello: "Ciao",
    welcome: "Benvenuto sul nostro sito!",
    change: "Cambia lingua",
  },
  jp: {
    hello: "こんにちは",
    welcome: "私たちのサイトへようこそ！",
    change: "言語を変更する",
  },
  cn: {
    hello: "你好",
    welcome: "欢迎来到我们的网站！",
    change: "切换语言",
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("appLanguage");
    if (savedLang && translations[savedLang]) {
      setLanguage(savedLang);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("appLanguage", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};