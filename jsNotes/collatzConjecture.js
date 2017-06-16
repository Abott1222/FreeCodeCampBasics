var N = 16;
var steps = 0;

function r(n,x=steps) {
    if (n===1) return x;
    else if(n%2===0) return r(n*3+1, x+1)
    else if(n%3===0) return r(n/2)
}

// Write an action using print()
// To debug: printErr('Debug messages...');

console.log(r(N));
