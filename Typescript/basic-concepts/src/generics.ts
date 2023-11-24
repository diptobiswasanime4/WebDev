function returnElem<T>(elem: T): T {
  console.log(elem);
  return elem;
}

returnElem(1);
returnElem("one");
returnElem(true);

function add<T1, T2, T3>(elem1: T1, elem2: T2, elem3: T3): T1 {
  console.log(elem1 + elem2 + elem3);
  return elem1 + elem2 + elem3;
}

add(4, 2, 1);
add("four", " ", "two");
