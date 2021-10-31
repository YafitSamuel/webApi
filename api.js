// פונקציה להצגת המידע על המסך

function showInScreen(anime) {
  for (const itemAnime of anime) {
    for (const key in itemAnime) {
      myDiv.innerHTML += `<p>${key}: ${itemAnime[key]}</p> `;
    }
  }
}

function loadingGif() {
  myDiv1.innerHTML = `<img id="gif" src="./image/pikachu-happy.gif">`;
}

function stopLoadingGif() {
  gif.style.display = "none";
}

function showImageInScreen(anime) {
  for (const itemAnime of anime) {
    myDiv1.innerHTML += `<div class="container"> 
      <p><img id="image" src="${itemAnime.image_url}"></p>
      <h2><b> ${itemAnime.title} </b></h2>
      <h4><b> ${itemAnime.type} </b></h4>
      <h4><b> ${itemAnime.score} </b></h4>
    </div>`;
  }
}

let url = "https://api.jikan.moe/v3/search/anime?q=";
async function getApi(api) {
  try {
    loadingGif();
    return await fetch(api).then((response) => {
      return response.json();
    });
  } catch (error) {
    return error;
  }
}

// print to console
searchBtn.onclick = () => {
  getApi(url + searchInput.value).then((res) => {
    console.log(res.results);
  });
};

// show to Screen
searchBtn.onclick = () => {
  getApi(url + searchInput.value)
    .then((data) => {
      showImageInScreen(data.results);
    })
    .catch((rej) => {
      console.log(rej);
    })
    .finally(() => {
      stopLoadingGif();
    });
};
