import data from "./data.json" assert { type: "json" };
const content = document.querySelector(".content");
const filterBox = document.querySelector(".filter-container");
const searchTag = document.querySelector(".search");

window.addEventListener("load", () => {
  render();
});

let listIArr = [];

function render() {
  data
    .filter((user) => {
      const tags = [user.level, user.role].concat(user.tools, user.languages);
      return listIArr.every((f) => tags.includes(f));
    })
    .map((item, i) => {
      const listItem = document.createElement("li");
      listItem.className = "list";
      if (listIArr.length !== 0) {
        listItem.setAttribute("data-index", i);
      }

      listItem.innerHTML = ` 
              ${item.featured ? `<div class="border-style" ></div>` : ""} 
          <div class="img-info-container" >
             <div class="img-container">
             <img class="company-logo" src=${item.logo} alt=${item.company}  />
             </div>
          
            <div class="info">
          
               <div class="heading-container">
                  <h1 class="heading" >${item.company}</h1>
                     <div class="featured-container">
                         ${item.new ? `<span class="new" >new!</span>` : ""} 
                         ${
                           item.featured
                             ? `<span class="featured" >featured</span>`
                             : ""
                         } 
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
            `;
      content.appendChild(listItem);
    });
  litags();
  clearTag();
}

function litags() {
  const liTags = document.querySelectorAll(".li");
  const list = document.querySelectorAll('.list')
  liTags.forEach((tags, i) => {
    tags.addEventListener("click", (e) => {
      let result = e.target.textContent;
      filterBox.classList.add("show-filter-container");
      clearTag(result);
      if (!listIArr.includes(result)) {
        listIArr.push(result);
        Tags();
        render();
      }
      if(list[i].hasAttribute("data-index")){
console.log('h');
      }
    });
  });
}

function Tags() {
  searchTag.querySelectorAll("li").forEach((li) => li.remove());
  listIArr.forEach((li) => {
    const container = document.createElement("li");
    container.className = "list-container";
    container.innerHTML = `
  <span class="tag-text" >${li}</span>
  <div class="clear-img-container" >
    <img class="clear" src="/images/icon-remove.svg" alt="clear">
  </div>
  `;
    searchTag.appendChild(container);
  });
  clearTag();
}

function clearTag(text) {
  const clear = document.querySelectorAll(".clear");
  const list = document.querySelectorAll(".list-container");
  clear.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      list[index].remove();
      listIArr.pop(text);
      if (listIArr.length === 0) {
        filterBox.classList.remove("show-filter-container");
        // checkFilters();
        // render();
      }
    });
  });
}

//* language tags
function language(lang) {
  let lan = "";
  lang.forEach((item) => {
    lan += `<li class="li"  >${item}</li>`;
  });
  return lan;
}

//* Tools tags
function tags(tags) {
  let tag = "";
  tags.forEach((item) => {
    tag += `<li class="li"  >${item}</li>`;
  });
  return tag;
}
