const input1 = $(".input1");
const input2 = $(".input2");
const btn = $("button");

btn.click((e) => {
  e.preventDefault();
  if (!input1.val().trim() || !input2.val().trim()) {
    console.log("Заполните форму");
  } else {
    console.log("Форма заполнена");
    $("form");
  }
});
