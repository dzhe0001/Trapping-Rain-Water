const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
// const height = [4, 2, 0, 3, 2, 5];
const maxHeight = [...height].sort((a, b) => b - a)[0];

const elevationMap = [];

for (let i = 0; i < maxHeight; i++) {
  elevationMap.push(height.map((point) => (point - i > 0 ? 1 : 0)));
}

const result = elevationMap.reduce((acc, lvl) => {
  return (
    acc +
    lvl
      .slice(cycleStart(lvl), cycleFinish(lvl))
      .reduce((localAcc, value) => (value === 0 ? ++localAcc : localAcc), 0)
  );
}, 0);

function cycleStart(arr) {
  let index = false;

  for (let i = 0; i <= arr.length; i++) {
    if (arr[i]) {
      index = i;
      break;
    }
  }

  return index;
}

function cycleFinish(arr) {
  let index = false;

  for (let i = arr.length; i >= 0; i--) {
    if (arr[i]) {
      index = i;
      break;
    }
  }

  return index;
}

console.log(result);