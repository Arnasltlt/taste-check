const searchInput = document.getElementById('searchInput');
const playerList = document.getElementById('playerList');
const modeToggle = document.getElementById('modeToggle');

const players = [
  { name: 'Alex Goalkeeper', position: 'GK', country: 'Germany' },
  { name: 'Briana Wing', position: 'LW', country: 'France' },
  { name: 'Carlos Pivot', position: 'P', country: 'Spain' },
  { name: 'Dana Back', position: 'RB', country: 'Norway' }
];

function renderPlayers(filter = '') {
  playerList.innerHTML = '';
  players
    .filter(p => p.name.toLowerCase().includes(filter.toLowerCase()))
    .forEach(player => {
      const card = document.createElement('div');
      card.className = 'player-card';
      card.innerHTML = `
        <h3>${player.name}</h3>
        <p><strong>Position:</strong> ${player.position}</p>
        <p><strong>Country:</strong> ${player.country}</p>
      `;
      playerList.appendChild(card);
    });
}

searchInput.addEventListener('input', e => {
  renderPlayers(e.target.value);
});

modeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

renderPlayers();
