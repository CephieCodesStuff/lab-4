let a = 4;
let b = -12;
let c = 9;
let D = Math.pow(b, 2) - (4 * a * c);
if (D === 0){
    let x = (-1*b)/(2*a);
    console.log("x =",x);
}
else {
    if (D < 0) {
        console.log("Корней нет.");
    }
    else{
        let x1 = ((-1*b)+Math.sqrt(D))/(2*a);
        let x2 = ((-1*b)-Math.sqrt(D))/(2*a);
        console.log('x1 =',x1, '| x2 =', x2)
    }
}

