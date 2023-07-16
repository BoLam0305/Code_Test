export const sortByPhone = (jsonData, sortByPhoneToggle) => {

    if (sortByPhoneToggle) {
      jsonData.sort((a, b) => {
        if (a.phone > b.phone) return 1;
        if (a.phone < b.phone) return -1;
        return 0;
      });
    }else{
      jsonData.sort((a, b) => {
        if (a.phone < b.phone) return 1;
        if (a.phone > b.phone) return -1;
        return 0;
      });
    }
  
    return jsonData;
  };