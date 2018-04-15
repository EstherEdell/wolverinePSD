'use strict';

var app = {};

// app.showWindow = function(){
//     
// }

var label = document.querySelectorAll('label');
var info = document.querySelectorAll('blurb');
app.events = function () {
    for (var i = 0; i < label.length; i++) {
        label[i].addEventListener('click', function () {
            blurb.classList.toggle('hide');
        });
    }
    // document.querySelectorAll('photography').addEventListener('click', function(){
    //     console.log('tst');
    //     document.getElementById("blurb").classList.toggle("hide");
    // })
};

app.init = function () {
    app.events();
};

$(function () {
    app.init();
});