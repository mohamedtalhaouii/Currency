
document.addEventListener('DOMContentLoaded' , function() {
    document.querySelector('form').onsubmit = function() {
    //You Can Get Your API Key From https://www.exchangerate-api.com/ for FREE (1500 API request)!
        fetch('https://v6.exchangerate-api.com/v6/10570b14e31df901009bbce2/latest/USD')
        .then(response => { return response.json()})
        .then (data => {
            const currency = document.querySelector('#currency').value.toUpperCase();
            const rate = data.conversion_rates[currency];
            if (rate !== undefined) {
                document.querySelector('#result').innerText = `1 USD is equal to ${rate.toFixed(3)} ${currency}.`;
            } else {
                document.querySelector('#result').innerText = `Invalid Currency`;
            }
        })
        .catch( Error => {
            console.log('Error;', Error);
        });
        return false;
    };
});