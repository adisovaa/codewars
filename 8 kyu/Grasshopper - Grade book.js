function getGrade (s1, s2, s3) {
    let sumGrade = (s1 + s2 + s3) / 3
    
    if(sumGrade >= 90) {
      return 'A'
    } else if (sumGrade >= 80) {
      return 'B'
    } else if (sumGrade >= 70) {
      return 'C'
    } else if (sumGrade >= 60) {
      return 'D'
    } else if (sumGrade >= 0) {
      return 'F'
    } 
  }