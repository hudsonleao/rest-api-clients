module.exports = (dateOfBirth) => {

    return Math.floor(Math.ceil(Math.abs(new Date(dateOfBirth).getTime() - new Date().getTime()) / (1000 * 3600 * 24)) / 365.25);

}