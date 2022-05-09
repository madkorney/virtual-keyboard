/* eslint-disable linebreak-style */

const stdLayout = {
  name: 'standard layout',
  palette: {},
  layoutType: 'rectangle',
  buttonsNumber: 64,
  linesNumber: 5,
  slotsPerLine: 15,
  languages: ['ru', 'en'],
  buttons: [
    {
      type: 'regular', // = class : 'mod', 'move', 'edit'
      isToggle: false, // 'toggle-modifier'
      toggled: false,
      keycode: 'Backquote', // = butn #id for html  and dataset  data-keycode
      captionFixed: false,
      caption: {
        ru: 'ё', en: '`', fixed: '', enShift: '~', ruShift: 'Ё',
      },
      size: 1, // can be x1 x2, long x7
    },
    {
      type: 'regular', // = class : 'mod', 'move', 'edit'
      isToggle: false, // 'toggle-modifier'
      toggled: false,
      keycode: 'Digit1', // = butn #id for html
      captionFixed: false,
      caption: {
        ru: '1', en: '1', fixed: '', enShift: '!', ruShift: '!',
      },
      size: 1, // can be x1 x2, long x7
    },
    {
      type: 'regular', // = class : 'mod', 'move', 'edit'
      isToggle: false, // 'toggle-modifier'
      toggled: false,
      keycode: 'Digit2', // = butn #id for html
      captionFixed: false,
      caption: {
        ru: '2', en: '2', fixed: '', enShift: '@', ruShift: '"',
      },
      size: 1, // can be x1 x2, long x7
    },
    {
      type: 'regular', // = class : 'mod', 'move', 'edit'
      isToggle: false, // 'toggle-modifier'
      toggled: false,
      keycode: 'Digit3', // = butn #id for html
      captionFixed: false,
      caption: {
        ru: '3', en: '3', fixed: '', enShift: '#', ruShift: '№',
      },
      size: 1, // can be x1 x2, long x7
    },
    {
      type: 'regular', // = class : 'mod', 'move', 'edit'
      isToggle: false, // 'toggle-modifier'
      toggled: false,
      keycode: 'Digit4', // = butn #id for html
      captionFixed: false,
      caption: {
        ru: '4', en: '4', fixed: '', enShift: '$', ruShift: ';',
      },
      size: 1, // can be x1 x2, long x7
    },
    {
      type: 'regular', // = class : 'mod', 'move', 'edit'
      isToggle: false, // 'toggle-modifier'
      toggled: false,
      keycode: 'Digit5', // = butn #id for html
      captionFixed: false,
      caption: {
        ru: '5', en: '5', fixed: '', enShift: '%', ruShift: '%',
      },
      size: 1, // can be x1 x2, long x7
    },
    {
      type: 'regular', // = class : 'mod', 'move', 'edit'
      isToggle: false, // 'toggle-modifier'
      toggled: false,
      keycode: 'Digit6', // = butn #id for html
      captionFixed: false,
      caption: {
        ru: '6', en: '6', fixed: '', enShift: '^', ruShift: ':',
      },
      size: 1, // can be x1 x2, long x7
    },
    {
      type: 'regular', // = class : 'mod', 'move', 'edit'
      isToggle: false, // 'toggle-modifier'
      toggled: false,
      keycode: 'Digit7', // = butn #id for html
      captionFixed: false,
      caption: {
        ru: '7', en: '7', fixed: '', enShift: '&', ruShift: '?',
      },
      size: 1, // can be x1 x2, long x7
    },
    {
      type: 'regular', // = class : 'mod', 'move', 'edit'
      isToggle: false, // 'toggle-modifier'
      toggled: false,
      keycode: 'Digit8', // = butn #id for html
      captionFixed: false,
      caption: {
        ru: '8', en: '8', fixed: '', enShift: '*', ruShift: '*',
      },
      size: 1, // can be x1 x2, long x7
    },
    {
      type: 'regular', // = class : 'mod', 'move', 'edit'
      isToggle: false, // 'toggle-modifier'
      toggled: false,
      keycode: 'Digit9', // = butn #id for html
      captionFixed: false,
      caption: {
        ru: '9', en: '9', fixed: '', enShift: '(', ruShift: '(',
      },
      size: 1, // can be x1 x2, long x7
    },
    {
      type: 'regular', // = class : 'mod', 'move', 'edit'
      isToggle: false, // 'toggle-modifier'
      toggled: false,
      keycode: 'Digit0', // = butn #id for html
      captionFixed: false,
      caption: {
        ru: '0', en: '0', fixed: '', enShift: ')', ruShift: ')',
      },
      size: 1, // can be x1 x2, long x7
    },
    {
      type: 'regular', // = class : 'mod', 'move', 'edit'
      isToggle: false, // 'toggle-modifier'
      toggled: false,
      keycode: 'Minus', // = butn #id for html
      captionFixed: false,
      caption: {
        ru: '-', en: '-', fixed: '', enShift: '_', ruShift: '_',
      },
      size: 1, // can be x1 x2, long x7
    },
    {
      type: 'regular', // = class : 'regular', 'mod', 'move', 'edit'
      isToggle: false, // 'toggle-modifier'
      toggled: false,
      keycode: 'Equal', // = butn #id for html
      captionFixed: false,
      caption: {
        ru: '=', en: '=', fixed: '', enShift: '+', ruShift: '+',
      },
      size: 1, // can be x1 x2, long x7
    },
    {
      type: 'edit', // = class : 'regular', 'mod', 'move', 'edit'
      isToggle: false, // 'toggle-modifier'
      toggled: false,
      keycode: 'Backspace', // = butn #id for html
      captionFixed: true,
      caption: {
        ru: '', en: '', fixed: 'Backspace', enShift: '', ruShift: '',
      },
      size: 2, // can be x1 x2, long x7
    },
    // end of 1 line ============
    {
      type: 'regular', // = class : 'regular', 'mod', 'move', 'edit'
      isToggle: false, // 'toggle-modifier'
      toggled: false,
      keycode: 'Tab', // = butn #id for html
      captionFixed: true,
      caption: {
        ru: '', en: '', fixed: '⭾', enShift: '', ruShift: '',
      },
      size: 1, // can be x1 x2, long x7
    },
    {
      type: 'regular', // = class : 'regular', 'mod', 'move', 'edit'
      isToggle: false, // 'toggle-modifier'
      toggled: false,
      keycode: 'KeyQ', // = butn #id for html
      captionFixed: false,
      caption: {
        ru: 'й', en: 'q', fixed: '', enShift: 'Q', ruShift: 'Й',
      },
      size: 1, // can be x1 x2, long x7
    },
    {
      type: 'regular', // = class : 'regular', 'mod', 'move', 'edit'
      isToggle: false, // 'toggle-modifier'
      toggled: false,
      keycode: 'KeyW', // = butn #id for html
      captionFixed: false,
      caption: {
        ru: 'ц', en: 'w', fixed: '', enShift: 'W', ruShift: 'Ц',
      },
      size: 1, // can be x1 x2, long x7
    },
    {
      type: 'regular', // = class : 'regular', 'mod', 'move', 'edit'
      isToggle: false, // 'toggle-modifier'
      toggled: false,
      keycode: 'KeyE', // = butn #id for html
      captionFixed: false,
      caption: {
        ru: 'у', en: 'e', fixed: '', enShift: 'E', ruShift: 'У',
      },
      size: 1, // can be x1 x2, long x7
    },
    {
      type: 'regular', // = class : 'regular', 'mod', 'move', 'edit'
      isToggle: false, // 'toggle-modifier'
      toggled: false,
      keycode: 'KeyR', // = butn #id for html
      captionFixed: false,
      caption: {
        ru: 'к', en: 'r', fixed: '', enShift: 'R', ruShift: 'К',
      },
      size: 1, // can be x1 x2, long x7
    },
    {
      type: 'regular', // = class : 'regular', 'mod', 'move', 'edit'
      isToggle: false, // 'toggle-modifier'
      toggled: false,
      keycode: 'KeyT', // = butn #id for html
      captionFixed: false,
      caption: {
        ru: 'е', en: 't', fixed: '', enShift: 'T', ruShift: 'Е',
      },
      size: 1, // can be x1 x2, long x7
    },
    {
      type: 'regular', // = class : 'regular', 'mod', 'move', 'edit'
      isToggle: false, // 'toggle-modifier'
      toggled: false,
      keycode: 'KeyY', // = butn #id for html
      captionFixed: false,
      caption: {
        ru: 'н', en: 'y', fixed: '', enShift: 'Y', ruShift: 'Н',
      },
      size: 1, // can be x1 x2, long x7
    },
    {
      type: 'regular', // = class : 'regular', 'mod', 'move', 'edit'
      isToggle: false, // 'toggle-modifier'
      toggled: false,
      keycode: 'KeyU', // = butn #id for html
      captionFixed: false,
      caption: {
        ru: 'г', en: 'u', fixed: '', enShift: 'U', ruShift: 'Г',
      },
      size: 1, // can be x1 x2, long x7
    },
    {
      type: 'regular', // = class : 'regular', 'mod', 'move', 'edit'
      isToggle: false, // 'toggle-modifier'
      toggled: false,
      keycode: 'KeyI', // = butn #id for html
      captionFixed: false,
      caption: {
        ru: 'ш', en: 'i', fixed: '', enShift: 'I', ruShift: 'Ш',
      },
      size: 1, // can be x1 x2, long x7
    },
    {
      type: 'regular', // = class : 'regular', 'mod', 'move', 'edit'
      isToggle: false, // 'toggle-modifier'
      toggled: false,
      keycode: 'KeyO', // = butn #id for html
      captionFixed: false,
      caption: {
        ru: 'щ', en: 'o', fixed: '', enShift: 'O', ruShift: 'Щ',
      },
      size: 1, // can be x1 x2, long x7
    },
    {
      type: 'regular', // = class : 'regular', 'mod', 'move', 'edit'
      isToggle: false, // 'toggle-modifier'
      toggled: false,
      keycode: 'KeyP', // = butn #id for html
      captionFixed: false,
      caption: {
        ru: 'з', en: 'p', fixed: '', enShift: 'P', ruShift: 'З',
      },
      size: 1, // can be x1 x2, long x7
    },
    {
      type: 'regular', // = class : 'regular', 'mod', 'move', 'edit'
      isToggle: false, // 'toggle-modifier'
      toggled: false,
      keycode: 'BracketLeft', // = butn #id for html
      captionFixed: false,
      caption: {
        ru: 'х', en: '[', fixed: '', enShift: '{', ruShift: 'Х',
      },
      size: 1, // can be x1 x2, long x7
    },
    {
      type: 'regular', // = class : 'regular', 'mod', 'move', 'edit'
      isToggle: false, // 'toggle-modifier'
      toggled: false,
      keycode: 'BracketRight', // = butn #id for html
      captionFixed: false,
      caption: {
        ru: 'ъ', en: ']', fixed: '', enShift: '}', ruShift: 'Ъ',
      },
      size: 1, // can be x1 x2, long x7
    },
    {
      type: 'regular', // = class : 'regular', 'mod', 'move', 'edit'
      isToggle: false, // 'toggle-modifier'
      toggled: false,
      keycode: 'Backslash', // = butn #id for html
      captionFixed: false,
      caption: {
        ru: '\\', en: '\\', fixed: '', enShift: '|', ruShift: '/',
      },
      size: 1, // can be x1 x2, long x7
    },
    {
      type: 'edit', // = class : 'regular', 'mod', 'move', 'edit'
      isToggle: false, // 'toggle-modifier'
      toggled: false,
      keycode: 'Delete', // = butn #id for html
      captionFixed: true,
      caption: {
        ru: '', en: '', fixed: 'Del', enShift: '', ruShift: '',
      },
      size: 1, // can be x1 x2, long x7
    },
    // end of 2 line ============
    {
      type: 'mod', // = class : 'regular', 'mod', 'move', 'edit'
      isToggle: true, // 'toggle-modifier'
      toggled: false,
      keycode: 'CapsLock', // = butn #id for html
      captionFixed: true,
      caption: {
        ru: '', en: '', fixed: 'CapsLock', enShift: '', ruShift: '',
      },
      size: 2, // can be x1 x2, long x7
    },
    {
      type: 'regular', // = class : 'regular', 'mod', 'move', 'edit'
      isToggle: false, // 'toggle-modifier'
      toggled: false,
      keycode: 'KeyA', // = butn #id for html
      captionFixed: false,
      caption: {
        ru: 'ф', en: 'a', fixed: '', enShift: 'A', ruShift: 'Ф',
      },
      size: 1, // can be x1 x2, long x7
    },
    {
      type: 'regular', // = class : 'regular', 'mod', 'move', 'edit'
      isToggle: false, // 'toggle-modifier'
      toggled: false,
      keycode: 'KeyS', // = butn #id for html
      captionFixed: false,
      caption: {
        ru: 'ы', en: 's', fixed: '', enShift: 'S', ruShift: 'Ы',
      },
      size: 1, // can be x1 x2, long x7
    },
    {
      type: 'regular', // = class : 'regular', 'mod', 'move', 'edit'
      isToggle: false, // 'toggle-modifier'
      toggled: false,
      keycode: 'KeyD', // = butn #id for html
      captionFixed: false,
      caption: {
        ru: 'в', en: 'd', fixed: '', enShift: 'D', ruShift: 'В',
      },
      size: 1, // can be x1 x2, long x7
    },
    {
      type: 'regular', // = class : 'regular', 'mod', 'move', 'edit'
      isToggle: false, // 'toggle-modifier'
      toggled: false,
      keycode: 'KeyF', // = butn #id for html
      captionFixed: false,
      caption: {
        ru: 'а', en: 'f', fixed: '', enShift: 'F', ruShift: 'А',
      },
      size: 1, // can be x1 x2, long x7
    },
    {
      type: 'regular', // = class : 'regular', 'mod', 'move', 'edit'
      isToggle: false, // 'toggle-modifier'
      toggled: false,
      keycode: 'KeyG', // = butn #id for html
      captionFixed: false,
      caption: {
        ru: 'п', en: 'g', fixed: '', enShift: 'G', ruShift: 'П',
      },
      size: 1, // can be x1 x2, long x7
    },
    {
      type: 'regular', // = class : 'regular', 'mod', 'move', 'edit'
      isToggle: false, // 'toggle-modifier'
      toggled: false,
      keycode: 'KeyH', // = butn #id for html
      captionFixed: false,
      caption: {
        ru: 'р', en: 'h', fixed: '', enShift: 'H', ruShift: 'Р',
      },
      size: 1, // can be x1 x2, long x7
    },
    {
      type: 'regular', // = class : 'regular', 'mod', 'move', 'edit'
      isToggle: false, // 'toggle-modifier'
      toggled: false,
      keycode: 'KeyJ', // = butn #id for html
      captionFixed: false,
      caption: {
        ru: 'о', en: 'j', fixed: '', enShift: 'J', ruShift: 'О',
      },
      size: 1, // can be x1 x2, long x7
    },
    {
      type: 'regular', // = class : 'regular', 'mod', 'move', 'edit'
      isToggle: false, // 'toggle-modifier'
      toggled: false,
      keycode: 'KeyK', // = butn #id for html
      captionFixed: false,
      caption: {
        ru: 'л', en: 'k', fixed: '', enShift: 'K', ruShift: 'Л',
      },
      size: 1, // can be x1 x2, long x7
    },
    {
      type: 'regular', // = class : 'regular', 'mod', 'move', 'edit'
      isToggle: false, // 'toggle-modifier'
      toggled: false,
      keycode: 'KeyL', // = butn #id for html
      captionFixed: false,
      caption: {
        ru: 'д', en: 'l', fixed: '', enShift: 'L', ruShift: 'Д',
      },
      size: 1, // can be x1 x2, long x7
    },
    {
      type: 'regular', // = class : 'regular', 'mod', 'move', 'edit'
      isToggle: false, // 'toggle-modifier'
      toggled: false,
      keycode: 'Semicolon', // = butn #id for html
      captionFixed: false,
      caption: {
        ru: 'ж', en: ';', fixed: '', enShift: ':', ruShift: 'Ж',
      },
      size: 1, // can be x1 x2, long x7
    },
    {
      type: 'regular', // = class : 'regular', 'mod', 'move', 'edit'
      isToggle: false, // 'toggle-modifier'
      toggled: false,
      keycode: 'Quote', // = butn #id for html
      captionFixed: false,
      caption: {
        ru: 'э', en: "'", fixed: '', enShift: '"', ruShift: 'Э',
      },
      size: 1, // can be x1 x2, long x7
    },
    {
      type: 'edit', // = class : 'regular', 'mod', 'move', 'edit'
      isToggle: false, // 'toggle-modifier'
      toggled: false,
      keycode: 'Enter', // = butn #id for html
      captionFixed: true,
      caption: {
        ru: '', en: '', fixed: 'ENTER', enShift: '', ruShift: '',
      },
      size: 2, // can be x1 x2, long x7
    },
    //  end of 3 line
    {
      type: 'mod', // = class : 'regular', 'mod', 'move', 'edit'
      isToggle: false, // 'toggle-modifier'
      toggled: false,
      keycode: 'ShiftLeft', // = butn #id for html
      captionFixed: true,
      caption: {
        ru: '', en: '', fixed: 'LShift', enShift: '', ruShift: '',
      },
      size: 2, // can be x1 x2, long x7
    },
    {
      type: 'regular', // = class : 'regular', 'mod', 'move', 'edit'
      isToggle: false, // 'toggle-modifier'
      toggled: false,
      keycode: 'KeyZ', // = butn #id for html
      captionFixed: false,
      caption: {
        ru: 'я', en: 'z', fixed: '', enShift: 'Z', ruShift: 'Я',
      },
      size: 1, // can be x1 x2, long x7
    },
    {
      type: 'regular', // = class : 'regular', 'mod', 'move', 'edit'
      isToggle: false, // 'toggle-modifier'
      toggled: false,
      keycode: 'KeyX', // = butn #id for html
      captionFixed: false,
      caption: {
        ru: 'ч', en: 'x', fixed: '', enShift: 'X', ruShift: 'Ч',
      },
      size: 1, // can be x1 x2, long x7
    },
    {
      type: 'regular', // = class : 'regular', 'mod', 'move', 'edit'
      isToggle: false, // 'toggle-modifier'
      toggled: false,
      keycode: 'KeyC', // = butn #id for html
      captionFixed: false,
      caption: {
        ru: 'с', en: 'c', fixed: '', enShift: 'C', ruShift: 'С',
      },
      size: 1, // can be x1 x2, long x7
    },
    {
      type: 'regular', // = class : 'regular', 'mod', 'move', 'edit'
      isToggle: false, // 'toggle-modifier'
      toggled: false,
      keycode: 'KeyV', // = butn #id for html
      captionFixed: false,
      caption: {
        ru: 'м', en: 'v', fixed: '', enShift: 'V', ruShift: 'М',
      },
      size: 1, // can be x1 x2, long x7
    },
    {
      type: 'regular', // = class : 'regular', 'mod', 'move', 'edit'
      isToggle: false, // 'toggle-modifier'
      toggled: false,
      keycode: 'KeyB', // = butn #id for html
      captionFixed: false,
      caption: {
        ru: 'и', en: 'b', fixed: '', enShift: 'B', ruShift: 'И',
      },
      size: 1, // can be x1 x2, long x7
    },
    {
      type: 'regular', // = class : 'regular', 'mod', 'move', 'edit'
      isToggle: false, // 'toggle-modifier'
      toggled: false,
      keycode: 'KeyN', // = butn #id for html
      captionFixed: false,
      caption: {
        ru: 'т', en: 'n', fixed: '', enShift: 'N', ruShift: 'Т',
      },
      size: 1, // can be x1 x2, long x7
    },
    {
      type: 'regular', // = class : 'regular', 'mod', 'move', 'edit'
      isToggle: false, // 'toggle-modifier'
      toggled: false,
      keycode: 'KeyM', // = butn #id for html
      captionFixed: false,
      caption: {
        ru: 'ь', en: 'm', fixed: '', enShift: 'M', ruShift: 'Ь',
      },
      size: 1, // can be x1 x2, long x7
    },
    {
      type: 'regular', // = class : 'regular', 'mod', 'move', 'edit'
      isToggle: false, // 'toggle-modifier'
      toggled: false,
      keycode: 'Comma', // = butn #id for html
      captionFixed: false,
      caption: {
        ru: 'б', en: ',', fixed: '', enShift: '<', ruShift: 'Б',
      },
      size: 1, // can be x1 x2, long x7
    },
    {
      type: 'regular', // = class : 'regular', 'mod', 'move', 'edit'
      isToggle: false, // 'toggle-modifier'
      toggled: false,
      keycode: 'Period', // = butn #id for html
      captionFixed: false,
      caption: {
        ru: 'ю', en: '.', fixed: '', enShift: '>', ruShift: 'Ю',
      },
      size: 1, // can be x1 x2, long x7
    },
    {
      type: 'regular', // = class : 'regular', 'mod', 'move', 'edit'
      isToggle: false, // 'toggle-modifier'
      toggled: false,
      keycode: 'Slash', // = butn #id for html
      captionFixed: false,
      caption: {
        ru: '.', en: '/', fixed: '', enShift: '?', ruShift: ',',
      },
      size: 1, // can be x1 x2, long x7
    },
    {
      type: 'move', // = class : 'regular', 'mod', 'move', 'edit'
      isToggle: false, // 'toggle-modifier'
      toggled: false,
      keycode: 'ArrowUp', // = butn #id for html
      captionFixed: true,
      caption: {
        ru: '', en: '', fixed: '▲', enShift: '', ruShift: '',
      },
      size: 1, // can be x1 x2, long x7
    },
    {
      type: 'mod', // = class : 'regular', 'mod', 'move', 'edit'
      isToggle: false, // 'toggle-modifier'
      toggled: false,
      keycode: 'ShiftRight', // = butn #id for html
      captionFixed: true,
      caption: {
        ru: '', en: '', fixed: 'RShift', enShift: '', ruShift: '',
      },
      size: 2, // can be x1 x2, long x7
    },
    // end of 4 line
    {
      type: 'mod', // = class : 'regular', 'mod', 'move', 'edit'
      isToggle: false, // 'toggle-modifier'
      toggled: false,
      keycode: 'ControlLeft', // = butn #id for html
      captionFixed: true,
      caption: {
        ru: '', en: '', fixed: 'Ctrl', enShift: '', ruShift: '',
      },
      size: 1, // can be x1 x2, long x7
    },
    {
      type: 'mod', // = class : 'regular', 'mod', 'move', 'edit'
      isToggle: true, // 'toggle-modifier'
      toggled: false,
      keycode: 'LangSwitch', // = butn #id for html
      captionFixed: true,
      caption: {
        ru: '', en: '', fixed: '🌐', enShift: '', ruShift: '',
      },
      size: 1, // can be x1 x2, long x7
    },
    {
      type: 'mod', // = class : 'regular', 'mod', 'move', 'edit'
      isToggle: false, // 'toggle-modifier'
      toggled: false,
      keycode: 'AltLeft', // = butn #id for html
      captionFixed: true,
      caption: {
        ru: '', en: '', fixed: 'Alt', enShift: '', ruShift: '',
      },
      size: 1, // can be x1 x2, long x7
    },
    {
      type: 'regular', // = class : 'regular', 'mod', 'move', 'edit'
      isToggle: false, // 'toggle-modifier'
      toggled: false,
      keycode: 'Space', // = butn #id for html
      captionFixed: true,
      caption: {
        ru: ' ', en: ' ', fixed: ' ', enShift: ' ', ruShift: ' ',
      },
      size: 7, // can be x1 x2, long x7
    },
    {
      type: 'mod', // = class : 'regular', 'mod', 'move', 'edit'
      isToggle: false, // 'toggle-modifier'
      toggled: false,
      keycode: 'AltRight', // = butn #id for html
      captionFixed: true,
      caption: {
        ru: '', en: '', fixed: 'Alt', enShift: '', ruShift: '',
      },
      size: 1, // can be x1 x2, long x7
    },
    {
      type: 'move', // = class : 'regular', 'mod', 'move', 'edit'
      isToggle: false, // 'toggle-modifier'
      toggled: false,
      keycode: 'ArrowLeft', // = butn #id for html
      captionFixed: true,
      caption: {
        ru: '', en: '', fixed: '◄', enShift: '', ruShift: '',
      },
      size: 1, // can be x1 x2, long x7
    },
    {
      type: 'move', // = class : 'regular', 'mod', 'move', 'edit'
      isToggle: false, // 'toggle-modifier'
      toggled: false,
      keycode: 'ArrowDown', // = butn #id for html
      captionFixed: true,
      caption: {
        ru: '', en: '', fixed: '▼', enShift: '', ruShift: '',
      },
      size: 1, // can be x1 x2, long x7
    },
    {
      type: 'move', // = class : 'regular', 'mod', 'move', 'edit'
      isToggle: false, // 'toggle-modifier'
      toggled: false,
      keycode: 'ArrowRight', // = butn #id for html
      captionFixed: true,
      caption: {
        ru: '', en: '', fixed: '►', enShift: '', ruShift: '',
      },
      size: 1, // can be x1 x2, long x7
    },
    {
      type: 'mod', // = class : 'regular', 'mod', 'move', 'edit'
      isToggle: false, // 'toggle-modifier'
      toggled: false,
      keycode: 'ControlRight', // = butn #id for html
      captionFixed: true,
      caption: {
        ru: '', en: '', fixed: 'Ctrl', enShift: '', ruShift: '',
      },
      size: 1, // can be x1 x2, long x7
    },

  ],
};

export default stdLayout;
