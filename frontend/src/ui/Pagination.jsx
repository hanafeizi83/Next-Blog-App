'use client'
import generatePagination from '@/utils/generatePagination';
import classNames from 'classnames';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation'
import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


function Pagination({ totalPages }) {
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;
  const itemsPerPage = Number(searchParams.get('limit')) || 6;
  const pathname = usePathname();


  const createPageUrl = (pageNumber) => {
    const params = new URLSearchParams(searchParams);
    const page = params.set('page', pageNumber.toString());
    const limit = params.set('limit', itemsPerPage.toString());
    return `${pathname}?${params.toString()}`

  }
  const allPages = generatePagination(totalPages, currentPage);
  return (
    <div className='flex items-center gap-1'>
      <PaginationArrow
        direction={'right'}
        href={createPageUrl(currentPage - 1)}
        isDisable={currentPage <= 1}
      />
      {
        allPages.map((page, index) => (
          <PaginationNumber
            key={page + index}
            page={page}
            href={createPageUrl(page)}
            isActive={page === currentPage} />
        ))
      }
      <PaginationArrow
        direction={'left'}
        href={createPageUrl(currentPage + 1)}
        isDisable={currentPage >= totalPages}
      />
    </div>
  )
}

export default Pagination

function PaginationNumber({ page, isActive, href }) {
  const className = classNames(
    'w-9 h-9 font-medium rounded-full border border-secondary-400 text-secondary-400 flex items-center justify-center transition-all duration-300  cursor-pointer', {
    '!text-secondary-0 bg-primary-800 !border-primary-800': isActive,
    'hover:!text-secondary-0 hover:bg-primary-800 hover:border-primary-800': !isActive
  })

  return isActive ?
    <div className={className}>{page}</div> :
    <Link className={className} href={href}>{page}</Link>

}

function PaginationArrow({ href, direction, isDisable }) {
  const className = classNames(
    `w-9 h-9 rounded-full font-medium  border border-secondary-400 text-secondary-400 flex items-center justify-center transition-all duration-300 cursor-pointer`, {
    'hover:!text-secondary-0 hover:bg-primary-800 hover:border-primary-800': !isDisable,
    'bg-secondary-200': isDisable
  }

  )

  const icon = direction === 'left' ?
    <IoIosArrowBack className='w-5 h-5' /> :
    <IoIosArrowForward className='w-5 h-5' />


  return isDisable ? <div className={className}>{icon}</div> :
    <Link className={className} href={href}>{icon}</Link>

}