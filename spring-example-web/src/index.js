if (typeof document !== 'undefined') {
  var msg = 'Hello World!';
  var el = document.createElement('h1');
  el.innerHTML = msg;
  document.body.appendChild(el);
} else {
  console.log(msg);
}