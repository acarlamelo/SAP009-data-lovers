import { sortData, filterData, filterHouse, searchCharacters } from '../src/data.js';
const euan = {
  "id": 1,
  "name": "Euan Abercrombie",
  "birth": "between 1 September 1983 and 31 August 1984",
  "species": "Human",
  "ancestry": null,
  "gender": "Male",
  "house": "Gryffindor",

}
const stewart = {
  "id": 2,
  "name": "Stewart Ackerley",
  "birth": "between 1 September 1982and 31 August 1983",
  "death": null,
  "species": "Human",
  "ancestry": null,
  "gender": "Male",
  "house": "Ravenclaw",

}
const african = {
  "id": 3,
  "name": "Agnes",
  "birth": null,
  "death": null,
  "species": "Human",
  "ancestry": null,
  "gender": "Female",
  "house": null,

}

const testCharacters = [euan, african, stewart]
const data = { characters: testCharacters }

describe("testCharacters", () => {
  it("should be an object", () => {
    expect(typeof testCharacters).toBe("object")
  });
});
//testar se a função searchCharacters realmente é uma função
describe("search by name", () => {
  it("should be a function", () => {
    expect(typeof searchCharacters).toBe("function")
  });
  //testar a barra de pesquisa (apenas algumas letras)
  it("should filter by search characters", () => {
    const title = "Eua";
    expect(searchCharacters(testCharacters, title)).toStrictEqual([euan])
  });
  //testar a barra de pesquisa (palavra inteira) -- ok
  it("should filter by search characters", () => {
    const title = "Stewart";
    expect(searchCharacters(testCharacters, title)).toStrictEqual([stewart])
  });
});
//testar se a função sortByOrder realmente é uma função -- ok
describe("sort by alphabetic", () => {
  it("should be a function", () => {
    expect(typeof sortData).toBe("function")

  });

  it("deve ordenar de a-z", () => {
    expect(sortData(data, "az")).toEqual([african, euan, stewart])
  });

  it("deve ordenar de z-a", () => {
    expect(sortData(data, "za")).toEqual([stewart, euan, african])
  });
});

//testar se a função sortByRelease realmente é uma função -- ok
describe("sort by gender", () => {
  it("should be a function", () => {
    expect(typeof filterData).toBe("function")
  });
  it("classificar o sexo", () => {
    expect(filterData(testCharacters, "male")).toEqual([stewart, euan]);
    expect(filterData(testCharacters, "female")).toEqual([african]);
    expect
  });
});
//testar se a função filters realmente é uma função -- ok
describe("filter", () => {
  it("should be a function", () => {
    expect(typeof filterHouse).toBe("function")
  });
  it("filtrar casa", () => {
    expect(filterHouse(testCharacters, "Ravenclaw")).toEqual([stewart]);
    expect(filterHouse(testCharacters, "Gryffindor")).toEqual([euan]);
    expect(filterHouse(testCharacters, "todas")).toEqual([euan, stewart, african]);
  })
});
//testar se a função searchCharacter realmente é uma função -- ok
describe("search by character", () => {
  it("should be a function", () => {
    expect(typeof searchCharacters).toBe("function")
  });
  it("buscar personagens", () => {
    expect((searchCharacters, "")).toEqual("data")
  });
});
