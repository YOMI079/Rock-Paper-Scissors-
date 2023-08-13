// for win  lose tie
const score= JSON.parse(localStorage.getItem('score')) || {
    wins:  0,
    losses:0,
    ties:0
  };
  updateScoreElement();
//  if(!score){
//   score={you picked ${playerMove}.computer picked ${computerMove}. ${result}
//     wins:  0,
//     losses:0,
//     ties:0
//   };
//  }

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = '';
   if (playerMove === 'Paper') {
    if (computerMove === 'Rock') {
      result = 'you win';
    } else if (computerMove === 'Paper') {
      result = 'tie';
    } else if (computerMove === 'Scissor') {
      result = 'you lose';
    }
  } else if (playerMove === 'Rock') {
    if (computerMove === 'Rock') {
      result = 'tie ';
    } else if (computerMove === 'Paper') {
      result = 'you lose';
    } else if (computerMove === 'Scissor') {
      result = 'you win';
    }
} else if (playerMove === 'Scissor') {
    if(computerMove === 'Rock'){
        result = 'you win';
    } else if(computerMove === 'Paper'){
        result = 'you lose';
    } else if(computerMove === 'Scissor'){
        result = 'tie';
    }
}

    
  if(result==='you win'){
    score.wins+=1;
  }else if(result==='you lose'){
    score.losses+=1;
  }else if(result==='tie'){
  score.ties +=1;
  }
  localStorage.setItem('score',JSON.stringify(score));
   updateScoreElement();

   document.querySelector('.js-result').innerHTML=result;
   document.querySelector('.js-moves').innerHTML = `You<img src="${playerMove}-emoji.png" alt=""> <img src="${computerMove}-emoji.png" alt="">Computer`
  // alert(
  //   `you picked ${playerMove}.computer picked ${computerMove}. ${result}
  //   wins: ${score.wins},losses: ${score.losses}, ties ${score.ties}`
  // );
}
function updateScoreElement(){
  document.querySelector('.js-score').innerHTML=`
    wins: ${score.wins},losses: ${score.losses}, ties ${score.ties}`
}
function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'Rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'Paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'Scissor';
  }
  return computerMove;
}