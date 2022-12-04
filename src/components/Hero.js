export default function Example() {
  return (
    <div className="isolate bg-white dark:bg-black h-full">
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
            <div>
              <div>
                <h1 className="text-4xl dark:text-white font-bold tracking-tight text-center sm:text-6xl">
                  Post.news.stats
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600 text-center dark:text-white">
                  A collection of interesting stats from Post.news. Manual, pending the release of the Post. API.
                </p>
                <div class="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 m-10 gap-4 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <h2 class="col-span-full text-3xl dark:text-white font-bold tracking-tight text-center sm:text-4xl">User stats</h2>
                  <div class="col-span-1 flex flex-col p-4">
                    <p class="mb-2 text-2xl tracking-tight text-gray-900 dark:text-white text-center">Users on the waitlist:</p>
                    <p class="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white text-center">~370,000</p>
                  </div>
                  <div class="col-span-1 flex flex-col p-4">
                    <p class="mb-2 text-2xl tracking-tight text-gray-900 dark:text-white text-center">Users on the platform:</p>
                    <p class="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white text-center">~100,000</p>
                  </div>
                </div>
                <div class="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 m-10 gap-4 bg-transparent border border-gray-200 rounded-lg shadow-md dark:bg-transparent dark:border-gray-700">
                  <h2 class="col-span-full text-3xl dark:text-white font-bold tracking-tight text-center sm:text-4xl">Post stats</h2>
                  <div class="col-span-1 flex flex-col p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">The first Post:</h5>
                    <div class="w-full p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                      <a href="https://post.news/article/2HJTNS65rT5fO9Mo2OWfSV90w2o" target="_blank" rel="noreferrer">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Hello World</h5>
                      </a>
                      <div class="mt-8 flex grid-cols-1 gap-6 sm:grid-cols-4">
                        <p class="w-full mb-3 font-light text-gray-500 dark:text-gray-400 sm:text-center"><svg class="w-6 h-6 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path></svg></p>
                        <p class="w-full mb-3 font-light text-gray-500 dark:text-gray-400 sm:text-center"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg></p>
                        <p class="w-full mb-3 font-light text-gray-500 dark:text-gray-400 sm:text-center"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></p>
                        <p class="w-full mb-3 font-light text-gray-500 dark:text-gray-400 sm:text-center"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg></p>
                      </div>
                      <a href="https://post.news/article/2HJTNS65rT5fO9Mo2OWfSV90w2o" target="_blank" rel="noreferrer" class="mt-8 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-post-blue rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-post-blue dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        View on Post.
                        <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      </a>
                    </div>
                  </div>
                  <div class="col-span-1 flex flex-col p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">The most viral Post:</h5>
                    <div class="w-full p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                      <a href="https://post.news/article/2I6dqgdsZbWh0df2UyfF7I17oUE" target="_blank" rel="noreferrer">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Can y’all repost this post to let folks know I’m on this dohicky?</h5>
                      </a>
                      <div class="mt-8 flex grid-cols-1 gap-6 sm:grid-cols-4">
                        <p class="w-full mb-3 font-light text-gray-500 dark:text-gray-400 sm:text-center"><svg class="w-6 h-6 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path></svg></p>
                        <p class="w-full mb-3 font-light text-gray-500 dark:text-gray-400 sm:text-center"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg></p>
                        <p class="w-full mb-3 font-light text-gray-500 dark:text-gray-400 sm:text-center"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></p>
                        <p class="w-full mb-3 font-light text-gray-500 dark:text-gray-400 sm:text-center"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg></p>
                      </div>
                      <a href="https://post.news/article/2I6dqgdsZbWh0df2UyfF7I17oUE" target="_blank" rel="noreferrer" class="mt-8 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-post-blue rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-post-blue dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        View on Post.
                        <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 m-10 gap-4 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <h2 class="col-span-full text-3xl dark:text-white font-bold tracking-tight text-center sm:text-4xl">About Post.</h2>
                  <p class="dark:text-white text-center col-span-full">Post. was co-founded in May 2022 by Noam Bardin & Noel Baron with the goal of creating a social platform for real peopkle, real news, and civil conversations.</p>
                  <div class="col-span-1 flex flex-col p-4">
                    <p class="mb-2 text-2xl tracking-tight text-gray-900 dark:text-white text-center">Staff</p>
                    <p class="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white text-center">18</p>
                  </div>
                  <div class="col-span-1 flex flex-col p-4">
                    <p class="mb-2 text-2xl tracking-tight text-gray-900 dark:text-white text-center">HQ</p>
                    <p class="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white text-center">New York, New York</p>
                  </div>
                </div>
                <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-white text-center">
                  Created by <a href="https://joshspires.com.au" target="_blank" rel="noreferrer">Joshua Spires</a>. Not affiliated with Post.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}