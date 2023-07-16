export const sortByEmail = (jsonData, sortByEmailToggle) => {

    if (sortByEmailToggle) {
      jsonData.sort((a, b) => {
        if (a.email > b.email) return 1;
        if (a.email < b.email) return -1;
        return 0;
      });
    }else{
      jsonData.sort((a, b) => {
        if (a.email < b.email) return 1;
        if (a.email > b.email) return -1;
        return 0;
      });
    }
  
    return jsonData;
  };