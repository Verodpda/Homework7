let currentDate = new Date();
let h2 = document.querySelector("h2");
let daysWeek =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let day = daysWeek[currentDate.getDay()];
let hour = currentDate.getHours();
let minutes = currentDate.getMinutes();
if (minutes > 10) {
h2.innerHTML = `${day} ${hour}:${minutes}`;
} else {
h2.innerHTML = `${day} ${hour}:0${minutes}`;
}