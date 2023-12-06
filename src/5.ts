const data = [
    "seeds: 79 14 55 13",
    "",
    "seed-to-soil map:",
    "50 98 2",
    "52 50 48",
    "",
    "soil-to-fertilizer map:",
    "0 15 37",
    "37 52 2",
    "39 0 15",
    "",
    "fertilizer-to-water map:",
    "49 53 8",
    "0 11 42",
    "42 0 7",
    "57 7 4",
    "",
    "water-to-light map:",
    "88 18 7",
    "18 25 70",
    "",
    "light-to-temperature map:",
    "45 77 23",
    "81 45 19",
    "68 64 13",
    "",
    "temperature-to-humidity map:",
    "0 69 1",
    "1 0 69",
    "",
    "humidity-to-location map:",
    "60 56 37",
    "56 93 4"
]

export function getExo5PartOne(data: string[]){
    const [seedString, ...mappingStr] = data
    const seeds = seedString
        .split(" ")
        .slice(1)
        .map(seedStr => parseInt(seedStr))
    
    let mapping: [number, number, number][][] = []
    const mappingStrCleaned = mappingStr
        .filter(l => l.length > 0)

    for (let i = 0; i < mappingStrCleaned.length; i++) {
        const line = mappingStrCleaned[i];
        if(!isNaN(parseInt(line[0]))){
            const [destStart, sourceStart, nbElement] = line.split(" ").map(s => parseInt(s))
            mapping[mapping.length - 1].push([destStart, sourceStart, nbElement])
        }
        else {
            mapping[mapping.length] = []
        }
    }

    const res: number = seeds.reduce((min: number | undefined, seed) => {
        let mySeed = seed

        mapping.forEach(map => {
            let i = 0

            while(i < map.length){
                const [destStart, sourceStart, nbElement] = map[i]
                if(mySeed >= sourceStart && mySeed < sourceStart + nbElement){
                    mySeed = destStart + mySeed - sourceStart
                    break
                }
                i++
            }
            
        })

        if(min === undefined){
            return mySeed
        }
        return Math.min(min, mySeed)
    }, Infinity)

    return res
}


export function getExo5PartTwo(data: string[]){
    const [seedString, ...mappingStr] = data
    const seedPreparedValues = seedString
        .split(" ")
        .slice(1)
        .map(seedStr => parseInt(seedStr))
    let seedCouples: [number, number][] = []
    for (let i = 0; i < seedPreparedValues.length; i += 2) {
        const startSeed = seedPreparedValues[i];
        const rangeSize = seedPreparedValues[i + 1]
        const endSeed = startSeed + rangeSize - 1
        seedCouples.push([startSeed, endSeed])
    }

    let mapping: [number, number, number][][] = []
    const mappingStrCleaned = mappingStr
        .filter(l => l.length > 0)

    for (let i = 0; i < mappingStrCleaned.length; i++) {
        const line = mappingStrCleaned[i];
        if(!isNaN(parseInt(line[0]))){
            const [destStart, sourceStart, nbElement] = line.split(" ").map(s => parseInt(s))
            mapping[mapping.length - 1].push([destStart, sourceStart, nbElement])
        }
        else {
            mapping[mapping.length] = []
        }
    }

    let min = Infinity

    for (let i = 0; i < seedCouples.length; i++) {
        const [startSeed, endSeed] = seedCouples[i];
        for (let j = startSeed; j < endSeed; j++) {
            const seed = j;
            const mySeed = getLocation(seed, mapping)
            min = Math.min(min, mySeed)
            
        }
    }

    return min
}

function getLocation(seed: number, mapping: [number, number, number][][]){
    let mySeed = seed

    mapping.forEach(map => {
        let i = 0

        while(i < map.length){
            const [destStart, sourceStart, nbElement] = map[i]
            if(mySeed >= sourceStart && mySeed < sourceStart + nbElement){
                mySeed = destStart + mySeed - sourceStart
                break
            }
            i++
        }
        
    })

    return mySeed
}