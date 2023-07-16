export const filterByPhone = (jsonData, searchKeyword) => {
    return jsonData.filter((item) =>
        item.phone.toLowerCase().includes(searchKeyword.toLowerCase())
    );
};