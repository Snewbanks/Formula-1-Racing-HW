let Standings = document.getElementById("Standings")
let racers = document.getElementById("racers")

Standings.addEventListener('submit', function (event) {
    event.preventDefault();
    let yearValue = document.getElementById("Year").value;
    let seasonValue = document.getElementById("Season").value;
    console.log(yearValue);
    console.log(seasonValue);
    fetch(`https://ergast.com/api/f1/${yearValue}/${seasonValue}/driverStandings.json`)
        .then((res) => res.json())
        .catch(() => displayError())
    .then((data) => {
        console.log(data.MRData.StandingsTable.StandingsLists[0].DriverStandings)
        showRacers(data.MRData.StandingsTable.StandingsLists[0].DriverStandings)
        
})
})
function showRacers(racers) {
    racers.innerHTML = ''
    body.innerHTML = ''

    for (let racer of racers) {
        let newRow = document.createElement('tr');
        newRow.innerHTML = `
        <td>${racer.position}</td>
        <td>${racer.Driver.givenName} ${racer.Driver.familyName}</td>
        <td>${racer.Driver.nationality}</td>
        <td>${racer.Constructors[0].name}</td>
        <td>${racer.points}</td>`
        body.append(newRow)
    }
}