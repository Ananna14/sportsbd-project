const searchteam = () => {
  const searchteam = document.getElementById('searchInput');
  const searchText = searchteam.value;
  // console.log(searchText);
  const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${searchText}`;
  fetch(url)
    .then(response => response.json())
    .then(data => displayteam(data.teams));


  searchteam.value = '';
}

const displayteam = teams => {
  // console.log(team);
  const searchResult = document.getElementById('result');
  searchResult.textContent = ' ';
  teams.forEach(term => {
    // console.log(term)
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
    <div onclick="loadPlayerId(${term.idTeam})" class="card h-100">
    <img src="${term.strTeamBadge}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${term.strTeam}</h5>
      <p class="card-text">${term.strStadiumDescription.slice(0, 200)}</p>
    </div>
  </div>
    `;
    searchResult.appendChild(div);

  });
}

const loadPlayerId = playerId => {
  // console.log(playerId);
  const url = ` https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${playerId}`;
  fetch(url)
    .then(response => response.json())
    .then(data => displayTeamDetails(data.teams[0]))
}

const displayTeamDetails = term => {
  // console.log(term); 
  const cardId = document.getElementById('termId');
  cardId.textContent = ' ';
  const div = document.createElement('div');
  div.classList.add('card');
  div.innerHTML = ` 
   <div onclick="loadPlayerId(${term.idTeam})" class="card h-100">
<img src="${term.strTeamBadge}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${term.strTeam}</h5>
  <p class="card-text">${term.strStadiumDescription.slice(0, 200)}</p>
  <a href="${term.strYoutube}" class="btn btn-primary">Go somewhere</a>
</div>
</div>`;
  cardId.appendChild(div);
}

