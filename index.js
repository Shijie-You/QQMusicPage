let leftRationElement = document.querySelector('#left-mask-div');
let rightRationElement = document.querySelector('#right-mask-div');
let rotationUl = document.querySelector('.rotation-ul');
let rationPointLeft = document.querySelector('#rotation-btn-1');
let rationPointRight = document.querySelector('#rotation-btn-2');
rotationUl.style.left = -100 +'%';
leftRationElement.addEventListener('click', () => {
  if (rotationUl.style.left === '-200%') {
    let num = -200;
      let a = setInterval( function() {
        rotationUl.style.left = num + '%';
        num--;
        if( num === -300){
          rotationUl.style.left = -100 +'%';
          rationPointLeft.style.borderColor = 'rgba(0, 0, 0, 0.3)';
          rationPointRight.style.borderColor = 'rgba(0, 0, 0, 0.1)';
          clearInterval(a)
        }
      }, 1);
  } else {
    let num = -100;
    let a = setInterval( function() {
      rotationUl.style.left = num + '%';
      num--;
      if( num === -200){
        rotationUl.style.left = -200 +'%';
        rationPointLeft.style.borderColor = 'rgba(0, 0, 0, 0.1)';
        rationPointRight.style.borderColor = 'rgba(0, 0, 0, 0.3)';
        clearInterval(a)
      }
    }, 1);
  }
});

rightRationElement.addEventListener('click', () => {
  if (rotationUl.style.left === '-200%') {
    let num = -200;
    let a = setInterval( function() {
      rotationUl.style.left = num + '%';
      num++;
      if( num === -100){
        rotationUl.style.left = -100 +'%';
        rationPointLeft.style.borderColor = 'rgba(0, 0, 0, 0.3)';
        rationPointRight.style.borderColor = 'rgba(0, 0, 0, 0.1)';
        clearInterval(a)
      }
    }, 1);
  } else {
    let num = -100;
    let a = setInterval( function() {
      rotationUl.style.left = num + '%';
      num++;
      if( num === 0){
        rotationUl.style.left = -200 +'%';
        rationPointLeft.style.borderColor = 'rgba(0, 0, 0, 0.1)';
        rationPointRight.style.borderColor = 'rgba(0, 0, 0, 0.3)';
        clearInterval(a)
      }
    }, 1);
  }
});
rationPointLeft.addEventListener('click', () => {
  if (rotationUl.style.left === '-200%') {
    let num = -200;
    let a = setInterval( function() {
      rotationUl.style.left = num + '%';
      num--;
      if( num === -300){
        rotationUl.style.left = -100 +'%';
        rationPointLeft.style.borderColor = 'rgba(0, 0, 0, 0.3)';
        rationPointRight.style.borderColor = 'rgba(0, 0, 0, 0.1)';
        clearInterval(a)
      }
    }, 1);
  }
});
rationPointRight.addEventListener('click', () => {
  if (rotationUl.style.left === '-100%') {
    let num = -100;
    let a = setInterval( function() {
      rotationUl.style.left = num + '%';
      num++;
      if( num === 0){
        rotationUl.style.left = -200 +'%';
        rationPointLeft.style.borderColor = 'rgba(0, 0, 0, 0.1)';
        rationPointRight.style.borderColor = 'rgba(0, 0, 0, 0.3)';
        clearInterval(a)
      }
    }, 1);
  }
});
let tabMenu = document.querySelectorAll('.top-header-tab');

let tabArray = [...tabMenu[0].children].splice(0,5)
tabArray.map((item) => {
  item.addEventListener('click', () => {
    tabArray.map((item) => {
      item.id = '';
    });
    item.id= 'checked';

  })
});

