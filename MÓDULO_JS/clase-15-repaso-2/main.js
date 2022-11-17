// Consigna 1:
const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const isEmpty = (value) => !value.length;

const isPasswordValid = (password) =>
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/.test(
    password
  );

const showError = (input, message) => {
  const formField = input.parentElement;
  const errorContainer = formField.querySelector("small");
  errorContainer.textContent = message;
};

const clearError = (input) => {
  const formField = input.parentElement;
  const errorContainer = formField.querySelector("small");
  errorContainer.textContent = "";
};

const checkEmail = () => {
  let isValid = false;
  if (isEmpty(emailInput.value)) {
    showError(emailInput, "El email está vacio");
  } else {
    isValid = true;
    clearError(emailInput);
  }
  return isValid;
};

const checkPassword = () => {
  let isValid = false;
  const password = passwordInput.value;
  console.log(password);
  if (isEmpty(password)) {
    showError(passwordInput, "La contraseña es requerida");
  } else if (!isPasswordValid(password)) {
    showError(
      passwordInput,
      "La contraseña debe contener mayuscylas, minusculas, numeros y simbolo"
    );
  } else {
    isValid = true;
    clearError(passwordInput);
  }
  return isValid;
};

const isFormLoginValid = () => {
  const isEmailValid = checkEmail();
  const isPasswordValid = checkPassword();
  return isEmailValid && isPasswordValid;
};

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (isFormLoginValid()) {
    console.log("EL FORM ES VALIDO");
    loginForm.reset();
  }
});

