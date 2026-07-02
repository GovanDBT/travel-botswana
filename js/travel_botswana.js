// access elements
const searchResultContainer = document.getElementById('result');
const searchButton = document.getElementById('searchBtn');
const clearButton = document.getElementById('clearBtn');

// event handlers
searchButton.addEventListener('click', findDestination);
clearButton.addEventListener('click', clearSearch);

// search destination
function findDestination() {
    const searchResult = document.getElementById('searchResult').value.toLowerCase();

    if (searchResult) {
        fetch('travel_botswana_api.json')
            .then(response => response.json())
            .then(data => {
                if (searchResult === "countries" || searchResult === "country") {
                    searchResultContainer.innerHTML = "";
                    searchResultContainer.innerHTML = '<h1 style="margin-top:30px;">Search Result</h1>';
                    const destinationCardWrapper = document.createElement('div');
                    destinationCardWrapper.classList.add('destination-card-wrapper');
                    for (country of data.countries) {
                        for (city of country.cities) {
                            const destinationCard = document.createElement('div');
                            destinationCard.innerHTML += `<img src='${city.imageUrl}' />`;
                            destinationCard.innerHTML += `<h3>${city.name}</h3>`;
                            destinationCard.innerHTML += `<p>${city.description}</p>`;
                            destinationCard.classList.add('destination-card');
                            destinationCardWrapper.appendChild(destinationCard);
                        }
                    }
                    searchResultContainer.style.width = "fit-content";
                    searchResultContainer.appendChild(destinationCardWrapper);
                }


                
                if (searchResult === "temples" || searchResult === "temple") {
                    searchResultContainer.innerHTML = "";
                    searchResultContainer.innerHTML = '<h1>Search Result</h1>';
                    const destinationCardWrapper = document.createElement('div');
                    destinationCardWrapper.classList.add('destination-card-wrapper');
                    for (temple of data.temples) {
                        const destinationCard = document.createElement('div');
                        destinationCard.innerHTML += `<img src='${temple.imageUrl}' />`;
                        destinationCard.innerHTML += `<h3>${temple.name}</h3>`;
                        destinationCard.innerHTML += `<p>${temple.description}</p>`;
                        destinationCard.classList.add('destination-card');
                        destinationCardWrapper.appendChild(destinationCard);
                    }
                    searchResultContainer.appendChild(destinationCardWrapper);
                }

                if (searchResult === "beaches" || searchResult === "beach") {
                    searchResultContainer.innerHTML = "";
                    searchResultContainer.innerHTML = '<h1>Search Result</h1>';
                    const destinationCardWrapper = document.createElement('div');
                    destinationCardWrapper.classList.add('destination-card-wrapper');
                    for (beach of data.beaches) {
                        const destinationCard = document.createElement('div');
                        destinationCard.innerHTML += `<img src='${beach.imageUrl}' />`;
                        destinationCard.innerHTML += `<h3>${beach.name}</h3>`;
                        destinationCard.innerHTML += `<p>${beach.description}</p>`;
                        destinationCard.classList.add('destination-card');
                        destinationCardWrapper.appendChild(destinationCard);
                    }
                    searchResultContainer.appendChild(destinationCardWrapper);
                }
            })
            .catch(error => {
                console.error('Failed to find destination: ', error);
                alert('ERROR MESSAGE: Could not find destination!')
            });
    };
}

function clearSearch() {
    document.getElementById('searchResult').value = "";
    location.reload();
}