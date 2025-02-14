const BASE_URL = 'https://notes-api.dicoding.dev';

class NoteApi {
    static showNotes() {
        return fetch(`${BASE_URL}/v2/notes`)
        .then((response) => {
            if (response.status >= 200 && response.status <300) {
                return response.json();
            } else {
                return Promise.reject(new Error(`Something went wrong`));
            }
        })
    }
}

export default NoteApi; 