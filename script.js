var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}



function openmenu() {
  const sideMenu = document.getElementById("sidemenu");
  sideMenu.style.width = "350px"; // Adjust the width as needed
}

function closemenu() {
  const sideMenu = document.getElementById("sidemenu");
  sideMenu.style.width = "0";
}




const scriptURL = 'https://script.google.com/macros/s/AKfycby8fr5DY4uNIqqCCACkRKHm6yoVrEUkzmntq5FCAtd04BcwfXz_KL6cmiw4m_A_Oz6g/exec'
const form = document.forms['submit-to-google-sheet']


form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})


function closeGame(gameId) {
  var iframe = document.getElementById('gamiside');
  iframe.src = '';
  const gameContent = document.getElementById(gameId);
  const gameIframe = gameContent.querySelector('iframe');
  // gameIframe.remove();
  gameContent.querySelector('.close-button').remove();
}


function loadGame(gameId) {
  var iframe = document.getElementById('gamiside');
  if (!iframe.getAttribute('src') && gameId === 'game1') {
    iframe.src = "http://www.freeonlinegames.com/embed/149448";
  }
  if (!iframe.getAttribute('src') && gameId === 'game2') {
    iframe.src = "http://www.freeonlinegames.com/embed/144991";
  }
}



$items.forEach((item, i) => {
  item.addEventListener('click', () => {
    progress = (i / $items.length) * 100 + 10;
    animate();

    // Toggle the 'selected' class on the clicked item
    item.classList.toggle('selected');

    // Hide the bio of other items
    $items.forEach(($item) => {
      if ($item !== item) {
        $item.classList.remove('selected');
      }
    });
  });
});
