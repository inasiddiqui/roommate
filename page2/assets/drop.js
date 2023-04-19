class App extends React.Component {
    componentDidMount () {
      let left = document.getElementById('left');
      let right = document.getElementById('right');
      dragula([left, right]);
    }
    
    render () {
      return (
        <div className="container">
          <div id="left" className="container-drop">
            <Card body="Card 3"/>
            <Card body="Card 4"/>
          </div>
          <div id="right" className="container-drop">
            <Card body="Card 1"/>
            <Card body="Card 2"/>
          </div>
        </div>
      );
    }
  }
  
  class Card extends React.Component {
    constructor (props) {
      super(props);
    }
    
    render () {
      return (
        <div className="card-drop">
          <div className="card-header">
            <h3>Example Card</h3>
          </div>
          <div className="card-body">
            <p>{this.props.body}</p>
          </div>
        </div>
      );
    }
  }
  
  React.render(<App />, document.getElementById('container-drop'));