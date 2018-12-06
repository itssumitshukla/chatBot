
let output = document.getElementsByClassName('changeMe')[0],
    inputThis = document.getElementById('inputSon'),
    clickSon= document.getElementById('clickSon');

// Array Questions
const askThese = [
    'Did you hear Luis has an awesome chatbot!',
    'Mikal did a bot about wall-e boi!',
    'Dora is from cali!!!',
    'Sean is livin it up in Coloradoooooo',
    'Taylor is spamming people from hubspot',
    'Heather has an awesome chatbot unlike this one'
];
const crunk = [
    'To the window to the wall',
    'Shorty get low low low',
    'YEEEEAHHHHH!!!',
    'Shake it like a salt shaker',
    'Tell me when to go!',
    'Hello and goodevening',
    'Shots, shots, shots, shots'
];

clickSon.addEventListener('click', function(){
    event.preventDefault();
    output.innerHTML = '';
    // output.innerHTML = inputThis.value;
    if(inputThis.value === 'Hello'){
        output.innerHTML = 'YEAH SON';
    } else if (inputThis.value === ''){
        output.innerHTML = 'WTF ASK SOMETHING';
    } else if (inputThis.value === 'okay'){
        output.innerHTML = 'TURN DOWN FOR WHATTTT';
    }  else if (inputThis.value === 'yeah'){
        crunk.forEach(element => {
            let nope = Math.floor(Math.random() * crunk.length);
            output.innerHTML = crunk[nope];
        })
    }else if (inputThis.value === 'what'){
        askThese.forEach(element => {
            let rando = Math.floor(Math.random() * askThese.length);
            output.innerHTML = askThese[rando];
        });
    }
    console.log(inputThis.value);
    inputThis.value = '';
}, false);
    
// This isnt working
function showImage() {
    var img = document.getElementById('flying');
    img.style.display = 'block';
};

setTimeout(showImage, 4000);


//need to add regex


//need to utilize api