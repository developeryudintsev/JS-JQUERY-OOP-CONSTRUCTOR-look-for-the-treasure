function MyConstructor() {
    this.start = function () {
        let coordinatX = Math.floor(Math.random() * 600) + 30;
        let coordinatY = Math.floor(Math.random() * 400) + 30;
        let currentThis = this;
        let boll = document.querySelector('#boll');
        $('#x').offset({ left: coordinatX, top: coordinatY });
        addEventListener('click', function () {
            boll.style.display = 'block';
            boll.style.height = 100;
            boll.style.width = 100;
            currentThis.circle();
            currentThis.clickOn(coordinatX, coordinatY);
        })
        this.timer = function () {
            setTimeout(() => {
                temperature.style.display = 'none';
            }, 1000);
        }

        // $('#reload').click(currentThis.reloadFoo);
    }
}

MyConstructor.prototype.circle = function () {
    let myClickX = event.x;
    let myClickY = event.y;
    let sum = 100;
    let myCenter = 43;

    let myStop = setInterval(mySize, 15);

    function mySize() {
        sum++;
        myCenter++;
        boll.style.width = sum;
        boll.style.height = sum;
        $('#boll').offset({ left: myClickX - myCenter, top: myClickY - myCenter });
        if (sum === 150) {
            clearInterval(myStop)
            boll.style.display = 'none';
        }
    }
}

MyConstructor.prototype.clickOn = function (coordinatX, coordinatY) {
    let X = event.x;
    let Y = event.y;
    let distanceX = coordinatX - X;
    let distanceY = coordinatY - Y;
    let win = document.querySelector('#win');
    let temperature = document.querySelector('#temperature');
    let gepotinuza = Math.sqrt((distanceX * distanceX) + (distanceY * distanceY));
    console.log(distanceX)

    if (gepotinuza < 75) {
        win.style.display = 'block'
        $('#win').html('you are win')
        document.getElementById("win").style.opacity = 1;
    } else if (gepotinuza < 150) {
        temperature.style.display = 'block'
        $('#temperature').html('you are hot');
        document.getElementById("temperature").style.color = "orange";
        this.timer()//------------------------------------------------------------
    } else if (gepotinuza < 250) {
        temperature.style.display = 'block'
        $('#temperature').html('you are warm')
        document.getElementById("temperature").style.color = "yellow";
        this.timer()//------------------------------------------------------------
    } else if (gepotinuza < 350) {
        temperature.style.display = 'block'
        $('#temperature').html('you are cold')
        document.getElementById("temperature").style.color = "skyblue";
        this.timer()//------------------------------------------------------------
    } else if (gepotinuza < 450) {
        temperature.style.display = 'block'
        $('#temperature').html('you are frizing')
        document.getElementById("temperature").style.color = "blue";
        this.timer()//------------------------------------------------------------
    }
}


