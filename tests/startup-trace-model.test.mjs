import test from 'node:test';
import assert from 'node:assert/strict';
import {summarizeStartupTrace} from '../scripts/startup-trace-model.mjs';
const ev=(name,ts,dur,pid=1,tid=1)=>({name,ts,dur,pid,tid,ph:dur===undefined?'I':'X'});
const fixture=[{"name":"sb-profile-start","ts":100000,"pid":1,"tid":1,"ph":"I"},{"name":"sb-profile-ready","ts":300000,"pid":1,"tid":1,"ph":"I"},{"name":"RunTask","ts":90000,"dur":90000,"pid":1,"tid":1,"ph":"X"},{"name":"ThreadControllerImpl::RunTask","ts":100000,"dur":80000,"pid":1,"tid":1,"ph":"X"},{"name":"RunTask","ts":180000,"dur":70000,"pid":1,"tid":1,"ph":"X"},{"name":"EvaluateScript","ts":110000,"dur":40000,"pid":1,"tid":1,"ph":"X"},{"name":"FunctionCall","ts":120000,"dur":10000,"pid":1,"tid":1,"ph":"X"},{"name":"Layout","ts":140000,"dur":30000,"pid":1,"tid":1,"ph":"X"},{"name":"Layout","ts":250000,"dur":90000,"pid":1,"tid":1,"ph":"X"},{"name":"Layout","ts":120000,"dur":100000,"pid":2,"tid":1,"ph":"X"},{"name":"Paint","ts":170000,"dur":10000,"pid":1,"tid":1,"ph":"X"},{"name":"ParseHTML","ts":100000,"dur":10000,"pid":1,"tid":1,"ph":"X"}];
test('trace clips to renderer marker window, merges nested tasks and same-category intervals',()=>{
 const result=summarizeStartupTrace(fixture);
 assert.equal(result.windowMs,200);
 assert.equal(result.categories.script.coveredMs,40);
 assert.equal(result.categories.layout.coveredMs,80);
 assert.equal(result.longTasks.length,2);
 assert.equal(result.blockingMs,50);
 assert.equal(result.longTasks[0].categories.layout,30);
});
test('trace rejects incomplete or ambiguous renderer markers',()=>{
 assert.throws(()=>summarizeStartupTrace(fixture.filter(e=>e.name!=='sb-profile-ready')),/marker pair/);
 assert.throws(()=>summarizeStartupTrace([...fixture,ev('sb-profile-ready',310000)]),/marker pair/);
});
test('trace preserves adjacent tasks, including exact threshold',()=>{
 const result=summarizeStartupTrace([ev('sb-profile-start',0),ev('sb-profile-ready',120000),ev('RunTask',0,50000),ev('RunTask',50000,70000)]);
 assert.equal(result.longTasks.length,1);
 assert.equal(result.blockingMs,20);
 assert.equal(result.longTasks[0].startMs,50);
});
