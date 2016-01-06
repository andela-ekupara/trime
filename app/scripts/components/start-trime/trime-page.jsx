(function() {
  'use strict';
  var React = require('react'),
    Select = require('react-select');
    var Button = React.createClass({
      render: function() {
        return (
          <div>
            <button className="waves-effect waves-light btn">{this.props.label}<i className={this.props.icon}></i></button>
          </div>
        );
      }
    });

    var TrimePage = React.createClass({
      getInitialState: function() {
        return {
          disabled: false,
          searchable: true,
          clearable: true
        }
      },

      logChange: function(val) {
        console.log('selected' + val);
      },

      render: function() {
        var options = [
        {value: 'one', label: 'One'},
        {value: 'two', label:'Two'},
        {value: 'three', label: 'Three'},
        {value: 'four', label:'Two'},
        {value: 'five', label: 'One'},
        {value: 'six', label:'Two'},
        {value: 'seven', label: 'One'},
        {value: 'eight', label:'Two'},
        ];

        return (
          <div className="gerty">
            <Select className="trimeProject" autofocus options ={options} simpleValue disabled={this.state.disabled} searchable={this.state.searchable} clearable={this.state.clearable} onChange={this.logChange} />
            <Button label="Start" icon="fa fa-play"/>
            <Button label="Stop" icon="fa fa-stop"/>
          </div>
        );
      }
    });

    module.exports = TrimePage;

})();
