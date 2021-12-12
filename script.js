root.style.display = 'flex';
root.style.flexWrap = 'wrap';


let button = document.createElement('button');
root.appendChild(button);
button.innerHTML = 'Generate Table';
button.style.width = "100%";
button.addEventListener("click", () => {start()});

function start() {
    let i = 1;
    let n = 2;
    let j = 0;
    let abc = setInterval(function () {
        let div = document.createElement('div');
        div.innerHTML = `${n * i}`;
        div.style.color = `${getRandomColor()}`;
        div.style.width = "10%";
        root.append(div);
        i++;
        if (i > 10) {
            i = 1;
            n++;
        } else {
            j++;
        }
        if(j == 10) j = 1;
        div.style.fontSize = `${j+20}px`;
        if (n > 10) {
            clearInterval(abc);
        }
    }, 5000);
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (let k = 0; k < 6; k++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}