export const neuron: (sigma: number, time: number, iterations: number) => string = (sigma, time, iterations) => {
    const A: Array<number> = [0, 6]
    const B: Array<number> = [1, 5]
    const C: Array<number> = [3, 3]
    const D: Array<number> = [2, 4]
    const ABCD: Array<Array<number>> = [A, B, C, D]
    const P: number = 4
    let W1: number = 0
    let W2: number = 0
    let res : Array<string> = ['', '', '', '']

    const start: number = new Date().getTime()

    let iteration: number = 0
    while (new Date().getTime() - start < time && !!time || iteration < iterations && !!iterations) {
        let delta = 0
        let index = iteration % ABCD.length
        delta = P - (W1 * ABCD[index][0] + W2 * ABCD[index][1])
        W1 = W1 + delta * ABCD[index][0] * sigma
        W2 = W2 + delta * ABCD[index][1] * sigma
        res[index] = delta <= 0 ? 'more' : 'less'
        iteration++
    }

    return 'W1 = ' + W1 + ' W2 = ' + W2 + ' A = ' + res[0] + ' B = ' + res[1] + ' C = ' + res[2] + ' D = ' + res[3]
}