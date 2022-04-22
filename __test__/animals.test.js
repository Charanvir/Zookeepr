const fs = require('fs')
const { filterByQuery, findById, createNewAnimal, validateAnimal, } = require("../lib/animals");
const { animals } = require("../data/animals.json")

jest.mock('fs')

test('creates an animal object', () => {
    const animal = createNewAnimal({ name: "Charanvir", id: "farlo" }, animals)

    expect(animal.name).toBe('Charanvir')
    expect(animal.id).toBe("farlo")
});

test("filters by query", () => {
    const startingAnimals = [
        {
            id: "3",
            name: "Erica",
            species: "gorilla",
            diet: "omnivore",
            personalityTraits: ["quirky", "rash"],
        },
        {
            id: "4",
            name: "Noel",
            species: "bear",
            diet: "carnivore",
            personalityTraits: ["impish", "sassy", "brave"],
        },
    ];

    const updatedAnimals = filterByQuery({ species: "gorilla" }, startingAnimals);

    expect(updatedAnimals.length).toEqual(1);
});

test('find an animal from its ID', () => {
    const startingAnimals = [
        {
            id: "3",
            name: "Erica",
            species: "gorilla",
            diet: "omnivore",
            personalityTraits: ["quirky", "rash"],
        },
        {
            id: "4",
            name: "Noel",
            species: "bear",
            diet: "carnivore",
            personalityTraits: ["impish", "sassy", "brave"],
        },
    ];

    const animalFromId = findById("3", startingAnimals)
    expect(animalFromId.name).toEqual("Erica")
})

test("return false when one of the input fields is left empty", () => {
    const userInput = {
        name: "",
        species: 'human',
        diet: 'herbivore',
        personalityTraits: ['Nice']
    }

    const validation = validateAnimal(userInput)
    expect(validation).toBeFalsy()
})