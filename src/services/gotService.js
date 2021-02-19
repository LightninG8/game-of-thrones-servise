export default class GotService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api'
    }
    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not get ${url} with status ${res.status}`);
        }

        return await res.json();
    }
    async getAllCharacters() {
        const result = await this.getResource("/characters?page=5&pageSize=10");
        return result.map(this._transformCharacter);
    }
    async getCharacter(id) {
        const result = await this.getResource(`/characters/${id}`);
        return this._transformCharacter(result)
    }
    async getAllBooks() {
        const result = await this.getResource(`/books/`);
        return result.map(this._transformBook);
    }
    async getBook(id) {
        const result = await this.getResource(`/books/${id}`);
        return this._transformBook(result);
    }
    async getAllHouses() {
        const result = await this.getResource(`/houses/`);
        return result.map(this._transformHouse);
    }
    async getHouse(id) {
        const result = await this.getResource(`/houses/${id}`)
        return this._transformHouse(result);
    }
    _transformCharacter(character) {

        let result = {
            name: character.name,
            gender: character.gender,
            born: character.born,
            died: character.died,
            culture: character.culture,
        }
        return this._transformNS(result);
    }
    _transformHouse(house) {
        let result = {
            name: house.name,
            region: house.region,
            words: house.words,
            titles: house.titles,
            overlord: house.overlord,
            ancestralWeapons: house.ancestralWeapons,   
        }
        return this._transformNS(result);
    }
    _transformBook(book) {
        let result = {
            name: book.name,
            numberOfPages: book.region,
            publiser: book.publiser,
            released: book.released,
        }
        return this._transformNS(result);
    }
    _transformNS(obj) {
        let result = Object.entries(obj);

        for (let i = 0; i < result.length; i++) {
            if (!result[i][1]) {
                result[i][1] = "N/S"
            }
        }
        // console.log(result);
        return Object.fromEntries(result);

    }
}