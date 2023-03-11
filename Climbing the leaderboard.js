function climbingLeaderboard(ranked, player) {
    // Write your code here
    let rankings = [];
    let count = 0;
    let players_index = [];
    let aux = 1;
    for(let i = 0; i < ranked.length; i++){
        if(ranked[i+1]<ranked[i]){
            count += 1;
            rankings.push(count);
        }
        if(ranked[i] == ranked[i+1]){
            count += 1;
            while(ranked[i] == ranked[i+aux]){
                rankings.push(count);
                aux++;
            }
            i++;
        }
        if(i == ranked.length - 1){
            count += 1;
            rankings.push(count);
        }
    }
    console.log(rankings)
    console.log(rankings[ranked.indexOf(ranked[0])])
    for(let i = 0; i < player.length; i++){
        for(let j = 0; j < ranked.length; j++){
            if(player[i] >= ranked[j]){
                players_index.push(rankings[ranked.indexOf(ranked[j])]);
                break;
            }
            if(player[i] < ranked[ranked.length-1]){
                count += 1;
                players_index.push(count);
                break;
            }
        }
    }
    console.log(players_index)
    return players_index;
}
climbingLeaderboard([100, 100, 50, 40, 40, 40, 20, 10],[5, 25, 50, 120])