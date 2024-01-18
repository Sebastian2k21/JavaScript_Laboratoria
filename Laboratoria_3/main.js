

document.body.addEventListener('keypress', onKeyPress);
document.querySelector('#recordButtonOne').addEventListener('click', recordBtnOne);
document.querySelector('#recordButtonTwo').addEventListener('click', recordBtnTwo);
document.querySelector('#recordButtonThree').addEventListener('click', recordBtnThree);
document.querySelector('#recordButtonFour').addEventListener('click', recordBtnFour);
document.querySelector('#playButtonOne').addEventListener('click', playBtnOne);
document.querySelector('#playButtonTwo').addEventListener('click', playBtnTwo);
document.querySelector('#playButtonThree').addEventListener('click', playBtnThree);
document.querySelector('#playButtonFour').addEventListener('click', playBtnFour);
document.querySelector('#playButtonAll').addEventListener('click', playBtnAll);

const gallery = document.querySelectorAll('.sounds div');

for(let i = 0; i < gallery.length; i++){
    const audio = gallery[i];
    audio.addEventListener('click', Play);
    audio.addEventListener('mouseEnter', enter);
    audio.addEventListener('mouseOut', out);
}

const one = document.querySelector('#Boom');
const two = document.querySelector('#Clap');
const three = document.querySelector('#Hihat');
const four = document.querySelector('#Kick');
const five = document.querySelector('#Openhat');
const six = document.querySelector('#Ride');
const seven = document.querySelector('#Snare');
const eight = document.querySelector('#Tink');
const nine = document.querySelector('#Tom');

function enter(tmp){
    let x = tmp.target;
    ;
}
function out(tmp){
    let x = tmp.target;
   
}

let recordedSoundOne = [];
let recordedSoundTwo = [];
let recordedSoundThree = [];
let recordedSoundFour = [];

const recorded = {
    "one": recordedSoundOne,
    "two": recordedSoundTwo,
    "three": recordedSoundThree,
    "four": recordedSoundFour
}

const recordedStart = {
    "one": 0,
    "two": 0,
    "three": 0,
    "four": 0
}

let recordedStartTimeOne;
let recordedStartTimeTwo;
let recordedStartTimeThree;
let recordedStartTimeFour;
let recordOne = false;
let recordTwo = false;
let recordThree = false;
let recordFour = false;
let soundId;
let recordedName;

function RecordOne(){
    const soundTime = Date.now() - recordedStartTimeOne;
    
    const soundObj = {
        soundId: soundId,
        time: soundTime

    };
    recordedSoundOne.push(soundObj);
}

function RecordTwo(){
    const soundTime = Date.now() - recordedStartTimeTwo;
        
        const soundObj = {
            soundId: soundId,
            time: soundTime
    
        };
        recordedSoundTwo.push(soundObj);
}

function RecordThree(){
    const soundTime = Date.now() - recordedStartTimeThree;
        
        const soundObj = {
            soundId: soundId,
            time: soundTime
    
        };
        recordedSoundThree.push(soundObj);
}

function RecordFour(){
    const soundTime = Date.now() - recordedStartTimeFour;
        
        const soundObj = {
            soundId: soundId,
            time: soundTime
    
        };
        recordedSoundFour.push(soundObj);
}

function Play(ev){
    soundId = undefined;
    console.log(ev);
    
    switch(ev.target){
        case one:
            soundId = 'boom';
            break;
        case two:
            soundId = 'clap';
            break;
        case three:
            soundId = 'hihat';
            break;
        case four:
            soundId = 'kick';
            break;
        case five:
            soundId = 'openhat';
            break;
        case six:
            soundId = 'ride';
            break;
        case seven:
            soundId = 'snare';
            break;
        case eight:
            soundId = 'tink';
            break;
        case nine:
            soundId = 'tom';
            break;

        
    }
    playSound(soundId);

    

    if(recordOne){
        RecordOne();
    }
    console.log(recordedSoundOne);

    if(recordTwo){
        RecordTwo();
    }
    console.log(recordedSoundTwo);
    if(recordThree){
        RecordThree();
    }
    console.log(recordedSoundThree);
    if(recordFour){
        RecordFour();
    }
    console.log(recordedSoundFour);
}


function onKeyPress(ev){
    console.log(ev);
    soundId = undefined;

    switch(ev.code){
        case 'KeyA':
            soundId ='boom';
            break;
        case 'KeyS':
            soundId = 'clap';
            break;
        case 'KeyD':
            soundId = 'hihat';
            break;
        case 'KeyF':
            soundId = 'kick';
            break;
        case 'KeyG':
            soundId = 'openhat';
            break;
        case 'KeyH':
            soundId = 'ride';
            break;
        case 'KeyJ':
            soundId = 'snare';
            break;
        case 'KeyK':
            soundId = 'tink';
            break;
        case 'KeyL':
            soundId = 'tom';
            break;

    }
    console.log(recordedStartTimeOne);
    console.log(soundId);
    if(soundId != undefined){
        playSound(soundId);
    }


    const soundTime = Date.now() - recordedStart[recordedName];
    
    const soundObj = {
        soundId: soundId,
        time: soundTime

    };
    recorded[recordedName].push(soundObj);



      
}


function recordBtnOne(){
    recordedSoundOne = [];
    recordOne = true;
    recordedName = "one"
    recordedStartTimeOne = Date.now();
    recordedStart["one"] = Date.now();
}
function recordBtnTwo(){
    recordedSoundTwo = [];
    recordTwo = true;
    recordedName = "two"
    recordedStartTimeTwo = Date.now();
    recordedStart["two"] = Date.now();
}
function recordBtnThree(){
    recordedSoundThree = [];
    recordThree = true;
    recordedName = "three"
    recordedStartTimeThree = Date.now();
    recordedStart["three"] = Date.now();
}
function recordBtnFour(){
    recordedSoundFour = [];
    recordFour = true;
    recordedName = "four"
    recordedStartTimeFour = Date.now();
    recordedStart["four"] = Date.now();
}


function playBtnOne(){
    recordOne = false;
    for (let index = 0; index < recordedSoundOne.length; index++) {
        const soundObj = recordedSoundOne[index];
        if(soundObj.soundId != undefined){
            setTimeout(()=> {
                playSound(soundObj.soundId);
            },
            soundObj.time);  
        } 
  
    }
    
}
function playBtnTwo(){
    recordTwo = false;
    for (let index = 0; index < recordedSoundTwo.length; index++) {
        const soundObj = recordedSoundTwo[index];
        if(soundObj.soundId != undefined){
            setTimeout(()=> {
                playSound(soundObj.soundId);
            },
            soundObj.time);  
        } 
   
    }
    
}
function playBtnThree(){
    recordThree = false;
    for (let index = 0; index < recordedSoundThree.length; index++) {
        const soundObj = recordedSoundThree[index];
        if(soundObj.soundId != undefined){
            setTimeout(()=> {
                playSound(soundObj.soundId);
            },
            soundObj.time);  
        }    
    }
    
}
function playBtnFour(){
    recordFour = false;
    for (let index = 0; index < recordedSoundFour.length; index++) {
        const soundObj = recordedSoundFour[index];
        if(soundObj.soundId != undefined){
            setTimeout(()=> {
                playSound(soundObj.soundId);
            },
            soundObj.time);  
        }         
    }
    
}


function playBtnAll(){
    playBtnOne();
    playBtnTwo();
    playBtnThree();
    playBtnFour();
}

 
function playSound(soundId){
    const sound = document.querySelector('#' + soundId);
    sound.play();
}