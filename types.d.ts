type Result = {
    pageid: string,
    title: string,
    extract: string,
    thumbnail?: {
        source: string,
        width: number,
        height: number,
    }
}

// SearchResult is controversial, becz we might not get any result so our query and pages are optional.
type SearchResult = {
    query?: {
        pages?: Result[],
    },
}