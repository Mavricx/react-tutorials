import { useState, useEffect } from 'react';



function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.min.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data)
    }, [currency])

    return data;
}

export default useCurrencyInfo;
// This custom hook, useCurrencyInfo, fetches currency information from a public API based on the provided currency code. It uses the useState hook to manage the state of the fetched data and the useEffect hook to perform the fetch operation when the component mounts or when the currency code changes. The fetched data is then returned for use in other components.