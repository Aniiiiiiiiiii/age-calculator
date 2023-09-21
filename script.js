function calculateAge() {
    const birthdateInput = document.getElementById("birthdate").value;
    const birthdate = new Date(birthdateInput);
    const currentDate = new Date();

    const ageInMilliseconds = currentDate - birthdate;
    const ageInYears = ageInMilliseconds / (365 * 24 * 60 * 60 * 1000);

    const resultElement = document.getElementById("result");
    resultElement.textContent = `Your age is approximately ${ageInYears.toFixed(2)} years.`;
}
