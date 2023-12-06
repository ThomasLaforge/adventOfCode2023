export function getExo6PartOne(input: string[]){
    const [timesStr, distancesStr] = input.map(line => line.split(":")[1].trim())
    const times = timesStr
        .split(" ")
        .filter(e => e !== "")
        .map(Number);
    const distances = distancesStr
        .split(" ")
        .filter(e => e !== "")
        .map(Number);
    console.log(times, distances);

    const res = times.reduce((acc, t, index) => {
        let nbPossibilities = 0;
        for(let i = 0; i < t; i++){
            const distanceDone = i * (t - i);
            
            if(distanceDone > distances[index]){
                nbPossibilities++;
            }
        }
        return acc * nbPossibilities;
    }, 1)

    console.log(res);
    
    return res
}

export function getExo6PartTwo(input: string[]){
    const [timesStr, distancesStr] = input.map(line => line.split(":")[1].trim())
    const alltimes = timesStr
        .split(" ")
        .filter(e => e !== "")
        .map(Number);
    const alldistances = distancesStr
        .split(" ")
        .filter(e => e !== "")
        .map(Number);

    const times = [
        alltimes.reduce((acc, t) => parseInt((acc === 0 ? "" : acc.toString()) + t.toString()), 0)
    ]
    const distances = [
        alldistances.reduce((acc, t) => parseInt((acc === 0 ? "" : acc.toString()) + t.toString()), 0)
    ]
    console.log(times, distances);

    const res = times.reduce((acc, t, index) => {
        let nbPossibilities = 0;
        for(let i = 0; i < t; i++){
            const distanceDone = i * (t - i);
            
            if(distanceDone > distances[index]){
                nbPossibilities++;
            }
        }
        return acc * nbPossibilities;
    }, 1)

    console.log(res);
    
    return res
}