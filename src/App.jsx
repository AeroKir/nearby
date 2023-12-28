import { useState, useEffect } from 'react'
import './App.css'
import Select from './components/select/Select'
import requestService from './lib/http-service'
import { getCustomers, getRepairers } from './api/users';
import { getCountries, getCitiesInTheCountry } from './api/locations';

function App() {
    const [repairers, setRepairers] = useState([]);
    const [customers, setCustomers] = useState([]);

    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [cities, setCities] = useState([]);

  useEffect(() => {
    getCountries()
        .then(countries => {
            setCountries(countries);
        })
        .catch(e => console.log(e));
}, []);

  // useEffect(() => {
  //   fetch('http://localhost:16001/repairers')
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       setRepairers(data);
  //     });
  // }, []);

  // useEffect(() => {
  //   fetch('http://localhost:16001/customers')
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       setCustomers(data);
  //     });
  // }, []);

//   useEffect(() => {
//     getRepairers().then(data => setRepairers(data)).catch(e => console.error(e));

//     // setCustomers(data);
//   }, []);

//   useEffect(() => {
//     getCustomers().then(data => setCustomers(data)).catch(e => console.error(e));

//     // setCustomers(data);
//   }, []);

    async function handleCountrySelect(country) {
        setSelectedCountry(country);
        console.log(selectedCountry);

        await getCitiesInTheCountry(`countryId=${selectedCountry.country_id}`)
            .then(cities => {
                setCities(cities);
            })
            .catch(e => console.log(e));
    }

    // async function getCities(params) {
    //     await getCitiesInTheCountry(`countryId=${selectedCountry.country_id}`)
    //         .then(cities => {
    //             setCities(cities);
    //             return cities;
    //         })
    //         .catch(e => console.log(e));
    // }

    return (
        <div>
            <Select
                // isAsync
                // loadOptions={countries}
                optionsList={countries}
                optionKey={'country_name'}
                selectAriaLabel="Select country"
                onChange={handleCountrySelect}
            />
            {/* <div className="mb-4">
                {countries.map(country => (
                    <ul key={country.country_id}>
                        <li>{country.country_name}</li>
                    </ul>
                ))}
            </div> */}

            <div className="mb-4 mt-10">
                <Select
                    isAsync
                    loadOptions={cities}
                    // optionsList={cities}
                    optionKey={'city_name'}
                    selectAriaLabel="Select city"
                />
            </div>

            {/* <div>{selectedCountry}</div> */}


                {/* <h1>This is repairs</h1>
                {repairers.map((repairer) => (
                    <>
                    <ul key={repairer.id}>
                        <li>{repairer.name}</li>
                    </ul>
                    </>

                ))}

                <h1>This is customers from another microservice</h1>
                {customers.map((customer) => (
                    <>
                    <ul key={customer.id}>
                        <li>{customer.name}</li>
                    </ul>
                    </>

                ))} */}
        </div>
    )
}

export default App
