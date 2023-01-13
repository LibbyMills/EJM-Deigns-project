var modal = document.getElementById("popUp");
var modalBtn = document.getElementById("modalBtn");
var closeBtn = document.getElementsByClassName("close-btn")[0];
closeBtn.addEventListener("click", closeModal);

function openModal() {
	modal.style.display = "block";
}

function closeModal() {
	modal.style.display = "none";
}

$(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 80) {
			$(".mini-logo").addClass("fixed-mini-logo");
		} else {
			$(".mini-logo").removeClass("fixed-mini-logo");
		}
	});
});

window.onload = function (openModal) {
	document.getElementById("popUp").style.display = "block";
};
