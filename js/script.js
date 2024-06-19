let bingo2024 = document.getElementById("winners2024");
const winners2024 = new Request("js/bingo-winners-2024.json");

fetch(winners2024)
.then((response) => response.json())
.then((data) => {
    for (const player of data.winners2024) {
    const listItem = document.createElement("li");
    listItem.appendChild(document.createElement("strong")).textContent =
        player.Name;
    let dropList = listItem.appendChild(document.createElement("ul"));
        dropList.setAttribute("name", "Drops");
        dropList.appendChild(document.createElement("li")).textContent = player.Drop
    bingo2024.appendChild(listItem);
    }
})
.catch(console.error);

let bingoWinners2024 = document.getElementById('bingo2024');
bingoWinners2024.addEventListener('change', () => {
    if (bingoWinners2024.checked) bingo2024.style.visibility = 'visible';
    else bingo2024.style.visibility = 'hidden';
})
