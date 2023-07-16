export const sortByUserName = (jsonData, sortByUserNameToggle) => {

    if (sortByUserNameToggle) {
      jsonData.sort((a, b) => {
        if (a.username > b.username) return 1;
        if (a.username < b.username) return -1;
        return 0;
      });
    }else{
      jsonData.sort((a, b) => {
        if (a.username < b.username) return 1;
        if (a.username > b.username) return -1;
        return 0;
      });
    }
  
    return jsonData;
  };