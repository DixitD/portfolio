/*<!--     FileName: app.js      -->
<!--     Author: Dixit Hihoriya   -->
<!--     StudentID: 301201312     -->
<!--     Date : 19th June 2022     -->*/

// IIFE -- Immediately Invoked Function Expression
(function(){

    function Start()
    {
        console.log("App Started...");

        let deleteButtons = document.querySelectorAll('.btn-danger');
        
        for(button of deleteButtons)
        {
            button.addEventListener('click', (event)=>{
                if(!confirm("Are you sure?")) 
                {
                    event.preventDefault();
                    window.location.assign('/contactList');
                }
            });
        }

    }

    window.addEventListener("load", Start);

})();