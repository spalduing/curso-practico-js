let list = [];

function fillList() {
  const listParagraph = document.getElementById('list');
  const numberField = document.getElementById('numField');

  const numValue = Number(numberField.value);
  list.push(numValue);

  listParagraph.innerText = `The list of numbers is: ${list}`;
}

function getMedian() {
  const medianParagraph = document.getElementById('median');
  let median = 0;

  // https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  list = list.sort((a, b) => a - b);

  let isEven = (list.length | 1) !== list.length ? true : false;

  if (isEven) {
    const midIndex1 = list.length / 2 - 1;
    const midIndex2 = list.length / 2;
    median = (list[midIndex1] + list[midIndex2]) / 2;
  } else {
    const midIndex = (list.length / 2) | 0;
    median = list[midIndex];
  }

  medianParagraph.innerText = `The median is: ${median}`;
}
