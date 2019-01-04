let url = location.pathname;
const newChat = document.createElement('iframe');
newChat.src = 'https://yata.now.sh' + url;
const interval = setInterval(function replaceTwitchChat() {
  const oldChat = document.querySelector('.channel-root__right-column');
  if (oldChat) {
    const parent = oldChat.parentNode;
    newChat.className = oldChat.className;
    parent.replaceChild(newChat, oldChat);
    clearInterval(interval);
  }
}, 500);
setInterval(function redoUrl() {
  if (location.pathname != url) {
    url = location.pathname;
    newChat.src = 'https://yata.now.sh' + url;
  }
}, 1000);
