export const sortByName = (jsonData, sortByNameToggle) => {
  let up = document.getElementById('name_up');
  let down = document.getElementById('name_down');

  if (sortByNameToggle) {
    up.style.color = 'black';
    down.style.color = 'rgb(203 213 225)';
    jsonData.sort((a, b) => {
      if (a.name > b.name) return 1;
      if (a.name < b.name) return -1;
      return 0;
    });
  }else{
    down.style.color = 'black';
    up.style.color = 'rgb(203 213 225)';
    jsonData.sort((a, b) => {
      if (a.name < b.name) return 1;
      if (a.name > b.name) return -1;
      return 0;
    });
  }

  return jsonData;
};