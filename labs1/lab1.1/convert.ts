export const convert : (dots : Array<number>) => string = (dots) => {
    let result = 'x;y\n'
    for(let index : number = 0; index < dots.length; index++) {
        result += `${index};${dots[index]}\n`
    }
    return result
}