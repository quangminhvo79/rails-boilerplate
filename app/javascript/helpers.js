window.removeClass = function(element, classes) {
  classes.split(' ').forEach(className => element?.classList.remove(className));
};

window.addClass = function(element, classes) {
  classes.split(' ').forEach(className => element?.classList.add(className));
};

window.toggleClass = function(element, classes) {
  classes.split(' ').forEach(className => element?.classList.toggle(className));
};

window.hasClass = function(element, className) {
  return element.classList.contains(className);
};

window.show = function(element) {
  removeClass(element, 'hidden');
};

window.hide = function(element) {
  addClass(element, 'hidden');
};

window.triggerEvent = function(target, eventName, data) {
  if (typeof data === 'undefined') {
    target.dispatchEvent(new Event(eventName));
  } else {
    const eventData = { bubbles: true, detail: data }
    target.dispatchEvent(new CustomEvent(eventName, eventData));
  }
};

window.enableAllInputs = function(target) {
  target.querySelectorAll('input, select, textarea').forEach(element => element.disabled = false);
};

window.disableAllInputs = function(target) {
  target.querySelectorAll('input, select, textarea').forEach(element => element.disabled = true);
};

window.turboFetch = function(url) {
  fetch(url, {
    headers: {
      Accept: "text/vnd.turbo-stream.html",
    },
  }).then(r => r.text()).then(html => Turbo.renderStreamMessage(html));
}

window.waitForElement = function(selector) {
  return new Promise(resolve => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector))
    }

    const observer = new MutationObserver(mutations => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector))
        observer.disconnect()
      }
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true
    })
  })
}
