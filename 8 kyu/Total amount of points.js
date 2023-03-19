function points(games) {
    let s = 0;
    for (let i = 0; i < games.length; ++i){
      if (games[i][0] > games[i][2])
        s += 3;
      if (games[i][0] == games[i][2])
        s += 1;
    }
    return s;
}



// function points(games) {
//     return games.reduce((current, element) => {
//         let arraySplit = element.split(':');
//         return (arraySplit[0] > arraySplit[1]) ? current += 3 : (arraySplit[0] < arraySplit[1]) ? current : current += 1;
//     }, 0);
// }