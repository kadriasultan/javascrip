let collection=document.getElementsByName("result");
console.log(collection);






function userEvents(element,index) {
  element.addEventListener('click',function(){
    this.classList.toggle('choosen');
    console.log(
      "elemet: ", element,
      "index: ", index,
      "title: ", collection[index].title,
      "data: ", collection[index].dataset["value"]);
  })
}


collection.forEach( 
  function (currentValue ,currenIndex) {
    userEvents(currentValue,currenIndex)
});
  