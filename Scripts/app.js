/// <reference path="objects/label.ts"/>

//Filename : app.js
//@author Aayushi Shah
//@date Aug 04,2016
//StudentID : 300874124
//website : 
//@description : This file is the main javascript of this file.

// IIFE - Immediately Invoked Function Expression

(function () {
    "use strict";
    var canvas;
    var stage;
    var aayushi;
    // app entry function
    function init() {
        canvas = document.getElementById("canvas");
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 50; // 60 frames per second
        createjs.Ticker.on("tick", gameLoop); // call gameLoop every frame
        main();
    }
    function gameLoop() {
        aayushi.rotation -= 5;
        stage.update(); // refresh the stage container
    }
    function main() {
        aayushi = new objects.Label("AayushiShah:)", "45px Consolas", "#4b1b4b", 160, 160, true);
        stage.addChild(aayushi);
    }
    // call init funciton when window finishes loading
    window.addEventListener("load", init);
})();
//# sourceMappingURL=app.js.map