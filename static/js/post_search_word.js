$('#search_word').keypress(function(e) {
    if(e.which === 13) { // Enter key
        getSearchWord();
    }
});

function getSearchWord() {
    const word = $(`#search_word`).val();
    return window.location.href=`../templates/post_search.html?query=${decodeURI(decodeURIComponent(word))}`
}