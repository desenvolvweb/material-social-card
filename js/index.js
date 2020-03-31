const $cards = document.querySelectorAll(".js-card");
const $menu = document.querySelector(".js-menu");
const $menuToggles = $menu.querySelectorAll(".js-section-toggle");

$menu.addEventListener("click", e => {
  e.preventDefault();

  if (isSectionToggle(e.target)) {
    activateCard(e.target.parentElement);
    markAsActiveMenuItem(e.target);
  }
});

function isSectionToggle(el) {
  return el.classList.contains("js-section-toggle");
}

function activateCard(el) {
  const socialnetworkidentifier = findSocialNetworkIdentifier(el);

  $cards.forEach($card => {
    $card.classList.remove("is-active");

    if ($card.classList.value.includes(socialnetworkidentifier)) {
      $card.classList.add("is-active");
    }
  });
}

function findSocialNetworkIdentifier(el) {
  for (const className of el.classList) {
    if (className.includes("--")) {
      return className.split("--")[1];
    }
  }
}

function markAsActiveMenuItem(el) {
  $menuToggles.forEach($item => {
    $item.classList.remove("is-active");
  });

  el.classList.add("is-active");
}
