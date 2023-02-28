document.addEventListener('click', (e) => {
  const element = e.target;

  if (element.hasAttribute('data-state')) {
    toggleMenu();
  }
});

function toggleMenu(element) {
  const button = document.querySelector('.button');
  const header = document.querySelector('header');
  const menu = document.querySelector('.menu');
  const attr = button.getAttribute('aria-expanded');

  if (attr == 'false') {
    button.setAttribute('aria-expanded', 'true');
    document.body.classList.add('lock');
    const menuHeight = menu.scrollHeight;
    const menuLeft = header.getBoundingClientRect().left;

    document.documentElement.style.setProperty('--menu-height', `${menuHeight}px`);  
    document.documentElement.style.setProperty('--menu-left', `${menuLeft}px`);  

    // NOTE Timeout necessary
    setTimeout(() => {
      menu.setAttribute('aria-expanded', 'true');
    }, 0);
  }
  
  if (attr == 'true') {
    button.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('lock');
  }
}

// ---- Custom properties ---
document.addEventListener('click', (e) => {
  const element = e.target;

  if (element.hasAttribute('data-properties')) {
    changeColor(e);
  }
});

function changeColor(e) {
  const element = document.querySelector('.checkmark');
  const out = document.getElementById('changeColor');
  const random = e.clientX % 2 === 0;
  if (random) {
    element.style.setProperty('--check-color-fg', '#333333');
    element.style.setProperty('--check-color-bg', 'orangered');
    out.textContent = 'Happy hour - color changed';
  } else {
    element.style.setProperty('--check-color-fg', '#ffffff');
    element.style.setProperty('--check-color-bg', '#61d345');
    out.textContent = 'No luck - move your mouse and try again!';
  }
}
