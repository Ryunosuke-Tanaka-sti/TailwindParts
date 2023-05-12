const parent = document.getElementById("parent");
parent.onclick = (event) => {
  alert("Parent要素");
};

const child = document.getElementById("child");
child.onclick = (event) => {
  alert("Child要素");
};
