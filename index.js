document.addEventListener("DOMContentloaded", (e) => {
  // invoking a function here will make sure it happens on page load
  // your code here
  
  //1 find out which button they pressed
  //2 get the data for that movie
  //3 replace the template values with the real ones
  
  // find button they pressed
  const titanicButton = document.getElementById('Titanic')
  const terminatorButton = document.getElementById('Terminator 2')
  
  //
  function onTitanic() {
    let data = movies.Titanic
    let title = data.title
  }
  
  //add the event addEventListener
  titanicButton.addEventListener('click', () => console.log(movies))
  terminatorButtonButton.addEventListener('click', () => console.log('T2'))
  
  
});
