function climbingLeaderboard(ranked, player) {
    // Write your code here
    let players_index = [];
    let ranked_set = [...new Set([...ranked])];
    let j = ranked_set.length-1;
    for(let i = 0; i < player.length; i++){
        console.log(j)
        while(player[i] >= ranked_set[j] && j > 0){
            j--;
        }
        while(j >= 0){
            if(player[i] < ranked_set[ranked_set.length-1]){
                players_index.push(ranked_set.length+1);
                break;
            }
            if(player[i] >= ranked_set[j]){
                players_index.push(j+1);
                break;
            }
            if(player[i] == ranked_set[j+1] || player[i] > ranked_set[j+1]){
                players_index.push(j+2);
                break;
            }
        }    
    }
    
    console.log(players_index)
    return players_index;
}
climbingLeaderboard([100, 90, 90, 80, 75, 60],[50, 65, 77, 90, 102])