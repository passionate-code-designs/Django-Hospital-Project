const list= document.querySelector('.articles');

const searchBar = document.forms['search-bar'].querySelector('input');
searchBar.addEventListener('keyup',function(e){
  const term = e.target.value.toUpperCase();
  const articles= list.getElementsByClassName('article');
  Array.from(articles).forEach(function(article){
      const title= article.firstElementChild.textContent;
      if(title.toUpperCase().indexOf(term)!=-1){
          article.style.display='block';
      }else{
          article.style.display='none';
      }
  })

});

