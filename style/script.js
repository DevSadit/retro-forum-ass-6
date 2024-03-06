// Let’s Discuss section
const discussCards = (inpTxt = "") => {
  // console.log(inpTxt);
  fetch(`https://openapi.programming-hero.com/api/retro-forum/posts${inpTxt}`)
    .then((res) => res.json())
    .then((data) => {
      displayPost(data.posts);
    });
};

function displayPost(data) {
  const postCardBox = document.getElementById(`postCardBox`);
  postCardBox.innerHTML = "";
  for (item of data) {
    const newCards = document.createElement(`div`);

    newCards.innerHTML = `
<div class=" p-10 bg-[#797dfc1a] border border-[#797DFC] rounded-lg shadow mt-6" >
<div class="flex gap-x-6">
<!-- indicator -->
<div class="indicator">
<span class="indicator-item badge 
${item.isActive ? "bg-green-600" : "bg-red-600"}"></span>
<div class="grid w-[70px] h-[70px] bg-base-300 place-items-center rounded-lg"><img class="rounded-lg" src="${
      item.image
    }"></div>
</div>

<!-- whole card body -->
<div class="flex-1">
<div class="flex gap-x-5 ">
<p>${item.category}</p>
<p>Author : ${item.author.name}</p>
</div>
<h5 class="mt-3 text-xl font-bold">${item.title}
</h5>

<p class="mt-4 text-base  sm:text-lg">${item.description}</p>
<hr class="border-dashed mt-5 bg-black">
<div class="flex justify-between mt-5">
<div class="flex items-center justify-start gap-x-6">
<div class="flex gap-x-1 items-center">
<i class="fa-regular fa-message"></i>
<p>${item.comment_count}</p>
</div>
<div class="flex gap-x-1 items-center">
<i class="fa-regular fa-eye"></i>
<p>${item.view_count}</p>
</div>
<div class="flex gap-x-1 items-center">
<i class="fa-regular fa-clock"></i>
<p>${item.posted_time} min</p>
</div>
</div>
<div>
<button onclick="addCartinSidebox('${item.title}','${
      item.view_count
    }')" id="btn">
<svg width="28" height="28" viewBox="0 0 28 28" fill="none"
xmlns="http://www.w3.org/2000/svg">
<g id="email 1" clip-path="url(#clip0_57_425)">
<g id="Group">
<g id="Group_2">
<path id="Vector"
d="M13.9998 0C6.26805 0 9.15527e-05 6.26814 9.15527e-05 13.9999C9.15527e-05 21.7314 6.26805 28 13.9998 28C21.7315 28 27.9999 21.7314 27.9999 13.9999C27.9999 6.26814 21.7315 0 13.9998 0ZM14 4.91741L22.2847 10.0835H5.71542L14 4.91741ZM22.3879 18.333H22.3871C22.3871 19.1616 21.7155 19.8331 20.887 19.8331H7.1131C6.28447 19.8331 5.61303 19.1615 5.61303 18.333V10.4122C5.61303 10.3245 5.62199 10.2393 5.63655 10.1556L13.552 15.0914C13.5617 15.0975 13.5721 15.1016 13.5821 15.1072C13.5925 15.113 13.6032 15.1186 13.6138 15.1239C13.6697 15.1527 13.7273 15.176 13.7862 15.1912C13.7923 15.1929 13.7983 15.1936 13.8044 15.195C13.869 15.2102 13.9344 15.2197 13.9998 15.2197H14.0002C14.0007 15.2197 14.0012 15.2197 14.0012 15.2197C14.0665 15.2197 14.1319 15.2105 14.1965 15.195C14.2026 15.1935 14.2086 15.1929 14.2147 15.1912C14.2735 15.176 14.3309 15.1527 14.3871 15.1239C14.3977 15.1186 14.4084 15.113 14.4188 15.1072C14.4287 15.1016 14.4392 15.0975 14.4489 15.0914L22.3644 10.1556C22.3789 10.2393 22.3879 10.3244 22.3879 10.4122V18.333Z"
fill="#10B981" />
</g>
</g>
</g>
<defs>
<clipPath id="clip0_57_425">
<rect width="28" height="28" fill="white" />
</clipPath>
</defs>
</svg>
</button>

</div>
</div>
</div>
</div>
</div>
    `;
    postCardBox.appendChild(newCards);
  }
  toggleloader(false);
}
// sidebox work
function addCartinSidebox(title, view) {
  // console.log(title, view)
  const sideBox = document.getElementById(`sideBox`);
  const miniCard = document.createElement(`div`);
  miniCard.innerHTML = `
<div class="flex justify-between bg-white rounded-lg p-4 mt-4">
<div>
<h3 class="font-semibold">${title}</h3>
</div>
<div class=" items-center gap-x-2 flex">
<i class="fa-regular fa-eye"></i>
<p>${view}</p>
</div>
</div>
  `;
  sideBox.appendChild(miniCard);
}

