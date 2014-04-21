var expect = require('chai').expect;
var domify = require('domify');
var query = require('query');
var dom = require('../index');

describe('dom4', function() {
  it('#prepend', function() {
    var el = domify('<ul><li>2</li></ul>');
    var node = domify('<li>1</li>');

    dom.prepend(el, node);
    expect(query.all('li', el)).length(2);
    expect(el.innerHTML).equal('<li>1</li><li>2</li>');
  });

  it('#append', function() {
    var el = domify('<ul><li>1</li><li>2</li></ul>');
    var node = domify('<li>3</li>');

    dom.append(el, node);
    expect(query.all('li', el)).length(3);
    expect(el.innerHTML).equal('<li>1</li><li>2</li><li>3</li>');
  });

  it('#before', function() {
    var app = domify('<div id="app"><ul><li>2</li></ul></div>');
    var el = query('ul', app);
    var node = domify('<ul><li>1</li></ul>');

    dom.before(el, node);
    expect(query.all('ul', app)).length(2);
    expect(app.innerHTML).equal('<ul><li>1</li></ul><ul><li>2</li></ul>');
  });

  it('#after', function() {
    var app = domify('<ul><li>1</li><li>3</li></ul>');
    var el = query('li:first-child', app);
    var node = domify('<li>2</li>');

    dom.after(el, node);
    expect(query.all('li', app)).length(3);
    expect(app.innerHTML).equal('<li>1</li><li>2</li><li>3</li>');
  });

  it('#replace', function() {
    var app = domify('<div id="app"><ul><li>1</li></ul></div>');
    var el = query('ul', app);
    var node = domify('<span>1</span>');

    dom.replace(el, node);
    expect(app.innerHTML).equal('<span>1</span>');
  });

  it('#remove', function() {
    var app = domify('<div id="app"><ul><li>1</li></ul></div>');
    var el = query('ul', app);

    dom.remove(el);
    expect(app.innerHTML).equal('');
  });
});
