// ----- WINDOW -----
const alertBtn = document.getElementById("alertBtn");
alertBtn.addEventListener("click", () => {
    window.confirm("do you want to delete ");
});

const confirmBtn = document.getElementById("confirmBtn");
confirmBtn.addEventListener("click", () => {
    if (window.confirm("Do you want to continue?")) {
        for(let i =1; i<=10;i++){document.write(i,'<br>')}
    } else {
        console.log("User pressed Cancel");
    }
});

// ----- REDIRECT -----
const redirectBtn = document.getElementById("redirectBtn");
redirectBtn.addEventListener("click", () => {
    window.location.href = "https://www.google.com";
});

// ----- HISTORY -----
const historyBackBtn = document.getElementById("historyBackBtn");
historyBackBtn.addEventListener("click", () => {
    history.back();
});

// ----- NAVIGATOR -----
const browserInfo = document.getElementById("browserInfo");
browserInfo.innerHTML = `
    Browser: ${navigator.appName} <br>
    Platform: ${navigator.platform} <br>
    User-agent: ${navigator.userAgent}
`;

// ----- SCREEN -----
const screenInfo = document.getElementById("screenInfo");
screenInfo.innerHTML = `
    Screen width: ${screen.width} <br>
    Screen height: ${screen.height} <br>
    Color depth: ${screen.colorDepth}
`;

// ----- LOCATION -----
const locationInfo = document.getElementById("locationInfo");
locationInfo.innerHTML = `
    Current URL: ${window.location.href} <br>
    Hostname: ${window.location.hostname} <br>
    Protocol: ${window.location.protocol}
`;

// ----- SETTIMEOUT & SETINTERVAL -----
setTimeout(() => {
    console.log("This runs after 2 seconds (setTimeout)");
}, 2000);

let intervalId = setInterval(() => {
    console.log("Repeating every 1 second (setInterval)");
}, 1000);

setTimeout(() => clearInterval(intervalId), 5000);
