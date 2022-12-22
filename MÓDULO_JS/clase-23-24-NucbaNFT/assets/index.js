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

const renderCartProduct = ({ id, name, bid, img, quantity }) => {
  return `
  <div class="cart-item">
    <img src=${img} alt="Nft del carrito" />
    <div class="item-info">
      <h3 class="item-title">${name}</h3>
      <p class="item-bid">Current bid</p>
      <span class="item-price">${bid} ETH</span>
    </div>
    <div class="item-handler">
      <span class="quantity-handler down" data-id=${id}>-</span>
      <span class="item-quantity">${quantity}</span>
      <span class="quantity-handler up" data-id=${id}>+</span>
    </div>
  </div>
  `;
};

const renderCart = () => {
  if (!cart.length) {
    productsCart.innerHTML = `<p class="empty-msg">No hay productos en el carrito.</p>`;
    return;
  }
  productsCart.innerHTML = cart.map(renderCartProduct).join("");
};

const getCartTotal = () => {
  return cart.reduce(
    (accum, currentValue) =>
      accum + Number(currentValue.bid) * currentValue.quantity,
    0
  );
};

const showTotal = () => {
  total.innerHTML = `${getCartTotal().toFixed(2)} eTH`;
};

const isExistingCartProduct = ({ id }) =>
  cart.some((product) => product.id === id);

const createCartProduct = (product) => {
  cart = [...cart, { ...product, quantity: 1 }];
};

const showSuccessModal = (msg) => {
  successModal.classList.add("active-modal");
  successModal.textContent = msg;
  setTimeout(() => {
    successModal.classList.remove("acive-modal");
  }, 1500);
};

const disableBtn = (button) => {
  if (!cart.length) {
    button.classList.add("disabled");
  } else {
    button.classList.remove("disabled");
  }
};

const checkCartState = () => {
  saveLocalStorage(cart);
  renderCart();
  showTotal();
  disableBtn(buyBtn);
  disableBtn(deleteBtn);
  renderCartBubble();
};

const addUnitToProduct = (product) => {
  cart = cart.map((cartProduct) =>
    cartProduct.id === product.id
      ? { ...cartProduct, quantity: cartProduct.quantity + 1 }
      : cartProduct
  );
};

const addProduct = (e) => {
  if (!e.target.classList.contains("btn-add")) return;
  const { id, name, bid, img } = e.target.dataset;

  const product = { id, name, bid, img };
  if (isExistingCartProduct(product)) {
    addUnitToProduct(product);
    showSuccessModal("Se agegó una unidad del producto al carrito.");
  } else {
    createCartProduct(product);
    showSuccessModal("El producto se ha agregado al carrito.");
  }
  checkCartState();
};

const renderCartBubble = () => {
  cartBubble.textContent = cart.reduce((acc, cur) => acc + cur.quantity, 0);
};

const resetCartItems = () => {
  cart = [];
  checkCartState();
};

const completeCartAction = (confirmMsg, successMsg) => {
  if (!cart.length) return;
  if (window.confirm(confirmMsg)) {
    resetCartItems();
    alert(successMsg);
  }
};

const completeBuy = () => {
  completeCartAction("¿Desea completar su compra?", "Gracias por su compra!");
};

const deleteCart = () => {
  completeCartAction(
    "¿Desea eliminar todos los productos del carrito?",
    "El carrito se ha vacido"
  );
};

const handlePlusBtnEvent = (id) => {
  const existingProduct = cart.find((product) => product.id === id);
  addUnitToProduct(existingProduct);
};

const removeProductFromCart = ({ id }) => {
  cart = cart.filter((product) => product.id !== id);
  checkCartState();
};

const substractProductUnit = ({ id }) => {
  cart = cart.map((product) =>
    product.id === id ? { ...product, quantity: product.quantity - 1 } : product
  );
};

const handleMinutBtnEvent = (id) => {
  const existingProduct = cart.find((product) => product.id === id);

  if (existingProduct.quantity === 1) {
    if (window.confirm("¿Desea eliminar el producto del carrito?")) {
      removeProductFromCart(existingProduct);
    }
    return;
  }
  substractProductUnit(existingProduct);
};

const handleQuantity = (e) => {
  if (e.target.classList.contains("down")) {
    handleMinutBtnEvent(e.target.dataset.id);
  } else if (e.target.classList.contains("up")) {
    handlePlusBtnEvent(e.target.dataset.id);
  }
  checkCartState();
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

  document.addEventListener("DOMContentLoaded", renderCart);
  document.addEventListener("DOMContentLoaded", showTotal);

  productsCart.addEventListener("click", handleQuantity);
  products.addEventListener("click", addProduct);
  buyBtn.addEventListener("click", completeBuy);
  deleteBtn.addEventListener("click", deleteCart);

  disableBtn(buyBtn);
  disableBtn(deleteBtn);
  renderCartBubble();
};
init();
