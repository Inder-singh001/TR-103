const navItems = [
    { navName: "Home" },
    { navName: "Menu" },
    { navName: "Cakes" },
    { navName: "Bakery Product" },
    { navName: "Catering Services" },
    { navName: "Corporate Gifting" },
    { navName: "Gift Hampers" },
    { navName: "Bouquet" },
    { navName: "Baking Class's" },
];

const navContainer = document.getElementById("navItems");

navItems.forEach((navbar) => {
    const navElement = document.createElement("li");
    navElement.classList.add("nav-item");
    navElement.innerHTML = `
          <a class="nav-link" href="#">${navbar.navName}</a>
  `;
    navContainer.appendChild(navElement);
});

const cardData = [
    {
        imgSrc: "images/image4.png",
        text: "Pineapple Cream Cake",
        link: "Cake",
    },
    {
        imgSrc: "images/image3.png",
        text: "Chocolate and Vanilla Cake",
        link: "Cake",
    },
    {
        imgSrc: "images/image2.png",
        text: "Confetti Cake with Vanilla Cream ",
        link: "Cake",
    },
    {
        imgSrc: "images/image1.png",
        text: "Pink Drip Cake twnoasni",
        link: "Cake",
    },
];

const cardContainer = document.getElementById("card-container");
for (let i = 0; i < 3; i++) {
    cardData.forEach((card) => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("col-xxl-3","col-xl-3", "col-lg-4","col-md-6", "col-sm-6", "col-12" );
        cardElement.innerHTML = `
              <div class="card">
                <div class="free_tag">
                  <div class="free_text">Free</div>
                </div>
                <div class="image">
                  <img src="${card.imgSrc}" class="card-img-top" alt="..." />
                </div>
                <div class="card-body">
                  <p class="card-text magra-bold">${card.text}</p>
                  <a href="Javascript:;" class="card-link">${card.link}</a>
                  <div class="circle">
                    <i class="fa-solid fa-arrow-up ar-icon"></i>
                  </div>
                </div>
              </div>
            `;
        cardContainer.appendChild(cardElement);
    });
}

const footerLinks = [
    {
        title: "Pages",
        links: [
            { link: "Cakes" },
            { link: "Our Special Cakes" },
            { link: "Gift Hampers" },
            { link: "Our Menu" },
            { link: "About Us" },
            { link: "Careers" },
        ],
    },
    {
        title: "Useful Links",
        links: [
            { link: "Contact Us" },
            { link: "Cancellation & Return" },
            { link: "Terms & Policy" },
            { link: "FAQ's" },
        ],
    },
    {
        title: "Location & Timing",
        links: [
            {
                link: "25, Ishmeet Singh Rd, Shastri Nagar, Model Town, Ludhiana, Punjab 141001, India",
            },
            { link: "Mon-Sun: Fri.: 9 am - 11 pm (Model Town)" },
            { link: "Click here for more Locations" },
        ],
    },
];
const footerContainer = document.getElementById("footerLinks");

footerLinks.forEach((pagelinks) => {
    const sectionElement = document.createElement("div");
    sectionElement.classList.add("col-xxl-3","col-xl-3","col-lg-3","col-md-6","col-sm-6","col-12", "link_sec");

    const sectionTitle = document.createElement("h4");
    sectionTitle.classList.add("magra-bold", "text-white", "link_title");
    sectionTitle.innerText = pagelinks.title;

    const linkList = document.createElement("ul");
    linkList.classList.add("page_link");

    pagelinks.links.forEach((links) => {
        const linkItem = document.createElement("li");
        linkItem.classList.add("link_item", "text-white", "magra-regular");
        linkItem.innerText = links.link;
        linkList.appendChild(linkItem);
    });

    sectionElement.appendChild(sectionTitle);
    sectionElement.appendChild(linkList);
    footerContainer.appendChild(sectionElement);
});

const getintouvh = `
        <div class="col-3 link_sec">
          <h4 class="link_title text-white magra-bold">
            Get in Touch
          </h4>
          <ul class="page_link">
            <li class="info_item">
              <i class="fa-solid fa-phone link_icon"></i>
              <div class="link_info">+91 799-898-8989</div>
            </li>
            <li class="info_item">
              <i class="fa-regular fa-envelope link_icon"></i>
              <div class="link_info magra-regular">
                example@gmail.com
              </div>
            </li>
          </ul>
          <div class="social">
            <ul class="social_links">
              <a class="social_items">
                <li class="social_icon">
                  <i class="fa-brands fa-facebook-f"></i>
                </li>
              </a>

              <a class="social_items">
                <li class="social_icon">
                  <i class="fa-brands fa-x-twitter"></i>
                </li>
              </a>

              <a class="social_items">
                <li class="social_icon">
                  <i class="fa-brands fa-linkedin-in"></i>
                </li>
              </a>

              <a class="social_items">
                <li class="social_icon">
                  <i class="fa-brands fa-instagram"></i>
                </li>
              </a>
            </ul>
          </div>
        </div>
        `;
footerContainer.insertAdjacentHTML('beforeend', getintouvh);