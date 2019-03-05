const test = require('ava');
const render = require('./render.js');

test('render with dynamic template variables', (t) => {
  const template = '{{#items}}{{>(type)}}{{/items}}';

  const partials = {
    image: '<img title="{{title}}">',
    text: '<p>{{content}}</p>',
  };

  const context = {
    items: [
      { type: 'image', title: 'Some title' },
      { type: 'text', content: 'Some text' },
    ],
  };

  t.is(
    render(template, context, partials),
    '<img title="Some title"><p>Some text</p>',
  );
});
