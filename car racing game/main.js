canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
car1_width = 100;
car1_height = 90;
car1_x = 10;
car1_y = 10;
car2_width = 100;
car2_height = 90;
car2_x = 10;
car2_y = 80;
background_image = "background.jpg"

car1_image = "car1.png";
car2_image = "car2.png";

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    car1_imgTag = new Image();
    car1_imgTag.onload = uploadcar1;
    car1_imgTag.src = car1_image;

    car2_imgTag = new Image();
    car2_imgTag.onload = uploadcar2;
    car2_imgTag.src = car2_image;
    if (car1_x > 700) {
        console.log("car1 won ");
    }
    if (car2_x > 700) {
        console.log("car2 won ");
    }

}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1() {
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}

function uploadcar2() {
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}
window.addEventListener("keydown", mykeydown);

function mykeydown(e) {
    keypressed = e.keyCode;
    console.log(keypressed);
    if (keypressed == "38") {
        car1_up();
        console.log("up");
    }
    if (keypressed == "39") {
        car1_right();
        console.log("right");
    }

    if (keypressed == "40") {
        car1_down();
        console.log("down");
    }
    if (keypressed == "37") {
        car1_left();
        console.log("left");
    }




    if (keypressed == 65) {
        car2_left();
        console.log("a")
    }
    if (keypressed == 83) {
        car2_down();
        console.log("s")
    }
    if (keypressed == 87) {
        car2_up();
        console.log("w")
    }
    if (keypressed == "68") {
        car2_right();
        console.log("D");
    }
    if (car2_x > 700) {
        console.log("car_2 won")
        document.getElementById("gamestatus").innerHTML = "car2 won!"

    } else if (car1_x > 700) {
        console.log("car_1 won")
        document.getElementById("gamestatus").innerHTML = "car1 won!"

    }

}

function car1_right() {
    if (car1_x <= 750) {
        car1_x = car1_x + 10;
        console.log(car1_x);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car1_left() {
    if (car1_x >= 0) {
        car1_x = car1_x - 10;
        console.log(car1_x);
        uploadBackground();
        uploadcar1();
        uploadcar2()
    }
}

function car1_up() {
    if (car1_y >= 0) {
        car1_y = car1_y - 10;
        console.log(car1_x);
        uploadBackground();

        uploadcar1();
        uploadcar2()
    }
}

function car1_down() {
    if (car1_y <= 500) {
        car1_y = car1_y + 10;
        console.log(car1_x);
        uploadBackground();
        uploadcar1();
        uploadcar2()
    }
}

function car2_right() {
    if (car2_x <= 750) {
        car2_x = car2_x + 10;
        console.log(car1_x);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_left() {
    if (car2_x >= 0) {
        car2_x = car2_x - 10;
        console.log(car1_x);
        uploadBackground();
        uploadcar1();
        uploadcar2()
    }
}

function car2_up() {
    if (car2_y >= 0) {
        car2_y = car2_y - 10;
        console.log(car1_x);
        uploadBackground();

        uploadcar1();
        uploadcar2()
    }
}

function car2_down() {
    if (car2_y <= 500) {
        car2_y = car2_y + 10;
        console.log(car1_x);
        uploadBackground();
        uploadcar1();
        uploadcar2()
    }
}