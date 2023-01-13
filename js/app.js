var modal = document.getElementById("popUp");
var video = document.getElementById("videoModal1");
var overlay = document.getElementById("overlay");
var modalBtn = document.getElementById("modalBtn");
var closeBtn = document.getElementsByClassName("close-btn")[0];
var videoBtn = document.getElementsByClassName("video-btn")[0];
var videoCloseBtn = document.getElementsByClassName("video-close-btn")[0];
closeBtn.addEventListener("click", closeModal);
videoBtn.addEventListener("click", videoModal);
videoCloseBtn.addEventListener("click", closeVideo);

function openModal() {
	modal.style.display = "block";
	overlay.classList.add("active");
}

function closeModal() {
	modal.style.display = "none";
	overlay.classList.remove("active");
}
function videoModal() {
	document.getElementById("videoModal1").style.display = "block";
	overlay.classList.add("active");
}
function closeVideo() {
	video.style.display = "none";
	overlay.classList.remove("active");
}

window.onload = function (openModal) {
	document.getElementById("popUp").style.display = "block";
};

$(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 80) {
			$(".mini-logo").addClass("fixed-mini-logo");
		} else {
			$(".mini-logo").removeClass("fixed-mini-logo");
		}
	});
});
