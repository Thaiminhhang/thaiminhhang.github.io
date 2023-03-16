function handleSubmit() {
  //Lay gia tri cua input email va chuyen sang in thuong
  const emailValue = document.getElementById("email").value.toLocaleLowerCase();
  //lay element cu the p hien thi loi
  const errorEmail = document.getElementById("error-email");
  //dieu kien de laf mot email
  const checkEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  console.log("Check value Email", emailValue);
  //dung match check email
  const check = emailValue.match(checkEmail);
  //Lay phan chua thong tin user
  const contentinfo = document.querySelector("#info .content-info");
  console.log("check content-info", contentinfo);
  //lay element de kiem soat submit
  const submitControl = document.querySelector(".submit-email");
  if (check) {
    contentinfo.style.display = "block";
    submitControl.style.display = "none";
    errorEmail.innerHTML = "";
  } else {
    errorEmail.innerHTML = "Vui long nhap dung Email";
  }
}
//Đưa chuột vào hiện lên view more
function handleOnMouseOver(element) {
  const viewMore = element.querySelector(".view-button");
  viewMore.style.display = "inline-block";
}
//Đưa chuột ra thì ẩn view more
function handleOnMouseOut(element) {
  const viewMore = element.querySelector(".view-button");
  if (!viewMore.classList.value.includes("less-more")) {
    viewMore.style.display = "none";
  }
}
//click vào view more hiện nội dung
function handleViewMore(element) {
  const parentElement = element.closest(".parent");
  const viewMore = parentElement.querySelector(".view-button");
  const contentJob = parentElement.querySelectorAll(".content-job");
  //Câu điều kiện
  if (viewMore.classList.value.includes("view-more")) {
    contentJob.forEach((element) => {
      element.style.display = "block";
    });
    viewMore.classList.remove("view-more");
    viewMore.classList.add("less-more");
    viewMore.innerHTML = "▲ LESS MORE";
  } else {
    contentJob.forEach((element) => {
      element.style.display = "none";
    });
    viewMore.classList.remove("less-more");
    viewMore.classList.add("view-more");
    viewMore.innerHTML == "▼ VIEW MORE";
  }
}
