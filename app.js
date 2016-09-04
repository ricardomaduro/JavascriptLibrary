// gets a new object (the architecture allows us to not have to use the 'new' keyword here)
var g = PG$('pt');

// let's use our object on the click of the login button
$('#generate').click(function() {
   
    // create a new 'Greetr' object (let's pretend we know the name from the login)
    var phraseGen = PG$('pt');
    
    // hide the login on the screen
    //$('#logindiv').hide();
    
     // fire off an HTML phrase, passing the '#text' as the selector and the chosen language
    phraseGen.setLang($('#lang').val()).HTMLPhrase('#text');
    
});