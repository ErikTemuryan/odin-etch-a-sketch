let netSize = 16;
let size = 0;

function createNet(netSize, widthNet, heightNet) {
    for (let i = 0; i < netSize; i++) {
        for (let j = 0; j < netSize; j++) {
            const iDiv = document.createElement('div');
            iDiv.className = 'block';
            iDiv.style.width = widthNet;
            iDiv.style.height = heightNet;
            iDiv.style.backgroundColor = "white";
            document.getElementById('container').appendChild(iDiv);
            iDiv.addEventListener("mousemove", function() {
                iDiv.style.backgroundColor = "black";
            }); 
            
        }
    }
}

function deleteNet() {
    const container = document.getElementById('container');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function changeBackgroundToWhite() {
    deleteNet();
    createNet(netSize, size + "px", size + "px");
}

function sliderChange(val) {
    document.getElementById("sliderVal").innerHTML = `${val} x ${val}`;
    size = 512 / val - 2;
    netSize = val;
    deleteNet();
    createNet(val, size + "px", size + "px");
}

function clearNet() {
    const button = document.getElementById("clearButton");
    button.addEventListener("mousedown", function() {
        button.style.fontSize = "24px";
        button.style.border = "3px solid blue";
    });
    button.addEventListener("mouseup", function() {
        button.style.fontSize = "20px";
        button.style.border = "2px solid blue";
        changeBackgroundToWhite();
    })
}