function getSearchWord() {
    const word = $(`#search_word`).val();
    return window.location.href=`../templates/post_search.html?query=${decodeURI(decodeURIComponent(word))}`
}