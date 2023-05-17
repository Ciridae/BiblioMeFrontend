export function sesionIniciada() {
    if (localStorage.getItem("user") !== null) {
        return true;
    } else {
        return false;
    }
}