const contacts = document.getElementsByClassName("contacts")[0];
const stickyHeader = document.getElementsByClassName("stickyHeader")[0];

let l = 0;
let r = 5000;

function addContacts(l,r) {
  const fragment = document.createDocumentFragment();
  for (let i = l; i < r; i++) {
    const child = document.createElement("div");
    child.textContent = i;
    child.classList.add("contact");
    fragment.appendChild(child);
  }
  contacts.appendChild(fragment);
}


contacts.addEventListener('scroll', function() {
  const items = Array.from(contacts.getElementsByClassName("contact"));
  const itemOffsets = items.map((item) => item.offsetTop);

  const topItemIndex = itemOffsets.findIndex(
    (offset) => contacts.scrollTop - offset <= -18
  );
  if (topItemIndex !== -1) {
    stickyHeader.textContent = items[topItemIndex].textContent;
  }

  if (topItemIndex >= r - 20 && r < 50000) {
    l += 5000;
    r += 5000;
    addContacts(l, r);
 }
});

addContacts(l, r);