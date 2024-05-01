document.addEventListener('mousemove',() => {
    let soap = document.querySelector(".soap");
    soap.style.left = (event.pageX) + 'Px';
    soap.style.top = (event.pageY) + 'Px';

    let i = document.createElement('i');
    i.style.left = (event.pageX) + 'Px';
    i.style.top = (event.pageY) + 'Px';

    i.style.scale = `${Math.random()* 1 + 1}`
    i.style.setProperty('--x', getRandomPosition());
    i.style.setProperty('--y', getRandomPosition());

   function getRandomPosition() {
      return `${Math.random()*400 - 200}px`; 
   }

    document.body.appendChild(i);

    setTimeout(() => {
        document.body.removeChild(i)
    },2000)
});