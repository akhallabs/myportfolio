import { createI18n } from 'vue-i18n';
import en from './locales/en.json';
import ru from './locales/ru.json';
import tr from './locales/tr.json';
import tk from './locales/tk.json';

const getBrowserLocale = () => {
    const navigatorLocale =
        navigator.languages !== undefined
            ? navigator.languages[0]
            : navigator.language;
    if (!navigatorLocale) return 'en';
    const trimmedLocale = navigatorLocale.trim().split(/-|_/)[0].toLowerCase();

    const supportedLocales = ['en', 'ru', 'tr', 'tk'];
    if (supportedLocales.includes(trimmedLocale)) {
        return trimmedLocale;
    }
    return 'en';
};

export const i18n = createI18n({
    legacy: false,
    locale: getBrowserLocale(),
    fallbackLocale: 'en',
    messages: {
        en,
        ru,
        tr,
        tk
    }
});

export default i18n;
