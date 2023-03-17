function pathFinder(maze) {
    const size = maze.split("\n")[0].length;
    const visited = new Array((size + 1) * size);
    return solveMaze(maze, visited, size, 0);
  }
  
  function solveMaze(maze, visited, size, userPosition){
    
    if (userPosition === maze.length - 1) {
      return true;
    } else {
      let result;
      visited[userPosition] = true;
      
      const allSteps = [userPosition - (size + 1), //up
                      userPosition + 1,    //right
                      userPosition + (size + 1),  //down
                      userPosition - 1];   //left
  
      const possibleSteps = allSteps.filter(pos => pos > 0 && 
                     pos < maze.length && 
                     maze[pos] !== 'W' && 
                     !visited[pos] && 
                     maze[pos] !== '\n');
      
      for (const step of possibleSteps) {
        result = solveMaze(maze, visited, size, step);
        if (result) return result;
      }
      return false;
    }
  }
  