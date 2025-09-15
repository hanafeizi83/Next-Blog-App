import { getCategoriesApi } from "@/services/categoryServices"
import CategoryListItem from "@/ui/CategoryListItem";
import { faList } from "@fortawesome/free-solid-svg-icons";

async function CategoryList() {
    const categories = await getCategoriesApi();

    return (
        <div className="space-y-2 mt-6 fixed w-[14%]">
            <CategoryListItem icon={faList} title={'همه'} slug={``} />

            {
                categories && categories.map(item => {
                    return (
                        <CategoryListItem key={item._id} {...item} slug={`/categories/${item.slug}`} />
                    )

                })
            }
        </div>
    )
}

export default CategoryList
