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
            rankings.push(Array(aux).fill(count));
            rankings = rankings.flat();
            i = i + aux - 1;
        }
        if(i == ranked.length - 1){
            count += 1;
            rankings.push(count);
        }
    }
    console.log(rankings)
    
    let j = ranked.length-1;
    for(let i = 0; i < player.length; i++){
        while(player[i] >= ranked[j] && j > 0){
            j--;
        }
        while(j >= 0){
            if(player[i] < ranked[ranked.length-1]){
                count += 1;
                players_index.push(count);
                break;
            }
            if(player[i] >= ranked[j]){
                players_index.push(rankings[j]);
                break;
            }
            if(player[i] == ranked[j+1] || player[i] > ranked[j+1]){
                players_index.push(rankings[j+1]);
                break;
            }
        }    
    }
    
    console.log(players_index)
    return players_index;
}
climbingLeaderboard([1],[1,1])