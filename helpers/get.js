export const get = (path) => {
    try {
        const getRequest = fetch(path)
    } catch (error) {
        console.log(error);
    }
}