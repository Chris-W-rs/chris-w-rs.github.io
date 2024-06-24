let trackedData = fetch('');
console.log(trackedData);
async function wildernessEvent() {
    const response = await fetch("https://x.com/i/flow/login?redirect_after_login=%2Fjagexclock");
    let wildyEvent = await response.text();
    console.log(wildyEvent);
}
wildernessEvent();