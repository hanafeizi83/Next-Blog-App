import { faBookOpenReader, faCode, faEarthAmericas, faHandshake, faLandmarkDome, faList, faMoneyBillTrendUp, faPersonSwimming } from "@fortawesome/free-solid-svg-icons";
const categoriesIcon = {
    sport: {
        slug: 'sport',
        icon: faPersonSwimming
    },
    cultural: {
        slug: 'cultural',
        icon: faBookOpenReader
    },
    economic: {
        slug: 'economic',
        icon: faMoneyBillTrendUp
    },
    programming: {
        slug: 'programming',
        icon: faCode
    },
    political: {
        slug: 'political',
        icon: faHandshake
    },
    geographic: {
        slug: 'geographic',
        icon: faEarthAmericas
    },
    historical: {
        slug: 'historical',
        icon: faLandmarkDome
    }
}
export async function getCategoriesApi() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/category/list`);
    const { data: { categories } } = await res.json();
    const newCategories = categories.map(item => {
        return { ...item, icon: categoriesIcon[item.englishTitle].icon }
    })
    return newCategories;
}