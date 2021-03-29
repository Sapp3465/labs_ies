export type VariantType = {
    n: number
    N: number
    W: number
}

export const generate_signals: (variant: VariantType) => Array<number> = ({n, N, W}) => {
    const signals: Array<number> = []
    for (let index1: number = 0; index1 < N; index1++) {
        signals[index1] = 0
        let A: number = Math.floor(Math.random() * Math.floor(10))
        let F: number = Math.floor(Math.random() * Math.floor(10))
        let many_dots : Array<number> = []
        for (let index2: number = 0; index2 < n; index2++) {
            let Wi: number = W / n * (index2 + 1)
            signals[index1] += A * Math.sin(Wi * index2 + F)
        }
    }
    return signals
}

