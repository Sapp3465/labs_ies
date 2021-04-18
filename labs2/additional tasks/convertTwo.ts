export const convertTwo: (dots1: Array<number>, dots2: Array<number>) => string = (dots1, dots2) => {
    let result = 'x;y1;y2\n'
    for (let index: number = 0; index < dots1.length; index++) {
        result += `${index};${dots1[index]};${dots2[index]}\n`
    }
    return result
}