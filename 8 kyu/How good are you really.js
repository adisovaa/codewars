function betterThanAverage(classPoints, yourPoints) {
    let initial = 0;
     classPoints.map(item => {
       if (item < yourPoints) {
           initial ++;
         }
       });
     return initial > classPoints.length - initial;
}