let d = new Date(2020, 6, 4);
let formatDate = (dateObj) => {
  let year = String(dateObj.getFullYear());
  let month = String(dateObj.getMonth() > 8 ? dateObj.getMonth() + 1 : "0" + (dateObj.getMonth() + 1));
  let date = String(dateObj.getDate() > 9 ? dateObj.getDate() : "0" + dateObj.getDate());
  let hours = String(dateObj.getHours() > 9 ? dateObj.getHours() : "0" + dateObj.getHours());
  let mins = String(dateObj.getMinutes() > 9 ? dateObj.getMinutes() : "0" + dateObj.getMinutes());
  let sec = String(dateObj.getSeconds() > 9 ? dateObj.getSeconds() : "0" + dateObj.getSeconds());
  return year + month + date + hours + mins + sec;
};
