export const sortByEmail = (jsonData, sortByEmailToggle) => {
  let up = document.getElementById('email_up');
  let down = document.getElementById('email_down');
    if (sortByEmailToggle) {
      up.style.color = 'black';
      down.style.color = 'rgb(203 213 225)';
      jsonData.sort((a, b) => {
        if (a.email > b.email) return 1;
        if (a.email < b.email) return -1;
        return 0;
      });
    }else{
      down.style.color = 'black';
      up.style.color = 'rgb(203 213 225)';
      jsonData.sort((a, b) => {
        if (a.email < b.email) return 1;
        if (a.email > b.email) return -1;
        return 0;
      });
    }
  
    return jsonData;
  };