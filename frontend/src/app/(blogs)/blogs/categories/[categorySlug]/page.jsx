function page({ params }) {
    const { categorySlug } = params;
    return (
        <div>
            {categorySlug}
        </div>
    )
}

export default page
