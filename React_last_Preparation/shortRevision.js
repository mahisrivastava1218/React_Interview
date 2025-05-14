//Dynamic debounce
//Based on input length
function getDynamicDelay(input){
    if(input.length<3){
        return 500;
    }
    if(input.length<6){
        return 300;
    }
    return 150;
}
// Dynamic Debouncing:
// The delay is not fixed but changes based on the input or context. For example, the delay might be longer for slower inputs and shorter for faster inputs.
//Based on typing speed
function getDelayByTypingSpeed(){
    const currentDate = Date.now();
    const typingSpeeed = currentDate-lastKeyTime; 
    lastKeyTime = now;
    return Math.max(100,Math.min(typingSpeeed*2,500));
}

let timeout;
function handleSearchInput(event){
    clearTimeout(timeout);
    const input = event.target.value;
    const delay = getDynamicDelay(input);
    timeout=setTimeout(()=>getAPIcall().delay);
}