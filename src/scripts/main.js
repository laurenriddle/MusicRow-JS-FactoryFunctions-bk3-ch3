// arrays to hold the artists once they are created
const JumpStop = []
const ChattenRecords = []
const PolarRecords = []

// below are functions to create artists for each genre of music
const createFunkArtist = (name, genre, age) => {
    return {
        name: name,
        genre: genre,
        age: age
    }
}

const createRapArtist = (name, genre, age) => {
    return {
        name: name,
        genre: genre,
        age: age
    }
}

const createCountryArtist = (name, genre, age) => {
    return {
        name: name,
        genre: genre,
        age: age
    }
}

const createBluegrassArtist = (name, genre, age) => {
    return {
        name: name,
        genre: genre,
        age: age
    }
}

const createPopArtist = (name, genre, age) => {
    return {
        name: name,
        genre: genre,
        age: age
    }
}

// invoking functions to create artists
const BruceAtikins = createCountryArtist("Bruce Atikins", "Country", 23)
const JensenBrown = createPopArtist("Jensen Brown", "Pop", 20)
const DreFunkz = createFunkArtist("Dre Funkz", "Funk", 25)
const DustaGrimes = createRapArtist("Dusta Grimes", "Rap", 21)
const BartholomewDanielson = createBluegrassArtist("Bartholomew Danielson", "Bluegrass", 23)
const AvileeDallas = createCountryArtist("Avilee Dallas", "Country", 19)
const AustinKinkaid = createPopArtist("Austin Kinkaid", "Pop", 22)
const LoyoncéBranis = createRapArtist("Loyoncé Branis", "Rap", 27)



// adding artist ot the correct array
ChattenRecords.push(BruceAtikins, BartholomewDanielson, AvileeDallas)
PolarRecords.push(JensenBrown, AustinKinkaid)
JumpStop.push(DreFunkz, DustaGrimes, LoyoncéBranis)

console.log(ChattenRecords)
console.log(PolarRecords)
console.log(JumpStop)