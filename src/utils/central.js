export const calculateMean = tableData => {
  const { classes } = tableData;

  if (!classes.length) return null;

  let n = classes[classes.length - 1].cumFreq;
  let fixi = 0;

  for (let i = 0; i < classes.length; i++) {
    fixi += classes[i].freq * classes[i].midPoint;
  }

  return (fixi / n).toFixed(2);
};

export const calculateMedian = tableData => {
  const { classes, interval } = tableData;

  if (!classes.length) return null;

  let l = 0,
    f = 0,
    Fc = 0;
  const n = classes[classes.length - 1].cumFreq / 2;

  const medPosition = classes.length / 2;

  let medianIdx = -1;

  for (let i = 0; i < classes.length; i++) {
    if (medPosition >= classes[i].lower && medPosition < classes[i].upper) {
      l = classes[i].lower;
      f = classes[i].freq;
      medianIdx = i;
    }
  }

  Fc = medianIdx === 0 ? 0 : (Fc = classes[medianIdx - 1].cumFreq);

  const frac = (n - Fc) / f;
  const median = l + frac * interval;

  return median.toFixed(2);
};

export const calculateMode = tableData => {
  const { classes, interval } = tableData;

  if (!classes.length) return null;

  let modalClass = -1,
    l = 0,
    maxFreq = -1;

  for (let i = 0; i < classes.length; i++) {
    if (maxFreq < classes[i].freq) {
      maxFreq = classes[i].freq;
      modalClass = i;
      l = classes[i].lower;
    }
  }

  const beforeFreq = modalClass === 0 ? 0 : classes[modalClass - 1].freq;
  const afterFreq = classes.length - 1 ? 0 : classes[modalClass + 1].freq;
  const del1 = maxFreq - beforeFreq,
    del2 = maxFreq - afterFreq;

  const frac = del1 / (del1 + del2);
  const mode = l + frac * interval;
  return mode.toFixed(2);
};
