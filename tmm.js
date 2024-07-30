// Local (content script context) variables:
memoryFetched = null;
currentIndex = 0;

    /* Memory composition:
        Storage {
            "TMM": 
                "THIS_PAGE": {
                    "tabindexes" : [69,1,2,3,5...],
                },
            }
        }  
         
    */

addEventListener("onfocus", (event) => {

    // Have we ran yet?:
    if (memoryFetched == null) {

    }else {
        // Have we run out of indexes?
        if (memoryFetched["tabindexes"]) {
            
        }
    }
    // Do we have a memory for this particular page yet?
    // If yes: fetch it and store


    // Composing the object to save into memory for next revisit:
        // Find what TabIndex this is
        // Have we clicked a link and the tabindex matches?
            // If yes: Then send this into memory



});