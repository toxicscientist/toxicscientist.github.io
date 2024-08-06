let projects = [
    {
        "name": "Taratech Discord Bot",
        "description": "My purely-utility Discord bot[DEFUNCT]",
        "image": "https://em-content.zobj.net/thumbs/120/twitter/322/spider-web_1f578-fe0f.png",
        "link": "https://replit.com/@Nerdopedia/Taratech",
        "tags": ["tools", "defunct"]
    },
    {
        "name": "KyokaSignal Discord Bot",
        "description": "A joke Discord bot made for the YKZA translators server[DEFUNCT]",
        "image": "https://em-content.zobj.net/thumbs/120/twitter/322/regional-indicator-symbol-letter-k_1f1f0.png",
        "link": "https://github.com/toxicscientist/KyokaSignal",
        "tags": ["tools", "defunct"]
    },
    {
        "name": "Payment Calculator",
        "description": "Calculate tips and split the bill so that your restaurant experience can be as smooth as possible(Svelte)",
        "image": "https://em-content.zobj.net/thumbs/120/twitter/322/money-with-wings_1f4b8.png",
        "link": "https://pay.nerdopedia.repl.co/",
        "tags": ["tools"]
    },
    {
        "name": "Tux",
        "description": "A bot for my friends chat app. Can greet people, respond to commands and even predict the future(Node.js)",
        "image": "https://em-content.zobj.net/thumbs/120/twitter/322/robot_1f916.png",
        "link": "https://taureon.byemc.xyz/chat/",
        "tags": ["tools"]
    },
    {
        "name": "TF2 Weapon Generator",
        "description": "A website that generates TF2 weapons",
        "image": "https://em-content.zobj.net/thumbs/120/twitter/322/dagger_1f5e1-fe0f.png",
        "link": "https://toxicscientist.github.io/TF2-Generator/",
        "tags": ["games"]
    },
    {
        "name": "Acronymizer",
        "description": "A website that takes in words and makes initialisms out of them",
        "image": "https://em-content.zobj.net/thumbs/120/twitter/322/input-latin-uppercase_1f520.png",
        "link": "https://toxicscientist.github.io/Acronymizer/",
        "tags": ["tools"]
    },
    {
        "name": "Standle",
        "description": "Wordle but using stands from Jojo's Bizarre Adventure",
        "image": "https://em-content.zobj.net/source/twitter/376/star_2b50.png",
        "link": "https://toxicscientist.github.io/Standle/",
        "tags": ["featured", "games"]
    },
    {
        "name": "Satisfy",
        "description": "A small web game where you add numbers to satisfy a condition",
        "image": "https://em-content.zobj.net/source/twitter/376/heavy-equals-sign_1f7f0.png",
        "link": "https://toxicscientist.github.io/Satisfy/",
        "tags": ["featured", "games"]
    },
    {
        "name": "Anything but Metric",
        "description": "A web app that lets you turn units into easier-to-understand comparisons",
        "image": "https://em-content.zobj.net/source/twitter/403/straight-ruler_1f4cf.png",
        "link": "https://toxicscientist.github.io/Anything-but-Metric/",
        "tags": ["featured", "tools"]
    }
];

const splashChoices = [
    "The true nerd was the friends we met along the way",
    "From Nerdopedia, the Nerd Encyclopedia",
    "8/10 - Not enough fight scenes",
    "8/10 - Not enough reviews",
    ":)",
    "...?",
    "...!",
    "- A portmanteau of \"Nerd\" and \"Encyclopedia\"",
    "404 - Splash not found!",
    "Nerdopedia",
    "Now available for the new Nintendo 3DS!",
    "Featuring Dante from the Devil May Cry series!",
    "& Watch",
    "Deluxe!",
    "Clbuttic",
    "I may be stupid...",
    "Clear your history!",
    "Limited edition",
    "h",
    "Reload for better splash message",
    "200% of your daily recommended dose of hyperbole!",
    "undefined",
    "😂 WHO DID THIS 😂",
    "...but nobody came",
    "/nɜrdəˈpidiə/",
    "[Object object]",
    "Ah, a visitor",
    "🤓☝erm what the sigma",
    "Domain Expansion",
    "Sick, Wicked Sick",
    "[0]",
    "How soon, Miss Frieren?",
    "what a wonderful duwang",
    "Do you find it risible when I say the name...",
    "Are these \"projects\" in the room with us right now?"
];
let splash = splashChoices[Math.round(Math.random() * (splashChoices.length - 1))];
var splashDiv = document.getElementById('splash');
splashDiv.innerHTML = splash;

const gradientEnd = [
    "0F142B",
    "33033D",
    "301934",
    "20253C",
    "000000",
    "1E0342",
    "1B2F11"
];
let gradient = gradientEnd[Math.round(Math.random() * (gradientEnd.length - 1))];
var body = document.body
body.setAttribute('style', `background-image: linear-gradient(${Math.floor(Math.random() * (256 - 8) + 8)}deg, #20252C, #${gradient});`)

function setTab(tab) {
    mainsec = ''
    tagged[tab.toString()].forEach(edit)
}
let mainsec = ''
let tagColours = {
    'featured': '#ff800088',
    'tools': '#80bb0066',
    'games': '#0080ff66',
}
function edit(item) {
    console.log(item)
    mainsec += `
                    <a class="project" href="${item.link}">
                        <button class="button" style="display: flex; width: 100%; height: 20%; background-color: ${tagColours[item.tags[0]]}">
                            <div class="project-icon"><img class="project-image" src="${item.image}" width=120px height=120px style="border-radius: 1%; padding: 20px;" /></div>
                            <div><h4 style="text-align: left;">${item.name}</h4><div style="text-align: left">${item.description}</div></div>
                        </button>
                    </a><br>
                    `
    document.getElementById("flex").innerHTML = mainsec;
}
function tag(item) {
    item.tags.forEach((j) => { tagged[j].push(item) })
    tagged['all'].push(item)
}
let tagged = {};
tagged['all'] = []
let projs = Object.values(projects)
projs.forEach(getTags);
projs.forEach(tag);
function getTags(item) {
    item.tags.forEach((j) => { tagged[j] = [] })
}
Object.keys(tagged).forEach((i) => {
    document.getElementById('tabs').innerHTML += `<button class="tab" onclick="setTab('${i}')" style="background-color:${i !== "all" ? tagColours[i] : '#ffffff55'}">${i.toUpperCase()}</button>`
})
setTab('all')

var age = Math.floor((Date.now() - 1181681999000) / 31557600000) // 31557600000ms is a year and 1181681999000 is when i was born in unix time :D
document.getElementById("age").innerText = document.getElementById("age").innerText.replace("??", age)