'use client';
import Button from '@/ui/Button';
import TextFeiled from '@/ui/TextFeiled';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import useCreateCategory from '../hook/useCreateCategory';
import { useRouter } from 'next/navigation';
import { useEditCategory } from '../hook/useEditCatefgory';

const skema = yup.object({
    title: yup.string().required('عنوان ضروری است'),
    englishTitle: yup.string().required('عنوان ضروری است'),
    description: yup.string().required('عنوان ضروری است'),
}).required()

function CategoryCreateForm({ category = {} }) {
    const { createCategory, isCreating } = useCreateCategory();
    const { editCategory, isEditing } = useEditCategory();
    const { _id: categoryId, title, englishTitle, description } = category;
    const isEditSession = Boolean(categoryId);

    let editData = {};
    if (isEditSession) {
        editData = {
            title,
            englishTitle,
            description
        }
    }

    const router = useRouter();
    const { register, formState: { errors }, handleSubmit, reset } = useForm({
        resolver: yupResolver(skema),
        mode: 'onTouched',
        defaultValues: editData
    });

    const onSubmit = (values) => {
        if (isEditSession) {
            editCategory({ data: values, categoryId }, {
                onSuccess: () => {
                    router.push('/profile/categories');
                    reset();
                }
            })
        } else {
            createCategory(values, {
                onSuccess: () => {
                    router.push('/profile/categories');
                    reset();
                }
            })
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-2 w-1/2'>
            <TextFeiled
                register={register}
                label='عنوان'
                name='title'
                errors={errors}
            />
            <TextFeiled
                register={register}
                label='عنوان انگلیسی'
                name='englishTitle'
                errors={errors}
            />
            <TextFeiled
                register={register}
                label='توضیحات'
                name='description'
                errors={errors}
            />
            <Button type='submit' className={'w-full'}>
            {
                isCreating ? 'ایجاد دسته بندی جدید' :'ویرایش دسته یندی'
            }
                
            </Button>
        </form>
    )
}

export default CategoryCreateForm
