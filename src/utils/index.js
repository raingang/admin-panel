export const getItemFromArrById = (id, arr) => {
    return arr.find((item) => item.id === id);
};