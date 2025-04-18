import * as Localization from 'expo-localization';
import { I18n } from 'i18n-js';

export const SUPPORTED_LANGUAGES: { label: string; value: string }[] = [
  { label: 'English', value: 'en' },
  { label: 'Français', value: 'fr' },
  { label: 'ไทย', value: 'th' },
];

const i18n = new I18n({
  en: {
    profile: 'Profile',
    name: 'Name',
    email: 'Email',
    logout: 'Logout',
    changeLanguage: 'Change Language',
    changeTheme: 'Change Theme',
    languageSwitched: 'Language switched to English',
    themeSwitched: 'Theme toggled',
  },
  fr: {
    profile: 'Profil',
    name: 'Nom',
    email: 'E-mail',
    logout: 'Déconnexion',
    changeLanguage: 'Changer la langue',
    changeTheme: 'Changer le thème',
    languageSwitched: 'La langue est passée en français',
    themeSwitched: 'Thème changé',
  },
  th: {
    profile: 'โปรไฟล์',
    name: 'ชื่อ',
    email: 'อีเมล',
    logout: 'ออกจากระบบ',
    changeLanguage: 'เปลี่ยนภาษา',
    changeTheme: 'เปลี่ยนธีม',
    languageSwitched: 'เปลี่ยนภาษาเป็นไทยแล้ว',
    themeSwitched: 'เปลี่ยนธีมเรียบร้อยแล้ว',
  },
});

// Configure the i18n instance
i18n.enableFallback = true;
i18n.locale = Localization.locale || 'en';

export default i18n;