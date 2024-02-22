'use client';

import { useState, useEffect } from 'react';

async function fetchNews() {
  var url = 'https://newsapi.org/v2/everything?q=bitcoin&apiKey=35231071644b454fb71a281d9aff7ec0';
  var req = new Request(url);
  const response = await fetch(req);

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await response.json();
  return data.articles;
}


export default function Home() {

  const [newsState, setNewsState] = useState([]);

  const intiNews = async () => {
    try{
      const result = await fetchNews()
      setNewsState(result);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  
  };

  useEffect(() => {
    intiNews();
  }, []);

  return (
    <div className="flex flex-col items-center bg-stone-50">
      <div className="text-4xl font-extrabold tracking-tighter leading-[50.4px] text-zinc-900 max-md:max-w-full">
        News & Blogs
      </div>
      <div className="flex gap-4 px-5 mt-6 w-full max-w-[1200px] max-md:flex-wrap max-md:max-w-full" />
      <div className="box-border flex relative flex-col shrink-0 mt-5 -mb-0.5">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
            <button
              className="box-border relative shrink-0 px-6 py-4 mt-5 text-center rounded appearance-none cursor-pointer bg-[white] text-[black]"
              openLinkInNewTab={false}
            >
              New
            </button>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <button
              className="box-border relative shrink-0 px-6 py-4 mt-5 text-center rounded appearance-none cursor-pointer bg-[white] text-[black]"
              openLinkInNewTab={false}
            >
              Popular
            </button>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <button
              className="box-border relative shrink-0 px-6 py-4 mt-5 text-center rounded appearance-none cursor-pointer bg-[white] text-[black]"
              openLinkInNewTab={false}
            >
              Home
            </button>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <button
              className="box-border relative shrink-0 px-6 py-4 mt-5 text-center rounded appearance-none cursor-pointer bg-[white] text-[black]"
              openLinkInNewTab={false}
            >
              Business
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {newsState.map((news) => (
            <article key={news.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <p className="font-semibold text-gray-900">
                  {new Date(news.publishedAt).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}  
                </p>
                <p className="text-gray-600">{news.source.name}</p>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={news.url}>
                    <span className="absolute inset-0" />
                    {news.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img src={news.urlToImage} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                      <span className="absolute inset-0" />
                      {}
                  </p>
                  <p className="text-gray-600">{news.author}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
            
      <div className="flex gap-5 justify-between mt-16 w-full text-base font-semibold leading-4 whitespace-nowrap max-w-[1200px] text-zinc-900 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-1.5 px-5 text-center">
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
    </div>
  );
}