// searchbox work
const handleSearchBtn = () => {
  toggleloader(true);
  const inputFeild = document.getElementById(`input-feild`).value;
  // console.log(inputFeild)
  discussCards(`?category=${inputFeild}`);
};

// loader work
const toggleloader = (loading) => {
  const loader = document.getElementById(`loader`);
  if (loading) {
    loader.classList.remove(`hidden`);
  } else {
    loader.classList.add(`hidden`);
  }
};

// Latest Posts Section
const latestCard = () => {
  fetch(`https://openapi.programming-hero.com/api/retro-forum/latest-posts`)
    .then((response) => response.json())
    .then((result) => displayLatestPost(result));
};

function displayLatestPost(result) {
  // console.log(result);
  const latestPBox = document.getElementById(`latestpbox`);
  for (item of result) {
    const latestPCard = document.createElement(`div`);
    latestPCard.innerHTML = `
<div class="card bg-base-100 shadow-xl p-6" >
<figure class="">
<img src="${item.cover_image}"
class="rounded-xl" />
</figure>

<div class="">
<div class="flex justify-start gap-x-3 mt-6">
<svg width="24" height="24" viewBox="0 0 24 24" fill="none"
xmlns="http://www.w3.org/2000/svg">
<g id="Frame" clip-path="url(#clip0_29_1881)">
<path id="Vector"
d="M4 7C4 6.46957 4.21071 5.96086 4.58579 5.58579C4.96086 5.21071 5.46957 5 6 5H18C18.5304 5 19.0391 5.21071 19.4142 5.58579C19.7893 5.96086 20 6.46957 20 7V19C20 19.5304 19.7893 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 21 18 21H6C5.46957 21 4.96086 20.7893 4.58579 20.4142C4.21071 20.0391 4 19.5304 4 19V7Z"
stroke="#12132D" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round"
stroke-linejoin="round" />
<path id="Vector_2" d="M16 3V7" stroke="#12132D" stroke-opacity="0.6"
stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path id="Vector_3" d="M8 3V7" stroke="#12132D" stroke-opacity="0.6"
stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path id="Vector_4" d="M4 11H20" stroke="#12132D" stroke-opacity="0.6"
stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path id="Vector_5"
d="M11 16C11 16.2652 11.1054 16.5196 11.2929 16.7071C11.4804 16.8946 11.7348 17 12 17C12.2652 17 12.5196 16.8946 12.7071 16.7071C12.8946 16.5196 13 16.2652 13 16C13 15.7348 12.8946 15.4804 12.7071 15.2929C12.5196 15.1054 12.2652 15 12 15C11.7348 15 11.4804 15.1054 11.2929 15.2929C11.1054 15.4804 11 15.7348 11 16Z"
stroke="#12132D" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round"
stroke-linejoin="round" />
</g>
<defs>
<clipPath id="clip0_29_1881">
<rect width="24" height="24" fill="white" />
</clipPath>
</defs>
</svg>
<p>${
      item.author.hasOwnProperty(`posted_date`)
        ? `${item.author.posted_date}`
        : `Publish Date Not Found!`
    }</p>
</div>
<h2 class="text-xl font-extrabold mt-4">${item.title}</h2>
<p class="mt-3 text-[#12132D99]">Yes, you can run unit tests and view the results directly
within the app.</p>
<div class="flex items-center gap-x-3 mt-4">
<div class="w-10 ">
<img class="rounded-full"
src="${item.profile_image}" />
</div>
<div>
<h4 class="font-bold">${item.author.name}</h4>
<p>${item.author.hasOwnProperty(`designation`)? `${item.author.designation}` : `User Data Not Found`}</p>
</div>
</div>
</div>
</div>
    `;
    latestPBox.appendChild(latestPCard);
  }
}

// function call
discussCards();
latestCard();
