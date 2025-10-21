import Avatar from "@/ui/Avatar";
import Button from "@/ui/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div className='w-full lg:h-[calc(100vh-6rem)] '>
    <div className='h-full bg-[url(/images/world.png)] bg-no-repeat bg-cover  grid grid-cols-1 grid-rows-2 lg:grid-rows-1 lg:grid-cols-[1fr_35rem] gap-6 '>
      <div className='col-span-1 grid grid-cols-2 grid-rows-2 gap-3 row-start-2 lg:row-start-1'>
        <div className='col-span-1 row-span-2 h-full w-full overflow-hidden  content-center'>
          <Avatar
            src={'/images/home 2.jpg'}
            alt='home'
            className={{ height: '80%', width: '100%', borderRadius: '1rem' }}
          />
        </div>
        <div className='col-span-1 row-start-1  h-full overflow-hidden'>
          <Avatar
            src={'/images/home 3.jpg'}
            alt='home'
            className={{ height: '100%', width: '100%', borderRadius: '1rem' }}
          />
        </div>
        <div className='col-span-1 row-start-2  h-full overflow-hidden'>
          <Avatar
            src={'/images/home 1.jpg'}
            alt='home'
            className={{ height: '100%', width: '100%', borderRadius: '1rem' }}
          />
        </div>
      </div>
      <div className='col-span-1 space-y-10 content-center'>
        <h1 className='text-secondary-900 font-bold text-6xl leading-20'>
          سایت مدیریت و<br /> مطالعه
          <span className='text-primary-800'> بلاگ ها</span>
        </h1>
        <p className='font-medium text-secondary-600'>
          در اینجا، شما می‌توانید جدیدترین مقالات، نکات و مطالب مفید در زمینه‌های مختلف را
          پیدا کنید. هدف ما ارائه محتواهای ارزشمند و جذاب است تا همراه هم مسیر یادگیری و رشد را طی کنیم.
          <br />
          با ما همراه باشید و از مطالب متنوع و کاربردی بهره‌مند شوید!
        </p>
        <div className='space-x-4'>
          <Button className='rounded-lg !py-3 !px-6'>
            <Link href='/blogs'>مطالعه بلاگ ها</Link>
          </Button>
          <Button className='rounded-lg !py-3 !px-6' variant='secondary'>
          <Link href='/profile'>مدیریت بلاگ ها</Link>
          </Button>

        </div>
      </div>

    </div>
  </div>
  );
}
