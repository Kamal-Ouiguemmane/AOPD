async function fetchData() {
  const req = await fetch(
    'https://api.nasa.gov/planetary/apod?api_key=isv2GzAwxpndsHk8PUt1SiUpEJViJgVD5wD54E4g'
  );
  const data = await req.json();
  return data;
}
async function createElement() {
  const iod = await fetchData();
  console.log(iod);
  const div = document.createElement('div');
  div.classList.add('container');
  div.innerHTML = `<div class="image-section">
            <img src="${iod.url}" alt="">
        </div>
        <div class="info-section">
            <h3>${iod.title}</h3>
            <p>${iod.explanation}</p>
        </div>`;
  document.body.appendChild(div);
}

createElement();
