'use strict';
// { name: タスクの文字列, state: 完了しているかどうかの真偽値 }
let tasks = new Array();
// file systemを設置
const fs = require('fs');
const filename = './tasks.json';
// ファイルから読み込む（復元）
try{
    const data = fs.readFileSync(filename, 'utf8');
    tasks = JSON.parse(data);
}catch(ignore){
    console.log(filename + 'から復元できませんでした');
}

// ファイルに保存する
function saveTasks(){
    fs.writeFileSync(filename, JSON.stringify(tasks), 'utf8');
}

// TODOを追加する
function todo(task){
    tasks.push({ name: task, state: false });
    saveTasks();
}

// タスクと完了したかどうかが含まれるオブジェクトを受け取り、完了を返す
function isDone(taskAndIsDonePair){
    return taskAndIsDonePair.state;
}
// タスクと完了したかどうかが含まれるオブジェクトを受け取り、未完了を返す
function isNotDone(taskAndIsDonePair){
    return !isDone(taskAndIsDonePair);
}

// TODOの一覧の配列を取得する
function list(){
    return tasks
    .filter(isNotDone)
    .map( t => t.name);
}
// タスクを完了状態にする
function done(task){
    const indexFound = tasks.findIndex(t => t.name === task);
    if (indexFound != -1){
        tasks[indexFound].state = true;
        saveTasks();
    }
}
// 完了済みのタスクの一覧の配列を取得する
function doneList(){
    return tasks.filter(isDone).map(t => t.name);
}
// 削除
function del(task){
    const indexFound = tasks.findIndex(t => t.name === task);
    if (indexFound != -1){
        tasks.splice(indexFound,1);
        saveTasks();
    }
}

module.exports = { todo, list, done, doneList, del };