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
    // create properties
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
    this.buttonsNumber = layout.buttonsNumber;

    // const keyToggleModifiers = getSystemKeyModifiersState();
    // console.log(keyToggleModifiers); // return states
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

  updateTextArea(pressedBtn) {
    let outChar = '';
    if (this.modifiers.Shift !== this.modifiers.CapsLock) {
      outChar = pressedBtn.caption[`${this.currentLanguage}Shift`];
    } else {
      outChar = pressedBtn.caption[this.currentLanguage];
    }

    switch (pressedBtn.type) {
      case 'regular':
        if (pressedBtn.keycode === 'Tab') {
          this.textArea.value += '    '; // 4 spaces
        } else {
          this.textArea.value += outChar;
        }
        break;
      case 'move':
        // todo cursor movement
        this.textArea.value += pressedBtn.caption.fixed; // just print arrws
        break;
      case 'mod':
        // todo mods
        break;
      case 'edit':
        // todo del
        if (pressedBtn.keycode === 'Enter') {
          this.textArea.value += '\n';
        }
        if (pressedBtn.keycode === 'Backspace') {
          this.textArea.value = this.textArea.value.substring(0, this.textArea.value.length - 1);
        }
        if (pressedBtn.keycode === 'Del') {
          this.textArea.value += ''; //todo delete!
        }
        break;
      default:
        break;
    }
  }

  handleClick(event) {
    // handle mouse clicks
    if (event.target.dataset.keycode) {
      this.updateTextArea(this.getButtonByKeycode(event.target.dataset.keycode));
    }
  }

  handleKeypress(event) {
    // handle key press
    this.lastKeyPress.innerHTML = `key: ${event.key}&nbsp;&nbsp;code: ${event.code}`;
    this.updateTextArea(this.getButtonByKeycode(event.code));

    // disable default? either type symbol to textarea or do mods
  }

  handleKeyDown(event) {
    if (this.getButtonByKeycode(event.code)) {
      event.preventDefault();
      document.getElementById(event.code).classList.add('pressed');
      this.handleKeypress(event);
    }
  }

  handleKeyUp(event) {
    if (this.getButtonByKeycode(event.code)) {
      event.preventDefault();
      document.getElementById(event.code).classList.remove('pressed');
    // this.handleKeypress(event);
    }
  }

  showKeyboard() {
    // draw keyboard, init DOM elements, setup listeners

    /**
    * build HTML body
    */
    function HTMLBodyFillFromTemplate() {
      // todo - add main>section>Keyboard wrapper > textasrea, keynboard,

      const HTML_TEMPLATE = `
        <main>
        
        </main>
        <script type="module" src="script/main.js"></script>
        `;
      document.body.innerHTML = HTML_TEMPLATE;
    }
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

      // this.modifiers = {
      //   CapsLock: false,
      //   ScrollLock: false,
      //   Alt: false,
      //   Ctrl: false,
      //   Shift: false,
      //   NumLock: false,
      //   Meta: false,
      // };
      return 0; // getSysKeyModsState;
    }

    // getSystemKeyModifiersState();
    // HTMLBodyFillFromTemplate();
    this.textArea = document.getElementById('kb-textarea');
    this.lastKeyPress = document.getElementById('status-last-keys');
    this.keyFrame = document.getElementById('keyboard'); // class property - keyboard DOM parent
    for (let i = 0; i < this.buttonsNumber; i++) { // add buttons - childrens of keyboard
      const newBtn = document.createElement('div');
      const classes = ['key-btn', `btn-size-x${this.buttons[i].size}`, this.buttons[i].type];
      newBtn.classList.add(...classes);
      newBtn.id = this.buttons[i].keycode;
      newBtn.dataset.keycode = this.buttons[i].keycode;

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

    this.keyFrame.addEventListener('click', this.handleClick.bind(this));
    window.addEventListener('keydown', this.handleKeyDown.bind(this));
    window.addEventListener('keyup', this.handleKeyUp.bind(this));
  }
}

// ==========================

const stdKeyboard = new ScreenKeyboard(stdLayout);

stdKeyboard.showKeyboard();

// stdKeyboard.hide();

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
