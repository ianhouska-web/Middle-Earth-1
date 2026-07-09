                            // FETCH API
 // The Fetch API provides an Interface for fetching resources(including across the network). It is More powerful and flexible replacement for XMLHttpRequest.
 // how to use the Fetch command // example won't run in our terminal
const myHeaders = new Headers();
myHeaders.append("apikey", "322CdNl3L21IrgSG5R1o9bWOL5MST76C");

const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

try {
    const result = await fetch(`the website url code`, requestOptions);
    const resultObj = await result.json();
    console.log(JSON.stringify(resultObj, null, 2));
} catch (err) {
    console.error('Could not fetch currency data');
    throw err;
}

// Global Variables ----------------------------------------------------

let currencyData;

// Currency data -------------------------------------------------------

const getCurrencyConversionData = async () => {
    const headers = new Headers();
    headers.append("apikey", "322CdNl3L21IrgSG5R1o9bWOL5MST76C");
    const options = {
        method: "GET",
        redirect: 'follow',
        headers
    };
    const response = await fetch(`the website url code`, option);
    if(!response.ok) {
        throw new Error("Cannot fetch currency data.");
    } 
    currencyData = await response.json();
}

const getSalary = (amountUSD, currency) => {
    const amount = (currency === "USD") ? amountUSD : amountUSD * currencyData.rates[currency];
    const formatter = Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency
    });
    return formatter.format(amount);
}

// Validator Function

const isCurrencyCodeValid = function (code) {
    const currencyCodes = Object.keys(currencyData.rates);
    return (currencyCodes.indexOf(code) > -1);
}

// Application Commands

employee.salaryUSD = getInput("Annual Salary in USD:", isIntegerValid(1000, 1000000));
employee.localCurrency = getInput("Local currency (3 letter code): ", isCurrencyCodeValid);

// Logging Employee

const logEmployee = (employee) => {
    Object.entries(employee).forEach(entry => {
        if(entry[0] !== "salaryUSD" || entry[0] !== "localeCurrency") {
            console.log(`${entry[0]}: ${entry[1]}`);
        }
    });
    console.log(`Salary USD: ${getSalary(employee.salaryUSD, "USD")}`);
    console.log(`Local Salary: ${getSalary(employee.salaryUSD, employee.localCurrency)}`);

}

// Excuting Command

loadData()
   .then(getCurrencyConversionData)
   .then(main)
   .catch((err) => {
    console.error("Cannot complete startup");
    throw err;
   });