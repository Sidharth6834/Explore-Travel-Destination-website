const destinations = [
    {
        name: "Maldives",
        image: "mld.jpg",
        description: "A tropical paradise with crystal clear waters and beautiful coral reefs.",
        climate: "tropical",
        activities: ["beach", "scuba diving"],
        budget: "luxury",
        popularActivities: ["Snorkeling", "Sunbathing", "Water sports"],
        localAttractions: ["Malé Atoll", "Hulhumale Island", "Banana Reef"],
        averageTemperature: "27°C - 32°C",
        travelTips: [
            "Visit during the dry season (November to April).",
            "Pack light, breathable clothing.",
            "Respect local customs and dress modestly outside resorts."
        ],
    },
    {
        name: "Swiss Alps",
        image: "swiss.jpg",
        description: "A perfect destination for winter sports and breathtaking mountain views.",
        climate: "cold",
        activities: ["skiing", "hiking"],
        budget: "luxury",
        popularActivities: ["Skiing", "Snowboarding", "Hiking"],
        localAttractions: ["Matterhorn", "Jungfrau Region", "Lake Geneva"],
        averageTemperature: "-5°C - 5°C (Winter), 10°C - 20°C (Summer)",
        travelTips: [
            "Bring proper winter gear for outdoor activities.",
            "Buy a Swiss Travel Pass for easy access to public transport.",
            "Try the local Swiss chocolates and cheese."
        ],
    },
    {
        name: "Kyoto, Japan",
        image: "kyto.jpg",
        description: "Explore ancient temples, beautiful gardens, and the vibrant culture of Kyoto.",
        climate: "moderate",
        activities: ["cultural", "sightseeing"],
        budget: "midrange",
        popularActivities: ["Temple visits", "Cherry blossom viewing", "Tea ceremonies"],
        localAttractions: ["Kinkaku-ji", "Arashiyama Bamboo Grove", "Fushimi Inari Shrine"],
        averageTemperature: "10°C - 25°C",
        travelTips: [
            "Visit in spring for cherry blossoms or autumn for fall colors.",
            "Respect temple etiquette: remove shoes when required.",
            "Learn a few basic Japanese phrases for a better experience."
        ],
    },
    {
        name: "Thailand",
        image: "thailand.jpg",
        description: "Famous for its tropical beaches, ornate temples, and delicious street food.",
        climate: "tropical",
        activities: ["beach", "cultural"],
        budget: "budget",
        popularActivities: ["Island hopping", "Street food tours", "Temple visits"],
        localAttractions: ["Phuket", "Bangkok Grand Palace", "Chiang Mai"],
        averageTemperature: "24°C - 35°C",
        travelTips: [
            "Try local dishes like Pad Thai and Som Tum.",
            "Respect cultural sites and dress modestly when visiting temples.",
            "Bargaining is common in local markets."
        ],
    },
    // Add more destinations as needed
];

// Function to display destinations
function displayDestinations(filter = {}) {
    const destinationList = document.getElementById('destination-list');
    destinationList.innerHTML = '';

    const filteredDestinations = destinations.filter(dest => {
        const matchesClimate = filter.climate ? dest.climate === filter.climate : true;
        const matchesActivity = filter.activity ? dest.activities.includes(filter.activity) : true;
        const matchesBudget = filter.budget ? dest.budget === filter.budget : true;
        return matchesClimate && matchesActivity && matchesBudget;
    });

    filteredDestinations.forEach(destination => {
        const card = document.createElement('div');
        card.classList.add('destination-card');
        card.innerHTML = `
            <img src="${destination.image}" alt="${destination.name}">
            <div class="destination-info">
                <h2>${destination.name}</h2>
                <p>${destination.description}</p>
                <button onclick="showMoreInfo('${destination.name}')">More Info</button>
                <div class="hidden" id="info-${destination.name}">
                    <p><strong>Climate:</strong> ${destination.climate}</p>
                    <p><strong>Popular Activities:</strong> ${destination.popularActivities.join(', ')}</p>
                    <p><strong>Local Attractions:</strong> ${destination.localAttractions.join(', ')}</p>
                    <p><strong>Average Temperature:</strong> ${destination.averageTemperature}</p>
                    <p><strong>Travel Tips:</strong></p>
                    <ul>
                        ${destination.travelTips.map(tip => `<li>${tip}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
        destinationList.appendChild(card);
    });
}

// Function to show more info
function showMoreInfo(destinationName) {
    const infoDiv = document.getElementById(`info-${destinationName}`);
    infoDiv.classList.toggle('hidden');
}

// Event listeners for filters
document.getElementById('climate-filter').addEventListener('change', (e) => {
    displayDestinations({ climate: e.target.value });
});

document.getElementById('activity-filter').addEventListener('change', (e) => {
    displayDestinations({ activity: e.target.value });
});

document.getElementById('budget-filter').addEventListener('change', (e) => {
    displayDestinations({ budget: e.target.value });
});

// Initial display of all destinations
displayDestinations();
document.getElementById('faq-link').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default link behavior
    document.getElementById('faqs').scrollIntoView({ behavior: 'smooth' });
});
function toggleContactForm() {
    const contactContainer = document.getElementById('contact');
    contactContainer.style.display = contactContainer.style.display === 'none' || contactContainer.style.display === '' ? 'block' : 'none';
}