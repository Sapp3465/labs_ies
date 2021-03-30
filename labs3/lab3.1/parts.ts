export const parts : (n : number) => string = (n ) => {
    if (n % 2 === 0) return 'p = 2, q = ' + n/2
    let b, a = Math.ceil(Math.sqrt(n))
    if (a * a === n) return 'p = ' + a + ' q = ' + a
    while (true) {
        let potential_answer = a * a - n;
        b = Math.ceil(Math.sqrt(potential_answer))
        if (b * b === potential_answer) break
        a++
    }
    return 'p = ' + (a - b) + ' q = ' + (a + b)
}