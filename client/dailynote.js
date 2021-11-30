
(function() {

  function expand(text) {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\*(.+?)\*/g, '<i>$1</i>')
  }

  function emit($item, item) {
    if ($('.editEnable').is(':visible')) {
      $item.append(`<p><button>Add Daily Note</button></p>`)
    }
  }

  function bind($item, item) {
    $item.find('button').click(() => {
      if (!$('.editEnable').is(':visible')) {
        return;
      }

      let page = $item.parents('.page').data('data');
      let dateTitle = new Date().toLocaleDateString(
        navigator.languages[0] || 'en-US',
        { year: 'numeric', month: 'long', day: 'numeric' }
      );
      let text = `[[${dateTitle}]]`;
      let idx = page.story.findIndex((e) => {
        return e.text === text;
      });
      if (-1 === idx) {
        wiki.createItem(null, $item, {
          "type": "paragraph",
          "text": text
        });
      }
    });

    $item.dblclick(() => {
      return wiki.textEditor($item, item);
    });
  }

  if (typeof window !== "undefined" && window !== null) {
    window.plugins.dailynote = {emit, bind}
  }

  if (typeof module !== "undefined" && module !== null) {
    module.exports = {expand}
  }

}).call(this)
