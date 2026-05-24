let countelem = document.querySelector("#c");
let count = 0;
let incrBtn = document.querySelector("#incr");
incrBtn.addEventListener("click", function() {
    count++;
    countelem.innerHTML = `Count: ${count}`;
});
let decrBtn = document.querySelector("#decr");
decrBtn.addEventListener("click", function() {
    count--;
    countelem.innerHTML = `Count: ${count}`;
});
let resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", function() {
    count = 0;
    countelem.innerHTML = `Count: ${count}`;
});