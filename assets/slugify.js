const titleInput = document.querySelector('input[name=title]');
const slugInput = document.querySelector('input[name=slug]');
const random = Math.random();
const slugify=(val)=>{
    return val.toString().toLowerCase().trim()
    .replace(/[\s\W-]+/g,'-') //replacing spaces with highphens
};

titleInput.addEventListener('keyup',(e)=>{
   slugInput.setAttribute('value',slugify(titleInput.value+random));
});

