

const handleChangePage = (rota) => {
    console.log("clicou", rota)
}

const iconsListData = [
    { name: "home", action: handleChangePage },
    { name: "apps", action: handleChangePage },
    { name: "work", action: handleChangePage },
    { name: "logo_dev", action: handleChangePage },
    { name: "polymer", action: handleChangePage },
    { name: "contact_page", action: handleChangePage },
    { name: "quick_reference", action: handleChangePage },
];

const renderMenuList = () => {
    const elemento = document.getElementById("menuList");
    iconsListData.forEach(element => {
        const itemList = document.createElement("li");
        const spamElement = document.createElement("span");
        const text = document.createTextNode(element.name)
        spamElement.appendChild(text);
        spamElement.setAttribute("class", "material-symbols-outlined iconStyle");
        itemList.setAttribute("onclick", `handleChangePage()`);
        itemList.appendChild(spamElement);
        elemento.appendChild(itemList);
    });
};

renderMenuList()