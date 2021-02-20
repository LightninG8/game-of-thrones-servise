export default class GotService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api'
    }
     getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not get ${url} with status ${res.status}`);
        }

        return await res.json();
    }
    getAllCharacters = async () => {
        const result = await this.getResource("/characters?page=5&pageSize=8");
        return result.map(this._transformCharacter);
    }
    getCharacter = async (id) => {
        const result = await this.getResource(`/characters/${id}`);
        return this._transformCharacter(result)
    }
    getAllBooks = async () => {
        const result = await this.getResource(`/books/`);
        return result.map(this._transformBook);
    }
    getBook = async (id) => {
        const result = await this.getResource(`/books/${id}`);
        return this._transformBook(result);
    }
    getAllHouses = async () => {
        const result = await this.getResource(`/houses/`);
        return result.map(this._transformHouse);
    }
    getHouse = async (id) => {
        const result = await this.getResource(`/houses/${id}`)
        return this._transformHouse(result);
    }
    isSet = (data) => {
        return data ? data : "N/A";
    }
    _extractId = (item) => {
        const idRegExp = /\/([0-9]*)$/;

        return item.url.match(idRegExp)[1];
    }
    _transformCharacter = (character) => {   
        return {
            id: this._extractId(character),
            name: this.isSet(character.name),
            gender: this.isSet(character.gender),
            born: this.isSet(character.born),
            died: this.isSet(character.died),
            culture: this.isSet(character.culture),
        }
    }
    _transformHouse = (house) => {
        
        return {
            id: this._extractId(house),
            name: this.isSet(house.name),
            region: this.isSet(house.region),
            words: this.isSet(house.words),
            titles: this.isSet(house.titles),
            overlord: this.isSet(house.overlord),
            ancestralWeapons: this.isSet(house.ancestralWeapons,  ) 
        }
    }
    _transformBook = (book) => {
        return {
            id: this._extractId(book),
            name: this.isSet(book.name),
            numberOfPages: this.isSet(book.region),
            publiser: this.isSet(book.publiser),
            released: this.isSet(book.released),
        }
    }

}