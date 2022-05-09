/* eslint-disable no-plusplus */
/* eslint linebreak-style: ["error", "windows"] */
/* global window, document */

// 'use strict';

// eslint-disable-next-line import/extensions
import stdLayout from './layouts.js';
/**
 * virtual keyboard class implemetation
 */
class ScreenKeyboard {
  // keyButtons - DOM buttons - init at first draw
  // buttons - array of buttons  - get from incoming layout in constructor
  // - what about default layout??

  /** constructor */
  constructor(layout) {
    // todo - create variables
    this.buttons = layout.buttons.slice();
    this.modifiers = {
      CapsLock: false,
      ScrollLock: false,
      Alt: false,
      Ctrl: false,
      Shift: false,
      NumLock: false,
      Meta: false,
    };
    this.value = ''; // current value of textarea
    this.currentLanguage = 'en'; // currenttly displayed keyboard language

    // todo - draw html template

    this.keyFrame = document.getElementById('keyboard');
    for (let i = 0; i < layout.buttonsNumber; i++) {
      const newBtn = document.createElement('div');
      const classes = ['key-btn', `btn-size-x${this.buttons[i].size}`, this.buttons[i].type];
      newBtn.classList.add(...classes);
      newBtn.id = this.buttons[i].keycode;
      newBtn.dataset.keycode = this.buttons[i].keycode;
      // newBtn.innerHTML = this.buttons[i].captionFixed ?
      // this.buttons[i].caption['fixed'] : this.buttons[i].caption[this.currentLanguage];

      if (!this.buttons[i].captionFixed) {
        if (this.modifiers.Shift !== this.modifiers.CapsLock) {
          newBtn.innerHTML = this.buttons[i].caption[`${this.currentLanguage}Shift`];
        } else {
          newBtn.innerHTML = this.buttons[i].caption[this.currentLanguage];
        }
      } else {
        newBtn.innerHTML = this.buttons[i].caption.fixed;
      }

      this.keyFrame.appendChild(newBtn);
    }
    // = butn #id for html  and dataset  data-keycode
    // <div class="key-btn btn-size-x1 regular" id="test1" data-keycode=""> 1</div>
    // div.classList.add("foo", "bar", "baz");
    // const cardBlock = document.createElement("div");
    //   cardBlock.classList.add("card-block");
    //   const cardItem = document.createElement("div");
    //   cardItem.classList.add("card-item");
    //   const cardFront = document.createElement("div");
    //   const cardBack = document.createElement("div");
    //   cardFront.classList.add("card_front");
    //   cardBack.classList.add("card_back");

    //   gameField.append(cardBlock);
    //   cardBlock.append(cardItem);
    //   cardItem.append(cardFront);
    //   cardItem.append(cardBack);

    //   cardItem.dataset.id = id;

    // todo - draw buttons by layout
    // todo - add listeners

    /**
  * get system CAPS/NUM ...  state
  * @return {obj} system toglers states
  */
    function getSystemKeyModifiersState() {
      // todo - loading anim, 'click for keyboard'
      // todo - loading prompt - 'press "k" to launch keyboard' - and get
      // todo - system state and langauge
      //   const keyState = new KeyboardEvent();
      //   const getSysKeyModsState = {
      //     'CapsLock': keyState.getModifierState('CapsLock'),
      //     'ScrollLock': keyState.getModifierState('ScrollLock'),
      // "Scroll" fr IE9?
      //     'NumLock': keyState.getModifierState('NumLock'),
      //   };
      return 0; // getSysKeyModsState;
    }

    // const keyToggleModifiers = getSystemKeyModifiersState();
    // console.log(keyToggleModifiers); // return states
  }

  /**
 * build HTML
 */
  initialHTMLbuild() {
    // todo - add main>section>Keyboard wrapper > textasrea, keynboard,
    // todo - status, modal settings

    const HTML_TEMPLATE = `
      <main>
      
      </main>
      <script type="module" src="script/main.js"></script>
      `;
    document.body.innerHTML = HTML_TEMPLATE;
  }

  getButtonByKeycode(code) {
    // eslint-disable-next-line no-restricted-syntax
    for (const btn of this.buttons) {
      if (btn.keycode === code) {
        return btn;
      }
    }
    return false;
  }

  updateKeyButtonCaptions(lang) {
    // eslint-disable-next-line no-restricted-syntax
    for (const keyBtn of this.keyButtons) {
      const btn = this.getButtonByKeycode(keyBtn.dataset.keycode);
      if (!btn.captionFixed) {
        if (this.modifiers.Shift !== this.modifiers.CapsLock) {
          keyBtn.innerHTML = btn.caption[`${lang}Shift`];
        } else {
          keyBtn.innerHTML = btn.caption[lang];
        }
      }
    }
  }
}

// ==========================

const stdKeyboard = new ScreenKeyboard(stdLayout);

// stdKeyboard.initialHTMLbuild();

// =================test

// window.addEventListener('keydown', (e) => {
//   console.log(e);
// });

// function testclick() {
// window.dispatchEvent(new KeyboardEvent('keydown', {
//   key: "Alt",
//   keyCode: 18,
//   code: "AltLeft",
//   which: 17,
//   shiftKey: false,
//   ctrlKey: false,
//   altKey: true,
//   metaKey: false,
// }));
// window.dispatchEvent(new KeyboardEvent('keydown', {
//   key: "Shift",
//   keyCode: 16,
//   code: "ShiftLeft",
//   which: 16,
//   shiftKey: true,
//   ctrlKey: false,
//   metaKey: false,
// }));
// window.dispatchEvent(new KeyboardEvent('keyup', {
//   key: "Alt",
//   keyCode: 18,
//   code: "AltLeft",
//   which: 17,
//   shiftKey: false,
//   ctrlKey: false,
//   altKey: true,
//   metaKey: false,
// }));
// window.dispatchEvent(new KeyboardEvent('keyup', {
//   key: "Shift",
//   keyCode: 16,
//   code: "ShiftLeft",
//   which: 16,
//   shiftKey: true,
//   ctrlKey: false,
//   metaKey: false,
// }));
  // console.log('`'.toUpperCase());
// }
// const btn1 = document.getElementById('test1');
// btn1.addEventListener('click', testclick);
