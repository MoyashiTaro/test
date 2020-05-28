'use strict';
const todo = require('./index.js');
const assert = require('assert');

// todo と list のテスト
todo.todo('buy note');
todo.todo('buy pencil');
assert.deepEqual(todo.list(),['buy note', 'buy pencil']);

// done と donelist のテスト
todo.done('buy pencil');
assert.deepEqual(todo.list(),['buy note']);
assert.deepEqual(todo.doneList(),['buy pencil']);

//delのテスト
todo.del('buy note');
todo.del('buy pencil');
assert.deepEqual(todo.list(),[]);
assert.deepEqual(todo.doneList(),[]);

console.log('テストが正常に完了しました');