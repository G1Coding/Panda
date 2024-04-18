$(document).ready(
  function() {
    const query = window.location.search;
    const param = new URLSearchParams(query);
    const board_num = param.get('board_num');

    fetch(`/payment/get_buyerPage/` + board_num)
    .then(res =>  res.json())
    .then(data => {
      let profile_img = document.querySelector("#profile_img");
      profile_img.setAttribute("src", data[0].BOARD_IMG);

      let profile_title = document.querySelector("#title");
      profile_title.innerHTML += data[0].BOARD_TITLE;

      let profile_name = document.querySelector("#name");
      profile_name.innerHTML += data[1].INFO_NAME;

      let profile_price = document.querySelector("#price");
      profile_price.innerHTML += data[0].BOARD_PRICE;

      let profile_tel = document.querySelector("#tel");
      profile_tel.innerHTML += data[1].INFO_PHONE;

    });
  }
);