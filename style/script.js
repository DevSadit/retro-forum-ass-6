// Lets discuss section

fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`)
  .then((res) => res.json())
  .then((data) => displayPost(data.posts));

function displayPost(data) {
  
//   console.log(data);
  const postCardBox = document.getElementById(`postCardBox`);

  // console.log(postCard)
  for (item of data) {
      console.log(item);
    const newCards = document.createElement(`div`);
    newCards.innerHTML = `
<div class=" p-10 bg-[#797dfc1a] border border-[#797DFC] rounded-lg shadow mt-6" >
<div class="flex gap-x-6">
<!-- indicator -->
<div class="indicator">
<span class="indicator-item badge bg-green-600"></span>
<div class="grid w-[70px] h-[70px] bg-base-300 place-items-center rounded-lg"><img class="rounded-lg" src="${item.image}"></div>
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
<button>
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
}
