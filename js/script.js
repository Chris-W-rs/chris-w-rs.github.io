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

        listItem.appendChild(playerContainer);
        playerContainer.appendChild(playerImage).setAttribute("src", player.profileImage);
        playerContainer.appendChild(playerText).textContent = player.Name;
        
        // let dropList = listItem.appendChild(document.createElement("ul"));
        //     dropList.setAttribute("name", "Drops");
        //     dropList.appendChild(document.createElement("li")).textContent = player.Drop
        bingo2024.appendChild(listItem);
        }
    })
    .catch(console.error);
}
let checkbox2024 = document.getElementById('bingo2024');
checkbox2024.addEventListener('change', () => {
    if (checkbox2024.checked) bingoWinners2024();
    else bingo2024.innerHTML = "";
})
