// JavaScript Document

var xhr = new XMLHttpRequest();
//creating instance of the XMLHttpRequest object 

xhr.open('GET', 'https://mds.bird.co/gbfs/los-angeles/free_bikes', true );
//The open method doesn't really open anything. 
//It just sets the stage / sets the parameters
//1st argument: method for retrieving information
//2nd argument: path to the information
//3rd argument: whether or not to retieve info asynchronously

xhr.onload = function() {
    //in between open and send create a function 
    //that waits for the data to load succesfully

    var cup = JSON.parse(xhr.responseText);
    //once the data arrives convert from string 
    //to json object and saze in var cup

    console.log(cup);
    //to see if everything worked preview json object in js console

}


xhr.send();
//the send doesn't send anything
//send method activates the open 
//actually starts the entire process rolling
