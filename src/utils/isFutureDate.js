function isFutureDate(unixTime) {
    const currentDate = new Date();
    const inputDate = new Date(unixTime * 1000);

    return inputDate > currentDate;
}

export default isFutureDate