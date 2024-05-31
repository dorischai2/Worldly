
function fetchCountryInfo() {
    const countryInput = document.getElementById('country').value;
    const apiUrl = `https://restcountries.com/v3.1/name/${countryInput}`;

    fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
        throw new Error('Country not found. Try again!');
        }
        return response.json();
    })
    .then(data => {
        const country = data[0];
        const countryData = `
        <p><strong>Name:</strong> ${country.name.common}</p>
        <p><strong>Capital:</strong> ${country.capital}</p>
        <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
        <p><strong>Area:</strong> ${country.area.toLocaleString()} km<sup>2</sup></p>
        <p><strong>Region:</strong> ${country.region}</p>
        <p><strong>Subregion:</strong> ${country.subregion}</p>
        <p><strong>Flag:</strong> <img src="${country.flags.svg}" alt="Flag" style="max-width: 200px;"></p>
        `;
        document.getElementById('country-data').innerHTML = countryData;
    })
    .catch(error => {
        console.error('Error fetching country data:', error);
        document.getElementById('country-data').innerHTML = 'Country not found. Try again!';
    });
}