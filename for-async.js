const getById = async (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Got ${id}`);
      resolve(id);
    }, 1000);
  });
};

// FOR IN AWAITS FOR ASYNC FUNCTIONS
(async function () {
  const ids = [10, 20, 30];
  for (const id of ids) await getById(id);
})();

// FOREACH DOES NOT WAIT FOR ASYCN FUNCTIONS
(async function () {
  const ids = [10, 20, 30];
  ids.forEach(async (id) => await getById(id));
})();
