document.addEventListener("DOMContentLoaded", (e) => {
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
    
    let titleDiv = document.getElementById('title')
    titleDiv.innerHTML = title
    
    let directorDiv = document.getElementById('director')
    directorDiv.innerHTML = data.director
    
    let genreDiv = document.getElementById('genre')
    genreDiv.innerHTML = data.genre
    
    let filmRatingDiv = document.getElementById('filmRating')
    filmRatingDiv.innerHTML = data.filmRating
    
    let posterImg = document.getElementById('poster')
    posterImg.src = data.poster 
    
    let audienceScoreDiv = document.getElementById('audienceScore')
    audienceScoreDiv.innerHTML = data.audienceScore
    
    let descriptionDiv = document.getElementById('description')
    descriptionDiv.innerHTML = data.description
   
    let castDiv = document.getElementById('cast')
    for (let castMember of data.cast) {
      castDiv.innerHTML = "<li>" + castMember.role
    }
    
  }
  
  //add the event addEventListener
  titanicButton.addEventListener('click', onTitanic)
  terminatorButton.addEventListener('click', () => console.log('T2'))
  
});
