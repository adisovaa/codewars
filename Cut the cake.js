function stringify(cake) {
    return cake.map(e => e.join('')).join('\n')
  }
    function isAValidSlice(cake, x, y, width, height) {
    if ((x + width) > cake[0].length) return false;
    if ((y + height) > cake.length) return false;
  
    console.log('Trying with', x, y, width, height);
    const slice = cake.slice(y, y + height).map(e => e.slice(x, x + width));
    const slice_str = stringify(slice);  
    console.log('The slice is ');
    console.log(slice_str);
    
    if (slice_str.match(/x/)) {
      console.log('Already cut');
      return false;
    }
    
    const numberOfO = (slice_str.match(/o/g) || []).length;
    if (numberOfO != 1) {
      console.log('Invalid', numberOfO);
      return false;
    }
    
    return slice_str;
  }
  
  function doCut(cake, x, y, width, height) {
    console.log('Cutting', x, y, width, height);
    for (let i = y; i < (y + height); i++) {
      for (let j = x; j < (x + width); j++) {
        cake[i][j] = 'x';
      }
    }
    return cake;
  }
  
  function findFirstTopLeftCorner(cake) {
    for (let i = 0; i < cake.length; i++) {
      for (let j = 0; j < cake[i].length; j++) {
        if (cake[i][j] !== 'x') {
          return [i,j];
        }
      }
    }
  }
  
  function run(cake, size, slices) {
    console.log('RUN', slices);
    console.log(stringify(cake));
    
    const corner = findFirstTopLeftCorner(cake);
    console.log('Corner', corner);
    if (null == corner) return slices;
    
    let x = corner[1];
    let y = corner[0];
    
    for (let width = size; width >= 1; width--) {
      for (let height = 1; height <= size; height++) {
        if ((height * width) !== size) continue;
        const slice = isAValidSlice(cake, x, y, width, height);
        if (!slice) continue;
    
        const newSlices = Object.assign([], slices);
        newSlices.push(slice);
        
        let newCake = doCut(JSON.parse(JSON.stringify(cake)), x, y, width, height);
        
        let r = run(newCake, size, newSlices);
        
        if (r.length) {
          console.log('Found', r);
          return r;
        }
      }
    }
    
    console.log('Not found');
    return [];
  }
  
  function cut(cake) {
    const num = cake.match(/o/g).length;  
    const cake_array = cake.split('\n').map(e => e.split(''));
    
    const rows = cake_array.length;
    const cols = cake_array[0].length;
    const size = (rows * cols) / num;
    
    return run(cake_array, size, []);
  }