'use client';
import Button from "@/ui/Button"
import TextFeiled from "@/ui/TextFeiled"
import Image from "next/image"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import toast from "react-hot-toast";
import { signinApi } from "@/services/authServices"

const schema = yup.object({
  email: yup.string().email('ایمیل نامعتبر است').required('ایمیل الزامی است'),
  password: yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, 'رمز عبور باید از 8 کاراکتر بیشتر و دارای حروف بزرگ ,کوچک ,و کاراکتر خاص باشد').required('رمز عبور الزامی است')
})

function SigninPage() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = async (values) => {
    try {
      const { message } = await signinApi(values);
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }

  }
  return (
    <div className="w-full">
      <div className="container grid md:grid-cols-2 grid-cols-1 items-center justify-center h-screen">
        <div className="col-span-1">
          <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto space-y-5" >
            <h2 className="text-secondary-900 text-2xl font-medium mb-4 mx-auto">ورود به حساب</h2>
            <TextFeiled
              name='email'
              register={register}
              label='ایمیل'
              type="email"
              dir="ltr"
              errors={errors}
            />
            <TextFeiled
              name='password'
              register={register}
              type="password"
              label='رمز عبور'
              errors={errors}
            />
            <Button className='w-full rounded-lg !py-2.5'>
              ورود
            </Button>
            <p className="space-x-2 text-secondary-500 flex items-center">
              حساب کاربری ندارید ؟
              <Link href='/signup' className="text-primary-900 mr-2">ثبت نام</Link>
            </p>
          </form>
        </div>
        <div className="col-span-1 h-full overflow-hidden relative md:flex hidden">
          <Image
            src='/images/login.svg'
            alt='login image'
            fill
          />
        </div>
      </div>
    </div>
  )
}

export default SigninPage
