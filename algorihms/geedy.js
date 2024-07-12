function activitySelection(startTimes, finishTimes) {
  const activities = [];
  const n = startTimes.length;

  // Sort activities by finish time
  const sortedActivities = startTimes
      .map((startTime, index) => ({ startTime, finishTime: finishTimes[index], index }))
      .sort((a, b) => a.finishTime - b.finishTime);

  let currentActivity = sortedActivities[0];
  activities.push(currentActivity.index);

  for (let i = 1; i < n; i++) {
      const activity = sortedActivities[i];
      if (activity.startTime >= currentActivity.finishTime) {
          activities.push(activity.index);
          currentActivity = activity;
      }
  }

  return activities;
}

// Example usage
const startTimes = [1, 3, 0, 5, 8, 5];
const finishTimes = [2, 4, 6, 7, 9, 9];

const result = activitySelection(startTimes, finishTimes);
console.log(`Selected activities: ${result}`);