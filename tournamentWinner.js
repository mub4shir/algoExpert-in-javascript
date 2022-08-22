// O(n) time | O(k) space, where n is number of competitions and k is the number of teams competing in these competitions
const homeTeamWon=1;
function tournamentWinner(competitions, results) {
    let currentBestTeam = "";
    const scores = {"": 0};
    for (let i = 0; i < competitions.length; i++) {
        const result=results[i];
        const [homeTeam, awayTeam]= competitions[i];
        const winningTeam= result === homeTeamWon ? homeTeam: awayTeam;
        //let winningTeam = results[i] === 0 ? competitions[i][1] : competitions[i][0];
        updateScore(winningTeam, 3, scores);
        if (scores[winningTeam] > scores[currentBestTeam])
            currentBestTeam = winningTeam;
    }
    return currentBestTeam;
}

function updateScore(team, points, scores) {
    if (!(team in scores))
        scores[team] = 0
    scores[team] += points;
}

const array = [["HTML", "C#"], ["C#", "Python"], ["Python", "HTML"]];
const results = [0, 0, 1];

console.log(tournamentWinner(array, results))

