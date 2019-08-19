import React from 'react';
import propTypes from 'prop-types'
import tinytabs from '@htoniv/tiny-tabs'

let propStr = propTypes.string;
let propBool = propTypes.boolean;

class ReactTinyTabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          id: props.id,
          anchor: props.anchor,
          closable: props.closable,
          hideTitle: props.hideTitle,
          sectionClass: props.sectionClass,
          titleClass: props.titleClass,
          tabsClass: props.tabsClass,
          tabClass: props.tabClass
        }
    }

    handleClose(id) {
        this.props.onClose(id)
    }

    handleOnBefore(id) {
        this.props.onBefore(id)
    }

    handleOnAfter(id) {
        this.props.onAfter(id)
    }

    componentDidMount() {
        let self = this
        let { anchor, hideTitle, closable, sectionClass, titleClass, tabsClass, tabClass } = this.state
        tinytabs(document.querySelector("#"+this.state.id), {
            anchor: anchor,
            hideTitle: hideTitle,
            closable: closable,
            sectionClass: sectionClass,
            titleClass: titleClass,
            tabsClass: tabsClass,
            tabClass: tabClass,
            onClose: function (id) {
                self.handleClose(id)
            },
            onBefore: function (id, tab) {
                self.handleOnBefore(id, tab)
            },
            onAfter: function (id, tab) {
                self.handleOnAfter(id, tab)
            }
		})
    }
    
    render() {
        return (
            <div id={this.state.id}>
                {this.props.children}
            </div>
        )
    }
}

ReactTinyTabs.defaultProps = {
    id: 'mytabs',
    anchor: false,
    closable: true,
    hideTitle: false,
    sectionClass: 'section',
    titleClass: 'title',
    tabsClass: 'tabs',
    tabClass: 'tab'
};

ReactTinyTabs.propTypes = {
    id: propStr,
    anchor: propBool,
    closable: propBool,
    hideTitle: propBool,
    sectionClass: propStr,
    titleClass: propStr,
    tabsClass: propStr,
    tabClass: propStr
};

export default ReactTinyTabs;