// import the original type declarations
import "react-i18next";
// import all namespaces (for the default language, only)
import common from "../../public/locales/en.json";

// react-i18next versions lower than 11.11.0
declare module "react-i18next" {
  // and extend them!
  interface Resources {
    common: typeof common;
  }
}

declare module "i18next" {
  interface CustomTypeOptions {
    returnNull: false;
  }
}

// react-i18next versions higher than 11.11.0
declare module "react-i18next" {
  // and extend them!
  interface CustomTypeOptions {
    // custom namespace type if you changed it
    resources: {
      common: typeof common;
    };
  }
}
