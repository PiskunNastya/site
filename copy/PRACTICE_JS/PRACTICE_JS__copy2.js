// var square = document.querySelector('.square__square');

// square.addEventListener('mousedown', function(event) {
//     var boxForSquare = document.querySelector('.square__boxForSquare');
//     // var clickCoordinaresSquared_X = event.offsetX;      // узнаем координаты клика квадрата
//     // var clickCoordinaresSquared_Y = event.offsetY;      // узнаем координаты клика квадрата

//     var clickCoordinaresSquared_X = event.clientX;      // узнаем координаты клика квадрата
//     var clickCoordinaresSquared_Y = event.clientY;      // узнаем координаты клика квадрата

//     // console.log(event.clientY)

//     boxForSquare.addEventListener('mouseup', function() {
//         boxForSquare.removeEventListener('mousemove', eventMousemove);      // удаляем обработчик события 
//     });


//     boxForSquare.addEventListener('mousemove', eventMousemove);
//     function eventMousemove(event) {

//         // var moveMouseX = event.offsetX;                 // узнаем координаты клика относительно поля boxForSquare       
//         // var moveMouseY = event.offsetY;                 // узнаем координаты клика относительно поля boxForSquare

//         // var moveMouseX = event.clientX;                 // узнаем координаты клика относительно поля boxForSquare       
//         // var moveMouseY = event.clientY;                 // узнаем координаты клика относительно поля boxForSquare

//         console.log(event.offsetY)



//         // square.style.top = moveMouseY - clickCoordinaresSquared_Y + 'px';
//         // square.style.left = moveMouseX - clickCoordinaresSquared_X + 'px';

//         // Антон
//         // square.style.top = event.clientY - clickCoordinaresSquared_Y + 'px';
//         // square.style.left = event.clientX - clickCoordinaresSquared_X + 'px';

//         // square.style.top = event.offsetY - clickCoordinaresSquared_Y + 'px';
//         // square.style.left = event.offsetX - clickCoordinaresSquared_X + 'px';


//         // да
//         square.style.top = event.offsetY + 'px';
//         square.style.left = event.offsetX + 'px';


//         // square.style.top = moveMouseY + 'px';
//         // square.style.left = moveMouseX + 'px';
//     }
// });







var square = document.querySelector('.square__square');

square.addEventListener('mousedown', function(event) {
    var boxForSquare = document.querySelector('.square__boxForSquare');
    var clickCoordinaresSquared_X = event.offsetX;      // узнаем координаты клика квадрата
    var clickCoordinaresSquared_Y = event.offsetY;      // узнаем координаты клика квадрата

    // var clickCoordinaresSquared_X = event.clientX;      // узнаем координаты клика квадрата
    // var clickCoordinaresSquared_Y = event.clientY;      // узнаем координаты клика квадрата

    // console.log(event.clientY)

    boxForSquare.addEventListener('mouseup', function() {
        boxForSquare.removeEventListener('mousemove', eventMousemove);      // удаляем обработчик события 
    });


    boxForSquare.addEventListener('mousemove', eventMousemove);
    function eventMousemove(event) {

        // var moveMouseX = event.offsetX;                 // узнаем координаты клика относительно поля boxForSquare       
        // var moveMouseY = event.offsetY;                 // узнаем координаты клика относительно поля boxForSquare

        // var moveMouseX = event.clientX;                 // узнаем координаты клика относительно поля boxForSquare       
        // var moveMouseY = event.clientY;                 // узнаем координаты клика относительно поля boxForSquare

        console.log(event)



        // square.style.top = moveMouseY - clickCoordinaresSquared_Y + 'px';
        // square.style.left = moveMouseX - clickCoordinaresSquared_X + 'px';

        // Антон
        // square.style.top = event.clientY - clickCoordinaresSquared_Y + 'px';
        // square.style.left = event.clientX - clickCoordinaresSquared_X + 'px';

        // square.style.top = event.clientY + 'px';
        // square.style.left = event.clientX + 'px';

        // да да
        // square.style.top = event.offsetY + 'px';
        // square.style.left = event.offsetX + 'px';

        square.style.top = event.offsetY - clickCoordinaresSquared_Y + 'px';
        square.style.left = event.offsetX - clickCoordinaresSquared_X + 'px';

        // square.style.top = event.offsetY - clickCoordinaresSquared_Y + 'px';
        // square.style.left = event.offsetX - clickCoordinaresSquared_X + 'px';


        // да
        // square.style.top = event.offsetY + 'px';
        // square.style.left = event.offsetX + 'px';


        // square.style.top = moveMouseY + 'px';
        // square.style.left = moveMouseX + 'px';
    }
});












































// const dragDiv = document.getElementById('square__square');
// var boxForSquare = document.querySelector('.square__boxForSquare');
// const moveObject = {}


// boxForSquare.addEventListener('mousedown', function(e) {
//     if (e.target.tagName === 'DIV') {
//         boxForSquare.addEventListener('mousemove', mouseMoveFunc)
//         moveObject.x = e.offsetX
//         moveObject.y = e.offsetY
//       }
// })



// // boxForSquare.addEventListener('mousedown', mouseDownFunc)
// // const mouseDownFunc = (e) => {
// //   if (e.target.tagName === 'DIV') {
// //     boxForSquare.addEventListener('mousemove', mouseMoveFunc)
// //     moveObject.x = e.offsetX
// //     moveObject.y = e.offsetY
// //   }
// // }

// const mouseMoveFunc = (e) => {
// //   dragDiv.style.top = (e.clientY - moveObject.y).toString() + 'px'
// //   dragDiv.style.left = (e.clientX - moveObject.x).toString() + 'px'

//   dragDiv.style.top = (e.clientY).toString() + 'px'
//   dragDiv.style.left = (e.clientX).toString() + 'px'

//   console.log(e.clientY)
// }



// document.addEventListener('mouseup', mouseUpFunc)
// let mouseUpFunc = () => {
//     boxForSquare.removeEventListener('mousemove', mouseMoveFunc)
// }





