export default function generatePagination(totalPages, currentPages) {
    if (totalPages <= 7) {
        return Array.from({ length: totalPages }, (_, i) => i + 1);
    }


    if (totalPages <= 3) {
        return [1, 2, 3, '...', totalPages - 1, totalPages]
    }

    if (currentPages >= totalPages - 2) {
        return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages]
    }

    return [
        1,
        '...',
        currentPages-1,
        currentPages,
        currentPages+1,
        '...',
        totalPages
    ]
}