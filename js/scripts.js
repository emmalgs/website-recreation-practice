function render() {
    const h1 = document.querySelector("h1");
    const p = document.createElement("p");
    p.append("The HTML of this webpage was created with JavaScript.");
    h1.after(p);

    const image = document.createElement("img");
    image.setAttribute("src", "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/900");
    image.setAttribute("alt", "This is an image of a Multicolored Tanager bird from birdsoftheworld.org");
    image.setAttribute("style", "width: 50%");
    p.after(image);
    
    const secondH1 = document.createElement("h1");
    secondH1.append("Facts about the Multicolored Tanager");
    image.after(secondH1)

    const ul = document.createElement("ul");
    secondH1.after(ul);

    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    li1.append("It is endemic to the mountains of Colombia.");
    li2.append("It usually searches for insects on the underside of leaves of outer limbs while clinging to leaves with its feet.");
    
    ul.prepend(li1, li2);

    const finalH2 = document.createElement("h2");
    finalH2.append("Source");
    ul.after(finalH2);

    const link = document.createElement("a");
    link.append("Wikipedia");
    link.setAttribute("href", "https://en.wikipedia.org/wiki/Multicoloured_tanager");
    finalH2.after(link)
}



window.addEventListener("load", function() { 
    render()
})