let eventBox = document.querySelector('#eventBox');
let workshopBtn = document.querySelector('#workshop');
let speakersBtn = document.querySelector('#speakers');
let eventDetailsBtn = document.querySelector('#eventDetailsBtn');
let workshopContent = document.querySelector('.workshops');
let speakersContent = document.querySelector('.speakers');
let eventDetailsContent = document.querySelector('.event_details');
let activeEventName = document.querySelector('.active-event-name');



workshopBtn.addEventListener('click', (event) => {
    event.stopPropagation(); // Stop propagation
    workshopContent.style.display = "flex";
    speakersContent.style.display = "none";
    eventDetailsContent.style.display = "none";
    activeEventName.innerHTML = "Workshops";
    // alert("workshop clicked");
})

speakersBtn.addEventListener('click', (event) => {
    event.stopPropagation(); // Stop propagation
    speakersContent.style.display = "flex";
    eventDetailsContent.style.display = "none";
    workshopContent.style.display = "none";
    activeEventName.innerHTML = "Speakers";
    // alert("speaker clicked");
})

eventDetailsBtn.addEventListener('click', () => {
    event.stopPropagation(); // Stop propagation
    speakersContent.style.display = "none";
    eventDetailsContent.style.display = "flex";
    workshopContent.style.display = "none";
    activeEventName.innerHTML = "Event Details";
    // alert("Event Details clicked");
})