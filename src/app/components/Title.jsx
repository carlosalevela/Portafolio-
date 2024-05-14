import { useTranslation } from 'react-i18next';
import { languageData } from '../data/data';


const Title = () => {
  const { i18n, t } = useTranslation();

  const onChangeLang = (e) => {
    const lang_code = e.target.value;
    i18n.changeLanguage(lang_code);
  };

  return (
    <header className='font-roboto flex flex-col items-center justify-center w-screen h-screen'>
      <p className="text-red-700 text-3xl font-bold">{t('title')}</p>
      
      <select
        defaultValue={i18n.language}
        onChange={onChangeLang}
        className='block mt-4 px-3 py-2 text-app-gray-black bg-app-white border border-app-gray-black rounded-lg focus:border-app-primary focus:ring-app-primary'
      >
        {languageData().map(({ code, label }) => (
          <option key={code} value={code}>
            {label}
          </option>
        ))}
      </select>
    </header>
  );
};

export default Title;

