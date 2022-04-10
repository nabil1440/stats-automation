export const processData = tableData => {
  const check = Object.keys(tableData).length;
  if (!check) return null;

  if (tableData.classes.length === 0) return null;

  const { classes, interval } = tableData;

  let labels = classes.map(range => range.midPoint);

  let frequencies = {
    label: 'Range vs Frequency',
    data: [],
    fill: true,
    borderColor: '#465457',
    tension: 0.4,
    backgroundColor: '#3ba2cc80'
  };

  classes.forEach(range => frequencies.data.push(range.freq));

  // This is just to ground both sides of the data
  labels.unshift(classes[0].lower - interval);
  frequencies.data.unshift(0);
  const last = classes.length - 1;
  labels.push(classes[last].upper + interval);
  frequencies.data.push(0);

  const data = {
    labels,
    datasets: [{ ...frequencies }]
  };

  return data;
};
