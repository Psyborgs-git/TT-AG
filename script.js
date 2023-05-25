/* Please ❤ this if you like it! */

(function ($) {
	"use strict";

	//Page cursors

	document
		.getElementsByTagName("body")[0]
		.addEventListener("mousemove", function (n) {
			(t.style.left = n.clientX + "px"),
				(t.style.top = n.clientY + "px"),
				(e.style.left = n.clientX + "px"),
				(e.style.top = n.clientY + "px"),
				(i.style.left = n.clientX + "px"),
				(i.style.top = n.clientY + "px");
		});
	var t = document.getElementById("cursor"),
		e = document.getElementById("cursor2"),
		i = document.getElementById("cursor3");
	function n(t) {
		e.classList.add("hover"), i.classList.add("hover");
	}
	function s(t) {
		e.classList.remove("hover"), i.classList.remove("hover");
	}
	s();
	for (
		var r = document.querySelectorAll(".hover-target"), a = r.length - 1;
		a >= 0;
		a--
	) {
		o(r[a]);
	}
	function o(t) {
		t.addEventListener("mouseover", n), t.addEventListener("mouseout", s);
	}

	//About page

	$(".about-text").on("click", function () {
		$("body").addClass("about-on");
	});
	$(".about-close").on("click", function () {
		$("body").removeClass("about-on");
	});

	//Contact page

	$(".contact-text").on("click", function () {
		$("body").addClass("contact-on");
	});
	$(".contact-close").on("click", function () {
		$("body").removeClass("contact-on");
	});

	//Travel portfolio page

	$(".travel").on("click", function () {
		$("body").addClass("travel-on");
	});
	$(".travel-close").on("click", function () {
		$("body").removeClass("travel-on");
	});

	//Wildlife portfolio page

	$(".wildlife").on("click", function () {
		$("body").addClass("wildlife-on");
	});
	$(".wildlife-close").on("click", function () {
		$("body").removeClass("wildlife-on");
	});

	//Nature portfolio page

	$(".nature").on("click", function () {
		$("body").addClass("nature-on");
	});
	$(".nature-close").on("click", function () {
		$("body").removeClass("nature-on");
	});
})(jQuery);

const downloadVcf = (e) => {
	const vcf = `BEGIN:VCARD
VERSION:4.0
N:Shah;Jainam;
FN:Jainam Shah
ORG:BD Technologies
TITLE: Software Engineer
GENDER:M
TEL;TYPE=CELL,VOICE:+919099981021
EMAIL;TYPE=work,INTERNET:sjainam74@gmail.com
URL:${window.location.host}
NOTE:This vCard was saved from the ${window.location.host}.
END:VCARD`;

	const blob = new Blob([vcf], { type: "text/vcard" });
	const url = URL.createObjectURL(blob);
	const link = document.createElement("a");
	link.href = url;
	link.download = "j.vcf";
	// Append to html link element page
	document.body.appendChild(link);

	// Start download
	link.click();

	// Clean up and remove the link
	link?.parentNode?.removeChild(link);
};
contactbutton = document.getElementById("contact-button");
contactbutton.addEventListener("click", downloadVcf);
