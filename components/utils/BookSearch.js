let APIkey = 'AIzaSyAvro2083BHAsn79LvEQOnLEaJ8TlEcgOM';

const BookSearch = {
    search(term) {
        return fetch(`https://www.googleapis.com/books/v1/volumes?q=${term}&key=${APIkey}`, { method: 'GET',}).then(response => {
            return response.json();
        }).then(jsonResponse => {
            console.log(jsonResponse);
            if(!jsonResponse.items){
                return [];
            }
            return jsonResponse.items.map(item => ({
                id: item.id,
                title: item.volumeInfo.title,
                authors: item.volumeInfo.authors,
                smallThumbnail: item.volumeInfo?.imageLinks?.smallThumbnail,
                thumbnail: item.volumeInfo?.imageLinks?.thumbnail,
            }));
            
        })
    
    }
}


export default BookSearch;

