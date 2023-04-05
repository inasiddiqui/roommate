window.stateCallback = () => {
	console.log('Something changed!')
}

  let status=[0,0,0,0,0,0,0,0,0]
  // let statusStorage= localStorage.getItem("status")
  // ? JSON.parse(localStorage.getItem("status"))
  //   : status; 



var cards = document.querySelectorAll('.card');

[...cards].forEach((card)=>{
  card.addEventListener( 'click', function() {
    console.log(card,card.classList,card.innerHTML)


    // card.classList.toggle('is-flipped');

    if(card.classList.contains('is-flipped')){
      card.classList.remove('is-flipped')
     var innervalue= card.querySelector('.card__face--front').innerHTML 
    var itemId=parseInt(card.id.replace('card_',''))
    status[itemId]=0
     console.log(status)
     
    }

    
    else{card.classList.add('is-flipped')
    var innervalue= card.querySelector('.card__face--back').innerHTML 
    var itemId=parseInt(card.id.replace('card_',''))
    status[itemId]=1
    console.log(status)
  }

  });
});