const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const height = parseFloat(document.querySelector('#height').value);
    const weight = parseFloat(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    // Validation
    if (height === '' || height <= 0 || isNaN(height)) {
        results.innerHTML = `⚠️ Please enter a valid height`;
        results.style.color = "#ff4d4d";
    } 
    else if (weight === '' || weight <= 0 || isNaN(weight)) {
        results.innerHTML = `⚠️ Please enter a valid weight`;
        results.style.color = "#ff4d4d";
    } 
    else {

        // BMI Formula
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        let message = "";

        if (bmi < 18.6) {
            message = "Under Weight";
            results.style.color = "#ffd166";
        } 
        else if (bmi >= 18.6 && bmi <= 24.9) {
            message = "Normal Weight";
            results.style.color = "#06d6a0";
        } 
        else {
            message = "Over Weight";
            results.style.color = "#ff6b6b";
        }

        results.innerHTML = `
            <div>
                Your BMI is <span>${bmi}</span>
                <br>
                <small>${message}</small>
            </div>
        `;
    }
});