let h4 = document.querySelector("#countNumber");
let i = 0;
window.addEventListener("scroll", function (e) {
  if (
    this.document.body.scrollTop > 800 ||
    this.document.documentElement.scrollTop > 800
  ) {
    this.document.getElementById("dplayNone").classList.add("d-none");
    this.document.getElementById("dplayNone").classList.remove("d-none");
  } else {
    this.document.getElementById("dplayNone").classList.remove("d-none");
    this.document.getElementById("dplayNone").classList.add("d-none");
  }
  // if (
  //   this.document.body.scrollTop > 1000 ||
  //   this.document.documentElement.scrollTop > 1000
  // ) {
  //   function getcount(n, t) {
  //     let set = this.setInterval(() => {
  //       if (i == n) clearInterval(set);
  //       h4.innerHTML = i;
  //       i += 300;
  //     }, t);
  //   }
  //   // getcount(8000, 100);
});

// window.addEventListener("scroll", function () {});

////////////////////////////////// Form //////////////////////////////////////
let allForm = document.querySelector("#inPutid");
let allinput = document.getElementById("inPutid");
let pMass0 = document.getElementById("inputMassg0");
let pMass1 = document.getElementById("inputMassg1");
let pMass2 = document.getElementById("inputMassg2");

allForm.addEventListener("input", function (e) {
  console.log("test>>>>>>>>>");
  switch (e.target.name) {
    case "Name":
      textValidation(e.target, pMass0);
      break;
    case "Email":
      emailValidation(e.target, pMass1);
      console.log(e.target);
      break;
    case "Subject":
      textValidation(e.target, pMass2);
  }
});
function textValidation(x, p) {
  let inputV = x.value.trim();
  if (inputV.length >= 3) {
    handleError(x, "", p);
  } else {
    handleError(x, "Plz Inter A Vaild Text (3 At least )", p);
  }
}
function emailValidation(x, p) {
  let reg =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (reg.test(x.value)) {
    handleError(x, "", p);
  } else {
    handleError(x, "Plz Inter A Valid Email", p);
  }
}
function handleError(element, msg = "", p) {
  p.innerText = msg;
}
allForm.addEventListener("submit", function (e) {
  e.preventDefault();
});
