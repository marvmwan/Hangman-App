const getPuzzleData = async (wordCount) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle 
    } else {
        throw new Error('Fetching was not done successfully')
    }
}
export {getPuzzleData as default}

// const getCountryData = async (countryCode) => {
//     const response = await fetch('http://restcountries.eu/rest/v2/all')

//     if (response.status === 200) {
//         const data = await response.json()
//         return data.find((country) => country.alpha2Code === countryCode)
//     } else {
//         throw new Error('Data was unable to be fetched successfully')
//     }
// }

// const getLocation = async () => {
//     const response = await fetch('http://ipinfo.io/json?token=e49e2baa6bbcd7')

//     if (response.status === 200) {
//         return response.json()
//     } else {
//         throw new Error('Location was unable to be fetched successfully')
//     }
// }

// const getCurrentCountry = async () => {
//     const location = await getLocation()
//     const country = await getCountryData(location.country)

//     return country
// }

// Old way using promises
// ------------------------------


// function getCountryName(countryCode){
//     return fetch('http://restcountries.eu/rest/v2/all', {}).then((response) => {
//         if (response.status === 200) {
//             return response.json()
//         } else {
//             throw new Error('The data was unable to be fetched')
//         }
//     }).then((countriesData) => {
//         const country = countriesData.find((country) => country.alpha2Code === countryCode)
//         return country
//     })
// }

// function getPuzzleData(wordCount){
//     return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`, {}).then((response) => {
//         if (response.status === 200){
//             return response.json()
//         } else {
//             throw new Error('The puzzle was unable to be fetched')
//         }
//     }).then((data) => {
//         return data.puzzle
//     })
// }

// function getLocation() {
//     return fetch('http://ipinfo.io/json?token=e49e2baa6bbcd7').then((response) => {
//         if (response.status === 200) {
//             return response.json()
//         } else {
//             throw new Error('Location was not able to be fetched')
//         }
//     })
// }

