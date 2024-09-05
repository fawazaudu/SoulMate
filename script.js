document.getElementById('demoSearchButton').onclick = function(event){
    
    const form = document.getElementById('demoSearchForm');
    if (form.style.display === 'none' || form.style.display === '') {
        form.style.display = 'block';
    } else {
        form.style.display = 'none'; 
    }
};

document.getElementById('demoSearchForm').onsubmit = function(event) {
    event.preventDefault(); // Prevent form from actually submitting

    const ageRange = document.getElementById('ageRange').value.split('-').map(Number);
    const attribute1 = document.getElementById('personTraits1').value.toLowerCase();
    const attribute2 = document.getElementById('personTraits2').value.toLowerCase();
    const gender = document.getElementById('gender').value.toLowerCase();

    const profiles = [
        { name: "Gungun", age: 27, attributes: "Funny, Charismatic", gender: "male" },
        { name: "Aria", age: 20, attributes: "Outgoing, Social", gender: "female" },
        { name: "Obi", age: 25, attributes: "Daring, Compassionate", gender: "male" },
        { name: "Shakes", age: 27, attributes: "Loyal, Dependable", gender: "male" },
        { name: "Emily", age: 35, attributes: "Funny, Generous", gender: "female" },
        { name: "Molly", age: 23, attributes: "Innovative, Loyal", gender: "female" },
        { name: "Harvey", age: 24, attributes: "Ambitious, Caring", gender: "male" },
        { name: "Alya", age: 22, attributes: "Artistic, Social", gender: "female" },
        { name: "Max", age: 22, attributes: "Daring, Social", gender: "male" },
        { name: "Roman", age: 30, attributes: "Funny, Extroverted", gender: "male" },
        { name: "Ben", age: 28, attributes: "Introverted, Artistic", gender: "male" },
        { name: "Tania", age: 21, attributes: "Independent, Social", gender: "female" },
        { name: "Ola", age: 24, attributes: "Thoughtful, Reliable", gender: "male" },
        { name: "Josh", age: 26, attributes: "Passionate, Creative", gender: "male" },
        { name: "Chelsea", age: 31, attributes: "Charismatic, Social", gender: "female" },
    ];
function calculateMatchScore(profile) {
        

        
        if (profile.age < ageRange[0] || profile.age > ageRange[1]) {
            return 0; // Age doesn't match, disqualify this profile
        }

        if (profile.gender !== gender) {
            return 0;
        }

        let score = 0;

        // Check if attributes match
        const attributes = profile.attributes.toLowerCase().split(', ');
        if (attributes.includes(attribute1)) {
            score += 50;
        }
        if (attributes.includes(attribute2)) {
            score += 50;
        }

        // Check if gender matches
        
        return score;
    }

    // Find the best match
    let bestMatch = null;
    let highestScore = 0;

    profiles.forEach(profile => {
        const score = calculateMatchScore(profile);
        if (score > highestScore) {
            highestScore = score;
            bestMatch = profile;
        }
    });

    // Display the best match
    if (bestMatch) {
        alert(`Best match: ${bestMatch.name}, Age: ${bestMatch.age}, Attributes: ${bestMatch.attributes}, Gender: ${bestMatch.gender}`);
    } else {
        alert('No match found');
    }
};

    