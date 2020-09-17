let colorPick = document.getElementsByClassName('color-picker');
let output = document.getElementById('output');
let colorList = ['green','blue','orange','purple']

//////////

for (let i = 0; i < colorPick.length; i++) {
    colorPick[i].style.backgroundColor = colorList[i];
    colorPick[i].addEventListener = ('click', function color() {
        changeColor=(colorList[i]);
    });
};

//////

(output.style.backgroundColor = color);