// Array of spooky fortunes
const fortunes = [
    "A black cat will cross your path soon...",
    "Beware the shadow lurking in the dark...",
    "Someone is watching you... or are they?",
    "A spooky surprise awaits you this Halloween!",
    "Fortune favors the bold... but beware!",
    "You’ll meet a mysterious stranger under the full moon.",
    "Tonight, you may hear a ghostly whisper...",
    "Darkness and mystery lie ahead…",
    "A lost soul may try to contact you soon.",
    "Prepare for a Halloween night you’ll never forget!",
    "Your path will cross with something supernatural...",
    "An old friend may visit you… from the other side.",
    "You may uncover a secret best left in the shadows.",
    "A chilling wind will bring mysterious news your way.",
    "Watch out for glowing eyes in the darkness tonight.",
    "A cryptic message awaits you under the full moon.",
    "You will find something you thought lost long ago.",
    "The spirits have chosen you for a mysterious task.",
    "Tonight, beware the mirror – it may show more than your reflection.",
    "Someone is thinking of you… but they may not be alive.",
    "A forgotten memory will resurface soon.",
    "You are not alone tonight; spirits gather around.",
    "The next stranger you meet may not be entirely human.",
    "A shadow will follow you at the stroke of midnight.",
    "Beware of the whispering wind; it carries secrets.",
    "The sound of footsteps in the night… is it just the wind?",
    "A peculiar dream will hold answers to your questions.",
    "You will feel a chill when someone watches you.",
    "The spirits are restless tonight; they seek someone.",
    "Beware a flickering light – it may be more than a malfunction.",
    "Your footsteps will echo louder than usual tonight.",
    "A ghostly presence lingers close by.",
    "You will see something out of the corner of your eye.",
    "Someone from your past has unfinished business with you.",
    "An object in your house may not be what it seems.",
    "Tonight, your reflection may not match your movements.",
    "The sound of laughter in the dark – was it real?",
    "Someone or something waits for you in the shadows.",
    "Be cautious of doors that creak open on their own.",
    "You may encounter an apparition in a strange place.",
    "An icy touch will brush against you when you least expect it.",
    "You will hear whispers that no one else can.",
    "Beware the next mirror you look into – it holds secrets.",
    "You may hear your name called from an empty room.",
    "A spirit follows you, seeking closure.",
    "Something ancient stirs nearby, longing to be found.",
    "Tonight, the line between the living and the dead thins.",
    "The spirit world has a message, if you dare to listen.",
    "You may find an unexpected gift… but at a price.",
    "An old song will bring back memories long forgotten.",
    "You will sense a presence in an empty room.",
    "There’s a tale written in the dust of your home."
];

// Function to display a random fortune
function generateFortune() {
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    document.getElementById("fortune").innerText = randomFortune;
}

// Function to display today's date without additional text
function displayDate() {
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = today.toLocaleDateString(undefined, options);
    document.getElementById("date").innerText = formattedDate;
}

// Initialize date display on page load
displayDate();