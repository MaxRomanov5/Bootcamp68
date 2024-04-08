import { useState, useMemo } from "react";
import countries from "../../assets/countries.json";

function CountryList() {
    const [count, setCount] = useState(0);

    function getNumericCountries(countries) {
        console.log("map");
        return countries.map((item, idx) => {
            return `${idx + 1}. ${item}`;
        });
    }
    const numericCountries = useMemo(
        () => getNumericCountries(countries),
        [countries]
    );
    // const numericCountries = getNumericCountries(countries);
    // console.log(numericCountries);
    return (
        <>
            <button
                type="button"
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                Click me
            </button>
            <ul>
                {numericCountries.map((item) => {
                    return <li>{item}</li>;
                })}
            </ul>
        </>
    );
}

export default CountryList;
