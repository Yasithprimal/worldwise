// import CityItem from "./CityItem";/
import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
import PropTypes from "prop-types";
import CountryItem from "./CountryItem";
import { useCities } from "../contexts/CitiesContext";

function CountryList() {
  const { cities, isLoading } = useCities();
  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);
  // console.log(countries);

  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first country by clicking on a city on the map" />
    );

  return (
    <div className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </div>
  );
}
CountryList.propTypes = {
  cities: PropTypes.array,
  isLoading: PropTypes.bool,
};

export default CountryList;
