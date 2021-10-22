//Generates random number between 0 and num input.
const randNum = (num) => {
    let randNumber = Math.floor(Math.random()*num);
    return randNumber
}

//Class containing motorcycle parts and methods to get random parts.
const motorcycle = {
    frames: ['a rigid', 'a swing-arm', 'a digger', 'a plunger'],
    engines: ['Knuckle Head', 'Pan Head', 'Shovel Head', 'Iron head', 'Pre-Unit'],
    frontEndLength: ['a stock', 'a extended'],
    frontEnd: ['forks', 'springer', 'girder'],
    bars: ['drag', 'ape', 'pull-back', 'Z', '6-bend'],
    frontBreak: ['no front break', 'a front break'],

    getRandomFrame() {
        let randomFrame = randNum(this.frames.length);
        return this.frames[randomFrame];
    },

    getRandomEngine(){
        let randomEngine = randNum(this.engines.length);
        return this.engines[randomEngine];
    },

    getRandomFrontEndLength(){
        let randomFrontEndLength = randNum(this.frontEndLength.length);
        return this.frontEndLength[randomFrontEndLength];
    },

    getRandomFrontEnd(){
        let randomFrontEnd = randNum(this.frontEnd.length);
        return this.frontEnd[randomFrontEnd];
    },

    getRandomBars(){
        let randomBars = randNum(this.bars.length);
        return this.bars[randomBars];
    },

    getRandomFrontBreak(){
        let randomFrontBreak = randNum(this.frontBreak.length);
        return this.frontBreak[randomFrontBreak];
    },
};

let randomMotorcycle = () => {
    let motorcycleString = `Today you are going to ride ${motorcycle.getRandomFrame()} ${motorcycle.getRandomEngine()}, with ${motorcycle.getRandomFrontEndLength()} ${motorcycle.getRandomFrontEnd()}, ${motorcycle.getRandomBars()} bars, and ${motorcycle.getRandomFrontBreak()}. Good luck!`;
    return motorcycleString;
};

console.log(randomMotorcycle());