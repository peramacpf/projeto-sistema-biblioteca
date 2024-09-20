const searchInput = document.getElementById('searchInput');
const tableRows = document.querySelectorAll('tbody tr');

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();

  tableRows.forEach(row => {
    const titulo = row.cells[1].textContent.toLowerCase(); // Assuming title is in the second column (index 1)
    const autor = row.cells[2].textContent.toLowerCase(); // Assuming author is in the third column (index 2)

    if (titulo.includes(searchTerm) || autor.includes(searchTerm)) {
      row.style.display = ''; // Show matching rows
    } else {
      row.style.display = 'none'; // Hide non-matching rows
    }
  });
});
