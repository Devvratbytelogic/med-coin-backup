import React, { useEffect } from "react";

const Translator = () => {
  useEffect(() => {
    if (!document.getElementById("google-translate")) {
      const script = document.createElement("script");
      script.id = "google-translate";
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(script);
    }

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );
    };
  }, []);

  return <div id="google_translate_element" />;
};

export default Translator;
