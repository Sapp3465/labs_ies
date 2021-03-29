export const discrete_fourier: (dots : Array<number>) => Array<number> = (dots) => {
    const result : Array<number> = []
    const N : number = dots.length

    for (let index1 : number = 0; index1 < N; index1++){
        let real : number = 0
        let image : number = 0
        for (let index2 : number = 0; index2 < N; index2++){
            real += dots[index2] * Math.cos(-2*Math.PI*index2*index1/N)
            image += dots[index2] * Math.sin(-2*Math.PI*index2*index1/N)
        }
        result.push(Math.sqrt(real*real + image*image))
    }
    return result
}