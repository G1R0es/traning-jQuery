$("#box").mouseenter(() => {
  console.log("enter");
  $(".some").css({
    transform: "rotate(90deg)",
    transition: "2s",
  });
});
$("#box").mouseleave(() => {
  console.log("leave");
  $(".some").css({
    transform: "rotate(0deg)",
    transition: "1s",
  });
});
