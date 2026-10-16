const searchInput = document.getElementById("searchInput"); const filterButtons = document.querySelectorAll(".filter-btn"); const destinationCards = document.querySelectorAll(".destination-card"); const noResults = document.getElementById("noResults");

let activeCategory = "all";

function updateDestinations() { const searchTerm = searchInput.value.toLowerCase().trim(); let visibleCount = 0;

destinationCards.forEach((card) => {
    const category = card.dataset.category;

    const searchableText = card.textContent.toLowerCase();

    const matchesSearch = searchableText.includes(searchTerm);

    const matchesCategory =
        activeCategory === "all" ||
        category === activeCategory;

    const isVisible = matchesSearch && matchesCategory;

    card.hidden = !isVisible;

    if (isVisible) {
        visibleCount++;
    }
});

noResults.hidden = visibleCount !== 0;


}

searchInput.addEventListener("input", updateDestinations);

filterButtons.forEach((button) => { button.addEventListener("click", () => { activeCategory = button.dataset.category;

    filterButtons.forEach((item) => {
        item.classList.remove("active");
    });

    button.classList.add("active");

    updateDestinations();
});


});

document.getElementById("year").textContent = new Date().getFullYear();

updateDestinations();
