// fecha.js
export function getCurrentDate() {
    const fecha = new Date();
    return fecha.toLocaleDateString();
}

export function getCurrentTime() {
    const fecha = new Date();
    return fecha.toLocaleTimeString();
}
