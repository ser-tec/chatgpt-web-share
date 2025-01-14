import { useStorage } from '@vueuse/core';
import { WritableComputedRef } from 'vue';
import { createI18n, type I18n, type Locale } from 'vue-i18n';

import EN from './locales/en-US.json';
import MS from './locales/ms-MY.json';
import ZH from './locales/zh-CN.json';
import IT from './locales/it-IT.json';

let i18n: I18n;

const init = () => {
  i18n = createI18n({
    legacy: false,
    locale: useStorage('language', 'it-IT').value,
    messages: {
      'en-US': {
        ...EN,
      },
      'ms-MY': {
        ...MS,
      },
      'zh-CN': {
        ...ZH,
      },
      'it-IT': {
        ...IT,
      },      
    },
  });
};

const setLocale = (locale: Locale): void => {
  (i18n.global.locale as WritableComputedRef<string>).value = locale;
};

init();

export { i18n, setLocale };
