export const formateDate = (timestamp: number) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString("en-US")
}