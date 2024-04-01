function describe_city(city, country) {
    const def_country = "pakistan";
    if (country == def_country) {
        console.log(city + " is in " + def_country);
    }
    else {
        console.log(city + " is in " + country);
    }
}
describe_city("karachi", "pakistan");
describe_city("tokyo", "japan");
describe_city("lahore", "pakistan");
export {};
