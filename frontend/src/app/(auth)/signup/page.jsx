"use client";
import Button from "@/ui/Button";
import TextFeiled from "@/ui/TextFeiled";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import { signupApi } from "@/services/authServices";
import toast from "react-hot-toast";
import { useAuth } from "context/AuthContext";

const schema = yup.object({
  name: yup.string().required('نام کاربری الزامی است'),
  email: yup.string().email('ایمیل نامعتبر است').required('ایمیل الزامی است'),
  password: yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, 'رمز عبور باید از 8 کاراکتر بیشتر و دارای حروف بزرگ ,کوچک ,و کاراکتر خاص باشد').required('رمز عبور الزامی است')
})

function Signup() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const { signup } = useAuth();
  const onSubmit = async (values) => {
    await signup(values);
  }
  return (
    <div className="w-full">
      <div className="container grid md:grid-cols-2 grid-cols-1 items-center justify-center h-screen">
        <div className="col-span-1">
          <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto space-y-5" >
            <h2 className="text-secondary-900 text-2xl font-medium mb-4 mx-auto">ایجاد حساب جدید</h2>
            <TextFeiled
              name='name'
              register={register}
              label='نام کاربری'
              errors={errors}
            />
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
              ثبت نام
            </Button>
            <p className="space-x-2 text-secondary-500 flex items-center">
              حساب کاربری دارید ؟
              <Link href='/signin' className="text-primary-900 mr-2">ورود</Link>
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

export default Signup
