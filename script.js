const colorThemes = document.querySelectorAll('[name="theme"]')

//store the theme
const storeTheme = function(theme)
{
    localStorage.setItem("theme",theme);
}

//apply the theme
const setTheme=function(){
    const activeTheme=localStorage.getItem("theme");
    colorThemes.forEach((themeOption)=>{
        if(themeOption.id===activeTheme)
        {
            themeOption.checked=true;
        }
    })
    //fallback for no :has() support
    document.documentElement.className=theme;
}

colorThemes.forEach(themeSelected => {
    themeSelected.addEventListener('click',()=>{
        storeTheme(themeSelected.id)
    })
})

document.onload = setTheme();