export const dateFormat = (date: string) => {
    let dateParts = date.split('-') // [0 => ano, 1 => mes, 2 => dia]
    return `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`
    // return dateParts[2] + '/' + dateParts[1] + '/' + dateParts[0]
}
export const getYear = (date: string) => {
    let dateParts = date.split('-') // [0 => ano, 1 => mes, 2 => dia]
    return dateParts[0]
}
export const getMonth = (date: string) => {
    let dateParts = date.split('-') // [0 => ano, 1 => mes, 2 => dia]
    return dateParts[1]
}
export const getDay = (date: string) => {
    let dateParts = date.split('-') // [0 => ano, 1 => mes, 2 => dia]
    return dateParts[2]
}

