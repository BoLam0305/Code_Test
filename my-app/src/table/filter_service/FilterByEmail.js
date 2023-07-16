export const filterByEmail = (jsonData, searchKeyword) => {
    return jsonData.filter((item) =>
        item.email.toLowerCase().includes(searchKeyword.toLowerCase())
    );
};