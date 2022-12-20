const products = document.querySelector(".products-container");
const productsCart = document.querySelector(".cart-container");
const total = document.querySelector(".total");
const categories = document.querySelector(".categories");
const categoriesList = document.querySelectorAll(".category");
const btnLoad = document.querySelector(".btn-load");
const buyBtn = document.querySelector(".btn-buy");
const cartBubble = document.querySelector(".cart-bubble");
const cartBtn = document.querySelector(".cart-label");
const cartMenu = document.querySelector(".cart");
const barsBtn = document.querySelector(".menu-label");
const barsMenu = document.querySelector(".navbar-list");
const overlay = document.querySelector(".overlay");
const successModal = document.querySelector(".add-modal");
const deleteBtn = document.querySelector(".btn-delete");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const saveLocalStorage = (cartList) => {
  localStorage.setItem("cart", JSON.stringify(cartList));
};

const renderProduct = ({ id, name, bid, user, userImg, cardImg }) => {
  return `
        <div class="product">
            <img src=${cardImg} alt=${name} />
            <div class="product-info">
                <!-- top -->
                <div class="product-top">
                    <h3>${name}</h3>
                    <p>Current Bid</p>
                </div>

                <!-- mid -->
                <div class="product-mid">
                    <div class="product-user">
                        <img src=${userImg} alt="user" />
                        <p>@${user}</p>
                    </div>
                    <span>${bid} eTH</span>
                </div>

                <!-- bot -->
                <div class="product-bot">
                    <div class="product-offer">
                        <div class="offer-time">
                            <img src="./assets/img/fire.png" alt="" />
                            <p>05:12:07</p>
                        </div>
                        <button class="btn-add"
                            data-id='${id}'
                            data-name='${name}'
                            data-bid='${bid}'
                            data-img='${cardImg}'>Add</button>
                    </div>
                </div>
            </div>
        </div>
    `;
};

const renderFilteredProducts = (category) => {
  const productsList = productsData.filter(
    (product) => product.category === category
  );
  products.innerHTML = productsList.map(renderProduct).join("");
};

const renderDividedProducts = (index = 0) => {
  const productsToRender = productsController.dividedProducts[index];
  products.innerHTML += productsToRender.map(renderProduct).join("");
};

const renderProducts = (index = 0, category = null) => {
  if (!category) {
    renderDividedProducts(index);
  } else {
    renderFilteredProducts(category);
  }
};

const isLastIndex = () =>
  productsController.nextProductsIndex === productsController.productsLimit;

const showMoreProducts = () => {
  renderProducts(productsController.nextProductsIndex);
  productsController.nextProductsIndex++;
  if (isLastIndex()) {
    btnLoad.classList.add("hidden");
  }
};

const changeBtnActiveState = (selectedCategory) => {
  const categories = [...categoriesList];
  categories.forEach((categoryBtn) => {
    if (categoryBtn.dataset.category !== selectedCategory) {
      categoryBtn.classList.remove("active");
    } else {
      categoryBtn.classList.add("active");
    }
  });
};

const changeShowMoreBtnState = (selectedCategory) => {
  if (!selectedCategory) {
    btnLoad.classList.remove("hidden");
    return;
  }
  btnLoad.classList.add("hidden");
};

const changeFilterState = (selectedCategory) => {
  changeBtnActiveState(selectedCategory);
  changeShowMoreBtnState(selectedCategory);
};

const applyFilter = (e) => {
  if (!e.target.classList.contains("category")) return;
  const clickedCategory = e.target.dataset.category;
  changeFilterState(clickedCategory);
  if (!clickedCategory) {
    products.innerHTML = "";
    renderProducts();
  } else {
    renderProducts(0, clickedCategory);
    productsController.nextProductsIndex = 1;
  }
};

const toggleMenu = () => {
  barsMenu.classList.toggle("open-menu");
  if (cartMenu.classList.contains("open-cart")) {
    cartMenu.classList.remove("open-cart");
    return;
  }
  overlay.classList.toggle("show-overlay");
};

const toggleCart = () => {
  cartMenu.classList.toggle("open-cart");
  if (barsMenu.classList.contains("open-menu")) {
    barsMenu.classList.remove("open-menu");
    return;
  }
  overlay.classList.toggle("show-overlay");
};

const closeOnScroll = () => {
  if (
    !barsMenu.classList.contains("open-menu") &&
    !cartMenu.classList.contains("open-cart")
  )
    return;

  barsMenu.classList.remove("open-menu");
  cartMenu.classList.remove("open-cart");
  overlay.classList.remove("show-overlay");
};

const closeOnClick = (e) => {
  if (!e.target.classList.contains("navbar-link")) return;
  barsMenu.classList.remove("open-menu");
  overlay.classList.remove("show-overlay");
};

const closeOnOverlayClick = () => {
  barsMenu.classList.remove("open-menu");
  cartMenu.classList.remove("open-cart");
  overlay.classList.remove("show-overlay");
};

const init = () => {
  renderProducts();
  btnLoad.addEventListener("click", showMoreProducts);
  categories.addEventListener("click", applyFilter);

  barsBtn.addEventListener("click", toggleMenu);
  cartBtn.addEventListener("click", toggleCart);

  window.addEventListener("scroll", closeOnScroll);
  barsMenu.addEventListener("click", closeOnClick);
  overlay.addEventListener("click", closeOnOverlayClick);
};
init();
