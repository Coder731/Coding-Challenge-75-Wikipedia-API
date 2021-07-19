// https://en.wikipedia.org/w/api.php?action=opensearch
// https://en.wikipedia.org/w/api.php?action=query&prop

let userInput;

function setup() {
    noCanvas();
    userInput = select('#userinput');
    userInput.changed(goWiki);
    goWiki();

    function goWiki() {
        let term = userInput.value();
        console.log(term);
    }
}