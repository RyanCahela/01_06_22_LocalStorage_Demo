window.localStorage.setItem("name", "ryan");

function useStorageItems() {
  const globalLocalStorage = window.localStorage;

  function getStorageItems() {
    const storageItems = {};
    for (let i = 0; i < globalLocalStorage.length; i++) {
      storageItems[globalLocalStorage.key(i)] = globalLocalStorage.getItem(globalLocalStorage.key(i));
    }
    return storageItems;
  }

  function setStorageItems(itemsToStore) {
    for (const [key, value] of Object.entries(itemsToStore)) {
      localStorage.setItem(key, value);
    }
  }

  return {getStorageItems, setStorageItems};
}

const myStorageManager = useStorageItems();

let items = myStorageManager.getStorageItems();
console.log("items", items);

myStorageManager.setStorageItems({
  lastName: "Cahela"
});

items = myStorageManager.getStorageItems();
console.log("items", items);

localStorage.clear();


