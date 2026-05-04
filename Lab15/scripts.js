document.addEventListener('DOMContentLoaded', function(){
  var rotate = function(component, step){
    var slide = component.querySelector('.slide');
    let slideWidthVw = ((slide.offsetWidth / document.documentElement.clientWidth)-1) * 100;
    var left = Number(slide.style.left.replace('vw', ''));

    if(isNaN(left)){
      left = 0;
    }

    left += step * 100;

    if(left > 0) left = 0;
    if(left < -slideWidthVw) left = -slideWidthVw;

    slide.style.left = left+'vw';
  };

  var components = document.querySelectorAll('.gallery');

  for(var i = 0; i < components.length; i++){
    let component = components[i];

    component.querySelector('.left').addEventListener('click', function(){
      rotate(component, 1);
    });

    component.querySelector('.right').addEventListener('click', function(){
      rotate(component, -1);
    });
  }

  document.querySelectorAll('.cloner').forEach(function(cloner){
    cloner.querySelector('.add-button').addEventListener('click', function(){
      cloneRow(cloner);
    });

    cloneRow(cloner);
  });

  var orderButton = document.querySelector('form a[href="#"]');
  var closeButton = document.querySelector('.close');

  if(orderButton){
    orderButton.addEventListener('click', function(){
      document.querySelector('form dialog').classList.toggle('show');
    });
  }

  if(closeButton){
    closeButton.addEventListener('click', function(){
      document.querySelector('form dialog').classList.toggle('show');
    });
  }
});

function cloneRow(cloner){
  let container = cloner.querySelector('.container');
  let template = cloner.querySelector('template');
  let clon = template.content.cloneNode(true);
  container.appendChild(clon);
}

function removeRow(e){
  let button = e.target;
  let row = button.closest('.row');
  row.remove();
}