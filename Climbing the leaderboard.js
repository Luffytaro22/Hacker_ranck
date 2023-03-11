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
            aux = 1
            while(ranked[i] == ranked[i+aux]){
                aux++;
            }
            rankings = rankings.concat(count.toString().repeat(aux).split(''));
            i = i + aux - 1;
        }
        if(i == ranked.length - 1){
            count += 1;
            rankings.push(count);
        }
    }
    rankings = rankings.map(x => Number(x));
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
climbingLeaderboard([100, 90, 90, 80, 75, 60],[50, 65, 77, 90, 102])