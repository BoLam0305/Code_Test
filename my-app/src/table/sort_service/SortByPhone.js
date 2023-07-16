export const sortByPhone = (jsonData, sortByPhoneToggle) => {
  let up = document.getElementById('phone_up');
  let down = document.getElementById('phone_down');
    if (sortByPhoneToggle) {
      up.style.color = 'black';
      down.style.color = 'rgb(203 213 225)';
      jsonData.sort((a, b) => {
        if (a.phone > b.phone) return 1;
        if (a.phone < b.phone) return -1;
        return 0;
      });
    }else{
      down.style.color = 'black';
      up.style.color = 'rgb(203 213 225)';
      jsonData.sort((a, b) => {
        if (a.phone < b.phone) return 1;
        if (a.phone > b.phone) return -1;
        return 0;
      });
    }
  
    return jsonData;
  };