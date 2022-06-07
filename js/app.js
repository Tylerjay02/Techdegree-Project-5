
const search = new Filter('search', 'data-caption');

  function search () {
  let input = document.getElementById('search').value
    input=input.toLowerCase();
    let x = document.getElementByClassName('img');

  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
         x[i].style.display="none";
     }
     else {
         x[i].style.display="grid";
     }
 }
}

baguetteBox.run('.gallery');
