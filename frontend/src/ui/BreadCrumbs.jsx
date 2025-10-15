import Link from 'next/link'
import React from 'react'

function BreadCrumbs({ breadCrumbs }) {
    return (
        <nav>
            <ol className='flex items-center gap-2'>
                {
                    breadCrumbs.map((breadCrumb,index) => (
                        <li 
                        key={`${breadCrumb.id},${index}`} 
                        className={`font-medium
                        ${breadCrumb.active && '!text-primary-800'} text-secondary-500
                        `}>
                            <Link href={breadCrumb.href} className='pl-1'>
                                {breadCrumb.title}
                            </Link>
                            {
                                index < breadCrumbs.length-1 ? <span>/</span> :null
                            }
                           
                        </li>

                    ))
                }

            </ol>
        </nav>
    )
}

export default BreadCrumbs
