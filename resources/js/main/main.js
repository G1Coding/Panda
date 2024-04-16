//<link href="/static/css/main/main_css.css" rel="stylesheet"></link>
let count = 1;

window.addEventListener('scroll', () => {
  let val = window.innerHeight + window.scrollY;

  if(val >= document.body.offsetHeight){

    fetch(`/get_listView`)
    .then(res =>  res.json())
    .then(data => {
      console.log("data : ", data.list);

      data.list.forEach( d =>{
        
      })


    })
  }
});