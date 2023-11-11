const countriesData = [
    { country: 'China', capital: 'Beijing', population: 1444216107 },
    { country: 'India', capital: 'New Delhi', population: 1380004385 },
    { country: 'United States', capital: 'Washington, D.C.', population: 331002651 },
    { country: 'Indonesia', capital: 'Jakarta', population: 273523615 },
    { country: 'Pakistan', capital: 'Islamabad', population: 220892340 },
    { country: 'Brazil', capital: 'Brasília', population: 212559417 },
];

const filteredCountries = countriesData.filter(country => country.population > 1000000000);

module.exports = filteredCountries;
