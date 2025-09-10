const petsContainer = document.getElementById("petsContainer");
const searchBtn = document.getElementById("searchBtn");
const darkModeToggle = document.getElementById("darkModeToggle");

async function fetchPets(type, location) {
  try {
    const res = await fetch(`https://pet-adoption-finder-backend.onrender.com/api/pets?type=${type}&location=${location}`);
    const data = await res.json();
    displayPets(data.animals || []);
  } catch (err) {
    console.error(err);
    petsContainer.innerHTML = "<p>Failed to fetch pets. Try again.</p>";
  }
}

function displayPets(pets) {
  petsContainer.innerHTML = "";
  if (pets.length === 0) {
    petsContainer.innerHTML = "<p>No pets found!</p>";
    return;
  }

  pets.forEach(pet => {
    const card = document.createElement("div");
    card.className = "pet-card";
    card.innerHTML = `
      <img src="${pet.photos[0]?.medium || 'https://via.placeholder.com/250'}" alt="${pet.name}">
      <h3>${pet.name}</h3>
      <p>Breed: ${pet.breeds.primary || "Unknown"}</p>
      <p>Age: ${pet.age}</p>
      <p>Location: ${pet.contact.address.city}, ${pet.contact.address.state}</p>
      <a href="${pet.url}" target="_blank">View Details</a>
    `;
    petsContainer.appendChild(card);
  });
}

searchBtn.addEventListener("click", () => {
  const type = document.getElementById("type").value || "dog";
  const location = document.getElementById("location").value || "10001";
  fetchPets(type, location);
});

// Dark mode toggle
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  darkModeToggle.textContent = document.body.classList.contains("dark") ? "☀️ Light Mode" : "🌙 Dark Mode";
});

// Fetch default pets on load
fetchPets("dog", "10001");
