const getRadiusProperties = function() {
  let target = document.getElementById("contaier-field");
  target.style.borderTopLeftRadius = topLeft;
  target.style.borderTopRightRadius = topRight;
  target.style.borderBottomLeftRadius = bottomLeft;
  target.style.borderBottomRightRadius = bottomRight;
};

const insertIntoCodePreview = function(params) {};

const onInputChange = function(target) {
  let value = document.getElementById(target).value + "em";
  let container = document.getElementById("container-field");

  checkTarget(target, container, value);
};

const checkTarget = function(id, target, value) {
  if (id == "input--top-left") {
    return (target.style.borderTopLeftRadius = value);
  } else if (id == "input--top-right") {
    return (target.style.borderTopRightRadius = value);
  } else if (id == "input--bottom-left") {
    return (target.style.borderBottomLeftRadius = value);
  } else if (id == "input--bottom-right") {
    return (target.style.borderBottomRightRadius = value);
  }
};

const appendRadiusUnit = function(values) {
  for (const item in values) {
    return values[item] + "em";
  }
};
