function altera_visu() {
  var cardp = document.querySelector('.page__style');
  cardp.classList.add('animate_content');

  setTimeout(function() {
    cardp.style.transition = 'opacity 100ms';
    cardp.style.opacity = '0';
  }, 10);

  setTimeout(function() {
    cardp.style.transition = 'opacity 100ms';
    cardp.style.opacity = '1';
  }, 150);

  setTimeout(function() {
    cardp.classList.remove('animate_content');
  }, 150);

  setTimeout(function() {
    cardp.classList.remove('fadeIn');
  
    var id_produtos = document.getElementById("produtos");
    var items_produtos = id_produtos.getElementsByClassName("items");

    if(items_produtos[0].style.flexWrap  != "initial"){
      items_produtos[0].style.overflowX = "auto";
      items_produtos[0].style.flexWrap  = "initial";
      items_produtos[0].style.width  = "100%";
      items_produtos[0].style.justifyContent= "start";
    } else{
      items_produtos[0].style.overflowX = "initial";
      items_produtos[0].style.flexWrap  = "wrap";
      items_produtos[0].style.width  = "100%";
      items_produtos[0].style.justifyContent= "center";
    }
  }, 150);

}
