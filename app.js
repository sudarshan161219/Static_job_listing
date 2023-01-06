import data from './data.json' assert { type: "json" }
const content = document.querySelector('.content')
const ulList = document.querySelector('.ulList')




data.forEach((item) => {

    const listItem = document.createElement('li')
    listItem.className = "list"

    listItem.innerHTML = `
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

</div>


  `

    content.appendChild(listItem)

})

