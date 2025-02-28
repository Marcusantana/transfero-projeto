 let list = document.querySelectorAll('.slider .list .item');
 let slider = document.querySelector('.slider');
 let pontos = document.querySelectorAll('.pontos_nav li');
 let avancar = document.getElementById('proximo');
 let voltar = document.getElementById('anterior');

 let lastPosition = list.length - 1;
 let active = 0;
 let zIndex = 2;
 avancar.onclick = () =>{
    let newValue = active + 1 >lastPosition ? 0 : active + 1
    setItemActive(newValue, mostrarSlider)
 }
 voltar.onclick = () =>{
    let newValue = active - 1 < 0 ? lastPosition : active - 1
    setItemActive(newValue, mostrarSlider)
 }

 pontos.forEach((ponto, index) =>{
   ponto.addEventListener('click', () =>{
      setItemActive(index, mostrarSlider)
   })
 })

 const setItemActive = (newValue, funcaoResposta) => {
    if(newValue === active) return 
    let tipo = newValue > active  ? 'proximo' : 'anterior'
    active = newValue
    funcaoResposta(tipo)
 }
 let removeEffect
 let automaticokkk = setTimeout(() => {
      avancar.click()
 }, 4200);
 const mostrarSlider = (tipo) =>{
    slider.style.pointerEvents = 'none'
    let itemActiveAnterior = document.querySelector('.slider .list .item.active')
    if (itemActiveAnterior) itemActiveAnterior.classList.remove('active')
    zIndex++;
    list[active].style.zIndex = zIndex
    list[active].classList.add('active')
    
    if(tipo ==='proximo'){
      slider.style.setProperty('--transform', '25px')
    } else{
      slider.style.setProperty('--transform', '-25px')
    }
    slider.classList.add('effect')
    
    let pontoActiveAnterior = document.querySelector('.pontos_nav li.active')
    if (pontoActiveAnterior) pontoActiveAnterior.classList.remove('active')
    pontos[active].classList.add('active')

    clearTimeout(removeEffect)
    removeEffect = setTimeout(() => {
         slider.classList.remove('effect')
         slider.style.pointerEvents = 'auto'
    }, 1500)
    clearTimeout(automaticokkk)
    automaticokkk = setTimeout(() => {
         avancar.click()
    }, 4200);
 }