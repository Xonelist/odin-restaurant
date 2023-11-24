function createElement(elem, name, content, recur = false) {
    const target = document.createElement(elem);
    target.className = name;
    if (recur) {
        target.appendChild(content);
        return target;
    }
    if (elem === 'img') {
        target.src = content;
        return target;
    }
    target.textContent = content;
    return target;
}
export {createElement}