import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'


export default function Select() {
    return (
        <div className="text-right">
            <Menu>
                <MenuButton className="inline-flex items-center gap-2 rounded-3xl bg-secondary-700 px-5 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-700 data-open:bg-gray-700">
                    مرتب سازی
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>

                </MenuButton>

                <MenuItems
                    transition
                    anchor="bottom end"
                    className="w-52 origin-top-right rounded-xl border border-secondary-700 bg-secondary-700/80 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:--spacing(1)] focus:outline-none data-closed:scale-95 data-closed:opacity-0"
                >
                    <MenuItem>
                        <button className="group cursor-pointer flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10">
                            قدیمی ترین
                        </button>
                    </MenuItem>
                    <MenuItem>
                        <button className="group cursor-pointer flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10">
                            جدیدترین
                        </button>
                    </MenuItem>
                    <div className="my-1 h-px bg-secon text-secondary-700/5" />
                    {/* <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-secon text-secondary-400">
              Archive
            </button>
          </MenuItem>
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-secontext-secondary-700/10">
              Delete
            </button>
          </MenuItem> */}
                </MenuItems>
            </Menu>
        </div>
    )
}