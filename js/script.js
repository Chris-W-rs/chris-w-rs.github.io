let bingo2024 = document.getElementById("winners2024");
const winners2024 = new Request("js/bingo-winners-2024.json");

function bingoWinners2024() {
    fetch(winners2024)
    .then((response) => response.json())
    .then((data) => {
        for (const player of data.winners2024) {
        const listItem = document.createElement("li");
        let playerImage = document.createElement('img');
        let playerContainer = document.createElement('div');
        let playerText = document.createElement('p');
        
        playerContainer.style.marginRight = '2rem';
        //listItem.appendChild(playerContainer);
        playerContainer.appendChild(playerImage).setAttribute("src", player.profileImage);
        playerContainer.appendChild(playerText).textContent = player.Name;
        
        // let dropList = listItem.appendChild(document.createElement("ul"));
        //     dropList.setAttribute("name", "Drops");
        //     dropList.appendChild(document.createElement("li")).textContent = player.Drop
        bingo2024.appendChild(playerContainer);
        }
    })
    .catch(console.error);
}
let checkbox2024 = document.getElementById('bingo2024');
checkbox2024.addEventListener('change', () => {
    if (checkbox2024.checked) bingoWinners2024();
    else bingo2024.innerHTML = "";
})

// async function callActivity(player) { 
//     let playerResponse = fetch("https://secure.runescape.com/m=adventurers-log/rssfeed?searchName="+player, {
//         headers: {
//         'Access-Control-Allow-Origin': "*",
//         'Access-Control-Allow-Headers':'Origin, X-PINGOTHER, Content-Type, Accept, Authorization',
//         'Access-Control-Allow-Methods': 'POST, GET, OPTIONS'
//     }
//     });
//     let playerData = await response.text();
//     console.log(playerData)
//     playerResponse.then(response => response.text())
//     .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
//     .then(data => console.log(data))
// }
// callActivity('rocter');

async function wildernessEvent() {
    const response = await fetch("https://runescape.wiki/w/Wilderness_Flash_Events");
    let wildyEvent = await response.text();
    console.log(wildyEvent);
}
wildernessEvent();
  