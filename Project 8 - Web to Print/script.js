let currentStore = "";
let currentItems = [];
let stores = [];
let noteColor = "#c3e7f1";

document.getElementById("color-picker").addEventListener("input", e => {
    noteColor = e.target.value;
});

document.getElementById("store-select").addEventListener("change", e => {
    currentStore = e.target.value;
});

document.getElementById("item-input").addEventListener("keypress", function(e) {
    if (e.key === "Enter" && this.value.trim() !== "") {
        currentItems.push(this.value.trim());
        this.value = "";
        updatePreview();
    }
});

function updatePreview() {
    const preview = document.getElementById("current-items-preview");
    if (currentItems.length === 0) {
        preview.innerHTML = "";
        return;
    }
    preview.innerHTML =
        `<div class="current-items-preview">
            <h4>Items to add:</h4>
            <ul>${currentItems.map(i => `<li>${i}</li>`).join("")}</ul>
        </div>`;
}

function addStore() {
    if (!currentStore) return alert("Select a store first!");
    if (currentItems.length === 0) return alert("Add items!");

    stores.push({
        name: currentStore,
        items: [...currentItems],
        color: noteColor
    });

    currentItems = [];
    currentStore = "";
    document.getElementById("store-select").value = "";
    updatePreview();
    renderNotes();
}

function deleteStore(i) {
    stores.splice(i, 1);
    renderNotes();
}

function editStore(i) {
    const store = stores[i];
    const updated = prompt("Edit items (comma-separated):", store.items.join(", "));
    if (updated !== null) {
        store.items = updated.split(",").map(x => x.trim()).filter(x => x);
        renderNotes();
    }
}

function renderNotes() {
    const basket = document.getElementById("basket");
    basket.innerHTML = "";

    if (stores.length === 0) {
        basket.innerHTML = `<div class="empty-state">Select a store and add items to start building your grocery list!</div>`;
        return;
    }

    stores.forEach((store, index) => {
        const div = document.createElement("div");
        div.className = "note-card";
        div.style.setProperty("--note-color", store.color);

        div.innerHTML = `
            <button class="delete-btn">×</button>
            <h3>${store.name}</h3>
            ${store.items.map(i =>
                `<div class="note-item">
                    <div class="checkbox-circle"></div>
                    <label>${i}</label>
                </div>`
            ).join("")}
            <button class="edit-btn">Edit Items</button>
        `;

        div.querySelector(".delete-btn").onclick = () => deleteStore(index);
        div.querySelector(".edit-btn").onclick = () => editStore(index);

        basket.appendChild(div);
    });
}

