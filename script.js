const fooButton = document.getElementById('foo');
const barButton = document.getElementById('bar');
const foobarButton = document.getElementById('foobar');

fooButton.addEventListener('click', function() {
    const h3 = document.createElement('h3');
    h3.textContent = 'Foo';
    document.querySelector('main').appendChild(h3);
});

barButton.addEventListener('click', function() {
    const h3 = document.createElement('h3');
    h3.textContent = 'Bar';
    document.querySelector('main').appendChild(h3);
});

foobarButton.addEventListener('click', function() {
    const h2 = document.createElement('h2');
    h2.textContent = 'FooBar';
    document.querySelector('main').appendChild(h2);
});