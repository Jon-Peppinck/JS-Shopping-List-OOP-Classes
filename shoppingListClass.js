// Shopping List - OOP - Classes
// Watch Previous Video - Shopping List - OOP - PROTOTYPES
// Convert es5 to es6 notation - syntactial sugar
class ShopItem {
  constructor(item) {
    this.item = item;
  }
  addToList(newShopItem) {
    const ulList = document.getElementById("shopList");
    // create li element
    const li = document.createElement("li");
    // insert HTML into li
    li.innerHTML = `${newShopItem} <a href="#" class="float-right" id="deleteItem">X</a><hr>`;
    // append li to ul
    ulList.appendChild(li);
  }
  clearValue() {
    document.getElementById("shopItem").value = "";
  }
  displayMsg(msg, classType) {
    // create div
    const div = document.createElement("div");
    // add bootstrap classes
    div.className = `alert alert-${classType}`;
    // append text node with msg
    div.appendChild(document.createTextNode(msg));
    // insert below h1
    const mainDiv = document.getElementById("mainDiv");
    const shopForm = document.getElementById("shopForm");
    mainDiv.insertBefore(div, shopForm);
    // remove message after 2 seconds
    setTimeout(function() {
      document.querySelector(".alert").remove();
    }, 2000);
  }
  deleteShopItem(target) {
    if (target.id === "deleteItem") {
      if (confirm("Do you want to remove item from shopping list?")) {
        target.parentElement.remove();
      }
    }
  }
}

// Event Listeners
document.getElementById("shopForm").addEventListener("submit", e => {
  const newShopItem = document.querySelector("#shopItem").value;
  // instantiate a ShopItem
  const theItem = new ShopItem(newShopItem);
  // validate
  if (newShopItem === "") {
    // display error msg
    theItem.displayMsg("Your item is empty", "danger");
  } else {
    // display success msg
    theItem.displayMsg("Your item has been added", "success");
    // add item to list
    theItem.addToList(newShopItem);
    // clear newShopItem value field
    theItem.clearValue();
  }

  e.preventDefault();
});

// event listener - delete (not in DOM unless added - target ul)
document.getElementById("shopList").addEventListener("click", e => {
  const delShopItem = new ShopItem();
  delShopItem.deleteShopItem(e.target);
  delShopItem.displayMsg("Your item has been removed", "success");
  e.preventDefault();
});
