# React Tinytabs
Reactjs wrapper for [`Tinytabs`](https://github.com/knadh/tinytabs) which is a super tiny javascript plugin for rendering tabs (< 2KB).

Documentation and Demo: https://react-tiny-tabs.netlify.com

![vtt](https://user-images.githubusercontent.com/1731965/63014487-4d2da480-beac-11e9-9866-0673cd10635b.png)


Find the npm package [`link`](https://www.npmjs.com/package/r-tiny-tabs)

# Install and basic usage
```sh
$ npm install r-tiny-tabs
```

# Example
```jsx
onHandleBefore (id) {
    console.log('handle before', id)
  }

  onHandleAfter (id) {
    console.log('handle after', id)
  }

  onHandleClose (id) {
    console.log('handle close', id)
  }

  render() {
    return (
      <div className="App">
        <ReactTinyTabs id="mytbs" anchor={false} closable={true} hideTitle={false} onBefore={this.onHandleBefore} onAfter={this.onHandleAfter} onClose={this.onHandleClose}>
          <div className="section" id="example">
            <h3 className="title">Example code</h3>
            <h3>Javascript</h3>
          </div>
          <div className="section" id="options">
            <h3 className="title">Options table</h3>
            <h3>Options</h3>
          </div>
          <div className="section" id="components">
            <h3 className="title">Components</h3>
            <h3>Options</h3>
          </div>
        </ReactTinyTabs>
      </div>
    )
  }
```

### Customized CSS for styling
```css
.tinytabs .tabs {
	margin-left: 15px;
	display: flex;
	flex-flow: row wrap;
}
.tinytabs .tabs .tab .close {
	padding-left: 5px;
}
.tinytabs .tabs .tab {
	margin: 0 3px 0 0;
	background: #e1e1e1;
	display: block;
	padding: 6px 15px;
	text-decoration: none;
	color: #666;
	font-weight: bold;
	border-radius: 3px 3px 0 0;
}
.tinytabs .section {
	background: #f1f1f1;
	overflow: hidden;
	padding: 15px;
	clear: both;
	border-radius: 3px;
}
.tinytabs .tab.sel {
	background: #f1f1f1;
	color: #333;
	text-shadow: none;
}
```

## Options
| Properties   | Description
|--------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| anchor       | false (default) or true. If enabled, when a tab is clicked, it's id is set in url's fragment so that the tab is retained on page reloads.                                                                                       |
| hideTitle    | false (default) or true. Hide the title element within section elements.                                                                                                                                                          |
| sectionClass | Section element's class. Default is section.                                                                                                                                                                                    |
| tabsClass    | Tab (ul) container's class. Default is tabs.                                                                                                                                                                                    |
| tabClass     | Individual tab's (li) class. Default is tab.                                                                                                                                                                                    |
| titleClass   | Title element's tag. Default is title.                                                                                                                                                                                          |
| onBefore       | function(id, tab). Callback function that gets evaluated before a tab is activated. The first arg is the id of the tab and the second is the DOM element of the tab.                                                            |
| onAfter        | function(id, tab). Callback function that gets evaluated after a tab is activated. The first arg is the id of the tab and the second is the DOM element of the tab.                                                             |
| onClose        | function(id). Callback function that gets evaluated while closing the tab. The argument is the id of the tab.                                                             |                                          


Please find out tinytabs wrapper for [`Vuejs`](https://github.com/mevinoth/vue-tiny-tabs)

MIT License.
