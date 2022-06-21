const hamburguesa = document.getElementsByClassName('hamburguesa')[0]
const linksMdz = document.getElementsByClassName('linksMdz')[0]

hamburguesa.addEventListener('click', () => {
    linksMdz.classList.toggle('active')
})

const modals = document.querySelectorAll('[data-modal]');

modals.forEach(function (trigger) {
  trigger.addEventListener('click', function (event) {
    event.preventDefault();
    const modal = document.getElementById(trigger.dataset.modal);
    modal.classList.add('open');
    const exits = modal.querySelectorAll('.modal-exit');
    exits.forEach(function (exit) {
      exit.addEventListener('click', function (event) {
        event.preventDefault();
        modal.classList.remove('open');
      });
    });
  });
});





function pruebaemail(valor){
	re=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
	if(!re.exec(valor)){
		alert('email no valido');
        console.log(valor)
	}
	else alert('se ha enviado un correo');
}
