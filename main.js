
(function () {
  "use strict";

  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  const btn = document.querySelector(".hamburger-icon")
  const body = document.querySelector('body')

  const html = document.querySelector("html")

  btn.addEventListener("click", function (e) {
    if (body.classList.contains('mobile-nav-active')) {
      body.classList.remove('mobile-nav-active')
    } else {
      body.classList.add('mobile-nav-active')
    }
  });

  btn.addEventListener("keydown", function (e) {
    if (e.key == "Enter") {
      if (body.classList.contains('mobile-nav-active')) {
        body.classList.remove('mobile-nav-active')
      } else {
        body.classList.add('mobile-nav-active')
      }
    }
  });

  html.addEventListener("click", function (e) {

    if (e.target !== btn)
      body.classList.remove('mobile-nav-active')
  });


  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });
})()

function sendEmail() {
  let name = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("mensagem").value;
  let subject = document.getElementById("assunto").value;
  let finalmessage = `Name : ${name} <br>  Email : ${email} <br>  Message : ${message} <br>`;
  Email.send({
    SecureToken: "eb6753f9-d187-438a-8f3c-2ece99dfd065",
    To: 'marianagsena@gmail.com',
    From: "marianagsena@gmail.com",
    Subject: `Portifólio: ${subject}`,
    Body: finalmessage
  }).then(
    message => alert(message)
  );
  document.getElementById("form-reset").reset();
}
