// header
let icon = document.querySelector(".main-nav .icon");
let blaylist = document.querySelector(".main-nav .navbar");

icon.addEventListener("click", function () {
  blaylist.classList.toggle("open");
});
// محاولة انشاء حدث افلاق القائمة في حالة الضغط خارج القائمة
// document.addEventListener("click", function (e) {
//   if (e != icon || e != blaylist) {
//     if (blaylist.classList.contains("open")) {
//     //   blaylist.classList.remove("open");
//     document.write('ss')
//     document.write(e)
//     }
//   }
// });
// --
