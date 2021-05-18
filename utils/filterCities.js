module.exports = async (newCity, cities = []) => {

    const accentuated = 'àáäâãèéëêìíïîòóöôùúüûñçßÿœæŕśńṕẃǵǹḿǘẍźḧ·/_,:;'
    const notAccentuated = 'aaaaaeeeeiiiioooouuuuncsyoarsnpwgnmuxzh------'
    const regex = new RegExp(accentuated.split('').join('|'), 'g')

    const toLowerCaseNoSpaceAndNoSpecialCharacter = (city) => {
        return city.toString().toLowerCase().trim()
            .replace(regex, foundAccentedLetters => notAccentuated.charAt(accentuated.indexOf(foundAccentedLetters)))
            .replace(/[\s\W-]+/g, '-')
    }

    return cities.filter((city) => {
        return toLowerCaseNoSpaceAndNoSpecialCharacter(newCity) === toLowerCaseNoSpaceAndNoSpecialCharacter(city.name)
    });
}
