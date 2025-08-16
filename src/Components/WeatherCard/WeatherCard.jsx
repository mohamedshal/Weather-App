import React, {
  useContext,
  useEffect,
} from 'react';
import moment from 'moment/min/moment-with-locales';
import 'moment/locale/ar-sa';
import { useTranslation } from 'react-i18next';
import { UserContext } from '../UserContext/UserContext';
function WeatherCard() {
  const { setDateTime,weatherData,dateTime, getWeatherdata, weatherImage,theLat,theLon} = useContext(UserContext);
    const { t, i18n } = useTranslation();
  // get weather data
    const updateTime = () => {
      moment.locale(i18n.language);
      const formattedTime = moment().format('dddd، D MMMM YYYY - h:mm:ss a');
      setDateTime(formattedTime);
    };
useEffect(() => {
  updateTime();
  getWeatherdata(theLat,theLon);
}, []);
  return (
    <div className="w-full p-[10px] rounded-[15px] shadow-[0_11px_1px_rgba(0,0,0,0.05)] relative" style={{ backgroundColor: 'rgb(28 52 91 / 36%)' }}>
      <div className="content">
        <div className="cityandtime flex items-end mb-3">
          <h1 className="mr-[20px] font-semibold">{t(`cities.${weatherData.city}`, weatherData.city)}</h1>
          <h5 className="mr-[20px]">{dateTime}</h5>
        </div>
        <hr />
        <div className="flex flex-col justify-between gap-10 items-center md:flex-row-reverse">
          <div className="degree-descr flex flex-col items-end mr-[20px] gap-[10px]">
            <div className="flex items-center" dir="rtl">
              <h1 className="!text-[50px]">{weatherData.degree}</h1>
              <img
                src={`https://openweathermap.org/img/wn/${weatherImage}@2x.png`}
                alt={weatherImage}
              />
            </div>
            <div className="dexcription text-md">
              <h6>{t(`weather.${weatherData.weatherCond}`, weatherData.weatherCond)}</h6>
            </div>
            <div className="min-max flex content-center gap-1 text-sm mt-2">
            <h5>{t("min")} : {weatherData.latitude}</h5>
            <span>|</span>
            <h5>{t("max")} : {weatherData.longitude}</h5>
          </div>

          </div>
          <i className="fa-solid fa-cloud text-[200px]"></i>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
