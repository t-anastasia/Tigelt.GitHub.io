const b = document.getElementById('jjj');
const URL = 'https://kodaktor.ru/j/rates';
b.addEventListener('click', ()=>{
  fetch(URL)
    .then(response => response.json())
    .then(data => {
      let template = document.querySelector('#src').textContent;
      let result = jade.render(template, {data: data});
      document.querySelector('#pg2').innerHTML = result;
    })

  });
