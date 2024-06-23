'use client'
import Image from "next/image";
import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Transition,
} from '@headlessui/react'
import {
  Bars3Icon,
  CodeBracketSquareIcon,
  HandThumbUpIcon,
  UsersIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
export default function Header() {

    function classNames(...classes: string[]) {
        return classes.filter(Boolean).join(' ');
    }

    const products = [
        { name: 'Web Development', description: "Hire me as a Developer.", href: '#contact', icon: CodeBracketSquareIcon },
        { name: 'Consultant', description: 'Get my advise in your project.', href: '#contact', icon: HandThumbUpIcon },
        { name: 'Mentorship', description: 'Guidance, advice and feedback to grow.', href: '#contact', icon: UsersIcon },    ];
    
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className=" text-white border-b border-green-600 backdrop-blur-sm bg-black/30">
    <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div className="flex lg:flex-1">
        <a href="/" className="-m-1.5 p-1.5">
          <span className="sr-only">Your Contact</span>

          <div className="flex flex-row items-center">
            <Image
              src="/profile.png"
              alt="Profile Picture"
              width={38}
              height={38}
              className="rounded-full"
            />
            <h1 className="mx-2.5 text-3xl text-green-600 font-mono">
              Joel Dias Correia
            </h1>
          </div>
        </a>
      </div>
      <div className="flex lg:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <PopoverGroup className="hidden lg:flex lg:gap-x-12 flex flex-row items-center">
        <Popover className="relative">
          <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
            Services
            <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
          </PopoverButton>

          <Transition
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <PopoverPanel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl backdrop-blur-sm bg-black/30 shadow-lg ring-1 ring-gray-900/5">
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:border-indigo-600 hover:bg-black/40"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg group-hover:backdrop-blur-sm bg-black/30">
                      <item.icon className="h-6 w-6 text-gray-600 group-hover:text-green-600" aria-hidden="true" />
                    </div>
                    <div className="flex-auto">
                      <a href={item.href} className="block font-semibold text-green-600">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-white">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Transition>
        </Popover>

        <a href="#projects" className="text-sm font-semibold leading-6 text-white">
          Projects
        </a>
        <a href="#contact" className="p-1 px-5 bg-green-700 text-white rounded hover:bg-green-600 m-2.5">
          Get In Touch
        </a>
      </PopoverGroup>
    </nav>
    <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
      <div className="fixed inset-0 z-10" />
      <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto backdrop-blur-sm bg-black/30 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Contact</span>
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </a>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              <Disclosure as="div" className="-mx-3">
                {({ open }) => (
                  <>
                    <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white hover:bg-gray-50">
                      Services
                      <ChevronDownIcon
                        className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                        aria-hidden="true"
                      />
                    </DisclosureButton>
                  </>
                )}
              </Disclosure>
              <a
                href="#projects"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
  );
}
