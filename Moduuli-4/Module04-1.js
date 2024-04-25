'use strict'
document.getElementById('searchForm').addEventListener('submit', async function(event) {
  event.preventDefault(); // toiminto estää formin normaalin lähetyksen
  const input = document.getElementById('query').value;
  const apiurl = `https://api.tvmaze.com/search/shows?q=${input}`;
//teht 2 tehty
  try {
    const response = await fetch(apiurl);
    const jsondata = await response.json();
    console.log(jsondata);

  } catch (error) {
      console.log(error.message);
    }
})

