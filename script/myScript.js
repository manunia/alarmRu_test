/**
 * Created by Admin on 05.02.2019.
 */
    //1.
var converseBtn = document.getElementById("conversion");
converseBtn.onclick = converseSpeed;

function converseSpeed() {
    var speed = document.getElementById("speed").value,
        result = document.getElementById("result"),
        conversedSpeed = Number(speed);

    conversedSpeed = speed * 1000 / 3600;
    result.innerText = conversedSpeed;
}
//обработка нажатия на Enter
document.onkeydown = function(e) {
    if (e.keyCode == 13) {
        console.log(e.keyCode)
        converseSpeed();
    }
}
//2.
var outZodiac = document.getElementById("outZodiac");
outZodiac.onclick = function () {
    var birth = document.getElementById("birth").value,
        arr = birth.split("-"),
        date = new Date(arr[0],arr[1],arr[2]),
        zodiac = document.getElementById("zodiac"),
        compare = new Date(arr[0],0,20),
        k;

    for (var i = 1; i <= 12; i++) {
        compare.setDate(compare.getDate() + 29);
        console.log(compare);
        if (date.getMonth() === compare.getMonth()) {
            console.log(i);
            if (date.getDate() >= 20) {
                console.log(date);
                k = i;
                break;
            } else if (date.getDate() <= 19) {
                console.log(date);
                k = i - 1;
                break;
            }
        }
    }


    switch (k) {
        case 1:
            zodiac.innerText = "водолей";
            break;
        case 2:
            zodiac.innerText = "рыбы";
            break;
        case 3:
            zodiac.innerText = "овен";
            break;
        case 4:
            zodiac.innerText = "телец";
            break;
        case 5:
            zodiac.innerText = "близнецы";
            break;
        case 6:
            zodiac.innerText = "рак";
            break;
        case 7:
            zodiac.innerText = "лев";
            break;
        case 8:
            zodiac.innerText = "дева";
            break;
        case 9:
            zodiac.innerText = "весы";
            break;
        case 10:
            zodiac.innerText = "скорпион";
            break;
        case 11:
            zodiac.innerText = "стрелец";
            break;
        case 12:
            zodiac.innerText = "козерог";
            break;
    }
}
