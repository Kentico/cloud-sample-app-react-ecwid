import React, { Component } from 'react';

let getState = () => {
  return {
    guid:
      '_' +
      Math.random()
        .toString(36)
        .substr(2, 9)
  };
};

class BrewerStore extends Component {
  constructor(props) {
    super(props);

    this.state = getState();
  }

  componentDidMount() {
    window.ecwid_script_defer = true;
    window.ecwid_dynamic_widgets = true;

    window._xnext_initialization_scripts = [
      {
        widgetType: 'ProductBrowser',
        id: this.state.guid,
        arg: ['id=productBrowser']
      }
    ];

    if (!document.getElementById('ecwid-script')) {
      var script = document.createElement('script');
      script.charset = 'utf-8';
      script.type = 'text/javascript';
      script.src =
        'https://app.ecwid.com/script.js?16508101&data_platform=code';
      script.id = 'ecwid-script';
      script.onload = function() {
        window.Ecwid.init();
      };

      document.body.appendChild(script);
    } else {
      window.ecwid_onBodyDone();
    }
  }

  render() {
    return <div id={this.state.guid} />;
  }
}

export default BrewerStore;
