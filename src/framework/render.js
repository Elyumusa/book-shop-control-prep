export function createElement(template) {
    const newElement=document.createElement('div');
    newElement.innerHTML=template;
    return newElement.firstElementChild;
}