<script>
const serviceContent = {
  inspiring: {
    image: "assets/images/single-service/1.jpg",
    title: "Building Inspiring Spaces",
    text: [
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..."
    ]
  },
  renovation: {
    image: "assets/images/single-service/2.jpg",
    title: "Complete Renovation",
    text: [
      "We specialize in comprehensive renovation services that transform spaces from the ground up.",
      "From structural changes to finishing touches, we manage it all with precision."
    ]
  },
  software: {
    image: "assets/images/single-service/3.jpg",
    title: "Software Development",
    text: [
      "Offering cutting-edge software solutions to drive your business forward.",
      "From web platforms to mobile apps, our development team delivers quality and innovation."
    ]
  },
  homes: {
    image: "assets/images/single-service/4.jpg",
    title: "Tomorrow’s Homes",
    text: [
      "Designing futuristic homes with smart technologies and eco-conscious materials.",
      "Our goal is to blend comfort with innovation."
    ]
  },
  commercial: {
    image: "assets/images/single-service/5.jpg",
    title: "Commercial Success",
    text: [
      "Boost your business with tailored commercial construction and design services.",
      "We turn your ideas into successful commercial spaces."
    ]
  },
  handyman: {
    image: "assets/images/single-service/6.jpg",
    title: "Handyman Services",
    text: [
      "Quick and reliable handyman services for all your home maintenance needs.",
      "From repairs to installations, we've got you covered."
    ]
  },
  spaces: {
    image: "assets/images/single-service/7.jpg",
    title: "Inspiring Spaces",
    text: [
      "We create breathtaking spaces that inspire creativity and relaxation.",
      "Let us bring your vision to life with our interior design services."
    ]
  }
};

document.getElementById("serviceMenu").addEventListener("click", function(e) {
  const li = e.target.closest("li");
  if (!li) return;

  const id = li.getAttribute("data-id");
  if (!serviceContent[id]) return;

  // Remove active class from all items
  this.querySelectorAll("li").forEach(item => item.classList.remove("active"));
  li.classList.add("active");

  // Update the content
  const content = serviceContent[id];
  document.querySelector(".service_details img").src = content.image;
  document.querySelector(".service_details h3").textContent = content.title;

  const paragraphs = document.querySelectorAll(".service_details p");
  paragraphs[0].textContent = content.text[0] || "";
  paragraphs[1].textContent = content.text[1] || "";
});
</script>
