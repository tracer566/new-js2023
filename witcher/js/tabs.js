const tabs = (option) => {
  const {
    selectorTabsButton,
    activeClassButton,
    selectorTabsElement,
    activeClassTab,
    callback = () => { }
  } = option

  const tabsBtns = document.querySelectorAll(selectorTabsButton);
  // console.log('tabsBtns: ', tabsBtns);
  const tabsElems = document.querySelectorAll(selectorTabsElement);

  tabsBtns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      for (let x = 0; x < tabsBtns.length; x++) {
        if (tabsBtns[x] === btn) {
          tabsBtns[x].classList.add(activeClassButton)
          tabsElems[x].classList.add(activeClassTab)
          // доп функционал,в index.js,работает эта функция в renderTabs.js
          callback(i)
        } else {
          tabsBtns[x].classList.remove(activeClassButton)
          tabsElems[x].classList.remove(activeClassTab)
        }
      }

    });

  });

};

// tabs__btn
// tabs__btn_active
// tabs__item
// tabs__item_active

export default tabs;