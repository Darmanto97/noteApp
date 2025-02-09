  class NoteItem extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <div class="note">
          <h2>${this.getAttribute('title')}</h2>
          <p>${this.getAttribute('body')}</p>
        </div>
      `;
    }
  }
  
  customElements.define('note-item', NoteItem);
  
  document.addEventListener('DOMContentLoaded', () => {
    const notesList = document.getElementById('notes-list');
    notesData.forEach(note => {
      const noteItem = document.createElement('note-item');
      noteItem.setAttribute('title', note.title);
      noteItem.setAttribute('body', note.body);
      notesList.appendChild(noteItem);
    });
  
    const noteForm = document.getElementById('note-form');
    noteForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const title = document.getElementById('note-title').value;
      const body = document.getElementById('note-body').value;
      const newNote = {
        id: `notes-${Date.now()}`,
        title,
        body,
        createdAt: new Date().toISOString(),
        archived: false,
      };
      notesData.push(newNote);
      const noteItem = document.createElement('note-item');
      noteItem.setAttribute('title', newNote.title);
      noteItem.setAttribute('body', newNote.body);
      notesList.appendChild(noteItem);
      noteForm.reset();
    });
  });