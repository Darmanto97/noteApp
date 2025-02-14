document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('note-form');
    const loader = document.getElementById('loader');

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      loader.style.display = 'block'; // Show the loader

      // Simulate a network request
      setTimeout(() => {
        loader.style.display = 'none'; // Hide the loader
        // Add your form submission logic here
        alert('Note added!');
      }, 3000); // Simulate a 3-second delay
    });
});