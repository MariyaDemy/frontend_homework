function fibi() {
    let fib1 = 1;
    let fib2 = 1;
    console.log(fib1);
    console.log(fib2);
    while (fib1 + fib2 < 927372692193079200000n) {
        let fibSum = fib1 + fib2;
        fib1 = fib2;
        fib2 = fibSum;
        console.log(fib2);
    }
}
fibi();

