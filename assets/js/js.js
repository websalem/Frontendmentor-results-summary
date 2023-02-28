fetch("../../data.json")
    .then((response) => response.json())
    .then((data) => displayData(data));

const displayData = (d) => {
    const mainEl = document.querySelector('main');
    const summery = document.createElement('div');
    summery.setAttribute('class', 'summery');
    const h2 = document.createElement('h2');
    h2.innerText = "Summery";
    summery.appendChild(h2);
    let divEl;
    d.forEach(el => {
        divEl = `<div class="summery-deg">
   <p> <img src="${el.icon}" alt="${el.category}"> ${el.category}</p>
   <p class="deg"><span>${el.score} </span> / 100</p>
</div><!--end summery-deg--> `;
        summery.innerHTML += divEl;
    });
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = "Continue";
    summery.appendChild(btn);
    mainEl.appendChild(summery);

}