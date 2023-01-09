import data from './data.json' assert { type: "json" };
const content = document.querySelector('.content');
const filterContent = document.querySelector('.filter-list');


// language tags
const language = (lang) => {
  let lan = ""
  lang.forEach((item) => {
    lan += `<li class="li"  >${item}</li>`
  })
  return lan;
};

// Tools tags
const tags = (tags) => {
  let tag = ""
  tags.forEach((item) => {
    tag += `<li class="li"  >${item}</li>`
  })
  return tag;
}


const jobList = (li, element) =>{
li.forEach((item) => {

  const listItem = document.createElement('li')
  listItem.className = "list"
          listItem.innerHTML = ` 
          ${item.featured ? `   <div class="border-style" ></div>` : ''} 
      <div class="img-info-container" >
         <div class="img-container">
         <img class="company-logo" src=${item.logo} alt=${item.company}  />
         </div>
      
        <div class="info">
      
           <div class="heading-container">
              <h1 class="heading" >${item.company}</h1>
                 <div class="featured-container">
                     ${item.new ? `<span class="new" >new!</span>` : ''} 
                     ${item.featured ? `<span class="featured" >featured</span>` : ''} 
                 </div>
          </div>
      
      <div class="heading-container-sec" >
          <h2 class="position-heading" >${item.position}</h2>
          <ul>
          <li>${item.postedAt}</li>
          <li> <span class="span">&#x2022</span> ${item.contract}</li>
          <li> <span class="span">&#x2022</span> ${item.location}</li>
          </ul>
      </div>
      
        </div>
      </div>
      
      <div class="tags-container">
      <ul class="tags-list" >
      ${language(item.languages)}
      ${tags(item.tools)}
      <li class="li" >${item.role}</li>
      <li class="li" >${item.level}</li>
      </ul>
      </div>
        `
element.appendChild(listItem)

});

}

// FIlter
let ii
let hello = data.filter ((item) => {
item.languages.forEach((i) => {
ii = i
})
return ii ===  "Ruby"

})

console.log(hello)

 
jobList(hello, content);

