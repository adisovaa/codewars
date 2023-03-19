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