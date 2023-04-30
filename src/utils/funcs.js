const calculateAge = (birth_date) => {
    const year = parseInt(birth_date.substring(0, 4));
    const month = parseInt(birth_date.substring(4, 6));
    const day = parseInt(birth_date.substring(6, 8));
    const dateOfBirth = new Date(year, month - 1, day); // Note: month is 0-indexed in JavaScript

    const now = new Date(); // get current date
    const ageInMs = now.getTime() - dateOfBirth.getTime(); // get age difference in milliseconds
    const ageInYears = ageInMs / 1000 / 60 / 60 / 24 / 365.25; // convert age difference to years (taking leap years into account)

    const age = Math.floor(ageInYears); // get age rounded down to nearest year

    return age
}

const calculateSecondsDays = (days) => {
    const secondsPerDay = 24 * 60 * 60; // number of seconds in a day (24 hours * 60 minutes * 60 seconds)

    const totalSeconds = days * secondsPerDay; // calculate total seconds

    return totalSeconds
}

module.exports = {
    calculateAge: calculateAge,
    calculateSecondsDays: calculateSecondsDays
}