/* eslint-disable no-plusplus */
/* eslint linebreak-style: ["error", "windows"] */
/* global window, document */

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

  updateKeyboard(pressedBtn) {
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
        switch (pressedBtn.keycode) {
          case 'LangSwitch':
            this.currentLanguage = this.currentLanguage === 'en' ? 'ru' : 'en';
            if (this.currentLanguage === 'ru') {
              document.getElementById(pressedBtn.keycode).classList.add('pressed');
            } else {
              document.getElementById(pressedBtn.keycode).classList.remove('pressed');
            }
            break;
          case 'ShiftLeft':
          case 'ShiftRight':

            break;
          case 'CapsLock':

            break;
          default:
            break;
        }
        this.updateKeyButtonCaptions(this.currentLanguage);
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
          this.textArea.value += ''; // todo delete!
        }
        break;
      default:
        break;
    }
    this.value = this.textArea.value;
  }

  handleClick(event) {
    // handle mouse clicks
    if (event.target.dataset.keycode) {
      this.updateKeyboard(this.getButtonByKeycode(event.target.dataset.keycode));

      if (event.target.dataset.keycode === 'CapsLock') {
        this.modifiers.CapsLock = !this.modifiers.CapsLock;
        this.updateKeyButtonCaptions(this.currentLanguage);
        if (this.modifiers.CapsLock) {
          document.getElementById('CapsLock').classList.add('pressed');
        } else {
          document.getElementById('CapsLock').classList.remove('pressed');
        }
      }
      if (event.target.dataset.keycode === 'ShiftLeft'
       || event.target.dataset.keycode === 'ShiftRight') {
        this.modifiers.Shift = false;
        this.updateKeyButtonCaptions(this.currentLanguage);
      }
    }
  }

  handleMouseDown(event) {
    if (event.target.dataset.keycode === 'ShiftLeft'
       || event.target.dataset.keycode === 'ShiftRight') {
      this.modifiers.Shift = true;
      this.updateKeyButtonCaptions(this.currentLanguage);
    }
  }

  handleKeypress(event) {
    // handle key press
    this.lastKeyPress.innerHTML = `key: ${event.key}&nbsp;&nbsp;code: ${event.code}`;
    this.updateKeyboard(this.getButtonByKeycode(event.code));

    // disable default? either type symbol to textarea or do mods
  }

  handleKeyDown(event) {
    if (this.getButtonByKeycode(event.code)) {
      event.preventDefault();
      this.modifiers.Alt = event.altKey;
      this.modifiers.Ctrl = event.ctrlKey;
      this.modifiers.Shift = event.shiftKey;
      if (event.code === 'CapsLock') {
        this.modifiers.CapsLock = !this.modifiers.CapsLock;
        if (this.modifiers.CapsLock) {
          document.getElementById(event.code).classList.add('pressed');
        } else {
          document.getElementById(event.code).classList.remove('pressed');
        }
      } else if ((event.key === 'Control' && event.altKey)
              || (event.key === 'Alt' && event.ctrlKey)) {
        this.currentLanguage = this.currentLanguage === 'en' ? 'ru' : 'en';
        if (this.currentLanguage === 'ru') {
          document.getElementById('LangSwitch').classList.add('pressed');
        } else {
          document.getElementById('LangSwitch').classList.remove('pressed');
        }
      } else {
        document.getElementById(event.code).classList.add('pressed');
      }
      this.updateKeyButtonCaptions(this.currentLanguage);
      this.handleKeypress(event);
    }
  }

  handleKeyUp(event) {
    if (this.getButtonByKeycode(event.code)) {
      event.preventDefault();
      this.modifiers.Alt = false;
      this.modifiers.Ctrl = false;
      this.modifiers.Shift = false;
      if (event.code !== 'CapsLock') {
        document.getElementById(event.code).classList.remove('pressed');
      }
      this.updateKeyButtonCaptions(this.currentLanguage);
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
      <section class="virtual-keyboard">
        <div class="keyboard-wrapper">
          
          <h2 class="kb-header">RSS Virtual Keyboard</h2>
  
          <div class="textarea-container">
            <textarea class="kb-textarea" id="kb-textarea" rows="15" placeholder="..."></textarea> 
          </div>
        
          <div class="keyboard" id="keyboard">
          </div>
  
          <div class="status-container">
            
            <div class="status-git"><a href="https://github.com/madkorney/virtual-keyboard"><img src="./assets/images/GitHub-Mark-64px.png" alt="github logo" class="status-git-img"></a></div>
            
            <div class="status-comment">Made in Windows. Language switch: Ctrl+Alt</div>
            
            <div class="status-last-keys" id="status-last-keys">
              key: ____&nbsp;&nbsp;code: ____   
            </div>
            
            <div class="status-rss"><a href="https://rs.school/js/">RS School JS/FE</a></div>
  
          </div>
        </div>      
      </section>  
    </main>
    <script type="module" src="script/main.js"></script>
        `;
      document.body.innerHTML = HTML_TEMPLATE;
    }

    HTMLBodyFillFromTemplate();
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
    this.keyButtons = document.querySelectorAll('.key-btn');
    this.keyFrame.addEventListener('click', this.handleClick.bind(this));
    this.keyFrame.addEventListener('mousedown', this.handleMouseDown.bind(this));
    window.addEventListener('keydown', this.handleKeyDown.bind(this));
    window.addEventListener('keyup', this.handleKeyUp.bind(this));
  }
}

// ==========================

const stdKeyboard = new ScreenKeyboard(stdLayout);

stdKeyboard.showKeyboard();
