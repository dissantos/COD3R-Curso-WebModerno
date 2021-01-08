function updated() {
    document.querySelectorAll('.article-content pre').forEach(e => {
        hljs.highlightBlock(e)
    })
}