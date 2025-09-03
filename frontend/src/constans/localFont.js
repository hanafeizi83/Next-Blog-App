import localFont from 'next/font/local'

const KalamehFont = localFont({
    src: [
        {
            path:'../../public/fonts/kalameh/Kalameh-Black.woff2',
            weight:'900',
            style:'normal'
        },
        {
            path:'../../public/fonts/kalameh/Kalameh-Bold.woff2',
            weight:'700',
            style:'normal'
        },
        {
            path:'../../public/fonts/kalameh/Kalameh-Medium.woff',
            weight:'500',
            style:'normal'
        },
        {
            path:'../../public/fonts/kalameh/Kalameh-Regular.woff2',
            weight:'400',
            style:'normal'
        },
        {
            path:'../../public/fonts/kalameh/Kalameh-Thin.woff2',
            weight:'100',
            style:'normal'
        }

    ],
    style:'normal',
    display: 'block',
    variable: '--font-kalemeh'
})

export default KalamehFont