import { faBookOpenReader, faCode, faEarthAmericas, faHandshake, faLandmarkDome, faList, faMoneyBillTrendUp, faPersonSwimming } from "@fortawesome/free-solid-svg-icons";
import http from "./httpServices";

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
    },
    accessory: {
        slug: 'accessory',
        icon: faList
    }
}

export async function getCategoriesApi() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/category/list`);
    const { data: { categories } } = await res.json();
    const newCategories = categories.map(item => {
        return { ...item, icon: categoriesIcon[item.englishTitle].icon }
    })

    return newCategories
}

export async function createCategoryApi(data) {
    return http.post('/category/add', data).then(({ data }) => data.data)
}

export async function editCategoryApi({ data, categoryId }) {
    return http.patch(`/category/update/${categoryId}`, data).then(({ data }) => data.data)
}

export async function getCategoryByIdApi(id) {
    const { categories } = await http.get('/category/list').then(({ data }) => data.data)
    const category = categories.find(category => category._id == id);

    return { category }
}