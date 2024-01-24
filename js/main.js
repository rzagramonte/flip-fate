document.getElementById('purple').onclick = partyPurple;
document.getElementById('green').onclick = partyGreen;
document.getElementById('blue').onclick = partyBlue;
document.getElementById('orange').onclick = partyOrange;

document.querySelector('#clickMe').addEventListener('click', makeReq)

async function makeReq(){
  const res = await fetch('/api')
  const data = await res.json()

  console.log(data);
  document.querySelector("#coin").textContent = data.flip
}
function partyPurple() {
  document.querySelector('body').style.backgroundColor = 'rgba(241,63,247,1)';
  document.querySelector('body').style.color = 'white';
  document.querySelector('ul').style.borderColor = 'rgba(241,63,247,1)';
}

function partyGreen() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,253,81,1)';
  document.querySelector('body').style.color = 'white';
  document.querySelector('ul').style.borderColor = 'rgba(0,253,81,1)';
}

function partyBlue() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,254,255)';
  document.querySelector('body').style.color = 'white';
  document.querySelector('ul').style.borderColor = 'rgba(0,254,255)';
}
function partyOrange() {
  document.querySelector('body').style.backgroundColor = 'rgb(255, 165, 0)';
  document.querySelector('body').style.color = 'white';
  document.querySelector('ul').style.borderColor = 'rgb(255, 165, 0)';
}

