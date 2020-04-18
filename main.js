document.addEventListener("keydown", function(event) {
    if (event.code === "KeyA") {
        let audioA = new Audio("white_keys/A.mp3");
        return audioA.play()
    } else if (event.code == "KeyS") {
        let audioS = new Audio("white_keys/S.mp3");
        return audioS.play()
    } else if (event.code == "KeyD") {
        let audioD = new Audio("white_keys/D.mp3");
        return audioD.play()
    } else if (event.code == "KeyF") {
        let audioF = new Audio("white_keys/F.mp3");
        return audioF.play()
    } else if (event.code == "KeyG") {
        let audioG = new Audio("white_keys/G.mp3");
        return audioG.play()
    } else if (event.code == "KeyH") {
        let audioH = new Audio("white_keys/H.mp3");
        return audioH.play()
    } else if (event.code == "KeyJ") {
        let audioJ = new Audio("white_keys/J.mp3");
        return audioJ.play()
    } else if (event.code == "KeyW") {
        let audioW = new Audio("black_keys/W.mp3");
        return audioW.play()
    } else if (event.code == "KeyE") {
        let audioE = new Audio("black_keys/E.mp3");
        return audioE.play()
    } else if (event.code == "KeyT") {
        let audioT = new Audio("black_keys/T.mp3");
        return audioT.play()
    } else if (event.code == "KeyY") {
        let audioY = new Audio("black_keys/Y.mp3");
        return audioY.play()
    } else if (event.code == "KeyU") {
        let audioU = new Audio("black_keys/U.mp3");
        return audioU.play()
    }





    else {
        pressed_key = event.code;
        console.log("Pressed another key '" + pressed_key + "'")
    }
});