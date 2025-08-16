import './App.css'
import  {
  useEffect,
  useState,
} from 'react';
import 'moment/locale/ar-sa';
import 'moment/locale/en-gb';
import { useTranslation } from 'react-i18next';
import { UserProvider} from "./Components/UserContext/UserContext"
import WeatherCard from './Components/WeatherCard/WeatherCard';
import moment from 'moment';
function App() {
  const {  i18n ,setDateTime} = useTranslation();
  
  let [language, setLanguage] = useState("ar");

  function handleLanguageClick() {
    if(language == "en") {
      setLanguage("ar")
      i18n.changeLanguage("ar");
      moment.locale("ar");
    }else{
      setLanguage("en");
      i18n.changeLanguage("en");
      moment.locale("en")
    }
      setDateTime(moment().format('dddd، D MMMM YYYY - h:mm:ss a'));
  }
  useEffect(() => {
    i18n.changeLanguage(language);
  }, []);
    // setLanguage(lang);
    // i18n.changeLanguage(lang);
    // moment.locale(lang); // مهمة لـ moment
    // updateTime();
  
  return (
    <>
      <UserProvider>
        <div dir={language=== "ar" ? "rtl": "ltr"} className="container text-white flex flex-col items-center">   
        <WeatherCard />
        <div className='flex justify-start w-full mt-2 gap-4'>
          <button onClick={() => handleLanguageClick('en')} className='!bg-transparent'>{language === "ar" ? "إنجليزي": "Arabic"}</button>
        </div>
      </div>
      </UserProvider>
    </>
  )
}

export default App;
