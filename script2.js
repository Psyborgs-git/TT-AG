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

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add("show");
		} else {
			entry.target.classList.remove("show");
		}
	});
});

const sectionsList = document.getElementById("scroll-v-c");

const loadData = () => {
	fetch("./data.json")
		.then((res) => res.json())
		.then((data) => data.slides)
		.then((slides) => {
			slides.map((slide, index) => {
				console.log(slide);
				if (!Array.isArray(slide.content)) {
					console.log(slide.title);
					const section = document.createElement("section");
					section.classList.add("hidden");
					section.id = "section" + (index + 1);
					const title = document.createElement("h1");
					title.innerHTML = slide.title;
					const content = document.createElement("div");
					content.classList.add("section-data");
					content.innerHTML = slide.content;
					section.appendChild(title);
					section.appendChild(content);
					sectionsList.appendChild(section);
					observer.observe(section);
					if (index + 1 === slides.length) {
						// <span class="travel hover-target">memes 🤫</span>
						const span = document.createElement("span");
						span.classList.add("hover-target");
						span.innerHTML = "Explore Products";
						span.onclick = () => {
							document.querySelector("#sections-view").classList.add("hide");
							document.querySelector("#products-view").classList.remove("hide");
						};
						section.appendChild(span);
					}
				} else return;
			});
		})
		.then(() => {
			const sections = document.querySelectorAll("hidden");

			sections.forEach((section) => {
				observer.observe(section);
			});
		})
		.catch(console.log);
};

loadData();