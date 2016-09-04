;(function(global, $) {
    
    // 'new' an object
    var PhraseGenerator = function(language) {
        return new PhraseGenerator.init(language);   
    }
    
    // hidden within the scope of the IIFE and never directly accessible
    var supportedLangs = ['en', 'pt'];

    var phrase = '';
    
    // subjects
    var subjects = {
        en: ['john','mike','laura'],
        pt: ['joao','miguel','rita']
    };
    
    // verbs
    var verbs = {
        en: ['likes','plays','eats'],
        pt: ['gosta','joga','come']
    };
    
    // predicates
    var predicates = {
        en: ['turtles','basketball','bananas'],
        pt: ['tartarugas','basquetebol','bananas']
    };
    
    // prototype holds methods (to save memory space)
    PhraseGenerator.prototype = {
        
        // 'this' refers to the calling object at execution time
        subject: function() {
            // return number between 0 and 2
            var index = Math.floor((Math.random() * 3) + 0);
            return subjects[this.language][index];   
        },
        
        validate: function() {
            // check that is a valid language
            // references the externally inaccessible 'supportedLangs' within the closure
             if (supportedLangs.indexOf(this.language)  === -1) {
                throw "Invalid language";   
             }
        },
        
        // retrieve messages from object by referring to properties using [] syntax
        verb: function() {
            // return number between 0 and 2
            var index = Math.floor((Math.random() * 3) + 0);
            return verbs[this.language][index];  
        },
        
        predicate: function() {
            // return number between 0 and 2
            var index = Math.floor((Math.random() * 3) + 0);
            return predicates[this.language][index]; 
        },
        
        // create the phrase
        phrase: function() {
            //var phrase;

            return this.subject()+' '+this.verb()+' '+this.predicate();

        },
        
        // sets language                    
        setLang: function(lang) {
            
            // set the language
            this.language = lang;
        
            // validate
            this.validate();
            
            // make chainable
            return this;
        },
        
        // create the phrase to put on html doc
        HTMLPhrase: function(selector) {
            if (!$) {
                throw 'jQuery not loaded';   
            }
            
            if (!selector) {
                throw 'Missing jQuery selector';   
            }
            
            // inject the message in the chosen place in the DOM
            $(selector).html(this.phrase());
            
            // make chainable
            return this;
        }
        
    };
    
    // the actual object is created here, allowing us to 'new' an object without calling 'new'
    PhraseGenerator.init = function(language) {
        
        var self = this;
        self.language = language || 'en';
        
        self.validate();
        
    }
    
    // trick borrowed from jQuery so we don't have to use the 'new' keyword
    PhraseGenerator.init.prototype = PhraseGenerator.prototype;
    
    // attach our Greetr to the global object, and provide a shorthand '$PG' for ease our poor fingers
    global.PhraseGenerator = global.PG$ = PhraseGenerator;
    
}(window, jQuery));