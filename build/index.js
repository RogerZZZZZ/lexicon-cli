/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

eval("const json = __webpack_require__(13)\nconst file = json.read('../config.json')\nconst fs = __webpack_require__(14)\n\nconst themeFolder = '../assets/color/'\n\nconst readTheme = () => {\n  const { theme } = file.data\n  return json.read(`../assets/color/${theme}`)\n}\n\nconst changeTheme = (name) => {\n  file.set('theme', name)\n  file.writeSync()\n}\n\nconst themeList = () => {\n  return fs.readdirSync(themeFolder)\n}\n\nmodule.exports = {\n  readTheme,\n  changeTheme,\n  themeList,\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2JhY2svbGliL2NvbmZpZy5qcz85OTUxIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGpzb24gPSByZXF1aXJlKCdqc29uLWZpbGUnKVxuY29uc3QgZmlsZSA9IGpzb24ucmVhZCgnLi4vY29uZmlnLmpzb24nKVxuY29uc3QgZnMgPSByZXF1aXJlKCdmcycpXG5cbmNvbnN0IHRoZW1lRm9sZGVyID0gJy4uL2Fzc2V0cy9jb2xvci8nXG5cbmNvbnN0IHJlYWRUaGVtZSA9ICgpID0+IHtcbiAgY29uc3QgeyB0aGVtZSB9ID0gZmlsZS5kYXRhXG4gIHJldHVybiBqc29uLnJlYWQoYC4uL2Fzc2V0cy9jb2xvci8ke3RoZW1lfWApXG59XG5cbmNvbnN0IGNoYW5nZVRoZW1lID0gKG5hbWUpID0+IHtcbiAgZmlsZS5zZXQoJ3RoZW1lJywgbmFtZSlcbiAgZmlsZS53cml0ZVN5bmMoKVxufVxuXG5jb25zdCB0aGVtZUxpc3QgPSAoKSA9PiB7XG4gIHJldHVybiBmcy5yZWFkZGlyU3luYyh0aGVtZUZvbGRlcilcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHJlYWRUaGVtZSxcbiAgY2hhbmdlVGhlbWUsXG4gIHRoZW1lTGlzdCxcbn0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

eval("\nconst program = __webpack_require__(2)\nconst { search, theme } = __webpack_require__(3)\n\nconst opt = {\n  fuzzy: true,\n}\n\nprogram\n  .version('0.0.1')\n  .description('test description')\n\nprogram\n  .command('query <word>')\n  .alias('q')\n  .description('Query <word>')\n  // .option('-f, --fuzzy', 'With fuzzy matching')\n  .action((word, cmd) => {\n    search(word, Object.assign(opt, cmd))\n  })\n\nprogram\n  .command('theme')\n  .alias('t')\n  .description('Choose another theme!')\n  .action(() => theme())\n\nprogram\n  .on('command:*', () => {\n    console.error('Invalid command: %s\\nSee --help for a list of available commands.', program.args.join(' '))\n    process.exit(1)\n  })\n\nprogram.parse(process.argv)//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21tYW5kLmpzPzI5NjkiXSwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCBwcm9ncmFtID0gcmVxdWlyZSgnY29tbWFuZGVyJylcbmNvbnN0IHsgc2VhcmNoLCB0aGVtZSB9ID0gcmVxdWlyZSgnLi4vYmFjay9jb3JlJylcblxuY29uc3Qgb3B0ID0ge1xuICBmdXp6eTogdHJ1ZSxcbn1cblxucHJvZ3JhbVxuICAudmVyc2lvbignMC4wLjEnKVxuICAuZGVzY3JpcHRpb24oJ3Rlc3QgZGVzY3JpcHRpb24nKVxuXG5wcm9ncmFtXG4gIC5jb21tYW5kKCdxdWVyeSA8d29yZD4nKVxuICAuYWxpYXMoJ3EnKVxuICAuZGVzY3JpcHRpb24oJ1F1ZXJ5IDx3b3JkPicpXG4gIC8vIC5vcHRpb24oJy1mLCAtLWZ1enp5JywgJ1dpdGggZnV6enkgbWF0Y2hpbmcnKVxuICAuYWN0aW9uKCh3b3JkLCBjbWQpID0+IHtcbiAgICBzZWFyY2god29yZCwgT2JqZWN0LmFzc2lnbihvcHQsIGNtZCkpXG4gIH0pXG5cbnByb2dyYW1cbiAgLmNvbW1hbmQoJ3RoZW1lJylcbiAgLmFsaWFzKCd0JylcbiAgLmRlc2NyaXB0aW9uKCdDaG9vc2UgYW5vdGhlciB0aGVtZSEnKVxuICAuYWN0aW9uKCgpID0+IHRoZW1lKCkpXG5cbnByb2dyYW1cbiAgLm9uKCdjb21tYW5kOionLCAoKSA9PiB7XG4gICAgY29uc29sZS5lcnJvcignSW52YWxpZCBjb21tYW5kOiAlc1xcblNlZSAtLWhlbHAgZm9yIGEgbGlzdCBvZiBhdmFpbGFibGUgY29tbWFuZHMuJywgcHJvZ3JhbS5hcmdzLmpvaW4oJyAnKSlcbiAgICBwcm9jZXNzLmV4aXQoMSlcbiAgfSlcblxucHJvZ3JhbS5wYXJzZShwcm9jZXNzLmFyZ3YpIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

eval("module.exports = require(\"commander\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImNvbW1hbmRlclwiPzgxMjAiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29tbWFuZGVyXCIpOyJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

eval("const inquirer = __webpack_require__(4)\nconst { query } = __webpack_require__(5)\nconst { painting } = __webpack_require__(11)\nconst { suggest } = __webpack_require__(15)\nconst { themeList, changeTheme } = __webpack_require__(0)\n\nconst search = (word, opt) => {\n  if (opt.fuzzy) {\n    let suggestions = suggest(word)\n    if (suggestions.length >= 1) {\n      const question = {\n        type: 'list',\n        name: 'word',\n        message: 'Choose one word you may want to query.',\n        choices: suggestions,\n      }\n      inquirer\n        .prompt(question)\n        .then(answer => {\n          query(answer.word, opt, painting)\n        })\n      return;\n    }\n  }\n  query(word, opt, painting)\n}\n\nconst theme = () => {\n  const question = {\n    type: 'list',\n    name: 'theme',\n    message: 'Choose one theme',\n    choices: themeList()\n  }\n\n  inquirer\n    .prompt(question)\n    .then(answer => changeTheme(answer.theme))\n}\n\nmodule.exports = {\n  search,\n  theme,\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2JhY2svY29yZS5qcz9hMGY2Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGlucXVpcmVyID0gcmVxdWlyZSgnaW5xdWlyZXInKVxuY29uc3QgeyBxdWVyeSB9ID0gcmVxdWlyZSgnLi9saWIvY3Jhd2xlcicpXG5jb25zdCB7IHBhaW50aW5nIH0gPSByZXF1aXJlKCcuL2xpYi9wYWludGVyJylcbmNvbnN0IHsgc3VnZ2VzdCB9ID0gcmVxdWlyZSgnLi9saWIvdHlwbycpXG5jb25zdCB7IHRoZW1lTGlzdCwgY2hhbmdlVGhlbWUgfSA9IHJlcXVpcmUoJy4vbGliL2NvbmZpZycpXG5cbmNvbnN0IHNlYXJjaCA9ICh3b3JkLCBvcHQpID0+IHtcbiAgaWYgKG9wdC5mdXp6eSkge1xuICAgIGxldCBzdWdnZXN0aW9ucyA9IHN1Z2dlc3Qod29yZClcbiAgICBpZiAoc3VnZ2VzdGlvbnMubGVuZ3RoID49IDEpIHtcbiAgICAgIGNvbnN0IHF1ZXN0aW9uID0ge1xuICAgICAgICB0eXBlOiAnbGlzdCcsXG4gICAgICAgIG5hbWU6ICd3b3JkJyxcbiAgICAgICAgbWVzc2FnZTogJ0Nob29zZSBvbmUgd29yZCB5b3UgbWF5IHdhbnQgdG8gcXVlcnkuJyxcbiAgICAgICAgY2hvaWNlczogc3VnZ2VzdGlvbnMsXG4gICAgICB9XG4gICAgICBpbnF1aXJlclxuICAgICAgICAucHJvbXB0KHF1ZXN0aW9uKVxuICAgICAgICAudGhlbihhbnN3ZXIgPT4ge1xuICAgICAgICAgIHF1ZXJ5KGFuc3dlci53b3JkLCBvcHQsIHBhaW50aW5nKVxuICAgICAgICB9KVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuICBxdWVyeSh3b3JkLCBvcHQsIHBhaW50aW5nKVxufVxuXG5jb25zdCB0aGVtZSA9ICgpID0+IHtcbiAgY29uc3QgcXVlc3Rpb24gPSB7XG4gICAgdHlwZTogJ2xpc3QnLFxuICAgIG5hbWU6ICd0aGVtZScsXG4gICAgbWVzc2FnZTogJ0Nob29zZSBvbmUgdGhlbWUnLFxuICAgIGNob2ljZXM6IHRoZW1lTGlzdCgpXG4gIH1cblxuICBpbnF1aXJlclxuICAgIC5wcm9tcHQocXVlc3Rpb24pXG4gICAgLnRoZW4oYW5zd2VyID0+IGNoYW5nZVRoZW1lKGFuc3dlci50aGVtZSkpXG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZWFyY2gsXG4gIHRoZW1lLFxufVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

eval("module.exports = require(\"inquirer\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImlucXVpcmVyXCI/NzUyMCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbnF1aXJlclwiKTsiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

eval("const Crawler = __webpack_require__(6)\nconst { spinner } = __webpack_require__(7)\nconst { returnProperCode } = __webpack_require__(9)\nconst { isEmpty } = __webpack_require__(10)\n\nconst c = new Crawler({\n  maxConnections: 1,\n})\n\nclass Word {\n  constructor(word, symbol, translation, changes) {\n    this.word = word\n    this.symbol = symbol\n    this.translation = translation\n    this.changes = changes\n  }\n}\n\nconst query = (word, opts, cb) => {\n  spinner.create()\n  const target = returnProperCode(word)\n\n  c.queue([{\n    uri: `http://www.iciba.com/${target}`,\n    jQuery: {\n      name: 'cheerio',\n      options: {\n        normalizeWhitespace: true,\n        xmlMode: true,\n      }\n    },\n    callback: function(error, res, done) {\n      if (error) {\n        console.log(error)\n        spinner.fail(`Catch error: : ${error}`)\n      } else {\n        const $ = res.$\n\n        const symbols = []\n        $('.base-speak span span').each(function() {\n          const val = $(this).text()\n          symbols.push(val)\n        })\n  \n        const translations = []\n        $('.base-list.switch_part li').each(function() {\n          let content = ''\n          let prop = $(this).find('.prop').text()\n          $(this).find('p span').each(function() {\n            content += $(this).text()\n          })\n          translations.push([prop, content])\n        })\n  \n        const changes = []\n        $('.change.clearfix span').each(function() {\n          changes.push([$(this).text()])\n        })\n\n        if (isEmpty(symbols) && isEmpty(translations) && isEmpty(changes)) {\n          spinner.warn(`Fail to find this word: ${word}`)\n        } else {\n          spinner.success('Results are below:')\n          cb(new Word(word, symbols, translations, changes))\n        }\n      }\n      done()\n    }\n  }])\n}\n\nmodule.exports = {\n  query,\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2JhY2svbGliL2NyYXdsZXIuanM/NGE1MyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBDcmF3bGVyID0gcmVxdWlyZSgnY3Jhd2xlcicpXG5jb25zdCB7IHNwaW5uZXIgfSA9IHJlcXVpcmUoJy4vc3Bpbm5lcicpXG5jb25zdCB7IHJldHVyblByb3BlckNvZGUgfSA9IHJlcXVpcmUoJy4vZGV0ZWN0JylcbmNvbnN0IHsgaXNFbXB0eSB9ID0gcmVxdWlyZSgnLi9oZWxwZXInKVxuXG5jb25zdCBjID0gbmV3IENyYXdsZXIoe1xuICBtYXhDb25uZWN0aW9uczogMSxcbn0pXG5cbmNsYXNzIFdvcmQge1xuICBjb25zdHJ1Y3Rvcih3b3JkLCBzeW1ib2wsIHRyYW5zbGF0aW9uLCBjaGFuZ2VzKSB7XG4gICAgdGhpcy53b3JkID0gd29yZFxuICAgIHRoaXMuc3ltYm9sID0gc3ltYm9sXG4gICAgdGhpcy50cmFuc2xhdGlvbiA9IHRyYW5zbGF0aW9uXG4gICAgdGhpcy5jaGFuZ2VzID0gY2hhbmdlc1xuICB9XG59XG5cbmNvbnN0IHF1ZXJ5ID0gKHdvcmQsIG9wdHMsIGNiKSA9PiB7XG4gIHNwaW5uZXIuY3JlYXRlKClcbiAgY29uc3QgdGFyZ2V0ID0gcmV0dXJuUHJvcGVyQ29kZSh3b3JkKVxuXG4gIGMucXVldWUoW3tcbiAgICB1cmk6IGBodHRwOi8vd3d3LmljaWJhLmNvbS8ke3RhcmdldH1gLFxuICAgIGpRdWVyeToge1xuICAgICAgbmFtZTogJ2NoZWVyaW8nLFxuICAgICAgb3B0aW9uczoge1xuICAgICAgICBub3JtYWxpemVXaGl0ZXNwYWNlOiB0cnVlLFxuICAgICAgICB4bWxNb2RlOiB0cnVlLFxuICAgICAgfVxuICAgIH0sXG4gICAgY2FsbGJhY2s6IGZ1bmN0aW9uKGVycm9yLCByZXMsIGRvbmUpIHtcbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgc3Bpbm5lci5mYWlsKGBDYXRjaCBlcnJvcjogOiAke2Vycm9yfWApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCAkID0gcmVzLiRcblxuICAgICAgICBjb25zdCBzeW1ib2xzID0gW11cbiAgICAgICAgJCgnLmJhc2Utc3BlYWsgc3BhbiBzcGFuJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICBjb25zdCB2YWwgPSAkKHRoaXMpLnRleHQoKVxuICAgICAgICAgIHN5bWJvbHMucHVzaCh2YWwpXG4gICAgICAgIH0pXG4gIFxuICAgICAgICBjb25zdCB0cmFuc2xhdGlvbnMgPSBbXVxuICAgICAgICAkKCcuYmFzZS1saXN0LnN3aXRjaF9wYXJ0IGxpJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICBsZXQgY29udGVudCA9ICcnXG4gICAgICAgICAgbGV0IHByb3AgPSAkKHRoaXMpLmZpbmQoJy5wcm9wJykudGV4dCgpXG4gICAgICAgICAgJCh0aGlzKS5maW5kKCdwIHNwYW4nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29udGVudCArPSAkKHRoaXMpLnRleHQoKVxuICAgICAgICAgIH0pXG4gICAgICAgICAgdHJhbnNsYXRpb25zLnB1c2goW3Byb3AsIGNvbnRlbnRdKVxuICAgICAgICB9KVxuICBcbiAgICAgICAgY29uc3QgY2hhbmdlcyA9IFtdXG4gICAgICAgICQoJy5jaGFuZ2UuY2xlYXJmaXggc3BhbicpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgY2hhbmdlcy5wdXNoKFskKHRoaXMpLnRleHQoKV0pXG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYgKGlzRW1wdHkoc3ltYm9scykgJiYgaXNFbXB0eSh0cmFuc2xhdGlvbnMpICYmIGlzRW1wdHkoY2hhbmdlcykpIHtcbiAgICAgICAgICBzcGlubmVyLndhcm4oYEZhaWwgdG8gZmluZCB0aGlzIHdvcmQ6ICR7d29yZH1gKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNwaW5uZXIuc3VjY2VzcygnUmVzdWx0cyBhcmUgYmVsb3c6JylcbiAgICAgICAgICBjYihuZXcgV29yZCh3b3JkLCBzeW1ib2xzLCB0cmFuc2xhdGlvbnMsIGNoYW5nZXMpKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBkb25lKClcbiAgICB9XG4gIH1dKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcXVlcnksXG59Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

eval("module.exports = require(\"crawler\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImNyYXdsZXJcIj85Nzk0Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNyYXdsZXJcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

eval("const ora = __webpack_require__(8)\n\nclass Spinner {\n  create() {\n    if (!this.spinner) {\n      this.spinner = ora('Searching....')\n    }\n    return this.load()\n  }\n\n  load() {\n    this.spinner.start()\n  }\n\n  stop() {\n    this.spinner.stop()\n  }\n\n  success(text) {\n    this.spinner.succeed(text)\n  }\n\n  warn(text) {\n    this.spinner.warn(text)\n  }\n\n  info(text) {\n    this.spinner.info(text)\n  }\n\n  fail(test) {\n    this.spinner.fail(text)\n  }\n}\n\nconst spinner = new Spinner()\n\nmodule.exports = {\n  spinner\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2JhY2svbGliL3NwaW5uZXIuanM/NTA5NCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBvcmEgPSByZXF1aXJlKCdvcmEnKVxuXG5jbGFzcyBTcGlubmVyIHtcbiAgY3JlYXRlKCkge1xuICAgIGlmICghdGhpcy5zcGlubmVyKSB7XG4gICAgICB0aGlzLnNwaW5uZXIgPSBvcmEoJ1NlYXJjaGluZy4uLi4nKVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5sb2FkKClcbiAgfVxuXG4gIGxvYWQoKSB7XG4gICAgdGhpcy5zcGlubmVyLnN0YXJ0KClcbiAgfVxuXG4gIHN0b3AoKSB7XG4gICAgdGhpcy5zcGlubmVyLnN0b3AoKVxuICB9XG5cbiAgc3VjY2Vzcyh0ZXh0KSB7XG4gICAgdGhpcy5zcGlubmVyLnN1Y2NlZWQodGV4dClcbiAgfVxuXG4gIHdhcm4odGV4dCkge1xuICAgIHRoaXMuc3Bpbm5lci53YXJuKHRleHQpXG4gIH1cblxuICBpbmZvKHRleHQpIHtcbiAgICB0aGlzLnNwaW5uZXIuaW5mbyh0ZXh0KVxuICB9XG5cbiAgZmFpbCh0ZXN0KSB7XG4gICAgdGhpcy5zcGlubmVyLmZhaWwodGV4dClcbiAgfVxufVxuXG5jb25zdCBzcGlubmVyID0gbmV3IFNwaW5uZXIoKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc3Bpbm5lclxufSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

eval("module.exports = require(\"ora\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcIm9yYVwiP2VlNTkiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwib3JhXCIpOyJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

eval("const CHIESE_DETECT_REG = /^[\\u4E00-\\u9FFF\\u3400-\\u4DFF]+$/;\n\nconst detectIfChinese = (word) => {\n  return CHIESE_DETECT_REG.test(word)\n}\n\nconst returnProperCode = (word) => {\n  return encodeURI(word)\n}\n\nmodule.exports = {\n  detectIfChinese,\n  returnProperCode,\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2JhY2svbGliL2RldGVjdC5qcz83OTlmIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IENISUVTRV9ERVRFQ1RfUkVHID0gL15bXFx1NEUwMC1cXHU5RkZGXFx1MzQwMC1cXHU0REZGXSskLztcblxuY29uc3QgZGV0ZWN0SWZDaGluZXNlID0gKHdvcmQpID0+IHtcbiAgcmV0dXJuIENISUVTRV9ERVRFQ1RfUkVHLnRlc3Qod29yZClcbn1cblxuY29uc3QgcmV0dXJuUHJvcGVyQ29kZSA9ICh3b3JkKSA9PiB7XG4gIHJldHVybiBlbmNvZGVVUkkod29yZClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGRldGVjdElmQ2hpbmVzZSxcbiAgcmV0dXJuUHJvcGVyQ29kZSxcbn0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///9\n");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

eval("const isEmpty = (arr) => {\n  return arr !== null && arr.length < 1\n}\n\nmodule.exports = {\n  isEmpty,\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9iYWNrL2xpYi9oZWxwZXIuanM/MTk1MyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBpc0VtcHR5ID0gKGFycikgPT4ge1xuICByZXR1cm4gYXJyICE9PSBudWxsICYmIGFyci5sZW5ndGggPCAxXG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpc0VtcHR5LFxufSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///10\n");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

eval("const chalk = __webpack_require__(12)\nconst log = console.log\nconst { readTheme } = __webpack_require__(0)\nconst theme = readTheme().data\n\nconst combineInLine = (arr) => {\n  if (arr.length < 1) return ''\n  if (arr.length === 2) return arr[0]\n  return arr.reduce((str, el) => str += '  ' + el, '')\n}\n\nconst paintSymbol = (symbol) => {\n  log(chalk.hex(theme.symbol)(combineInLine(symbol)))\n}\n\n/**\n * @param {*} translations \n * e.g. ['n', 'cool,good']\n */\nconst paintTranslation = (translation) => {\n  log(`${chalk.hex(theme.propTitle)(translation[0])}: ${chalk.hex(theme.prop)(translation[1])}`)\n}\n\nconst paintChange = (change) => {\n  log(`${chalk.hex(theme.changes)(change)}`)\n}\n\nconst warning = (word) => log(chalk.keyword(word))\n\nconst painting = (word, opt) => {\n  paintSymbol(word.symbol)\n  word.translation.map(el => paintTranslation(el))\n  word.changes.map(el => paintChange(el))\n}\n\nmodule.exports = {\n  painting,\n  warning,\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9iYWNrL2xpYi9wYWludGVyLmpzPzZlMzQiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY2hhbGsgPSByZXF1aXJlKCdjaGFsaycpXG5jb25zdCBsb2cgPSBjb25zb2xlLmxvZ1xuY29uc3QgeyByZWFkVGhlbWUgfSA9IHJlcXVpcmUoJy4vY29uZmlnJylcbmNvbnN0IHRoZW1lID0gcmVhZFRoZW1lKCkuZGF0YVxuXG5jb25zdCBjb21iaW5lSW5MaW5lID0gKGFycikgPT4ge1xuICBpZiAoYXJyLmxlbmd0aCA8IDEpIHJldHVybiAnJ1xuICBpZiAoYXJyLmxlbmd0aCA9PT0gMikgcmV0dXJuIGFyclswXVxuICByZXR1cm4gYXJyLnJlZHVjZSgoc3RyLCBlbCkgPT4gc3RyICs9ICcgICcgKyBlbCwgJycpXG59XG5cbmNvbnN0IHBhaW50U3ltYm9sID0gKHN5bWJvbCkgPT4ge1xuICBsb2coY2hhbGsuaGV4KHRoZW1lLnN5bWJvbCkoY29tYmluZUluTGluZShzeW1ib2wpKSlcbn1cblxuLyoqXG4gKiBAcGFyYW0geyp9IHRyYW5zbGF0aW9ucyBcbiAqIGUuZy4gWyduJywgJ2Nvb2wsZ29vZCddXG4gKi9cbmNvbnN0IHBhaW50VHJhbnNsYXRpb24gPSAodHJhbnNsYXRpb24pID0+IHtcbiAgbG9nKGAke2NoYWxrLmhleCh0aGVtZS5wcm9wVGl0bGUpKHRyYW5zbGF0aW9uWzBdKX06ICR7Y2hhbGsuaGV4KHRoZW1lLnByb3ApKHRyYW5zbGF0aW9uWzFdKX1gKVxufVxuXG5jb25zdCBwYWludENoYW5nZSA9IChjaGFuZ2UpID0+IHtcbiAgbG9nKGAke2NoYWxrLmhleCh0aGVtZS5jaGFuZ2VzKShjaGFuZ2UpfWApXG59XG5cbmNvbnN0IHdhcm5pbmcgPSAod29yZCkgPT4gbG9nKGNoYWxrLmtleXdvcmQod29yZCkpXG5cbmNvbnN0IHBhaW50aW5nID0gKHdvcmQsIG9wdCkgPT4ge1xuICBwYWludFN5bWJvbCh3b3JkLnN5bWJvbClcbiAgd29yZC50cmFuc2xhdGlvbi5tYXAoZWwgPT4gcGFpbnRUcmFuc2xhdGlvbihlbCkpXG4gIHdvcmQuY2hhbmdlcy5tYXAoZWwgPT4gcGFpbnRDaGFuZ2UoZWwpKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcGFpbnRpbmcsXG4gIHdhcm5pbmcsXG59Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

eval("module.exports = require(\"chalk\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjaGFsa1wiPzA3Y2EiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2hhbGtcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///12\n");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

eval("module.exports = require(\"json-file\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqc29uLWZpbGVcIj80MGYzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzb24tZmlsZVwiKTsiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///13\n");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiP2E0MGQiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///14\n");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

eval("const Typo = __webpack_require__(16)\nconst dictionary = new Typo('en_US')\n\nconst suggest = (input) => {\n  return dictionary.suggest(input)\n}\n\nconst check = (input) => {\n  return dictionary.check(input)\n}\n\nmodule.exports = {\n  suggest,\n  check,\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9iYWNrL2xpYi90eXBvLmpzPzA5YjMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgVHlwbyA9IHJlcXVpcmUoJ3R5cG8tanMnKVxuY29uc3QgZGljdGlvbmFyeSA9IG5ldyBUeXBvKCdlbl9VUycpXG5cbmNvbnN0IHN1Z2dlc3QgPSAoaW5wdXQpID0+IHtcbiAgcmV0dXJuIGRpY3Rpb25hcnkuc3VnZ2VzdChpbnB1dClcbn1cblxuY29uc3QgY2hlY2sgPSAoaW5wdXQpID0+IHtcbiAgcmV0dXJuIGRpY3Rpb25hcnkuY2hlY2soaW5wdXQpXG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzdWdnZXN0LFxuICBjaGVjayxcbn1cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///15\n");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

eval("module.exports = require(\"typo-js\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0eXBvLWpzXCI/ZjcyNSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0eXBvLWpzXCIpOyJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///16\n");

/***/ })
/******/ ]);