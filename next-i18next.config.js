/** @type {import('next-i18next').UserConfig} */
const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'en',          // язык по умолчанию
    locales: ['en', 'ru', 'hu'],  // доступные языки
  },
  localePath: path.resolve('./public/locales'), // путь к JSON с переводами
};
