import './index.styl'

const btn = document.createElement('button');   // Create a <button> element
btn.id = 'cleaner';
btn.addEventListener('click', () => {
      const archived = Array.from(document.querySelectorAll('#content > div > div.board-menu.js-fill-board-menu > div > div > div.board-menu-content.u-fancy-scrollbar.js-board-menu-content-wrapper > div > div.archive-content.js-archive-content > div > div p > a.js-delete'));

      let counter = 0;
      const removeItem = (id) => {
        if (id >= archived.length) return;
        archived[id].click();
        // wait a bit

        // select delete button
        const delBtn = document.querySelector('#chrome-container > div.pop-over.is-shown > div > div:nth-child(2) > div > div > div > input');
        delBtn.click();
        removeItem(id++);
      };

});
btn.innerHTML = 'CLICK ME';                   // Insert text
document.body.appendChild(btn);               // Append <button> to <body>
