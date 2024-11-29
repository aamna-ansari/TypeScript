
import './App.css'

function App() {

  return (
    <>
  <header className="bg-white">
    <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
     <div className="flex lg:flex-1">
      <a href="#" className="-m-1.5 p-1.5">
        <span className="sr-only">iCodeGuru</span>
        <img className="h-9 w-auto" src='/public/icodeguru.png' alt="icodeguru"/>
      </a>
    </div>
  </nav>
</header>

<div className="bg-white py-24 sm:py-32">
  <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
  <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
      <li>
        <div className="flex items-center gap-x-4">
          <img className="size-16 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
          <div>
            <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">Leslie Alexander</h3>
            <p className="text-sm/6 font-semibold text-indigo-600">Co-Founder / CEO</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>

<div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
  <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
    <div className="relative rounded-3xl bg-gray-900 p-8 shadow-2xl ring-1 ring-gray-900/10 sm:p-10">
      <h3 id="tier-enterprise" className="text-base/7 font-semibold text-indigo-400">Enterprise</h3>
      <p className="mt-4 flex items-baseline gap-x-2">
        <span className="text-5xl font-semibold tracking-tight text-white">$99</span>
        <span className="text-base text-gray-400">/month</span>
      </p>
      <p className="mt-6 text-base/7 text-gray-300">Dedicated support and infrastructure for your company.</p>
      <ul role="list" className="mt-8 space-y-3 text-sm/6 text-gray-300 sm:mt-10">
        <li className="flex gap-x-3">
          <svg className="h-6 w-5 flex-none text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
            <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
          </svg>
          Unlimited products
        </li>
        <li className="flex gap-x-3">
          <svg className="h-6 w-5 flex-none text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
            <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
          </svg>
          Unlimited subscribers
        </li>
        <li className="flex gap-x-3">
          <svg className="h-6 w-5 flex-none text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
            <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
          </svg>
          Advanced analytics
        </li>
        <li className="flex gap-x-3">
          <svg className="h-6 w-5 flex-none text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
            <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
          </svg>
          Dedicated support representative
        </li>
        <li className="flex gap-x-3">
          <svg className="h-6 w-5 flex-none text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
            <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
          </svg>
          Marketing automations
        </li>
        <li className="flex gap-x-3">
          <svg className="h-6 w-5 flex-none text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
            <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
          </svg>
          Custom integrations
        </li>
      </ul>
      <a href="#" aria-describedby="tier-enterprise" className="mt-8 block rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 sm:mt-10">Get started today</a>
    </div>
  </div>
</div>



    </>
  )
}

export default App
