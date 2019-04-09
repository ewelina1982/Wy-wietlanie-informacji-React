const Positive = () => <p>Mozesz obejrzeć film</p>;
const Negative = () => <p>Nie możesz obejrzeć</p>;

class App extends React.Component {
  state = {
    isConfirm: false
  };

  handelCheck = () => {
    this.setState({
      isConfirm: !this.state.isConfirm
    });
  };
  display = () => {
    if (this.state.isConfirm) {
      return <Positive />;
    } else {
      return <Negative />;
    }
  };
  render() {
    return (
      <>
        <h1>kup bilet</h1>
        <input
          type="checkbox"
          id="age"
          onChange={this.handelCheck}
          checked={this.state.isConfirm}
        />
        <label htmlFor="age">mam co najmniej 16 lat</label>
        {this.display()}
      </>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
