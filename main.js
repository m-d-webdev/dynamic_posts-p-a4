let prfimg = document.querySelector('.prfimg');
let usern = document.querySelector('.username');

let myarr = ['', 'mohammed', 'abdellah', 'ali', 'samir', 'ibrahim', 'ahmed', 'mustapha iderkaoui']
let arrimg = ['', 'img1.jpeg', 'img2.jpg', 'img3.jpeg', 'img4.jpeg', 'img5.jpeg', 'img6.jpeg', 'img3.jpg']



var i = 0;

var container = document.querySelector('.container');

var coeur = document.querySelectorAll('.coeur');

function addingmare() {


  let containercloned = container.cloneNode(true)
  document.querySelector('.coeur').src = 'coeur.png';
  document.querySelector('.coeur').classList.remove('activecoeur')

  i += 1;

  if (myarr[i] != undefined) {
    let poofileimg = document.querySelector('.prfimg');
    usern.innerHTML = myarr[i];
    poofileimg.src = arrimg[i];
    container.after(containercloned);
  }

  else {
    newbtn.style.display = 'none'
  }


}

window.onclick= function (){
  var coeur = document.querySelectorAll('.coeur');
  coeur.forEach(c => {
    c.addEventListener('click', function () {
      if (c.src.match('coeur.png')) {
        c.src = 'coeur1.png';
      }
      else if (c.src.match('coeur1.png')) {
        c.src = 'coeur.png'
      }
    })
  
    c.addEventListener('click', () => {
      c.classList.toggle("activecoeur")
    })
  });
  
}







let informationUsers = {
  user1: {
    name: 'Ahmed',
    lastName: "Bekheyah",
    email: 'ahmedbelheyahe@gmail.com',
    datedepublication: '01 /05 /2023'
  },
  user2: {
    name: 'mostapha',
    lastName: "iderkaoui",
    email: 'mstphiderkaoui@gmail.com',
    datedepublication: '21 /05 /2023'
  },
  user3: {
    name: '3abdollah',
    lastName: "iderkaoui",
    email: 'abdellahiderkaoui@gmail.com',
    datedepublication: '06 /05 /2023'
  },
  user4: {
    name: 'Mohammed',
    lastName: "iderkaoui",
    email: 'mohammediderkaoui@gmail.com',
    datedepublication: '10 /05 /2023'
  },
  user5: {
    name: 'imane',
    lastName: "Atouga",
    email: 'atuogaImane@gmail.com',
    datedepublication: '05 /05 /2023'
  },
  user6: {
    name: 'Rachid',
    lastName: "aytLimame",
    email: 'rachidlim@gmail.com',
    datedepublication: '01 /05 /2023'
  }
}


var newbtn = document.querySelector('.addbtn');
newbtn.addEventListener('click', addingmare)






// coeur.addEventListener('click', function(){
//   coeur.classList.toggle("activecoeur")
//   if(coeur.src.match('coeur.png')){
//     coeur.src='coeur1.png';
//   }
//   else{
//     coeur.src='coeur.png'
//   }
// })


// let arrlik= Array.from(coeur);
// console.log(arrlik)