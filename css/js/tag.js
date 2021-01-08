const colors = {
    p: "black",span: "red",body: "yellow",div: "green",ul:"aquamarine",ol:"orange",form: "purple",padrao: "gray", main: "pink",header: "skyblue",footer: "crimson",nav:"chartreuse",
    get(tag){
        return this[tag] ? this[tag] : this.padrao
    }
}

document.querySelectorAll('.tag').forEach(function(e){
    const tagName = e.tagName.toLowerCase()

    e.style.borderColor = colors.get(tagName)

    if(!e.classList.contains("nolabel")){
        const label = document.createElement('label')
        label.style.color = "white"
        label.style.backgroundColor = colors.get(tagName)
        label.innerHTML = tagName
        e.insertBefore(label,e.childNodes[0])
    }
})