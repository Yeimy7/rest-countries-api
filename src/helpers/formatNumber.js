export const formatNumber = function (numb) {
    let str = numb ? (numb + "").replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "No data"
    return str
};