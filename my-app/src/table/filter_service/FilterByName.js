export const filterByName = (jsonData, searchKeyword) => {
    return jsonData.filter((item) =>
        item.name.toLowerCase().includes(searchKeyword.toLowerCase())
    );
};