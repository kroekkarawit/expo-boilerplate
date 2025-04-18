import * as Localization from 'expo-localization';
import { I18n } from 'i18n-js';

const i18n = new I18n({
  en: {
    profile: "Profile",
    name: "Name",
    email: "Email",
    logout: "Logout",
    changeLanguage: "Change Language",
    changeTheme: "Change Theme",
    languageSwitched: "Language switched to English",
    themeSwitched: "Theme toggled",
  },
  fr: {
    profile: "Profil",
    name: "Nom",
    email: "Email",
    logout: "Déconnexion",
    changeLanguage: "Changer la langue",
    changeTheme: "Changer le thème",
    languageSwitched: "La langue est passée en français",
    themeSwitched: "Thème changé",
  }
});

// Configure the i18n instance
i18n.enableFallback = true;
i18n.locale = Localization.locale || 'en';

export default i18n;