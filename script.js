const sentences = [
    "Happy 19:09",
    "Happy 09:19",
    "Olive you",
    "I love you sooooooooooooo much",
    "Missing you so damn much",
    "I love you to infinity and beyond",
    "There is a raven who misses you from 5332 miles away",
    "There is a raven who misses you from 5 hours and 30 minutes ahead of your time",
    "Wherever you go, Chitto will follow along in your backpack",
    "Everything feels incomplete when you are not around me",
    "I want to be there by your side, holding your hand and doing all the fun things together",
    "Next time, let’s go to a concert of our favorite music bands together",
    "If you see some places you’d like us to visit together, please make a list for our future plans",
    "Missing you while listening to our favorite songs and working",
    "Hope you miss me while listening to our favorite songs",
    "Chitto misses Ma without a split-second pause",
    "Don’t forget to drink water every hour",
    "If you don’t like the food, please eat at least a little for your health",
    "Please don’t wander alone too far from your family for your safety",
    "If you are unhappy about Bad Ju Ju’s bad manners, please let it go for now. Keep it in your mind and discuss it with me when you get back. I’ll always be on your side",
    "Don’t forget to bring your inhaler in case of bad smell",
    "If you are going to play in the water at the beach, don’t go too deep",
    "Let’s go grab Ko Ko Fu when you get back!",
    "Please don’t be lazy to take an energy pill when you’re not feeling well",
    "If your energy is low or you need me, feel free to call me anytime",
    "Feel free to shout out “Chitto” and call me whenever you need me",
    "There is a guy waiting for you who wants to hug you as tight as he can when you get back",
    "Going and doing site supervision without you feels spiritless",
    "Bogushiphawt",
    "Please come back ASAP and complete my daily life"
];

function getTodaysIndex() {
    const startDate = new Date("2024-06-17T00:00:00Z"); // Replace with your start date
    const today = new Date();
    const diffTime = Math.abs(today - startDate);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    return diffDays % sentences.length;
}

function showMessage() {
    const index = getTodaysIndex();
    const messageElement = document.getElementById("message");
    messageElement.innerText = sentences[index];
    messageElement.style.display = "block"; // Show message
}
