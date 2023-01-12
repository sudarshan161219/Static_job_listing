import data from './data.json' assert { type: "json" };
const content = document.querySelector('.content');
const filterBox = document.querySelector('.filter-container');
const tagText = document.querySelector('.tag-text');
const searchTag = document.querySelector('.search')





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


const jobList = (li, element) => {
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

  litags()

}







const funTag = (text) => {
  const container = document.createElement('li')
  container.className = "list-container"

  container.innerHTML = `
  <span class="tag-text" >${text}</span>
  <div class="clear-img-container" >
    <img class="clear" src="/images/icon-remove.svg" alt="clear">
  </div>
  `
  searchTag.appendChild(container)

  const clear = document.querySelectorAll('.clear');
  const listC = document.querySelectorAll('.list-container')
  
  
  clear.forEach((btn, i) => {
   btn.addEventListener("click", (e) => {
    searchTag.removeChild( listC[i])
   })
  })


}


function litags()  {
  const liTags = document.querySelectorAll(".li");


  liTags.forEach((tags) => { 
    tags.addEventListener("click", (e) => {
    let  result = e.target.textContent
      filterBox.classList.add('show-filter-container')
      funTag(result)
    })
  
  })
}

// FIlter

let ii
let hello = data.filter((item) => {
  item.languages.forEach((i) => {
    ii = i
  })
 
return ii == "Python" 


 
})



jobList(hello, content);

