export default function Home() {
  return (
    <div className="flex flex-col items-center bg-stone-50">
      <div className="flex justify-center items-center self-stretch px-16 py-5 w-full bg-white leading-[100%] max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between w-full max-w-[1200px] max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-3 self-start text-xl leading-9 text-orange-500 whitespace-nowrap">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 aspect-square">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
            </svg>
            <div className="grow my-auto">Pantip</div>
          </div>
          <div className="flex gap-5 justify-between my-auto text-base font-semibold text-zinc-900 max-md:flex-wrap max-md:max-w-full">
            <div className="flex gap-1.5 justify-between pr-2.5 whitespace-nowrap">
              <div className="grow">Home</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/febe69d483a189b6649ce1be5568820d4d6b0de0a69374c22f876d3d721cb0c8?apiKey=78c7fb9d83a0466188b9e9101e1fac29&"
                className="w-4 aspect-square"
              />
            </div>
            <div className="flex gap-1.5 justify-between px-0.5 whitespace-nowrap">
              <div className="grow">Listing</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c89cace0e1b940175bb880ff63d1db0d3b4f50891a61a398229ac73b83366cb7?apiKey=78c7fb9d83a0466188b9e9101e1fac29&"
                className="w-4 aspect-square"
              />
            </div>
            <div className="flex gap-1.5 justify-between whitespace-nowrap">
              <div className="grow">Agents</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c89cace0e1b940175bb880ff63d1db0d3b4f50891a61a398229ac73b83366cb7?apiKey=78c7fb9d83a0466188b9e9101e1fac29&"
                className="w-4 aspect-square"
              />
            </div>
            <div className="text-center">Property </div>
            <div>Blog</div>
          </div>
          <div className="flex gap-5 justify-between whitespace-nowrap">
            <div className="flex gap-2 my-auto text-lg font-bold text-zinc-900">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7cf7513faa674b616625bf65531ba5fe5791e7bb8c68b150a70d7679dc7a4864?apiKey=78c7fb9d83a0466188b9e9101e1fac29&"
                className="w-6 aspect-square"
              />
              <div className="grow my-auto">Search</div>
            </div>
            <div className="grow justify-center px-6 py-3.5 text-base font-semibold text-center text-white rounded-xl bg-zinc-900 max-md:px-5">
              Log in
            </div>
          </div>
        </div>
      </div>
      <div className="text-4xl font-extrabold tracking-tighter leading-[50.4px] text-zinc-900 max-md:max-w-full">
        Real Estate News & Blogs
      </div>
      <div className="flex gap-4 px-5 mt-6 w-full max-w-[1200px] max-md:flex-wrap max-md:max-w-full" />
      <div className="box-border flex relative flex-col shrink-0 mt-5 -mb-0.5">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
            <button
              className="box-border relative shrink-0 px-6 py-4 mt-5 text-center rounded appearance-none cursor-pointer bg-[black] text-[white]"
              openLinkInNewTab={false}
            >
              Click me!
            </button>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <button
              className="box-border relative shrink-0 px-6 py-4 mt-5 text-center rounded appearance-none cursor-pointer bg-[black] text-[white]"
              openLinkInNewTab={false}
            >
              Click me!
            </button>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <button
              className="box-border relative shrink-0 px-6 py-4 mt-5 text-center rounded appearance-none cursor-pointer bg-[black] text-[white]"
              openLinkInNewTab={false}
            >
              Click me!
            </button>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <button
              className="box-border relative shrink-0 px-6 py-4 mt-5 text-center rounded appearance-none cursor-pointer bg-[black] text-[white]"
              openLinkInNewTab={false}
            >
              Click me!
            </button>
          </div>
        </div>
      </div>
      <div className="px-5 mt-16 w-full max-w-[1200px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow font-semibold leading-[160%] text-zinc-900 max-md:mt-6">
              <div className="shrink-0 rounded-lg bg-zinc-300 h-[350px]" />
              <div className="justify-center self-start px-3.5 py-2 mt-3 text-sm whitespace-nowrap rounded-xl border border-solid border-zinc-300">
                Business
              </div>
              <div className="mt-2 text-2xl font-bold tracking-tight leading-8">
                10 Delightful Dining Room Decor Trends for Spring
              </div>
              <div className="flex gap-5 justify-between mt-4 text-xs text-neutral-500">
                <div className="grow justify-center py-1 pr-1 pl-3">
                  July 20, 2022
                </div>
                <div className="grow justify-center px-3 py-1.5">
                  7 min read
                </div>
              </div>
              <div className="flex gap-2 justify-between pr-7 mt-6 text-lg font-bold leading-5 text-neutral-500 max-md:pr-5">
                <div className="flex-auto my-auto">Continue Reading</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/aab705261f7be112ef27b74deb6e70d656026cbfa4991ae904d7c75093d2e799?apiKey=78c7fb9d83a0466188b9e9101e1fac29&"
                  className="w-6 aspect-square"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow font-semibold leading-[160%] text-zinc-900 max-md:mt-6">
              <div className="shrink-0 rounded-lg bg-zinc-300 h-[350px]" />
              <div className="justify-center self-start px-3.5 py-2 mt-3 text-sm whitespace-nowrap rounded-xl border border-solid border-zinc-300">
                Business
              </div>
              <div className="mt-2 text-2xl font-bold tracking-tight leading-8">
                10 Delightful Dining Room Decor Trends for Spring
              </div>
              <div className="flex gap-5 justify-between mt-4 text-xs text-neutral-500">
                <div className="grow justify-center py-1 pr-1 pl-3">
                  July 20, 2022
                </div>
                <div className="grow justify-center px-3 py-1.5">
                  7 min read
                </div>
              </div>
              <div className="flex gap-2 justify-between pr-7 mt-6 text-lg font-bold leading-5 text-neutral-500 max-md:pr-5">
                <div className="flex-auto my-auto">Continue Reading</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/aab705261f7be112ef27b74deb6e70d656026cbfa4991ae904d7c75093d2e799?apiKey=78c7fb9d83a0466188b9e9101e1fac29&"
                  className="w-6 aspect-square"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow font-semibold leading-[160%] text-zinc-900 max-md:mt-6">
              <div className="shrink-0 rounded-lg bg-zinc-300 h-[350px]" />
              <div className="justify-center self-start px-3.5 py-2 mt-3 text-sm whitespace-nowrap rounded-xl border border-solid border-zinc-300">
                Business
              </div>
              <div className="mt-2 text-2xl font-bold tracking-tight leading-8">
                10 Delightful Dining Room Decor Trends for Spring
              </div>
              <div className="flex gap-5 justify-between mt-4 text-xs text-neutral-500">
                <div className="grow justify-center py-1 pr-1 pl-3">
                  July 20, 2022
                </div>
                <div className="grow justify-center px-3 py-1.5">
                  7 min read
                </div>
              </div>
              <div className="flex gap-2 justify-between pr-7 mt-6 text-lg font-bold leading-5 text-neutral-500 max-md:pr-5">
                <div className="flex-auto my-auto">Continue Reading</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/aab705261f7be112ef27b74deb6e70d656026cbfa4991ae904d7c75093d2e799?apiKey=78c7fb9d83a0466188b9e9101e1fac29&"
                  className="w-6 aspect-square"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-5 mt-8 w-full max-w-[1200px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow font-semibold leading-[160%] text-zinc-900 max-md:mt-6">
              <div className="shrink-0 rounded-lg bg-zinc-300 h-[350px]" />
              <div className="justify-center self-start px-3.5 py-2 mt-3 text-sm whitespace-nowrap rounded-xl border border-solid border-zinc-300">
                Business
              </div>
              <div className="mt-2 text-2xl font-bold tracking-tight leading-8">
                10 Delightful Dining Room Decor Trends for Spring
              </div>
              <div className="flex gap-5 justify-between mt-4 text-xs text-neutral-500">
                <div className="grow justify-center py-1 pr-1 pl-3">
                  July 20, 2022
                </div>
                <div className="grow justify-center px-3 py-1.5">
                  7 min read
                </div>
              </div>
              <div className="flex gap-2 justify-between pr-7 mt-6 text-lg font-bold leading-5 text-neutral-500 max-md:pr-5">
                <div className="flex-auto my-auto">Continue Reading</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4388d4d519ce1573d7f64c87454edd9005b38af7c51e8a7e1c94f0a23e70808a?apiKey=78c7fb9d83a0466188b9e9101e1fac29&"
                  className="w-6 aspect-square"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow font-semibold leading-[160%] text-zinc-900 max-md:mt-6">
              <div className="shrink-0 rounded-lg bg-zinc-300 h-[350px]" />
              <div className="justify-center self-start px-3.5 py-2 mt-3 text-sm whitespace-nowrap rounded-xl border border-solid border-zinc-300">
                Business
              </div>
              <div className="mt-2 text-2xl font-bold tracking-tight leading-8">
                10 Delightful Dining Room Decor Trends for Spring
              </div>
              <div className="flex gap-5 justify-between mt-4 text-xs text-neutral-500">
                <div className="grow justify-center py-1 pr-1 pl-3">
                  July 20, 2022
                </div>
                <div className="grow justify-center px-3 py-1.5">
                  7 min read
                </div>
              </div>
              <div className="flex gap-2 justify-between pr-7 mt-6 text-lg font-bold leading-5 text-neutral-500 max-md:pr-5">
                <div className="flex-auto my-auto">Continue Reading</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4388d4d519ce1573d7f64c87454edd9005b38af7c51e8a7e1c94f0a23e70808a?apiKey=78c7fb9d83a0466188b9e9101e1fac29&"
                  className="w-6 aspect-square"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow font-semibold leading-[160%] text-zinc-900 max-md:mt-6">
              <div className="shrink-0 rounded-lg bg-zinc-300 h-[350px]" />
              <div className="justify-center self-start px-3.5 py-2 mt-3 text-sm whitespace-nowrap rounded-xl border border-solid border-zinc-300">
                Business
              </div>
              <div className="mt-2 text-2xl font-bold tracking-tight leading-8">
                10 Delightful Dining Room Decor Trends for Spring
              </div>
              <div className="flex gap-5 justify-between mt-4 text-xs text-neutral-500">
                <div className="grow justify-center py-1 pr-1 pl-3">
                  July 20, 2022
                </div>
                <div className="grow justify-center px-3 py-1.5">
                  7 min read
                </div>
              </div>
              <div className="flex gap-2 justify-between pr-7 mt-6 text-lg font-bold leading-5 text-neutral-500 max-md:pr-5">
                <div className="flex-auto my-auto">Continue Reading</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4388d4d519ce1573d7f64c87454edd9005b38af7c51e8a7e1c94f0a23e70808a?apiKey=78c7fb9d83a0466188b9e9101e1fac29&"
                  className="w-6 aspect-square"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-5 mt-8 w-full max-w-[1200px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow font-semibold leading-[160%] text-zinc-900 max-md:mt-6">
              <div className="shrink-0 rounded-lg bg-zinc-300 h-[350px]" />
              <div className="justify-center self-start px-3.5 py-2 mt-3 text-sm whitespace-nowrap rounded-xl border border-solid border-zinc-300">
                Business
              </div>
              <div className="mt-2 text-2xl font-bold tracking-tight leading-8">
                10 Delightful Dining Room Decor Trends for Spring
              </div>
              <div className="flex gap-5 justify-between mt-4 text-xs text-neutral-500">
                <div className="grow justify-center py-1 pr-1 pl-3">
                  July 20, 2022
                </div>
                <div className="grow justify-center px-3 py-1.5">
                  7 min read
                </div>
              </div>
              <div className="flex gap-2 justify-between pr-7 mt-6 text-lg font-bold leading-5 text-neutral-500 max-md:pr-5">
                <div className="flex-auto my-auto">Continue Reading</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4388d4d519ce1573d7f64c87454edd9005b38af7c51e8a7e1c94f0a23e70808a?apiKey=78c7fb9d83a0466188b9e9101e1fac29&"
                  className="w-6 aspect-square"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow font-semibold leading-[160%] text-zinc-900 max-md:mt-6">
              <div className="shrink-0 rounded-lg bg-zinc-300 h-[350px]" />
              <div className="justify-center self-start px-3.5 py-2 mt-3 text-sm whitespace-nowrap rounded-xl border border-solid border-zinc-300">
                Business
              </div>
              <div className="mt-2 text-2xl font-bold tracking-tight leading-8">
                10 Delightful Dining Room Decor Trends for Spring
              </div>
              <div className="flex gap-5 justify-between mt-4 text-xs text-neutral-500">
                <div className="grow justify-center py-1 pr-1 pl-3">
                  July 20, 2022
                </div>
                <div className="grow justify-center px-3 py-1.5">
                  7 min read
                </div>
              </div>
              <div className="flex gap-2 justify-between pr-7 mt-6 text-lg font-bold leading-5 text-neutral-500 max-md:pr-5">
                <div className="flex-auto my-auto">Continue Reading</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4388d4d519ce1573d7f64c87454edd9005b38af7c51e8a7e1c94f0a23e70808a?apiKey=78c7fb9d83a0466188b9e9101e1fac29&"
                  className="w-6 aspect-square"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow font-semibold leading-[160%] text-zinc-900 max-md:mt-6">
              <div className="shrink-0 rounded-lg bg-zinc-300 h-[350px]" />
              <div className="justify-center self-start px-3.5 py-2 mt-3 text-sm whitespace-nowrap rounded-xl border border-solid border-zinc-300">
                Business
              </div>
              <div className="mt-2 text-2xl font-bold tracking-tight leading-8">
                10 Delightful Dining Room Decor Trends for Spring
              </div>
              <div className="flex gap-5 justify-between mt-4 text-xs text-neutral-500">
                <div className="grow justify-center py-1 pr-1 pl-3">
                  July 20, 2022
                </div>
                <div className="grow justify-center px-3 py-1.5">
                  7 min read
                </div>
              </div>
              <div className="flex gap-2 justify-between pr-7 mt-6 text-lg font-bold leading-5 text-neutral-500 max-md:pr-5">
                <div className="flex-auto my-auto">Continue Reading</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4388d4d519ce1573d7f64c87454edd9005b38af7c51e8a7e1c94f0a23e70808a?apiKey=78c7fb9d83a0466188b9e9101e1fac29&"
                  className="w-6 aspect-square"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-5 justify-between mt-16 w-full text-base font-semibold leading-4 whitespace-nowrap max-w-[1200px] text-zinc-900 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-1.5 px-5 text-center">
          <div className="justify-center items-center px-5 h-12 rounded-xl border border-solid aspect-square border-zinc-600 max-md:pl-5">
            1
          </div>
          <div className="justify-center items-center px-5 h-12 rounded-xl border border-solid aspect-square border-stone-300">
            2
          </div>
          <div className="justify-center items-center px-5 h-12 rounded-xl border border-solid aspect-square border-stone-300">
            3
          </div>
          <div className="justify-center items-center px-5 h-12 rounded-xl border border-solid aspect-square border-stone-300">
            4
          </div>
          <div className="justify-center items-center px-5 h-12 rounded-xl border border-solid aspect-square border-stone-300">
            5
          </div>
        </div>
        <div className="flex flex-col justify-center px-5 py-4 rounded-xl border border-solid border-stone-300">
          <div className="flex gap-1 justify-between">
            <div className="grow">Next Page</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/89e8a062016a6f9a9318a1ac5692f7adca2f570b52e435fe3c5f2cfc1130551d?apiKey=78c7fb9d83a0466188b9e9101e1fac29&"
              className="w-4 aspect-square"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center self-stretch px-20 py-12 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="mx-10 mt-8 max-md:mr-2.5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-[28%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow">
                <div className="flex gap-3 justify-between text-xl leading-9 text-orange-500 whitespace-nowrap">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 aspect-square">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                  </svg>
                  <div className="grow my-auto">Pantip</div>
                </div>
                <div className="mt-11 text-base font-semibold leading-7 text-zinc-900 max-md:mt-10">
                  59 Bervely Hill Ave, Brooklyn Town,
                  <br />
                  New York, NY 5630, CA, US
                </div>
                <div className="self-start mt-7 text-base font-semibold leading-6 whitespace-nowrap text-zinc-900">
                  +(123) 456-7890
                </div>
                <div className="self-start mt-1 text-base font-semibold leading-6 text-zinc-900">
                  info@mail.com
                </div>
                <div className="flex gap-3 pr-20 mt-7 max-md:pr-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd51f2a91d57f2ae9f2c5ee032a6f40d0ca74c88195c386652d33018ad5c8ef3?apiKey=78c7fb9d83a0466188b9e9101e1fac29&"
                    className="aspect-[1.15] w-[30px]"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/de32339d30796e3c1c210fcbed09fa69506d5cef352e56d4172ca745f4581c66?apiKey=78c7fb9d83a0466188b9e9101e1fac29&"
                    className="aspect-[1.15] w-[30px]"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d1e780181a3b7963b92202242b55a1caacd21e4e9b1be0d5e03e0cb5cc8d767?apiKey=78c7fb9d83a0466188b9e9101e1fac29&"
                    className="aspect-[1.15] w-[30px]"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/cdb50c3c9bfb825bcfa850ce3af48ac7de16ec63f6b0ba43dff482ce751b3bbd?apiKey=78c7fb9d83a0466188b9e9101e1fac29&"
                    className="aspect-[1.15] w-[30px]"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/77a908d3b594339c77d15639386d9b880a79dbbae6fd10e9aae6cbfb9ead4dcc?apiKey=78c7fb9d83a0466188b9e9101e1fac29&"
                    className="aspect-[1.15] w-[30px]"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[72%] max-md:ml-0 max-md:w-full">
              <div className="self-stretch my-auto max-md:mt-8 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                  <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow text-base font-semibold leading-6 whitespace-nowrap text-zinc-900 max-md:mt-10">
                      <div className="text-lg font-bold leading-5">
                        Features
                      </div>
                      <div className="mt-5">Home v1</div>
                      <div className="mt-3.5">Home v2</div>
                      <div className="mt-3.5">About</div>
                      <div className="mt-3.5">Contact</div>
                      <div className="mt-3.5">Search</div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow text-base font-semibold leading-6 whitespace-nowrap text-zinc-900 max-md:mt-10">
                      <div className="text-lg font-bold leading-5">
                        Information
                      </div>
                      <div className="mt-5">Listing v1</div>
                      <div className="mt-3.5">Listing v2</div>
                      <div className="mt-3.5">Property Details</div>
                      <div className="mt-3.5">Agent List</div>
                      <div className="mt-3.5">Agent Profile</div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col text-base font-semibold leading-6 text-zinc-900 max-md:mt-10">
                      <div className="text-lg font-bold leading-5">
                        Documentation{" "}
                      </div>
                      <div className="mt-5">Blog</div>
                      <div className="mt-3.5">FAQ</div>
                      <div className="mt-3.5 whitespace-nowrap">
                        Privacy Policy
                      </div>
                      <div className="mt-3.5">License</div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow text-base font-semibold leading-6 whitespace-nowrap text-zinc-900 max-md:mt-10">
                      <div className="text-lg font-bold leading-5">Others</div>
                      <div className="mt-5">Log in</div>
                      <div className="mt-3.5">Enter OTP</div>
                      <div className="mt-3.5">New Password</div>
                      <div className="mt-3.5">Reset Password</div>
                      <div className="mt-3.5">Create Account</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-10 mt-32 mb-8 text-base font-semibold leading-4 text-zinc-900 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
          © 2022. All rights reserved.
        </div>
      </div>
    </div>
  );
}