// Consigna 2:
const movies = [
  {
    id: 505642,
    original_title: "Black Panther: Wakanda Forever",
    overview:
      "Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death. As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.",
    release_date: "2022-11-09",
    title: "Black Panther: Wakanda Forever",
    vote_average: 7.6,
    vote_count: 533,
  },
  {
    id: 436270,
    original_title: "Black Adam",
    overview:
      "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
    release_date: "2022-10-19",
    title: "Black Adam",
    vote_average: 6.9,
    vote_count: 1075,
  },
  {
    id: 663712,
    original_title: "Terrifier 2",
    overview:
      "After being resurrected by a sinister entity, Art the Clown returns to Miles County where he must hunt down and destroy a teenage girl and her younger brother on Halloween night.  As the body count rises, the siblings fight to stay alive while uncovering the true nature of Art's evil intent.",
    release_date: "2022-10-06",
    title: "Terrifier 2",
    vote_average: 7,
    vote_count: 589,
  },
  {
    id: 829280,
    original_title: "Enola Holmes 2",
    overview:
      "Now a detective-for-hire like her infamous brother, Enola Holmes takes on her first official case to find a missing girl, as the sparks of a dangerous conspiracy ignite a mystery that requires the help of friends — and Sherlock himself — to unravel.",
    release_date: "2022-11-04",
    title: "Enola Holmes 2",
    vote_average: 7.8,
    vote_count: 807,
  },
  {
    id: 675054,
    original_title: "MexZombies",
    overview:
      "A group of teenagers must face a zombie apocalypse, and help reestablish order.",
    release_date: "2022-10-26",
    title: "MexZombies",
    vote_average: 7.3,
    vote_count: 71,
  },
  {
    id: 49046,
    original_title: "Im Westen nichts Neues",
    overview:
      "Paul Baumer and his friends Albert and Muller, egged on by romantic dreams of heroism, voluntarily enlist in the German army. Full of excitement and patriotic fervour, the boys enthusiastically march into a war they believe in. But once on the Western Front, they discover the soul-destroying horror of World War I.",
    release_date: "2022-10-07",
    title: "All Quiet on the Western Front",
    vote_average: 7.8,
    vote_count: 746,
  },
  {
    id: 732459,
    original_title: "Blade of the 47 Ronin",
    overview:
      'In this sequel to "47 Ronin," a new class of warriors emerges among the Samurai clans to keep a sought-after sword from falling into the wrong hands.',
    release_date: "2022-10-25",
    title: "Blade of the 47 Ronin",
    vote_average: 6.9,
    vote_count: 70,
  },
  {
    id: 966220,
    original_title: "Снайпер. Білий ворон",
    overview:
      "Mykola is an eccentric pacifist who wants to be useful to humanity. When the war begins at Donbass, Mykola’s naive world is collapsing as the militants kill his pregnant wife and burn his home to the ground. Recovered, he makes a cardinal decision and gets enlisted in a sniper company. Having met his wife’s killers, he emotionally breaks down and arranges “sniper terror” for the enemy. He’s saved from a senseless death by his instructor who himself gets mortally wounded. The death of a friend leaves a “scar” and Mykola is ready to sacrifice his life.",
    release_date: "2022-05-03",
    title: "Sniper: The White Raven",
    vote_average: 7.4,
    vote_count: 70,
  },
  {
    id: 882598,
    original_title: "Smile",
    overview:
      "After witnessing a bizarre, traumatic incident involving a patient, Dr. Rose Cotter starts experiencing frightening occurrences that she can't explain. As an overwhelming terror begins taking over her life, Rose must confront her troubling past in order to survive and escape her horrifying new reality.",
    release_date: "2022-09-23",
    title: "Smile",
    vote_average: 6.7,
    vote_count: 500,
  },
  {
    id: 985939,
    original_title: "Fall",
    overview:
      "For best friends Becky and Hunter, life is all about conquering fears and pushing limits. But after they climb 2,000 feet to the top of a remote, abandoned radio tower, they find themselves stranded with no way down. Now Becky and Hunter’s expert climbing skills will be put to the ultimate test as they desperately fight to survive the elements, a lack of supplies, and vertigo-inducing heights",
    release_date: "2022-08-11",
    title: "Fall",
    vote_average: 7.3,
    vote_count: 1730,
  },
  {
    id: 760161,
    original_title: "Orphan: First Kill",
    overview:
      "After escaping from an Estonian psychiatric facility, Leena Klammer travels to America by impersonating Esther, the missing daughter of a wealthy family. But when her mask starts to slip, she is put against a mother who will protect her family from the murderous “child” at any cost.",
    release_date: "2022-07-27",
    title: "Orphan: First Kill",
    vote_average: 6.8,
    vote_count: 1286,
  },
  {
    id: 979924,
    original_title: "On the Line",
    overview:
      "A provocative and edgy radio host must play a dangerous game of cat and mouse with a mysterious caller who's kidnapped his family and is threatening to blow up the whole station.",
    release_date: "2022-10-31",
    title: "On the Line",
    vote_average: 6.6,
    vote_count: 98,
  },
  {
    id: 717728,
    original_title: "Jeepers Creepers: Reborn",
    overview:
      "Forced to travel with her boyfriend to a horror festival, Laine begins to experience disturbing visions associated with the urban legend of The Creeper. As the festival arrives and the blood-soaked entertainment builds to a frenzy, she becomes the center of it while something unearthly has been summoned.",
    release_date: "2022-09-15",
    title: "Jeepers Creepers: Reborn",
    vote_average: 5.8,
    vote_count: 454,
  },
  {
    id: 1033107,
    original_title: "Wild Is the Wind",
    overview:
      "When two corrupt police officers investigate the brutal murder of a young girl, tensions come to a head in their small, racially-segregated town.",
    release_date: "2022-10-28",
    title: "Wild Is the Wind",
    vote_average: 5.8,
    vote_count: 30,
  },
  {
    id: 944864,
    original_title: "The Takeover",
    overview:
      "Self-proclaimed ethical hacker Mel Bandison's life is turned upside down when she stops a data breach on a high-tech self-driving bus that also happens to shut down an international criminal network. She then becomes a target and is framed with a deepfake video that “shows” that she murders someone.",
    release_date: "2022-11-01",
    title: "The Takeover",
    vote_average: 5.7,
    vote_count: 62,
  },
  {
    id: 856245,
    original_title: "Matar a la Bestia",
    overview:
      "Emilia arrives at her Aunt Inés' hostel located on the Argentina-Brazil border, looking for her missing brother. In this lush jungle a dangerous beast which takes the form of different animals seems to be roaming around.",
    release_date: "2022-04-28",
    title: "To Kill the Beast",
    vote_average: 5.9,
    vote_count: 14,
  },
  {
    id: 642885,
    original_title: "Hocus Pocus 2",
    overview:
      "29 years since the Black Flame Candle was last lit, the 17th-century Sanderson sisters are resurrected, and they are looking for revenge. Now it's up to three high school students to stop the ravenous witches from wreaking a new kind of havoc on Salem before dawn on All Hallow's Eve.",
    release_date: "2022-09-27",
    title: "Hocus Pocus 2",
    vote_average: 7.5,
    vote_count: 1094,
  },
  {
    id: 896485,
    original_title: "Overdose",
    overview:
      "Captain Sara Bellaiche, from Toulouse Judiciary Police branch, is investigating a go-fast linked to the murder of two teenagers, an investigation led by Richard Cross, from the Paris Criminal Brigade. Forced to collaborate in order to find the murderer and stop the bloody go-fast, Sara and Richard are both thrown in a breathless race against the clock on the roads of Spain and France.",
    release_date: "2022-11-04",
    title: "Overdose",
    vote_average: 6.5,
    vote_count: 66,
  },
  {
    id: 830788,
    original_title: "The Invitation",
    overview:
      "After the death of her mother, Evie is approached by an unknown cousin who invites her to a lavish wedding in the English countryside. Soon, she realizes a gothic conspiracy is afoot and must fight for survival as she uncovers twisted secrets in her family’s history.",
    release_date: "2022-08-24",
    title: "The Invitation",
    vote_average: 6.4,
    vote_count: 316,
  },
  {
    id: 616037,
    original_title: "Thor: Love and Thunder",
    overview:
      "After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor Odinson enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now wields Mjolnir as the Mighty Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late.",
    release_date: "2022-07-06",
    title: "Thor: Love and Thunder",
    vote_average: 6.7,
    vote_count: 4637,
  },
];

const moviesContainer = document.getElementById("movies-container");

const getMovieHtml = (movie) => {
  return `
    <div style="border: 1px solid white;">
      <h3>${movie.title}</h3>
      <p>${movie.overview}</p>
      <ul>
        <li>Fecha lanzamiento: ${movie.release_date}</li>
        <li>Puntaje: ${movie.vote_average}</li>
        <li>Votos: ${movie.vote_count}</li>
      </ul>
    </div>
  `;
};
const moviesHtml = movies.map((movie) => getMovieHtml(movie)).join("");

moviesContainer.innerHTML = moviesHtml;

// Consigna 3:
const shoppingListForm = document.getElementById("shopping-form");
const shoppingListInput = document.getElementById("shopping-list-input");
const shoppingListContainer = document.getElementById("shopping-list");

let shoppingList = [];

const addItemToShoppingList = (item) => {
  // shoppingList.push(item)
  shoppingList = [...shoppingList, item];
};

const renderShoppingListItems = (shoppingList) => {
  const html = shoppingList.map((item) => `<li>${item}</li>`).join("");
  shoppingListContainer.innerHTML = html;
};

shoppingListForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const item = shoppingListInput.value;
  addItemToShoppingList(item);
  renderShoppingListItems(shoppingList);
  shoppingListForm.reset();
});
