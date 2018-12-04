"use strict";
const fileService = require("../../FileService/fileService");

const GUARD_ACTION = {
  BEGINS_SHIFT: "Guard",
  WAKE_UP: "wakes",
  SLEEP: "falls"
};

const recordObj = function(rowRecord) {
  const temp = rowRecord.split(" ");
  let obj = {
    action: temp[2],
    timeMinute: parseInt(temp[1].substring(3, 5))
  };

  if (obj.action === GUARD_ACTION.BEGINS_SHIFT) {
    obj.id = parseInt(temp[3].substring(1));
  }
  return obj;
};

const orderRecord = function(recoreds) {
  return recoreds.sort((rA, rB) => {
    const dateA = new Date(rA.substring(1, 17));
    const dateB = new Date(rB.substring(1, 17));

    return dateA.getTime() - dateB.getTime();
  });
};

const getSleepingGuardTimesSleepingMinute = function(guardRecords, strategy) {
  let guards = {};
  let activeGuard, lastTime;
  let selectedGuard = {
    id: 0,
    maxMinute: 0
  };

  for (let i = 0; i < guardRecords.length; i++) {
    const guardRecord = recordObj(guardRecords[i]);
    switch (guardRecord.action) {
      case GUARD_ACTION.BEGINS_SHIFT: {
        activeGuard = guardRecord.id;
        if (!guards[activeGuard]) {
          guards[activeGuard] = new Array(60).fill(0);
        }
        break;
      }
      case GUARD_ACTION.SLEEP: {
        lastTime = guardRecord.timeMinute;
        break;
      }
      case GUARD_ACTION.WAKE_UP: {
        for (let j = lastTime; j < guardRecord.timeMinute; j++) {
          guards[activeGuard][j]++;
          if (strategy === 2 && selectedGuard.maxMinute < guards[activeGuard][j]) {
            selectedGuard.id = activeGuard;
            selectedGuard.maxMinute = guards[activeGuard][j];
            selectedGuard.maxMinuteIndex = j;
          }
        }
        if (strategy === 1) {
          let sleepingMinutes = guards[activeGuard].reduce((acc, val) => acc + val, 0);
          if (selectedGuard.maxMinute < sleepingMinutes) {
            selectedGuard.id = activeGuard;
            selectedGuard.maxMinute = sleepingMinutes;
          }
        }
        break;
      }
    }
  }

  return strategy === 1 ? selectedGuard.id * guards[selectedGuard.id].indexOf(Math.max(...guards[selectedGuard.id])) : selectedGuard.id * selectedGuard.maxMinuteIndex;
};

const getFourthQ2018Answer = function() {
  const fileData = fileService.getFileData("Q4/input.txt", 2018).split("\n");
  const orderedGuardRecord = orderRecord(fileData);
  console.log("Advent of Code 2018 Q:4 S:1 = ", getSleepingGuardTimesSleepingMinute(orderedGuardRecord, 1));
  console.log("Advent of Code 2018 Q:4 S:2 = ", getSleepingGuardTimesSleepingMinute(orderedGuardRecord, 2));
};

module.exports = {
  getSleepingGuardTimesSleepingMinute,
  getFourthQ2018Answer
};
