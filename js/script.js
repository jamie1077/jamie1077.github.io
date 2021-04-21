'use strict';

const offcanvasElementList = [].slice.call(document.querySelectorAll('.offcanvas'))
const offcanvasList = offcanvasElementList.map(function (offcanvasEl) {
  return new bootstrap.Offcanvas(offcanvasEl)
})

const form = document.querySelector('form');

form.addEventListener('submit', e => {
    if (!form.checkValidity()) {
        e.preventDefault()
        e.stopPropagation()
    }
    form.classList.add('was-validated')
}, false);

