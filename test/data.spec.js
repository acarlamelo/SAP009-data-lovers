import { sortData, filterData, filterHouse, searchCharacters } from '../src/data.js';
const euan = {
  "id": 1,
  "name": "Euan Abercrombie",
  "birth": "between 1 September 1983 and 31 August 1984",
  "death": null,
  "species": "Human",
  "ancestry": null,
  "gender": "Male",
  "hair_color": null,
  "eye_color": null,
  "wand": null,
  "patronus": null,
  "house": "Gryffindor",
  "associated_groups": ["Hogwarts School of Witchcraft and Wizardry", "Gryffindor"],
  "books_featured_in": [5]
}
const stewart = {
  "id": 2,
  "name": "Stewart Ackerley",
  "birth": "between 1 September 1982and 31 August 1983",
  "death": null,
  "species": "Human",
  "ancestry": null,
  "gender": "Male",
  "hair_color": null,
  "eye_color": null,
  "wand": null,
  "patronus": null,
  "house": "Ravenclaw",
  "associated_groups": [],
  "books_featured_in": [4]
}
const african = {
  "id": 3,
  "name": "African prince",
  "birth": null,
  "death": null,
  "species": "Human",
  "ancestry": "Muggle-born or half-blood (possibly)",
  "gender": "Male",
  "hair_color": null,
  "eye_color": null,
  "wand": null,
  "patronus": null,
  "house": null,
  "associated_groups": ["Africa"],
  "books_featured_in": [1]
}
const testCharacters = [euan, african, stewart]
describe('testCharacters', () => {
  it('should be an object', () => {
    expect(typeof testCharacters).toBe('object')
  })
})
//testar se a função searchCharacters realmente é uma função
describe('search by name', () => {
  it('should be a function', () => {
    expect(typeof searchCharacters).toBe('function')
  });
  //testar a barra de pesquisa (apenas algumas letras)
  it('should filter by search characters', () => {
    const title = 'Eua';
    expect(searchCharacters(testCharacters, title)).toStrictEqual([euan])
  });
  //testar a barra de pesquisa (palavra inteira) -- ok
  it('should filter by search characters', () => {
    const title = 'Stewart';
    expect(searchCharacters(testCharacters, title)).toStrictEqual([stewart])
  });
});
//testar se a função sortByOrder realmente é uma função -- ok
describe('sort by alphabetic', () => {
  it('should be a function', () => {
    expect(typeof sortData).toBe('function')
  });
});
//testar se a função sortByRelease realmente é uma função -- ok
describe('sort by gender', () => {
  it('should be a function', () => {
    expect(typeof filterData).toBe('function')
  });
});
//testar se a função filters realmente é uma função -- ok
describe('filter', () => {
  it('should be a function', () => {
    expect(typeof filterHouse).toBe('function')
  });
});
//testar se a função searchCharacter realmente é uma função -- ok
describe('search by character', () => {
  it('should be a function', () => {
    expect(typeof searchCharacters).toBe('function')
  });
});
