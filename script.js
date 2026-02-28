function toggleSection(header) {
  const matchesDiv = header.nextElementSibling;
  if (matchesDiv.style.display === "block") {
    matchesDiv.style.display = "none";
  } else {
    matchesDiv.style.display = "block";
  }
}

window.addEventListener('DOMContentLoaded', () => {
  fetch('matches.json')
    .then(response => response.json())
    .then(data => {
      populateMatches('matches-yesterday', data.yesterday);
      populateMatches('matches-today', data.today);
      populateMatches('matches-tomorrow', data.tomorrow);
    });
});

function populateMatches(containerId, matches) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  matches.forEach(match => {
    const div = document.createElement('div');
    div.classList.add('match');
    div.innerHTML = `
      <div>
        <img src="${match.home.logo}" alt="${match.home.name}" width="30">
        <span>${match.home.name}</span>
      </div>
      <div>${match.score} (${match.time})</div>
      <div>
        <img src="${match.away.logo}" alt="${match.away.name}" width="30">
        <span>${match.away.name}</span>
      </div>
    `;
    container.appendChild(div);
  });
}