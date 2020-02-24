const getRadiusProperties = function(
  id,
  topLeft,
  bottomRight,
  topRight,
  bottomLeft
) {
  let target = document.getElementById(id);
  target.style.borderTopLeftRadius = topLeft;
  target.style.borderTopRightRadius = topRight;
  target.style.borderBottomLeftRadius = bottomLeft;
  target.style.borderBottomRightRadius = bottomRight;
};

const onInputChange = function(target) {
  let topLeft = document.getElementById(target).value;
  console.log(topLeft);
};

const appendRadiusUnit = function(values) {
  for (const item in values) {
    return values[item] + "em";
  }
};

const insertRadiusProperties = function() {};
