'use strict';
// { name: タスクの文字列, state: 完了しているかどうかの真偽値 }
const tasks = new Array();
// TODOを追加する
function todo(task){
    tasks.push({ name: task, state: false });
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
    }
}

module.exports = { todo, list, done, doneList, del };