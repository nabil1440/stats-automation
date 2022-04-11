const constructTable = arr => {
  if (arr && isNaN(arr[0])) return null;
  // Find k
  const k = Math.ceil(Math.log2(arr.length));

  // Find min
  let min = 9999;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }

  // Find max
  let max = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }

  const interval = Math.round((max - min) / k);

  // console.log({ k, min, max, interval });

  // Create classes
  let classes = [];

  let low = min,
    high = min + interval;

  for (let i = 0; i <= k; i++) {
    classes.push({ lower: low, upper: high, freq: 0 });
    low = high;
    high += interval;
  }

  // Count frequency
  for (let i = 0; i < classes.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] >= classes[i].lower && arr[j] < classes[i].upper)
        classes[i].freq++;
    }
  }

  // Cumulative frequency
  let cf = 0;

  for (let i = 0; i < classes.length; i++) {
    cf += classes[i].freq;
    classes[i].cumFreq = cf;
  }

  // For midpoint
  for (let i = 0; i < classes.length; i++) {
    classes[i].midPoint = (classes[i].lower + classes[i].upper) / 2;
  }

  return { interval, classes };
};

// const arr = [
//   680, 669, 719, 699, 670, 710, 722, 663, 658, 634, 720, 690, 677, 669, 700,
//   718, 690, 681, 702, 696
// ];

// console.log(constructTable(arr));

export { constructTable };
