'use client'
import SelectRHF from '@/ui/SelectRHF';
import TextFeiled from '@/ui/TextFeiled';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup'
import useGetCategories from '../hook/useGetCategories';
import Button from '@/ui/Button';
import { useState } from 'react';
import Image from 'next/image';
import FileInput from '@/ui/FileInput';
import { IoClose } from "react-icons/io5";
import ButtonIcon from '@/ui/ButtonIcon';
import useCreateBlog from '../hook/useCreateBlog';
import { useRouter } from 'next/navigation';

const skema = yup.object({
    title: yup
        .string()
        .min(5, "حداقل ۵ کاراکتر را وارد کنید")
        .required("عنوان ضروری است"),
    briefText: yup
        .string()
        .min(10, "حداقل ۱۰ کاراکتر را وارد کنید")
        .required("توضیحات ضروری است"),
    text: yup
        .string()
        .min(10, "حداقل ۱۰ کاراکتر را وارد کنید")
        .required("توضیحات ضروری است"),
    slug: yup.string().required("اسلاگ ضروری است"),
    readingTime: yup
        .number()
        .positive()
        .integer()
        .required("زمان مطالعه ضروری است")
        .typeError("یک عدد را وارد کنید"),
    category: yup.string().required("دسته بندی ضروری است"),
}).required()

function CreateBlogForm() {
    const { categories } = useGetCategories();
    const [coverImageUrl, setCoverImageUrl] = useState(null);
    const router=useRouter();
    const { createBlog, isCreating } = useCreateBlog();
    const { register, handleSubmit, formState: { errors }, control, setValue } = useForm({
        mode: 'onTouched',
        resolver: yupResolver(skema),
    });

    const onSubmit = (values) => {
        const formData = new FormData();
        for (const key in values) {
            formData.append(key, values[key])
        }
        createBlog(formData,{
            onSuccess:()=>{
                router.push('/profile/blogs')
            }
        });

    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <TextFeiled
                    label='عنوان'
                    register={register}
                    name={'title'}
                    errors={errors}
                    containerClass={'col-span-1'}
                />
                <TextFeiled
                    label='متن کوتاه'
                    register={register}
                    name='briefText'
                    errors={errors}
                    containerClass={'col-span-1'}
                />
                <TextFeiled
                    label='متن'
                    register={register}
                    name='text'
                    errors={errors}
                    containerClass={'col-span-1'}
                />
                <TextFeiled
                    label='اسلاگ'
                    register={register}
                    name='slug'
                    errors={errors}
                    containerClass={'col-span-1'}
                />
                <TextFeiled
                    label='زمان مطالعه'
                    register={register}
                    name='readingTime'
                    errors={errors}
                    containerClass={'col-span-1'}
                />
                <SelectRHF
                    register={register}
                    errors={errors}
                    name='category'
                    label='دسته بندی'
                    options={categories} />

                <Controller
                    name='coverImage'
                    control={control}
                    rules={() => { required('کاور پست الزامی است') }}
                    render={({ field: { onChange, value } }) => (
                        <FileInput
                            name='coverImage'
                            onChange={(event) => {
                                const file = event.target.files[0];
                                onChange(file);
                                setCoverImageUrl(URL.createObjectURL(file));
                                event.target.value = null;
                            }}
                            value={value?.fileName}
                        />

                    )}
                />

                <Button>ایجاد پست جدید</Button>


            </form>
            <div className='relative w-full md:w-1/2 mt-2 m-auto flex items-center justify-center'>
                {
                    <Image
                        width={580}
                        height={700}
                        alt='coverImage'
                        src={coverImageUrl || '/images/gallery.jpg'}
                        className='h-50 rounded-lg'
                    />
                }
                <ButtonIcon
                    variant={'red'}
                    className='!absolute top-1 right-3'
                    onClick={(e) => {
                        e.preventDefault();
                        setCoverImageUrl(null)
                        setValue('coverImage', null)
                    }}
                >
                    <IoClose />
                </ButtonIcon>
            </div>
        </>
    )
}

export default CreateBlogForm
