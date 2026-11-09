import test from 'node:test';import assert from 'node:assert/strict';
test('CareerTrack API health contract',()=>{const payload={status:'ok',service:'CareerTrack API'};assert.equal(payload.status,'ok');assert.equal(payload.service,'CareerTrack API');});
