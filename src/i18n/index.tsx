import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

//* Add all languages you need here
import navbarEN from './languages/en/navbar.json'
import navbarES from './languages/es/navbar.json';
import homeEN from './languages/en/home.json'
import homeES from './languages/es/home.json'
import aboutEN from './languages/en/aboutme.json'
import aboutES from './languages/es/aboutme.json'
import myworkEN from './languages/en/mywork.json'
import myworkES from './languages/es/mywork.json'
import myskillsEN from './languages/en/myskills.json'
import myskillsES from './languages/es/myskills.json'
import contactEN from './languages/en/contacme.json'
import contactES from './languages/es/contactme.json'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      EN: {
        navbar: navbarEN,
        home: homeEN,
        aboutme: aboutEN,
        mywork: myworkEN,
        myskills: myskillsEN,
        contact: contactEN
      },
      ES: {
        navbar: navbarES,
        home: homeES,
        aboutme: aboutES,
        mywork: myworkES,
        myskills: myskillsES,
        contact: contactES
      }
    },
    lng: 'EN',
    fallbackLng: 'EN',
    ns: ['navbar'],
    defaultNS: 'navbar',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;