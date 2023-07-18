const strictEquals = (ValueA, ValueB) => {
  let result = false;
  if (isNaN(ValueA) && isNaN(ValueB)) {
    result = false;
  }
  if (!isNaN(ValueA) && !isNaN(ValueB) && Object.is(ValueA, ValueB)) {
    result = true;
  }

  return console.log(ValueA + " | " + ValueB + " | " + result);
};

strictEquals(1, 1);
strictEquals(NaN, NaN);
strictEquals(0, -0);
strictEquals(-0, 0);
strictEquals(1, "1");
strictEquals(true, false);
strictEquals(false, false);
strictEquals("water", "oil");
